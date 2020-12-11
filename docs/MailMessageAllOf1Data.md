# Pipedrive.MailMessageAllOf1Data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the mail message. | [optional] 
**from** | [**[MailMessageAllOf1DataFrom]**](MailMessageAllOf1DataFrom.md) | The array of mail message sender (object) | [optional] 
**to** | [**[MailMessageAllOf1DataFrom]**](MailMessageAllOf1DataFrom.md) | The array of mail message receiver (object) | [optional] 
**cc** | [**[MailMessageAllOf1DataFrom]**](MailMessageAllOf1DataFrom.md) | The array of mail message copies (object) | [optional] 
**bcc** | [**[MailMessageAllOf1DataFrom]**](MailMessageAllOf1DataFrom.md) | The array of mail message blind copies (object) | [optional] 
**bodyUrl** | **String** | The mail message body URL | [optional] 
**accountId** | **String** | The connection account ID | [optional] 
**userId** | **Number** | ID of the user whom mail message will be assigned to | [optional] 
**mailThreadId** | **Number** | ID of the mail message thread | [optional] 
**subject** | **String** | The subject of mail message | [optional] 
**snippet** | **String** | The snippet of mail message. Snippet length is up to 225 characters. | [optional] 
**mailTrackingStatus** | **String** | The status of tracking mail message. Value is null if tracking is not enabled. | [optional] 
**mailLinkTrackingEnabledFlag** | **Object** | Whether the link tracking in mail message body is enabled. | [optional] 
**readFlag** | **Object** | Whether the mail message is read or not by the user | [optional] 
**draft** | **String** | If the mail message has a draft status then the value is the mail message object as JSON formatted string, otherwise null. | [optional] 
**draftFlag** | **Object** | Whether the mail message is a draft or not | [optional] 
**syncedFlag** | **Object** | Whether the mail message is synced with the provider or not | [optional] 
**deletedFlag** | **Object** | Whether the mail message is deleted or not | [optional] 
**hasBodyFlag** | **Object** | Whether the mail message has a body or not | [optional] 
**sentFlag** | **Object** | Whether the mail message has been sent or not | [optional] 
**sentFromPipedriveFlag** | **Object** | Whether the mail message has been sent from Pipedrive app or not | [optional] 
**smartBccFlag** | **Object** | Whether the mail message has been created by Smart Email BCC feature or not | [optional] 
**messageTime** | **Date** | Creation or receival time of the mail message | [optional] 
**addTime** | **Date** | The insertion into the database time of the mail message | [optional] 
**updateTime** | **Date** | The updating time in the database of the mail message | [optional] 
**hasAttachmentsFlag** | **Object** | Whether the mail message has an attachment or not | [optional] 
**hasInlineAttachmentsFlag** | **Object** | Whether the mail message has an inline attachment or not | [optional] 
**hasRealAttachmentsFlag** | **Object** | Whether the mail message has an attachment (which is not inline) or not | [optional] 
**writeFlag** | **Boolean** | We strongly advise you to avoid the use of this property. We will soon deprecate this property. | [optional] 



## Enum: MailTrackingStatusEnum


* `opened` (value: `"opened"`)

* `not opened` (value: `"not opened"`)




