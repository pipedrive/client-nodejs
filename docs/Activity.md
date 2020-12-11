# Pipedrive.Activity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject** | **String** | Subject of the activity | 
**done** | **Number** |  | [optional] 
**type** | **String** | Type of the activity. This is in correlation with the key_string parameter of ActivityTypes. | 
**dueDate** | **Date** | Due date of the activity. Format: YYYY-MM-DD | [optional] 
**dueTime** | **String** | Due time of the activity in UTC. Format: HH:MM | [optional] 
**duration** | **String** | Duration of the activity. Format: HH:MM | [optional] 
**userId** | **Number** | ID of the user whom the activity will be assigned to. If omitted, the activity will be assigned to the authorized user. | [optional] 
**dealId** | **Number** | ID of the deal this activity will be associated with | [optional] 
**personId** | **Number** | ID of the person this activity will be associated with | [optional] 
**participants** | **[Object]** | List of multiple persons (participants) this activity will be associated with. If omitted, single participant from person_id field is used. It requires a structure as follows: [{\&quot;person_id\&quot;:1,\&quot;primary_flag\&quot;:true}] | [optional] 
**orgId** | **Number** | ID of the organization this activity will be associated with | [optional] 
**note** | **String** | Note of the activity (HTML format) | [optional] 
**location** | **String** | The address of the activity. Pipedrive will automatically check if the location matches a geo-location on Google maps. | [optional] 
**publicDescription** | **String** | Additional details about the activity that will be synced to your external calendar. Unlike the note added to the activity, the description will be publicly visible to any guests added to the activity. | [optional] 
**busyFlag** | **Boolean** | Set the activity as &#39;Busy&#39; or &#39;Free&#39;. If the flag is set to true, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset by never setting it or overriding it with null. When the value of the flag is unset (null), the flag defaults to &#39;Busy&#39; if it has a time set, and &#39;Free&#39; if it is an all-day event without specified time. | [optional] 
**attendees** | **[Object]** | Attendees of the activity. This can be either your existing Pipedrive contacts or an external email address. It requires a structure as follows: [{\&quot;email_address\&quot;:\&quot;mail@example.org\&quot;}] or [{\&quot;person_id\&quot;:1, \&quot;email_address\&quot;:\&quot;mail@example.org\&quot;}] | [optional] 



## Enum: BusyFlagEnum


* `true` (value: `"true"`)

* `false` (value: `"false"`)




