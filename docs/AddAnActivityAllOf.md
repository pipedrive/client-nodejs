# Pipedrive.AddAnActivityAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dueDate** | **Date** | Due date of the Activity. Format: YYYY-MM-DD | [optional] 
**dueTime** | **String** | Due time of the Activity in UTC. Format: HH:MM | [optional] 
**duration** | **String** | Duration of the Activity. Format: HH:MM | [optional] 
**dealId** | **Number** | The ID of the Deal this Activity is associated with | [optional] 
**personId** | **Number** | The ID of the Person this Activity is associated with | [optional] 
**orgId** | **Number** | The ID of the Organization this Activity is associated with | [optional] 
**note** | **String** | Note of the Activity (HTML format) | [optional] 
**location** | **String** | The address of the Activity. Pipedrive will automatically check if the location matches a geo-location on Google maps. | [optional] 
**publicDescription** | **String** | Additional details about the Activity that is synced to your external calendar. Unlike the note added to the Activity, the description is publicly visible to any guests added to the Activity. | [optional] 


