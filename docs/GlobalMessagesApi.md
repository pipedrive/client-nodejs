# Pipedrive.GlobalMessagesApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteGlobalMessage**](GlobalMessagesApi.md#deleteGlobalMessage) | **DELETE** /globalMessages/{id} | Dismiss a global message
[**getGlobalMessages**](GlobalMessagesApi.md#getGlobalMessages) | **GET** /globalMessages | Get global messages



## deleteGlobalMessage

> GlobalMessageDelete deleteGlobalMessage(id)

Dismiss a global message

Removes a global message from being shown if the message is dismissible.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.GlobalMessagesApi();
let id = 56; // Number | The ID of the global message to be dismissed
apiInstance.deleteGlobalMessage(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the global message to be dismissed | 

### Return type

[**GlobalMessageDelete**](GlobalMessageDelete.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGlobalMessages

> GlobalMessageGet getGlobalMessages(opts)

Get global messages

Returns data about the global messages to display for the authorized user.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.GlobalMessagesApi();
let opts = {
  'limit': 1 // Number | The number of messages to get from 1 to 100. The message number 1 is returned by default.
};
apiInstance.getGlobalMessages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The number of messages to get from 1 to 100. The message number 1 is returned by default. | [optional] [default to 1]

### Return type

[**GlobalMessageGet**](GlobalMessageGet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

