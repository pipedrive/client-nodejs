# Pipedrive.ProductField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the field | 
**options** | **[Object]** | When &#x60;field_type&#x60; is either &#x60;set&#x60; or &#x60;enum&#x60;, possible options must be supplied as a JSON-encoded sequential array, for example:&lt;/br&gt;&#x60;[{\&quot;label\&quot;:\&quot;red\&quot;}, {\&quot;label\&quot;:\&quot;blue\&quot;}, {\&quot;label\&quot;:\&quot;lilac\&quot;}]&#x60; | [optional] 
**field_type** | **String** | The type of the field&lt;table&gt;&lt;tr&gt;&lt;th&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;varchar&#x60;&lt;/td&gt;&lt;td&gt;Text (up to 255 characters)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;varchar_auto&#x60;&lt;/td&gt;&lt;td&gt;Autocomplete text (up to 255 characters)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;text&#x60;&lt;/td&gt;&lt;td&gt;Long text (up to 65k characters)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;double&#x60;&lt;/td&gt;&lt;td&gt;Numeric value&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;monetary&#x60;&lt;/td&gt;&lt;td&gt;Monetary field (has a numeric value and a currency value)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;date&#x60;&lt;/td&gt;&lt;td&gt;Date (format YYYY-MM-DD)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;set&#x60;&lt;/td&gt;&lt;td&gt;Options field with a possibility of having multiple chosen options&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;enum&#x60;&lt;/td&gt;&lt;td&gt;Options field with a single possible chosen option&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;user&#x60;&lt;/td&gt;&lt;td&gt;User field (contains a user ID of another Pipedrive user)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;org&#x60;&lt;/td&gt;&lt;td&gt;Organization field (contains an organization ID which is stored on the same account)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;people&#x60;&lt;/td&gt;&lt;td&gt;Person field (contains a product ID which is stored on the same account)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;phone&#x60;&lt;/td&gt;&lt;td&gt;Phone field (up to 255 numbers and/or characters)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;time&#x60;&lt;/td&gt;&lt;td&gt;Time field (format HH:MM:SS)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;timerange&#x60;&lt;/td&gt;&lt;td&gt;Time-range field (has a start time and end time value, both HH:MM:SS)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;daterange&#x60;&lt;/td&gt;&lt;td&gt;Date-range field (has a start date and end date value, both YYYY-MM-DD)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;address&#x60;&lt;/td&gt;&lt;td&gt;Address field&lt;/dd&gt;&lt;/table&gt; | 
**id** | **Number** | The ID of the product field | [optional] 
**key** | **String** | The key of the product field | [optional] 
**order_nr** | **Number** | The position (index) of the product field in the detail view | [optional] 
**add_time** | **String** | The product field creation time. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**update_time** | **String** | The product field last update time. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**last_updated_by_user_id** | **Number** | The ID of the last user to update the product field | [optional] 
**created_by_user_id** | **Number** | The ID of the user who created the product field | [optional] 
**active_flag** | **Boolean** | Whether or not the product field is currently active | [optional] 
**edit_flag** | **Boolean** | Whether or not the product field name and metadata is editable | [optional] 
**add_visible_flag** | **Boolean** | Whether or not the product field is visible in the Add Product Modal | [optional] 
**important_flag** | **Boolean** | Whether or not the product field is marked as important | [optional] 
**bulk_edit_allowed** | **Boolean** | Whether or not the product field data can be edited | [optional] 
**searchable_flag** | **Boolean** | Whether or not the product field is searchable | [optional] 
**filtering_allowed** | **Boolean** | Whether or not the product field value can be used when filtering searches | [optional] 
**sortable_flag** | **Boolean** | Whether or not the product field is sortable | [optional] 
**mandatory_flag** | **Boolean** | Whether or not the product field is mandatory when creating products | [optional] 



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




