# Pipedrive.BaseMailThreadMessagesAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | [**[MailThreadParticipant]**](MailThreadParticipant.md) | Senders of the mail thread | [optional] 
**to** | [**[MailThreadParticipant]**](MailThreadParticipant.md) | Recipients of the mail thread | [optional] 
**cc** | [**[MailThreadParticipant]**](MailThreadParticipant.md) | Participants of the Cc | [optional] 
**bcc** | [**[MailThreadParticipant]**](MailThreadParticipant.md) | Participants of the Bcc | [optional] 
**bodyUrl** | **String** | A link to the mail thread message | [optional] 
**mailThreadId** | **Number** | ID of the mail thread | [optional] 
**draft** | **String** | If the mail message has a draft status then the value is the mail message object as JSON formatted string, otherwise &#x60;null&#x60;. | [optional] 
**hasBodyFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread message has a body | [optional] 
**sentFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread message is sent | [optional] 
**sentFromPipedriveFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread message is sent from Pipedrive | [optional] 
**messageTime** | **Date** | The time when the mail message was received or created | [optional] 
**addTime** | **Date** | The time when the mail message was inserted to database | [optional] 
**updateTime** | **Date** | The time when the mail message was updated in database received | [optional] 


