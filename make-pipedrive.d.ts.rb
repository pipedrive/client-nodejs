require 'cgi'
require 'json'

def load_data(filename)
  Marshal.load(File.binread(filename))
end

def save_data(filename, data)
  File.binwrite(filename, Marshal.dump(data))
end

# Get the list of all models that have the constructFromObject static method
# @return [Array<String>]
def get_construct_from_object_classes
  return load_data('cfoc.dat') if File.exist?('cfoc.dat')

  data = Dir['src/model/*.js'].map do |fn|
    next unless File.read(fn).include?('static constructFromObject(')

    next File.basename(fn).split('.')[0]
  end.compact

  save_data('cfoc.dat', data)
  return data
end

# Get a model class from name
# @return [Hash]
def get_model_class(name)
  return $classes[name] ||= { type: :model, name: name, attributes: [], enums: [] }
end

# Get an api class from name
# @return [Hash]
def get_api_class(name)
  return $classes[name] ||= { type: :class, name: name, methods: [] }
end

# Parse the API file
# @param contents [Array<String>]
# @param class_name [String]
def process_api_file(contents, class_name)
  api = get_api_class(class_name)

  current_method = nil
  # When we are in the ignored section, we wait for a new method section
  section = :ignored
  contents.each do |line|
    # Change the section state based on title, if not matching any expected section, go back to ignored
    if line.start_with?('### Parameters')
      next section = :parameters
    elsif line.start_with?('### ')
        section = :ignored
    elsif line.start_with?('## ')
      section = :header
    end

    # Parse the section based on its type
    case section
    when :header
      # Each method is a h2 title
      if line.start_with?('## ')
        current_method = { name: line.sub('## ', ''), description: '' }
        api[:methods] << current_method
        section = :header
      # If a line starts with block quote, it's the method info, we parse it to make our life easier (esp for opts)
      elsif line.start_with?('> ')
        parse_method_info(current_method, line)
      # We don't append to description if it hasn't started to be appended and the line is empty
      elsif current_method[:description].empty? && line.empty?
        next
      # Append any other line description
      else
        current_method[:description] << reformat_description(line) << "\n"
      end
    when :parameters
      # All the actual parameter lines are expected to start with ` **` for some reasons
      next unless line.start_with?(' **')
      parse_parameter(current_method, line)
    end
  end
end

# Replace HTML entities and links to markdown entities in description
# @param description [String]
# @return [String]
def reformat_description(description)
  formated = CGI::unescapeHTML(description)
  formated.gsub!("<b>", "**")
  formated.gsub!("</b>", "**")
  formated.gsub!("\\\"", "\"")
  formated.gsub!(/<a href="([^"]+)"[^>]*>([^<]+)<\/a>/, "[\\2](\\1)")
  return formated
end

# Parse the current method info
# @param current_method [Hash]
# @param line [String]
def parse_method_info(current_method, line)
  return_type, params = line.match(/> ([^ ]+) [^(]+\(([^\)]*)\)/).captures
  current_method[:return_type] = return_type
  get_model_class(return_type.sub(/[^a-z0-9]/i, ''))[:used_as_return] = true
  current_method[:parameters] = params.split(', ').map { |param| { name: param, type: nil } }
end

# Parse the parameters of the current method
# @param current_method [Hash]
# @param line [String]
def parse_parameter(current_method, line)
  name, type, description, flags = line.split('|').map { |v| v&.strip }
  name.gsub!('*', '')
  # Sometimes the parameters are badly named so we fix it
  name.gsub!(/(?:-|_|\.)[a-z]/) { |m| m[1].upcase }
  # Try to get the default value (actually useless since definiton doesn't let us explict defaults)
  match = flags && flags.match(/\[default to ([^\]]+)\]/)
  default = match && match.captures[0].gsub('&#39;', '"')
  # Most of the times if not all the time, optional parameters are not named in the parameter list but are in the table
  current_param = current_method[:parameters].find { |param| param[:name] == name } || current_method[:parameters].find { |param| param[:name] == 'opts' }
  raise 'Could not find parameter' unless current_param

  # Opts is actually an other model
  if current_param[:type].nil? && name[0].match(/[A-Z]/) || current_param[:name] != 'opts'
    current_param[:type] = resolve_type(name, type, [])
    current_param[:optional] = true if flags&.include?('[optional]')
    current_param[:default] = default if default
    current_param[:description] = description ? reformat_description(description) : ''
  else
    current_param[:type] = :record
    current_param[:optional] = true
    current_param[:data] ||= []
    capitalized_method_name = current_method[:name].sub(/[a-z]/) { |m| m.upcase }
    current_param[:friendly_name] ||= "#{capitalized_method_name}Options"
    current_param[:data] << {
      name: name,
      type: resolve_type(name, type, []),
      optional: flags&.include?('[optional]'),
      default: default,
      description: description ? reformat_description(description) : ''
    }
  end
