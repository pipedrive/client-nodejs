# Pipedrive.ActivityPostObjectAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject** | **String** | Subject of the Activity. When value for subject is not set, it will be given a default value \&quot;Call\&quot;. | [optional] 
**type** | **String** | Type of the Activity. This is in correlation with the key_string parameter of ActivityTypes. When value for type is not set, it will be given a default value \&quot;call\&quot;. | [optional] 
**userId** | **Number** | The ID of the User whom the Activity is assigned to. If omitted, the Activity is assigned to the authorized User. | [optional] 
**participants** | **[Object]** | List of multiple Persons (participants) this Activity is associated with. If omitted, single participant from person_id field is used. It requires a structure as follows: [{\&quot;person_id\&quot;:1,\&quot;primary_flag\&quot;:true}] | [optional] 
**busyFlag** | **Boolean** | Set the Activity as &#39;Busy&#39; or &#39;Free&#39;. If the flag is set to true, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset by never setting it or overriding it with null. When the value of the flag is unset (null), the flag defaults to &#39;Busy&#39; if it has a time set, and &#39;Free&#39; if it is an all-day event without specified time. | [optional] 
**attendees** | **[Object]** | Attendees of the Activity. This can be either your existing Pipedrive contacts or an external email address. It requires a structure as follows: [{\&quot;email_address\&quot;:\&quot;mail@example.org\&quot;}] or [{\&quot;person_id\&quot;:1, \&quot;email_address\&quot;:\&quot;mail@example.org\&quot;}] | [optional] 
**done** | [**NumberBoolean**](NumberBoolean.md) | Whether the Activity is done or not. 0 &#x3D; Not done, 1 &#x3D; Done | [optional] 



## Enum: BusyFlagEnum


* `true` (value: `"true"`)

* `false` (value: `"false"`)




