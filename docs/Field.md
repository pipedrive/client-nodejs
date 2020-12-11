# Pipedrive.Field

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the Field. Value is &#x60;null&#x60; in case of subfields. | [optional] 
**key** | **String** | The key of the Field. For custom fields this is generated upon creation. | [optional] 
**name** | **String** | The name of the Field | [optional] 
**orderNr** | **Number** | The order number of the Field | [optional] 
**fieldType** | [**FieldTypeAsString**](FieldTypeAsString.md) |  | [optional] 
**addTime** | **String** | The creation time of the Field | [optional] 
**updateTime** | **String** | The update time of the Field | [optional] 
**lastUpdatedByUserId** | **Number** | The ID of the user who created or most recently updated the Field, only applicable for custom fields | [optional] 
**activeFlag** | **Boolean** | The active flag of the Field | [optional] 
**editFlag** | **Boolean** | The edit flag of the Field | [optional] 
**indexVisibleFlag** | **Boolean** | Not used | [optional] 
**detailsVisibleFlag** | **Boolean** | Not used | [optional] 
**addVisibleFlag** | **Boolean** | Not used | [optional] 
**importantFlag** | **Boolean** | Not used | [optional] 
**bulkEditAllowed** | **Boolean** | Whether or not the Field of an Item can be edited in bulk | [optional] 
**searchableFlag** | **Boolean** | Whether ot not Items can be searched by this Field | [optional] 
**filteringAllowed** | **Boolean** | Whether or not Items can be filtered by this Field | [optional] 
**sortableFlag** | **Boolean** | Whether or not Items can be sorted by this Field | [optional] 
**mandatoryFlag** | **Boolean** | Whether or not the Field is mandatory | [optional] 
**options** | **[Object]** | The options of the Field. When there are no options, &#x60;null&#x60; is returned. | [optional] 
**optionsDeleted** | **[Object]** | The deleted options of the Field. Only present when there is at least 1 deleted option. | [optional] 
**isSubfield** | **Boolean** | Whether or not the Field is a subfield of another Field. Only present if Field is subfield. | [optional] 
**subfields** | **[Object]** | Subfields of the Field. Only present when Field has subfields. | [optional] 


