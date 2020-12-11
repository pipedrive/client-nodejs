# Pipedrive.ResponseCallLogObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **Number** | The ID of the owner of the call log | [optional] 
**activityId** | **Number** | If specified, this activity will be converted into a call log, with the information provided. When this field is used, you don&#39;t need to specify deal_id, person_id or org_id, as they will be ignored in favor of the values already available in the activity. | [optional] 
**subject** | **String** | Name of the activity this call is attached to | [optional] 
**duration** | **String** | Call duration in seconds | [optional] 
**outcome** | **String** | Describes the outcome of the call | 
**fromPhoneNumber** | **String** | The number that made the call | [optional] 
**toPhoneNumber** | **String** | The number called | 
**startTime** | **Date** | The date and time of the start of the call in UTC. Format: YYYY-MM-DD HH:MM:SS. | 
**endTime** | **Date** | The date and time of the end of the call in UTC. Format: YYYY-MM-DD HH:MM:SS. | 
**personId** | **Number** | The ID of the Person this call is associated with | [optional] 
**orgId** | **Number** | The ID of the Organization this call is associated with | [optional] 
**dealId** | **Number** | The ID of the Deal this call is associated with | [optional] 
**id** | **String** | The call log ID, generated when the call log was created | [optional] 
**hasRecording** | **Boolean** | If the call log has an audio recording attached, the value should be true | [optional] 
**companyId** | **Number** | The Company ID of the owner of the call log | [optional] 



## Enum: OutcomeEnum


* `connected` (value: `"connected"`)

* `no_answer` (value: `"no_answer"`)

* `left_message` (value: `"left_message"`)

* `left_voicemail` (value: `"left_voicemail"`)

* `wrong_number` (value: `"wrong_number"`)

* `busy` (value: `"busy"`)




