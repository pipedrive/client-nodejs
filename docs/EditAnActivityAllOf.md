# Pipedrive.EditAnActivityAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject** | **String** | Subject of the Activity | [optional] 
**type** | **String** | Type of the Activity. This is in correlation with the key_string parameter of ActivityTypes. | [optional] 
**userId** | **Number** | The ID of the User whom the Activity is assigned to | [optional] 
**participants** | **[Object]** | List of multiple Persons (participants) this Activity is associated with. It requires a structure as follows: [{\&quot;person_id\&quot;:1,\&quot;primary_flag\&quot;:true}] | [optional] 
**busyFlag** | **Boolean** | Set the Activity as &#39;Busy&#39; or &#39;Free&#39;. If the flag is set to true, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset by never setting it or overriding it with null. When the value of the flag is unset (null), the flag defaults to &#39;Busy&#39; if it has a time set, and &#39;Free&#39; if it is an all-day event without specified time. | [optional] 
**attendees** | **[Object]** | Attendees of the Activity. This can be either your existing Pipedrive contacts or an external email address. It requires a structure as follows: [{\&quot;email_address\&quot;:\&quot;mail@example.org\&quot;}] or [{\&quot;person_id\&quot;:1, \&quot;email_address\&quot;:\&quot;mail@example.org\&quot;}] | [optional] 
**done** | **Number** |  | [optional] 



## Enum: BusyFlagEnum


* `true` (value: `"true"`)

* `false` (value: `"false"`)




