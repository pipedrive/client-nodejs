# Pipedrive.MailMessageItemForList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the mail message. | [optional] 
**from** | [**[MailParticipant]**](MailParticipant.md) | The array of mail message sender (object) | [optional] 
**to** | [**[MailParticipant]**](MailParticipant.md) | The array of mail message receiver (object) | [optional] 
**cc** | [**[MailParticipant]**](MailParticipant.md) | The array of mail message copies (object) | [optional] 
**bcc** | [**[MailParticipant]**](MailParticipant.md) | The array of mail message blind copies (object) | [optional] 
**bodyUrl** | **String** | The mail message body URL | [optional] 
**accountId** | **String** | The connection account ID | [optional] 
**userId** | **Number** | ID of the user whom mail message will be assigned to | [optional] 
**mailThreadId** | **Number** | ID of the mail message thread | [optional] 
**subject** | **String** | The subject of mail message | [optional] 
**snippet** | **String** | The snippet of mail message. Snippet length is up to 225 characters. | [optional] 
**mailTrackingStatus** | **String** | The status of tracking mail message. Value is &#x60;null&#x60; if tracking is not enabled. | [optional] 
**mailLinkTrackingEnabledFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the link tracking in mail message body is enabled. | [optional] 
**readFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message is read or not by the user | [optional] 
**draft** | **String** | If the mail message has a draft status then the value is the mail message object as JSON formatted string, otherwise &#x60;null&#x60;. | [optional] 
**draftFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message is a draft or not | [optional] 
**syncedFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message is synced with the provider or not | [optional] 
**deletedFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message is deleted or not | [optional] 
**hasBodyFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message has a body or not | [optional] 
**sentFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message has been sent or not | [optional] 
**sentFromPipedriveFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message has been sent from Pipedrive app or not | [optional] 
**smartBccFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message has been created by Smart Email BCC feature or not | [optional] 
**messageTime** | **Date** | Creation or receival time of the mail message | [optional] 
**addTime** | **Date** | The insertion into the database time of the mail message | [optional] 
**updateTime** | **Date** | The updating time in the database of the mail message | [optional] 
**hasAttachmentsFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message has an attachment or not | [optional] 
**hasInlineAttachmentsFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message has an inline attachment or not | [optional] 
**hasRealAttachmentsFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail message has an attachment (which is not inline) or not | [optional] 
**writeFlag** | **Boolean** | We strongly advise you to avoid the use of this property. We will soon deprecate this property. | [optional] 
**nylasId** | **String** | The Mail Message ID assigned by the sync provider | [optional] 
**s3Bucket** | **String** | The name of the S3 bucket | [optional] 
**s3BucketPath** | **String** | The path of the S3 bucket | [optional] 
**externalDeletedFlag** | **Boolean** | If the Mail Message has been deleted on the provider side or not | [optional] 
**muaMessageId** | **String** | The Mail Message ID assigned by the mail user agent | [optional] 
**templateId** | **Number** | The ID of the mail template | [optional] 
**timestamp** | **String** | The add date and time of the Mail Message | [optional] 
**itemType** | **String** | The type of the data item | [optional] 
**companyId** | **Number** | The ID of the company | [optional] 



## Enum: MailTrackingStatusEnum


* `opened` (value: `"opened"`)

* `not opened` (value: `"not opened"`)




