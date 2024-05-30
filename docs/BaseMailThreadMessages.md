# Pipedrive.BaseMailThreadMessages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the mail thread | [optional] 
**account_id** | **String** | The connection account ID | [optional] 
**user_id** | **Number** | ID of the user whom mail message will be assigned to | [optional] 
**subject** | **String** | The subject | [optional] 
**snippet** | **String** | A snippet | [optional] 
**read_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread is read | [optional] 
**mail_tracking_status** | **String** | Mail tracking status | [optional] 
**has_attachments_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has an attachment | [optional] 
**has_inline_attachments_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has inline attachments | [optional] 
**has_real_attachments_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has real attachments (which are not inline) | [optional] 
**deleted_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread is deleted | [optional] 
**synced_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread is synced | [optional] 
**smart_bcc_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether one of the parties of the mail thread is Bcc | [optional] 
**mail_link_tracking_enabled_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the link tracking of the mail thread is enabled | [optional] 
**from** | [**[MailThreadParticipant]**](MailThreadParticipant.md) | Senders of the mail thread | [optional] 
**to** | [**[MailThreadParticipant]**](MailThreadParticipant.md) | Recipients of the mail thread | [optional] 
**cc** | [**[MailThreadParticipant]**](MailThreadParticipant.md) | Participants of the Cc | [optional] 
**bcc** | [**[MailThreadParticipant]**](MailThreadParticipant.md) | Participants of the Bcc | [optional] 
**body_url** | **String** | A link to the mail thread message | [optional] 
**mail_thread_id** | **Number** | ID of the mail thread | [optional] 
**draft** | **String** | If the mail message has a draft status then the value is the mail message object as JSON formatted string, otherwise &#x60;null&#x60;. | [optional] 
**has_body_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread message has a body | [optional] 
**sent_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread message is sent | [optional] 
**sent_from_pipedrive_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread message is sent from Pipedrive | [optional] 
**message_time** | **Date** | The time when the mail message was received or created | [optional] 
**add_time** | **Date** | The time when the mail message was inserted to database | [optional] 
**update_time** | **Date** | The time when the mail message was updated in database received | [optional] 


