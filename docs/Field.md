# Pipedrive.Field

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the field. Value is &#x60;null&#x60; in case of subfields. | [optional] 
**key** | **String** | The key of the field. For custom fields this is generated upon creation. | [optional] 
**name** | **String** | The name of the field | [optional] 
**order_nr** | **Number** | The order number of the field | [optional] 
**field_type** | [**FieldTypeAsString**](FieldTypeAsString.md) |  | [optional] 
**add_time** | **Date** | The creation time of the field | [optional] 
**update_time** | **Date** | The update time of the field | [optional] 
**last_updated_by_user_id** | **Number** | The ID of the user who created or most recently updated the field, only applicable for custom fields | [optional] 
**created_by_user_id** | **Number** | The ID of the user who created the field | [optional] 
**active_flag** | **Boolean** | The active flag of the field | [optional] 
**edit_flag** | **Boolean** | The edit flag of the field | [optional] 
**index_visible_flag** | **Boolean** | Not used | [optional] 
**details_visible_flag** | **Boolean** | Not used | [optional] 
**add_visible_flag** | **Boolean** | Not used | [optional] 
**important_flag** | **Boolean** | Not used | [optional] 
**bulk_edit_allowed** | **Boolean** | Whether or not the field of an item can be edited in bulk | [optional] 
**searchable_flag** | **Boolean** | Whether or not items can be searched by this field | [optional] 
**filtering_allowed** | **Boolean** | Whether or not items can be filtered by this field | [optional] 
**sortable_flag** | **Boolean** | Whether or not items can be sorted by this field | [optional] 
**mandatory_flag** | **Boolean** | Whether or not the field is mandatory | [optional] 
**options** | **[Object]** | The options of the field. When there are no options, &#x60;null&#x60; is returned. | [optional] 
**options_deleted** | **[Object]** | The deleted options of the field. Only present when there is at least 1 deleted option. | [optional] 
**is_subfield** | **Boolean** | Whether or not the field is a subfield of another field. Only present if field is subfield. | [optional] 
**subfields** | **[Object]** | The subfields of the field. Only present when the field has subfields. | [optional] 


