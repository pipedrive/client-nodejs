# Pipedrive.Field

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the field. Value is &#x60;null&#x60; in case of subfields. | [optional] 
**key** | **String** | The key of the field. For custom fields this is generated upon creation. | [optional] 
**name** | **String** | The name of the field | [optional] 
**orderNr** | **Number** | The order number of the field | [optional] 
**fieldType** | [**FieldTypeAsString**](FieldTypeAsString.md) |  | [optional] 
**addTime** | **Date** | The creation time of the field | [optional] 
**updateTime** | **Date** | The update time of the field | [optional] 
**lastUpdatedByUserId** | **Number** | The ID of the user who created or most recently updated the field, only applicable for custom fields | [optional] 
**activeFlag** | **Boolean** | The active flag of the field | [optional] 
**editFlag** | **Boolean** | The edit flag of the field | [optional] 
**indexVisibleFlag** | **Boolean** | Not used | [optional] 
**detailsVisibleFlag** | **Boolean** | Not used | [optional] 
**addVisibleFlag** | **Boolean** | Not used | [optional] 
**importantFlag** | **Boolean** | Not used | [optional] 
**bulkEditAllowed** | **Boolean** | Whether or not the field of an item can be edited in bulk | [optional] 
**searchableFlag** | **Boolean** | Whether or not items can be searched by this field | [optional] 
**filteringAllowed** | **Boolean** | Whether or not items can be filtered by this field | [optional] 
**sortableFlag** | **Boolean** | Whether or not items can be sorted by this field | [optional] 
**mandatoryFlag** | **Boolean** | Whether or not the field is mandatory | [optional] 
**options** | **[Object]** | The options of the field. When there are no options, &#x60;null&#x60; is returned. | [optional] 
**optionsDeleted** | **[Object]** | The deleted options of the field. Only present when there is at least 1 deleted option. | [optional] 
**isSubfield** | **Boolean** | Whether or not the field is a subfield of another field. Only present if field is subfield. | [optional] 
**subfields** | **[Object]** | The subfields of the field. Only present when the field has subfields. | [optional] 


