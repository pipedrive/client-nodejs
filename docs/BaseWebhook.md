# Pipedrive.BaseWebhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the Webhook | [optional] 
**company_id** | **Number** | The ID of the company related to the Webhook | [optional] 
**owner_id** | **Number** | The ID of the user who owns the Webhook | [optional] 
**user_id** | **Number** | The ID of the user related to the Webhook | [optional] 
**event_action** | **String** | The Webhook action | [optional] 
**event_object** | **String** | The Webhook object | [optional] 
**subscription_url** | **String** | The subscription URL of the Webhook | [optional] 
**is_active** | [**NumberBooleanDefault1**](NumberBooleanDefault1.md) | The Webhook&#39;s status | [optional] 
**add_time** | **Date** | The date when the Webhook was added | [optional] 
**remove_time** | **Date** | The date when the Webhook was removed (if removed) | [optional] 
**type** | **String** | The type of the Webhook | [optional] 
**http_auth_user** | **String** | The username of the &#x60;subscription_url&#x60; of the Webhook | [optional] 
**http_auth_password** | **String** | The password of the &#x60;subscription_url&#x60; of the Webhook | [optional] 
**additional_data** | **Object** | Any additional data related to the Webhook | [optional] 
**remove_reason** | **String** | The removal reason of the Webhook (if removed) | [optional] 
**last_delivery_time** | **Date** | The last delivery time of the Webhook | [optional] 
**last_http_status** | **Number** | The last delivery HTTP status of the Webhook | [optional] 
**admin_id** | **Number** | The ID of the admin of the Webhook | [optional] 



## Enum: TypeEnum


* `general` (value: `"general"`)

* `app` (value: `"app"`)




