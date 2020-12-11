# Pipedrive.BaseMailThreadMessages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the mail thread | [optional] 
**accountId** | **String** | The connection account ID | [optional] 
**userId** | **Number** | ID of the user whom mail message will be assigned to | [optional] 
**subject** | **String** | The subject | [optional] 
**snippet** | **String** | A snippet | [optional] 
**readFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread is read | [optional] 
**mailTrackingStatus** | **String** | Mail tracking status | [optional] 
**hasAttachmentsFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has an attachment | [optional] 
**hasInlineAttachmentsFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has inline attachments | [optional] 
**hasRealAttachmentsFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has real attachments (which are not inline) | [optional] 
**deletedFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread is deleted | [optional] 
**syncedFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread is synced | [optional] 
**smartBccFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether one of the parties of the mail thread is Bcc | [optional] 
**mailLinkTrackingEnabledFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the link tracking of the mail thread is enabled | [optional] 
**writeFlag** | **Boolean** | We strongly advise you to avoid the use of this property. We will soon deprecate this property | [optional] 
**from** | [**[MailThreadParticipant]**](MailThreadParticipant.md) | Senders of the mail thread | [optional] 
**to** | [**[MailThreadParticipant]**](MailThreadParticipant.md) | Recipients of the mail thread | [optional] 
**cc** | [**[MailThreadParticipant]**](MailThreadParticipant.md) | Participants of the Cc | [optional] 
**bcc** | [**[MailThreadParticipant]**](MailThreadParticipant.md) | Participants of the Bcc | [optional] 
**bodyUrl** | **String** | A link to the mail thread message | [optional] 
**mailThreadId** | **Number** | ID of the mail thread | [optional] 
**draft** | **String** | If the mail message has a draft status then the value is the mail message object as JSON formatted string, otherwise null. | [optional] 
**hasBodyFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread message has a body | [optional] 
**sentFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread message is sent | [optional] 
**sentFromPipedriveFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread message is sent from Pipedrive | [optional] 
**messageTime** | **Date** | The time when the mail message was received or created | [optional] 
**addTime** | **Date** | The time when the mail message was inserted to database | [optional] 
**updateTime** | **Date** | The time when the mail message was updated in database received | [optional] 


