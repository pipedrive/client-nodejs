# Pipedrive.WebhooksApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWebhook**](WebhooksApi.md#addWebhook) | **POST** /webhooks | Create a new Webhook
[**deleteWebhook**](WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks/{id} | Delete existing Webhook
[**getWebhooks**](WebhooksApi.md#getWebhooks) | **GET** /webhooks | Get all Webhooks



## addWebhook

> Webhook addWebhook(opts)

Create a new Webhook

Creates a new Webhook and returns its details. Note that specifying an event which triggers the Webhook combines 2 parameters - &#x60;event_action&#x60; and &#x60;event_object&#x60;. E.g., use &#x60;*.*&#x60; for getting notifications about all events, &#x60;added.deal&#x60; for any newly added deals, &#x60;deleted.persons&#x60; for any deleted persons, etc. See &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/guide-for-webhooks?ref&#x3D;api_reference\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;the guide for Webhooks&lt;/a&gt; for more details.

### Example

```javascript
import Pipedrive from 'pipedrive';
let apiClient = new Pipedrive.ApiClient();
// Configure API key authorization: api_key
let api_key = apiClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = apiClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Pipedrive.WebhooksApi(apiClient);
let opts = Pipedrive.AddWebhookRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.addWebhook(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AddWebhookRequest** | [**AddWebhookRequest**](AddWebhookRequest.md)|  | [optional] 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWebhook

> BaseResponseWithStatus deleteWebhook(id)

Delete existing Webhook

Deletes the specified Webhook.

### Example

```javascript
import Pipedrive from 'pipedrive';
let apiClient = new Pipedrive.ApiClient();
// Configure API key authorization: api_key
let api_key = apiClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = apiClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Pipedrive.WebhooksApi(apiClient);
let id = 56; // Number | The ID of the Webhook to delete
apiInstance.deleteWebhook(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Webhook to delete | 

### Return type

[**BaseResponseWithStatus**](BaseResponseWithStatus.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhooks

> Webhooks getWebhooks()

Get all Webhooks

Returns data about all the Webhooks of a company.

### Example

```javascript
import Pipedrive from 'pipedrive';
let apiClient = new Pipedrive.ApiClient();
// Configure API key authorization: api_key
let api_key = apiClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = apiClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Pipedrive.WebhooksApi(apiClient);
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