end

# Process the model file
# @param contents [Array<String>]
# @param class_name [String]
def process_model_file(contents, class_name)
  model = get_model_class(class_name)
  # If the file includes a section named Enum alone, it means that's an enum instead of a model,
  # we jump straight to process_enum and force the model to be an enum.
  if contents.include?('## Enum')
    model.clear
    model[:type] = :enum
    model[:name] = class_name
    model[:values] = []
    return process_enums(model, contents)
  end
  # First we process the enums
  process_enums(model[:enums], contents)
  # Then we process the attributes and replace the bad types with actual enum values
  process_attributes(model, contents)
  # Mark the model as having constructFromObject static method if JS actually have it
  model[:has_construct_from_object_static_method] = true if $cfoc.include?(class_name)
end

# Process all the enum values from a model
# @param enums [Array, Hash] set to Hash when the doc file is actualy an enum doc file
# @param contents [Array<String>]
def process_enums(enums, contents)
  current_enum = enums.is_a?(Hash) ? enums : nil
  contents.each do |line|
    # Each enum of a model doc file starts with `## Enum: ` they fortunately happen to be paramName.toUpperCase() + "Enum"
    if line.start_with?('## Enum: ')
      name = line.sub('## Enum: ', '').sub(/Enum$/, '').sub(/^[A-Z]/) { |m| m.downcase }
      current_enum = { name: name, values: [] }
      # Push the enum to the enum list of the model
      enums << current_enum
      next
    end
    # Values looks like (value: `expectedValue`) so if it matches, we add it to the values list
    match = line.match(/\(value: `([^`]+)`\)/)
    if match && match.captures[0]
      current_enum[:values] << match.captures[0]
    end
  end
end

# Extract all the attributes of a model from the Properties section
# @param model [Hash]
# @param contents [Array<String>]
def process_attributes(model, contents)
  contents.each do |line|
    # We assume that the properties section is always the first section
    break if line.start_with?('## ') && line != '## Properties'
    # Properties are expected to start with ** as all properties name are in bold
    next unless line.start_with?('**')

    name, type, description, flags = line.split('|').map { |s| s&.strip }
    name.gsub!('*', '')
    # Try to catch the default value
    match = flags && flags.match(/\[default to ([^\]]+)\]/)
    default = match && match.captures[0].gsub('&#39;', '"')
    # Push the attribute to the model
    model[:attributes].push({
      name: name,
      type: resolve_type(name, type, model[:enums]),
      description: description ? reformat_description(description) : '',
      default: default,
      optional: flags&.include?('[optional]')
    })
  end
end

# Typescript type translation from openAPI types
TYPESCRIPT_TYPES = {
  "Number" => "number",
  "String" => "string",
  "Object" => "object",
  "Boolean" => "boolean"
}
TYPESCRIPT_TYPES.default_proc = proc { |h,k| h[k] = k }

# @param name [String]
# @param type [String]
# @param enums [Array<Hash>]
# @return [String]
def resolve_type(name, type, enums)
  enum = enums.find { |e| e[:name] == name }
  # **fileType** | **String** \n[...]\n## Enum: FileTypeEnum
  return enum[:values].join(' | ') if enum

  # [...](*.md)
  return resolve_model_type(type) if type.include?('.md')

  type.gsub!('*', '')
  # if type is an array type we rewrite it in the right typescript format
  match = type.match(/\[([^\]]+)\]/)
  return "#{TYPESCRIPT_TYPES[match.captures[0]]}[]" if match && match.captures[0]

  return TYPESCRIPT_TYPES[type]
end

# Extract the model type from a markdown link
# @param type [String]
# @return [String]
def resolve_model_type(type)
  # [**NumberBoolean**](NumberBoolean.md)
  # [**[UserAccess]**](UserAccess.md)
  # [**BasePipeline**](.md)
  type = type.match(/\[\*\*([^*]+)\*\*\]\([^.]*\.md\)/).captures[0]
  match = type.match(/\[([^\]]+)\]/)
  return "#{match.captures[0]}[]" if match && match.captures[0]
  return type
end

# Write the typescript definition for an enum
# @param contents [String]
# @param enum [Hash]
def write_enum(contents, enum)
  contents << "  export type #{enum[:name]} = #{enum[:values].join(' | ')};\n"
end

# Write the typescript class definition for a model
# @param contents [String]
# @param model [Hash]
def write_model(contents, model)
  contents << "  export class #{model[:name]} {\n"
  # When a model is used as a return type, we'll assume its optional attributes can be null
  used_as_return = model[:used_as_return]
  # Write all the attributes of the model
  model[:attributes].each do |attribute|
    # Write the description as JSdocs without @ attributes
    contents << "    /** #{attribute[:description]} */\n" if attribute[:description] && !attribute[:description].empty?
    # Write `name: type;`, `name?: type` or `name: type | null`
    contents << "    #{attribute[:name]}"
    if attribute[:optional]
      contents << (used_as_return ? ": #{attribute[:type]} | null;\n" : "?: #{attribute[:type]};\n")
    else
      contents << ": #{attribute[:type]};\n"
    end
  end
  # If the model has the `static constructFromObject` in the JS we also expose it in definitions
  if model[:has_construct_from_object_static_method]
    contents << "    static constructFromObject(input: Partial<#{model[:name]}>, obj?: #{model[:name]}): #{model[:name]}\n  }\n"
  else
    contents << "  }\n"
  end
end

# Write an API method option record
# @param contents [String]
# @param option [Hash]
# @param class_name [String]
def write_api_method_option_record(contents, option, class_name)
  contents << "  type #{class_name}#{option[:friendly_name]} = {\n"
  last = option[:data].size - 1
  option[:data].each.with_index do |param, i|
    contents << (param[:description] ? "    /** #{param[:description]} */\n    " : "    ")
    contents << param[:name]
    contents << (param[:optional] ? "?: " : ": ")
    contents << param[:type]
    contents << ",\n" if i != last # This is nasty and I just wanted to push to the contents buffer, feel free to fix
  end
  contents << "\n  };\n"
end

# Write the method description with param JSDoc
# @param contents [String]
# @param method [Hash]
def write_method_description(contents, method)
  description = method[:description] && !method[:description].empty? ? method[:description].strip.gsub("\n", "\n     * ") : nil
  param_doc = method[:parameters].select { |param| param[:description] && !param[:description].empty? }
  param_doc.map! { |param| "@param #{param[:name]} #{param[:description]}" }
  all = [*description, *param_doc]
  return if all.empty?

  contents << "    /**\n     * #{all.join("\n     * ")}\n    */\n"
end

# Write an API class typescript definition
# @param contents [String]
# @param klass [Hash]
def write_api_class(contents, klass)
  # Write all the utility types for options of api class methods
  klass[:methods].each do |method|
    # If the method has an optional record, we write it
    option = method[:parameters].find { |param| param[:type] == :record }
    write_api_method_option_record(contents, option, klass[:name]) if option
  end
  # BaseAPI is a fake class that is used to support the default constructor of the API classes
  contents << "  export class #{klass[:name]} extends BaseAPI {\n"
  # Write all the methods
  klass[:methods].each do |method|
    # Write the JSDoc for friendlyness
    write_method_description(contents, method)
    # Write method definition: name(...attrs)
    contents << "    #{method[:name]}("
    last = method[:parameters].size - 1
    method[:parameters].each.with_index do |param, i|
      contents << param[:name]
      contents << (param[:optional] ? "?: " : ": ")
      contents << (param[:type] == :record ? "#{klass[:name]}#{param[:friendly_name]}" : param[:type])
      contents << ", " if i != last # This is nasty and I just wanted to push to the contents buffer, feel free to fix
    end
    # Return type is always a promise so it's defined as is
    contents << "): Promise<#{method[:return_type]}>;\n"
  end
  contents << "  }\n"
end

def main
  load_definition_from_docs_and_js
  write_definition_file
end

def load_definition_from_docs_and_js
  $cfoc = get_construct_from_object_classes
  $classes = {}
  Dir['docs/*.md'].each do |fn|
    contents = File.readlines(fn, chomp: true)
    class_name = File.basename(fn).split('.')[0]
    fn.end_with?('Api.md') ? process_api_file(contents, class_name) : process_model_file(contents, class_name)
  end
  File.write('output.json', JSON.dump($classes)) if $DEBUG
end

def write_definition_file
  contents = <<~EOH
  declare module 'pipedrive' {
    export class ApiClient {
      public authentications: {
        api_key: { apiKey: string };
        oauth2: {
          clientId: string;
          clientSecret: string;
          redirectUri: string;
          accessToken: string;
          refreshToken: string;
          scope: string;
          tokenUpdateCallback: null | ((token: {}) => void);
        };
      };
      public buildAuthorizationUrl(): string;
      public authorize(code: string): Promise<{}>;
      public refreshToken(): Promise<{}>;
    }
    class BaseAPI {
      constructor(params: ApiClient);
    }
  EOH
  
  $classes.each_value do |klass|
    case klass[:type]
    when :enum
      write_enum(contents, klass)
    when :model
      write_model(contents, klass)
    when :class
      write_api_class(contents, klass)
    end
  end
  
  unless $classes['AnyOfRecents']
    contents << "  class AnyOfRecents {}\n"
  end
  
  contents << "}"
  
  File.write('dist/pipedrive.d.ts', contents)
end

main