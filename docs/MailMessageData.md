# Pipedrive.MailMessageData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the mail message. | [optional] 
**from** | [**[MailParticipant]**](MailParticipant.md) | The array of mail message sender (object) | [optional] 
**to** | [**[MailParticipant]**](MailParticipant.md) | The array of mail message receiver (object) | [optional] 
**cc** | [**[MailParticipant]**](MailParticipant.md) | The array of mail message copies (object) | [optional] 
**bcc** | [**[MailParticipant]**](MailParticipant.md) | The array of mail message blind copies (object) | [optional] 
**body_url** | **String** | The mail message body URL | [optional] 
**account_id** | **String** | The connection account ID | [optional] 
**user_id** | **Number** | ID of the user whom mail message will be assigned to | [optional] 
**mail_thread_id** | **Number** | ID of the mail message thread | [optional] 
**subject** | **String** | The subject of mail message | [optional] 
**snippet** | **String** | The snippet of mail message. Snippet length is up to 225 characters. | [optional] 
**mail_tracking_status** | **String** | The status of tracking mail message. Value is &#x60;null&#x60; if tracking is not enabled. | [optional] 
**mail_link_tracking_enabled_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the link tracking in mail message body is enabled. | [optional] 
**read_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message is read or not by the user | [optional] 
**draft** | **String** | If the mail message has a draft status then the value is the mail message object as JSON formatted string, otherwise &#x60;null&#x60;. | [optional] 
**draft_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message is a draft or not | [optional] 
**synced_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message is synced with the provider or not | [optional] 
**deleted_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message is deleted or not | [optional] 
**has_body_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message has a body or not | [optional] 
**sent_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message has been sent or not | [optional] 
**sent_from_pipedrive_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message has been sent from Pipedrive app or not | [optional] 
**smart_bcc_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message has been created by Smart Email BCC feature or not | [optional] 
**message_time** | **Date** | Creation or receival time of the mail message | [optional] 
**add_time** | **Date** | The insertion into the database time of the mail message | [optional] 
**update_time** | **Date** | The updating time in the database of the mail message | [optional] 
**has_attachments_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message has an attachment or not | [optional] 
**has_inline_attachments_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message has an inline attachment or not | [optional] 
**has_real_attachments_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message has an attachment (which is not inline) or not | [optional] 



## Enum: MailTrackingStatusEnum


* `opened` (value: `"opened"`)

* `not opened` (value: `"not opened"`)




