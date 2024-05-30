# Pipedrive.MessageObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the message | 
**channel_id** | **String** | The channel ID as in the provider | 
**sender_id** | **String** | The ID of the provider&#39;s user that sent the message | 
**conversation_id** | **String** | The ID of the conversation | 
**message** | **String** | The body of the message | 
**status** | **String** | The status of the message | 
**created_at** | **Date** | The date and time when the message was created in the provider, in UTC. Format: YYYY-MM-DD HH:MM | 
**reply_by** | **Date** | The date and time when the message can no longer receive a reply, in UTC. Format: YYYY-MM-DD HH:MM | [optional] 
**conversation_link** | **String** | A URL that can open the conversation in the provider&#39;s side | [optional] 
**attachments** | [**[MessageObjectAttachments]**](MessageObjectAttachments.md) | The list of attachments available in the message | [optional] 



## Enum: StatusEnum


* `sent` (value: `"sent"`)

* `delivered` (value: `"delivered"`)

* `read` (value: `"read"`)

* `failed` (value: `"failed"`)




