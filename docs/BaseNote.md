# Pipedrive.BaseNote

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the note | [optional] 
**active_flag** | **Boolean** | Whether the note is active or deleted | [optional] 
**add_time** | **String** | The creation date and time of the note | [optional] 
**content** | **String** | The content of the note in HTML format. Subject to sanitization on the back-end. | [optional] 
**deal** | [**BaseNoteDealTitle**](BaseNoteDealTitle.md) |  | [optional] 
**lead_id** | **String** | The ID of the lead the note is attached to | [optional] 
**deal_id** | **Number** | The ID of the deal the note is attached to | [optional] 
**last_update_user_id** | **Number** | The ID of the user who last updated the note | [optional] 
**org_id** | **Number** | The ID of the organization the note is attached to | [optional] 
**organization** | [**BaseNoteOrganization**](BaseNoteOrganization.md) |  | [optional] 
**person** | [**BaseNotePerson**](BaseNotePerson.md) |  | [optional] 
**person_id** | **Number** | The ID of the person the note is attached to | [optional] 
**pinned_to_deal_flag** | **Boolean** | If true, the results are filtered by note to deal pinning state | [optional] 
**pinned_to_organization_flag** | **Boolean** | If true, the results are filtered by note to organization pinning state | [optional] 
**pinned_to_person_flag** | **Boolean** | If true, the results are filtered by note to person pinning state | [optional] 
**update_time** | **String** | The last updated date and time of the note | [optional] 
**user** | [**NoteCreatorUser**](NoteCreatorUser.md) |  | [optional] 
**user_id** | **Number** | The ID of the note creator | [optional] 


