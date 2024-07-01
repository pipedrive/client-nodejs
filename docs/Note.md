# Pipedrive.Note

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **String** | The content of the note in HTML format. Subject to sanitization on the back-end. | [optional] 
**lead_id** | **String** | The ID of the lead the note will be attached to | [optional] 
**deal_id** | **Number** | The ID of the deal the note will be attached to | [optional] 
**person_id** | **Number** | The ID of the person the note will be attached to | [optional] 
**org_id** | **Number** | The ID of the organization the note will be attached to | [optional] 
**user_id** | **Number** | The ID of the user who will be marked as the author of the note. Only an admin can change the author. | [optional] 
**add_time** | **String** | The optional creation date &amp; time of the note in UTC. Can be set in the past or in the future. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**pinned_to_lead_flag** | [**NumberBoolean**](NumberBoolean.md) | If set, the results are filtered by note to lead pinning state (&#x60;lead_id&#x60; is also required) | [optional] 
**pinned_to_deal_flag** | [**NumberBoolean**](NumberBoolean.md) | If set, the results are filtered by note to deal pinning state (&#x60;deal_id&#x60; is also required) | [optional] 
**pinned_to_organization_flag** | [**NumberBoolean**](NumberBoolean.md) | If set, the results are filtered by note to organization pinning state (&#x60;org_id&#x60; is also required) | [optional] 
**pinned_to_person_flag** | [**NumberBoolean**](NumberBoolean.md) | If set, the results are filtered by note to person pinning state (&#x60;person_id&#x60; is also required) | [optional] 


