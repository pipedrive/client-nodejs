# Pipedrive.MessageObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the message | 
**channelId** | **String** | The channel ID as in the provider | 
**senderId** | **String** | The ID of the provider&#39;s user that sent the message | 
**conversationId** | **String** | The ID of the conversation | 
**message** | **String** | The body of the message | 
**status** | **String** | The status of the message | 
**createdAt** | **Date** | The date and time when the message was created in the provider, in UTC. Format: YYYY-MM-DD HH:MM | 
**replyBy** | **Date** | The date and time when the message can no longer receive a reply, in UTC. Format: YYYY-MM-DD HH:MM | [optional] 
**conversationLink** | **String** | A URL that can open the conversation in the provider&#39;s side | [optional] 
**attachments** | [**[MessageObjectAttachments]**](MessageObjectAttachments.md) | The list of attachments available in the message | [optional] 



## Enum: StatusEnum


* `sent` (value: `"sent"`)

* `delivered` (value: `"delivered"`)

* `read` (value: `"read"`)

* `failed` (value: `"failed"`)




