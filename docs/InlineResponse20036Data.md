# Pipedrive.InlineResponse20036Data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the Note | [optional] 
**activeFlag** | **Boolean** | If Note is active or deleted | [optional] 
**addTime** | **String** | The creation date and time of the Note | [optional] 
**content** | **String** | Content of the Note in HTML format. Subject to sanitization on the back-end. | [optional] 
**deal** | [**InlineResponse20036Deal**](InlineResponse20036Deal.md) |  | [optional] 
**dealId** | **Number** | The ID of the Deal the Note is attached to | [optional] 
**lastUpdateUserId** | **Number** | The ID of the User who updated the Note last | [optional] 
**orgId** | **Number** | The ID of the Organization this Note is attached to | [optional] 
**organization** | [**InlineResponse20036Organization**](InlineResponse20036Organization.md) |  | [optional] 
**person** | [**InlineResponse20036Person**](InlineResponse20036Person.md) |  | [optional] 
**personId** | **Number** | The ID of the Person this Note is attached to | [optional] 
**pinnedToDealFlag** | **Boolean** | If true, then the results are filtered by Note to Deal pinning state. | [optional] 
**pinnedToOrganizationFlag** | **Boolean** | If true, then the results are filtered by Note to Organization pinning state. | [optional] 
**pinnedToPersonFlag** | **Boolean** | If true, then the results are filtered by Note to Person pinning state. | [optional] 
**updateTime** | **String** | The last updated date and time of the Note | [optional] 
**user** | [**InlineResponse20036User**](InlineResponse20036User.md) |  | [optional] 
**userId** | **Number** | The ID of the Note creator | [optional] 


