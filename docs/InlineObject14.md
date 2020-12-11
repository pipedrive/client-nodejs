# Pipedrive.InlineObject14

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **String** | Content of the note in HTML format. Subject to sanitization on the back-end. | 
**userId** | **Number** | ID of the user who will be marked as the author of this note. Only an admin can change the author. | [optional] 
**dealId** | **Number** | ID of the deal the note will be attached to. | [optional] 
**personId** | **Number** | ID of the person this note will be attached to. | [optional] 
**orgId** | **Number** | ID of the organization this note will be attached to. | [optional] 
**addTime** | **String** | Optional creation date &amp; time of the Note in UTC. Can be set in the past or in the future. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**pinnedToDealFlag** | **Number** | If set, then results are filtered by note to deal pinning state (deal_id is also required). | [optional] 
**pinnedToOrganizationFlag** | **Number** | If set, then results are filtered by note to organization pinning state (org_id is also required). | [optional] 
**pinnedToPersonFlag** | **Number** | If set, then results are filtered by note to person pinning state (person_id is also required). | [optional] 


