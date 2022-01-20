# Pipedrive.CallLogObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **Number** | The ID of the owner of the call log | [optional] 
**activityId** | **Number** | If specified, this activity will be converted into a call log, with the information provided. When this field is used, you don&#39;t need to specify &#x60;deal_id&#x60;, &#x60;person_id&#x60; or &#x60;org_id&#x60;, as they will be ignored in favor of the values already available in the activity. | [optional] 
**subject** | **String** | The name of the activity this call is attached to | [optional] 
**duration** | **String** | The duration of the call in seconds | [optional] 
**outcome** | **String** | Describes the outcome of the call | 
**fromPhoneNumber** | **String** | The number that made the call | [optional] 
**toPhoneNumber** | **String** | The number called | 
**startTime** | **Date** | The date and time of the start of the call in UTC. Format: YYYY-MM-DD HH:MM:SS. | 
**endTime** | **Date** | The date and time of the end of the call in UTC. Format: YYYY-MM-DD HH:MM:SS. | 
**personId** | **Number** | The ID of the person this call is associated with | [optional] 
**orgId** | **Number** | The ID of the organization this call is associated with | [optional] 
**dealId** | **Number** | The ID of the deal this call is associated with | [optional] 
**note** | **String** | The note for the call log in HTML format | [optional] 



## Enum: OutcomeEnum


* `connected` (value: `"connected"`)

* `no_answer` (value: `"no_answer"`)

* `left_message` (value: `"left_message"`)

* `left_voicemail` (value: `"left_voicemail"`)

* `wrong_number` (value: `"wrong_number"`)

* `busy` (value: `"busy"`)




