# Pipedrive.ChannelObjectResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique channel ID used internally in omnichannel-api and the frontend of the extension | [optional] 
**name** | **String** | The name of the channel | [optional] 
**avatar_url** | **String** | The URL for an icon that represents your channel | [optional] 
**provider_channel_id** | **String** | The channel ID you specified while creating the channel | [optional] 
**marketplace_client_id** | **String** | The client_id of your app in Pipedrive marketplace | [optional] 
**pd_company_id** | **Number** | The ID of the user&#39;s company in Pipedrive | [optional] 
**pd_user_id** | **Number** | The ID of the user in Pipedrive | [optional] 
**created_at** | **Date** | The date and time when your channel was created in the API | [optional] 
**provider_type** | **String** | Value of the provider_type sent to this endpoint | [optional] 
**template_support** | **Boolean** | Value of the template_support sent to this endpoint | [optional] 



## Enum: ProviderTypeEnum


* `facebook` (value: `"facebook"`)

* `whatsapp` (value: `"whatsapp"`)

* `other` (value: `"other"`)




