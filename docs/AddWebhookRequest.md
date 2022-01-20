# Pipedrive.AddWebhookRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_url** | **String** | A full, valid, publicly accessible URL which determines where to send the notifications. Please note that you cannot use Pipedrive API endpoints as the &#x60;subscription_url&#x60; and the chosen URL must not redirect to another link. | 
**event_action** | **String** | The type of action to receive notifications about. Wildcard will match all supported actions. | 
**event_object** | **String** | The type of object to receive notifications about. Wildcard will match all supported objects. | 
**user_id** | **Number** | The ID of the user this Webhook will be authorized with. If not set, current authorized user will be used. Note that this does not filter only certain user&#39;s events — rather, this specifies the user&#39;s permissions under which each event is checked. Events about objects the selected user is not entitled to access are not sent. If you want to receive notifications for all events, a top-level admin user should be used. | [optional] 
**http_auth_user** | **String** | The HTTP basic auth username of the subscription URL endpoint (if required) | [optional] 
**http_auth_password** | **String** | The HTTP basic auth password of the subscription URL endpoint (if required) | [optional] 



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




