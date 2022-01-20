# Pipedrive.ActivityObjectFragment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**due_date** | **Date** | The due date of the activity. Format: YYYY-MM-DD | [optional] 
**due_time** | **String** | The due time of the activity in UTC. Format: HH:MM | [optional] 
**duration** | **String** | The duration of the activity. Format: HH:MM | [optional] 
**deal_id** | **Number** | The ID of the deal this activity is associated with | [optional] 
**person_id** | **Number** | The ID of the person this activity is associated with | [optional] 
**org_id** | **Number** | The ID of the organization this activity is associated with | [optional] 
**note** | **String** | The note of the activity (HTML format) | [optional] 
**location** | **String** | The address of the activity. Pipedrive will automatically check if the location matches a geo-location on Google maps. | [optional] 
**public_description** | **String** | Additional details about the activity that is synced to your external calendar. Unlike the note added to the activity, the description is publicly visible to any guests added to the activity. | [optional] 


