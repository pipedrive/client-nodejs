# Pipedrive.ActivityPostObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**due_date** | **Date** | The due date of the activity. Format: YYYY-MM-DD | [optional] 
**due_time** | **String** | The due time of the activity in UTC. Format: HH:MM | [optional] 
**duration** | **String** | The duration of the activity. Format: HH:MM | [optional] 
**deal_id** | **Number** | The ID of the deal this activity is associated with | [optional] 
**lead_id** | **String** | The ID of the lead in the UUID format this activity is associated with | [optional] 
**person_id** | **Number** | The ID of the person this activity is associated with | [optional] 
**project_id** | **Number** | The ID of the project this activity is associated with | [optional] 
**org_id** | **Number** | The ID of the organization this activity is associated with | [optional] 
**location** | **String** | The address of the activity. | [optional] 
**public_description** | **String** | Additional details about the activity that is synced to your external calendar. Unlike the note added to the activity, the description is publicly visible to any guests added to the activity. | [optional] 
**note** | **String** | The note of the activity (HTML format) | [optional] 
**subject** | **String** | The subject of the activity. When value for subject is not set, it will be given a default value &#x60;Call&#x60;. | [optional] 
**type** | **String** | The type of the activity. This is in correlation with the &#x60;key_string&#x60; parameter of ActivityTypes. When value for type is not set, it will be given a default value &#x60;Call&#x60;. | [optional] 
**user_id** | **Number** | The ID of the user whom the activity is assigned to. If omitted, the activity is assigned to the authorized user. | [optional] 
**participants** | **[Object]** | List of multiple persons (participants) this activity is associated with. If omitted, single participant from &#x60;person_id&#x60; field is used. It requires a structure as follows: &#x60;[{\&quot;person_id\&quot;:1,\&quot;primary_flag\&quot;:true}]&#x60; | [optional] 
**busy_flag** | **Boolean** | Set the activity as &#39;Busy&#39; or &#39;Free&#39;. If the flag is set to &#x60;true&#x60;, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset by never setting it or overriding it with &#x60;null&#x60;. When the value of the flag is unset (&#x60;null&#x60;), the flag defaults to &#39;Busy&#39; if it has a time set, and &#39;Free&#39; if it is an all-day event without specified time. | [optional] 
**attendees** | **[Object]** | The attendees of the activity. This can be either your existing Pipedrive contacts or an external email address. It requires a structure as follows: &#x60;[{\&quot;email_address\&quot;:\&quot;mail@example.org\&quot;}]&#x60; or &#x60;[{\&quot;person_id\&quot;:1, \&quot;email_address\&quot;:\&quot;mail@example.org\&quot;}]&#x60; | [optional] 
**done** | [**NumberBoolean**](NumberBoolean.md) | Whether the activity is done or not. 0 &#x3D; Not done, 1 &#x3D; Done | [optional] 


