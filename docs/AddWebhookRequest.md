# Pipedrive.AddWebhookRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_url** | **String** | A full, valid, publicly accessible URL which determines where to send the notifications. Please note that you cannot use Pipedrive API endpoints as the &#x60;subscription_url&#x60; and the chosen URL must not redirect to another link. | 
**event_action** | **String** | The type of action to receive notifications about. Wildcard will match all supported actions. | 
**event_object** | **String** | The type of object to receive notifications about. Wildcard will match all supported objects. | 
**user_id** | **Number** | The ID of the user that this webhook will be authorized with. You have the option to use a different user&#39;s &#x60;user_id&#x60;. If it is not set, the current user&#39;s &#x60;user_id&#x60; will be used. As each webhook event is checked against a user&#39;s permissions, the webhook will only be sent if the user has access to the specified object(s). If you want to receive notifications for all events, please use a top-level admin user’s &#x60;user_id&#x60;. | [optional] 
**http_auth_user** | **String** | The HTTP basic auth username of the subscription URL endpoint (if required) | [optional] 
**http_auth_password** | **String** | The HTTP basic auth password of the subscription URL endpoint (if required) | [optional] 
**version** | **String** | The webhook&#39;s version | [optional] [default to &#39;1.0&#39;]



## Enum: EventActionEnum


* `added` (value: `"added"`)

* `updated` (value: `"updated"`)

* `merged` (value: `"merged"`)

* `deleted` (value: `"deleted"`)

* `STAR` (value: `"*"`)





## Enum: EventObjectEnum


* `activity` (value: `"activity"`)

* `activityType` (value: `"activityType"`)

* `deal` (value: `"deal"`)

* `note` (value: `"note"`)

* `organization` (value: `"organization"`)

* `person` (value: `"person"`)

* `pipeline` (value: `"pipeline"`)

* `product` (value: `"product"`)

* `stage` (value: `"stage"`)

* `user` (value: `"user"`)

* `STAR` (value: `"*"`)





## Enum: VersionEnum


* `1.0` (value: `"1.0"`)

* `2.0` (value: `"2.0"`)




