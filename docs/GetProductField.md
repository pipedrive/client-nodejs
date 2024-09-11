# Pipedrive.GetProductField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the field | 
**options** | **[Object]** | When &#x60;field_type&#x60; is either &#x60;set&#x60; or &#x60;enum&#x60;, possible options must be supplied as a JSON-encoded sequential array, for example:&lt;/br&gt;&#x60;[{\&quot;label\&quot;:\&quot;red\&quot;}, {\&quot;label\&quot;:\&quot;blue\&quot;}, {\&quot;label\&quot;:\&quot;lilac\&quot;}]&#x60; | [optional] 
**field_type** | [**InternalFieldType**](InternalFieldType.md) |  | 
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


