# Pipedrive.WebhooksApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWebhook**](WebhooksApi.md#addWebhook) | **POST** /webhooks | Create a new webhook
[**deleteWebhook**](WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks/{id} | Delete existing webhook
[**getWebhooks**](WebhooksApi.md#getWebhooks) | **GET** /webhooks | Get all webhooks



## addWebhook

> Webhook addWebhook(subscriptionUrl, eventAction, eventObject, opts)

Create a new webhook

Creates a new webhook and returns its details. Note that specifying an event which triggers the webhook combines 2 parameters - &#39;event_action&#39; and &#39;event_object&#39;. E.g., use &#39;\\*.\\*&#39; for getting notifications about all events, &#39;added.deal&#39; for any newly added deals, &#39;deleted.persons&#39; for any deleted persons, etc. See &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/guide-for-webhooks?ref&#x3D;api_reference\&quot;&gt;https://pipedrive.readme.io/docs/guide-for-webhooks&lt;/a&gt; for more details.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Pipedrive.WebhooksApi();
let subscriptionUrl = "subscriptionUrl_example"; // String | A full, valid, publicly accessible URL. Determines where to send the notifications. Please note that you cannot use Pipedrive API endpoints as the subscription_url.
let eventAction = "eventAction_example"; // String | Type of action to receive notifications about. Wildcard will match all supported actions.
let eventObject = "eventObject_example"; // String | Type of object to receive notifications about. Wildcard will match all supported objects.
let opts = {
  'userId': 56, // Number | The ID of the user this webhook will be authorized with. If not set, current authorized user will be used. Note that this does not filter only certain user's events — rather, this specifies the user's permissions under which each event is checked. Events about objects the selected user is not entitled to access are not sent. If you want to receive notifications for all events, a top-level admin user should be used.
  'httpAuthUser': "httpAuthUser_example", // String | HTTP basic auth username of the subscription URL endpoint (if required).
  'httpAuthPassword': "httpAuthPassword_example" // String | HTTP basic auth password of the subscription URL endpoint (if required).
};
apiInstance.addWebhook(subscriptionUrl, eventAction, eventObject, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionUrl** | **String**| A full, valid, publicly accessible URL. Determines where to send the notifications. Please note that you cannot use Pipedrive API endpoints as the subscription_url. | 
 **eventAction** | **String**| Type of action to receive notifications about. Wildcard will match all supported actions. | 
 **eventObject** | **String**| Type of object to receive notifications about. Wildcard will match all supported objects. | 
 **userId** | **Number**| The ID of the user this webhook will be authorized with. If not set, current authorized user will be used. Note that this does not filter only certain user&#39;s events — rather, this specifies the user&#39;s permissions under which each event is checked. Events about objects the selected user is not entitled to access are not sent. If you want to receive notifications for all events, a top-level admin user should be used. | [optional] 
 **httpAuthUser** | **String**| HTTP basic auth username of the subscription URL endpoint (if required). | [optional] 
 **httpAuthPassword** | **String**| HTTP basic auth password of the subscription URL endpoint (if required). | [optional] 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteWebhook

> BaseResponseWithStatus deleteWebhook(id)

Delete existing webhook

Deletes the specified webhook.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Pipedrive.WebhooksApi();
let id = 56; // Number | The ID of the webhook to delete
apiInstance.deleteWebhook(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the webhook to delete | 

### Return type

[**BaseResponseWithStatus**](BaseResponseWithStatus.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhooks

> Webhooks getWebhooks()

Get all webhooks

Returns data about all webhooks of a company.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Pipedrive.WebhooksApi();
apiInstance.getWebhooks().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Webhooks**](Webhooks.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

