# Pipedrive.ChannelObjectResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique channel ID used internally in omnichannel-api and the frontend of the extension | [optional] 
**name** | **String** | The name of the channel | [optional] 
**avatarUrl** | **String** | The URL for an icon that represents your channel | [optional] 
**providerChannelId** | **String** | The channel ID you specified while creating the channel | [optional] 
**marketplaceClientId** | **String** | The client_id of your app in Pipedrive marketplace | [optional] 
**pdCompanyId** | **Number** | The ID of the user&#39;s company in Pipedrive | [optional] 
**pdUserId** | **Number** | The ID of the user in Pipedrive | [optional] 
**createdAt** | **Date** | The date and time when your channel was created in the API | [optional] 
**providerType** | **String** | Value of the provider_type sent to this endpoint | [optional] 
**templateSupport** | **Boolean** | Value of the template_support sent to this endpoint | [optional] 



## Enum: ProviderTypeEnum


* `facebook` (value: `"facebook"`)

* `whatsapp` (value: `"whatsapp"`)

* `other` (value: `"other"`)




