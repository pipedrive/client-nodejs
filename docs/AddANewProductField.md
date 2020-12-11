# Pipedrive.AddANewProductField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the field | 
**pdOptions** | **[Object]** | When field_type is either set or enum, possible options must be supplied as a JSON-encoded sequential array, for example: [\&quot;red\&quot;,\&quot;blue\&quot;,\&quot;lilac\&quot;] | [optional] 
**fieldType** | **String** | Type of the field.&lt;dl class&#x3D;\&quot;fields-list\&quot;&gt;&lt;dt&gt;varchar&lt;/dt&gt;&lt;dd&gt;Text (up to 255 characters)&lt;/dd&gt;&lt;dt&gt;varchar_auto&lt;/dt&gt;&lt;dd&gt;Autocomplete text (up to 255 characters)&lt;/dd&gt;&lt;dt&gt;text&lt;/dt&gt;&lt;dd&gt;Long text (up to 65k characters)&lt;/dd&gt;&lt;dt&gt;double&lt;/dt&gt;&lt;dd&gt;Numeric value&lt;/dd&gt;&lt;dt&gt;monetary&lt;/dt&gt;&lt;dd&gt;Monetary field (has a numeric value and a currency value)&lt;/dd&gt;&lt;dt&gt;date&lt;/dt&gt;&lt;dd&gt;Date (format YYYY-MM-DD)&lt;/dd&gt;&lt;dt&gt;set&lt;/dt&gt;&lt;dd&gt;Options field with a possibility of having multiple chosen options&lt;/dd&gt;&lt;dt&gt;enum&lt;/dt&gt;&lt;dd&gt;Options field with a single possible chosen option&lt;/dd&gt;&lt;dt&gt;user&lt;/dt&gt;&lt;dd&gt;User field (contains a user ID of another Pipedrive user)&lt;/dd&gt;&lt;dt&gt;org&lt;/dt&gt;&lt;dd&gt;Organization field (contains an organization ID which is stored on the same account)&lt;/dd&gt;&lt;dt&gt;people&lt;/dt&gt;&lt;dd&gt;Person field (contains a product ID which is stored on the same account)&lt;/dd&gt;&lt;dt&gt;phone&lt;/dt&gt;&lt;dd&gt;Phone field (up to 255 numbers and/or characters)&lt;/dd&gt;&lt;dt&gt;time&lt;/dt&gt;&lt;dd&gt;Time field (format HH:MM:SS)&lt;/dd&gt;&lt;dt&gt;timerange&lt;/dt&gt;&lt;dd&gt;Time-range field (has a start time and end time value, both HH:MM:SS)&lt;/dd&gt;&lt;dt&gt;daterange&lt;/dt&gt;&lt;dd&gt;Date-range field (has a start date and end date value, both YYYY-MM-DD)&lt;/dd&gt;&lt;dt&gt;address&lt;/dt&gt;&lt;dd&gt;Address field (autocompleted by Google Maps)&lt;/dd&gt;&lt;/dl&gt; | 



## Enum: FieldTypeEnum


* `varchar` (value: `"varchar"`)

* `varchar_auto` (value: `"varchar_auto"`)

* `text` (value: `"text"`)

* `double` (value: `"double"`)

* `monetary` (value: `"monetary"`)

* `date` (value: `"date"`)

* `set` (value: `"set"`)

* `enum` (value: `"enum"`)

* `user` (value: `"user"`)

* `org` (value: `"org"`)

* `people` (value: `"people"`)

* `phone` (value: `"phone"`)

* `time` (value: `"time"`)

* `timerange` (value: `"timerange"`)

* `daterange` (value: `"daterange"`)

* `address` (value: `"address"`)




