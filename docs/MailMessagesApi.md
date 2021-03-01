# Pipedrive.MailMessagesApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMailMessage**](MailMessagesApi.md#getMailMessage) | **GET** /mailbox/mailMessages/{id} | Get one mail message



## getMailMessage

> MailMessage getMailMessage(id, opts)

Get one mail message

Returns data about specific mail message.

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

let apiInstance = new Pipedrive.MailMessagesApi();
let id = 56; // Number | ID of the mail message to fetch.
let opts = {
  'includeBody': new Pipedrive.NumberBooleanDefault0() // NumberBooleanDefault0 | Whether to include full message body or not. 0 = Don't include, 1 = Include
};
apiInstance.getMailMessage(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the mail message to fetch. | 
 **includeBody** | [**NumberBooleanDefault0**](.md)| Whether to include full message body or not. 0 &#x3D; Don&#39;t include, 1 &#x3D; Include | [optional] 

### Return type

[**MailMessage**](MailMessage.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

