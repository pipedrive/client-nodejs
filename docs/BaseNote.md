# Pipedrive.BaseNote

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the note | [optional] 
**activeFlag** | **Boolean** | Whether the note is active or deleted | [optional] 
**addTime** | **String** | The creation date and time of the note | [optional] 
**content** | **String** | The content of the note in HTML format. Subject to sanitization on the back-end. | [optional] 
**deal** | [**BaseNoteDealTitle**](BaseNoteDealTitle.md) |  | [optional] 
**leadId** | **String** | The ID of the lead the note is attached to | [optional] 
**dealId** | **Number** | The ID of the deal the note is attached to | [optional] 
**lastUpdateUserId** | **Number** | The ID of the user who last updated the note | [optional] 
**orgId** | **Number** | The ID of the organization the note is attached to | [optional] 
**organization** | [**BaseNoteOrganization**](BaseNoteOrganization.md) |  | [optional] 
**person** | [**BaseNotePerson**](BaseNotePerson.md) |  | [optional] 
**personId** | **Number** | The ID of the person the note is attached to | [optional] 
**pinnedToDealFlag** | **Boolean** | If true, the results are filtered by note to deal pinning state | [optional] 
**pinnedToOrganizationFlag** | **Boolean** | If true, the results are filtered by note to organization pinning state | [optional] 
**pinnedToPersonFlag** | **Boolean** | If true, the results are filtered by note to person pinning state | [optional] 
**updateTime** | **String** | The last updated date and time of the note | [optional] 
**user** | [**NoteCreatorUser**](NoteCreatorUser.md) |  | [optional] 
**userId** | **Number** | The ID of the note creator | [optional] 


