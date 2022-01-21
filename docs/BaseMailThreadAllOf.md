# Pipedrive.BaseMailThreadAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parties** | [**BaseMailThreadAllOfParties**](BaseMailThreadAllOfParties.md) |  | [optional] 
**drafts_parties** | **[Object]** | Parties of the drafted mail thread | [optional] 
**folders** | **[String]** | Folders in which messages from thread are being stored | [optional] 
**version** | **Number** | Version | [optional] 
**snippet_draft** | **String** | A snippet from a draft | [optional] 
**snippet_sent** | **String** | A snippet from a message sent | [optional] 
**message_count** | **Number** | An amount of messages | [optional] 
**has_draft_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has any drafts | [optional] 
**has_sent_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has messages sent | [optional] 
**archived_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread is archived | [optional] 
**shared_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread is shared | [optional] 
**external_deleted_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has been deleted externally | [optional] 
**first_message_to_me_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread was initialized by others | [optional] 
**last_message_timestamp** | **Date** | Last message timestamp | [optional] 
**first_message_timestamp** | **Date** | The time when the mail thread has had the first message received or created | [optional] 
**last_message_sent_timestamp** | **Date** | The last time when the mail thread has had a message sent | [optional] 
**last_message_received_timestamp** | **Date** | The last time when the mail thread has had a message received | [optional] 
**add_time** | **Date** | The time when the mail thread was inserted to database | [optional] 
**update_time** | **Date** | The time when the mail thread was updated in database received | [optional] 
**deal_id** | **Number** | The ID of the deal | [optional] 
**deal_status** | **String** | Status of the deal | [optional] 
**lead_id** | **String** | The ID of the lead | [optional] 
**all_messages_sent_flag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether all the mail thread messages have been sent | [optional] 


