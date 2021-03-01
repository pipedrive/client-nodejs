# Pipedrive.BaseWebhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the Webhook | [optional] 
**companyId** | **Number** | The ID of the Company related to the Webhook | [optional] 
**ownerId** | **Number** | The ID of the User who owns the Webhook | [optional] 
**userId** | **Number** | The ID of the User related to the Webhook | [optional] 
**eventAction** | **String** | The Webhook action | [optional] 
**eventObject** | **String** | The Webhook object | [optional] 
**subscriptionUrl** | **String** | The subscription URL of the Webhook | [optional] 
**isActive** | [**NumberBooleanDefault1**](NumberBooleanDefault1.md) | The Webhook&#39;s status | [optional] 
**addTime** | **Date** | The date when the Webhook was added | [optional] 
**removeTime** | **Date** | The date when the Webhook was removed (if removed) | [optional] 
**type** | **String** | The type of the Webhook | [optional] 
**httpAuthUser** | **String** | The username of the subscription_url of the Webhook | [optional] 
**httpAuthPassword** | **String** | The password of the subscription_url of the Webhook | [optional] 
**additionalData** | **Object** | Any additional data related to the Webhook | [optional] 
**removeReason** | **String** | The removal reason of the Webhook (if removed) | [optional] 
**lastDeliveryTime** | **Date** | The last delivery time of the Webhook | [optional] 
**lastHttpStatus** | **Number** | The last delivery HTTP status of the Webhook | [optional] 
**adminId** | **Number** | The ID of the admin of the Webhook | [optional] 



## Enum: TypeEnum


* `general` (value: `"general"`)

* `app` (value: `"app"`)




