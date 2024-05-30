# Pipedrive.MailboxApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMailThread**](MailboxApi.md#deleteMailThread) | **DELETE** /mailbox/mailThreads/{id} | Delete mail thread
[**getMailMessage**](MailboxApi.md#getMailMessage) | **GET** /mailbox/mailMessages/{id} | Get one mail message
[**getMailThread**](MailboxApi.md#getMailThread) | **GET** /mailbox/mailThreads/{id} | Get one mail thread
[**getMailThreadMessages**](MailboxApi.md#getMailThreadMessages) | **GET** /mailbox/mailThreads/{id}/mailMessages | Get all mail messages of mail thread
[**getMailThreads**](MailboxApi.md#getMailThreads) | **GET** /mailbox/mailThreads | Get mail threads
[**updateMailThreadDetails**](MailboxApi.md#updateMailThreadDetails) | **PUT** /mailbox/mailThreads/{id} | Update mail thread details



## deleteMailThread

> MailThreadDelete deleteMailThread(id)

Delete mail thread

Marks a mail thread as deleted.

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

let apiInstance = new Pipedrive.MailboxApi(apiClient);
let id = 56; // Number | The ID of the mail thread
apiInstance.deleteMailThread(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the mail thread | 

### Return type

[**MailThreadDelete**](MailThreadDelete.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMailMessage

> MailMessage getMailMessage(id, opts)

Get one mail message

Returns data about a specific mail message.

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

let apiInstance = new Pipedrive.MailboxApi(apiClient);
let id = 56; // Number | The ID of the mail message to fetch
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'includeBody': new Pipedrive.NumberBooleanDefault0() // NumberBooleanDefault0 | Whether to include the full message body or not. `0` = Don't include, `1` = Include.
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
 **id** | **Number**| The ID of the mail message to fetch | 
 **include_body** | [**NumberBooleanDefault0**](.md)| Whether to include the full message body or not. &#x60;0&#x60; &#x3D; Don&#39;t include, &#x60;1&#x60; &#x3D; Include. | [optional] 

### Return type

[**MailMessage**](MailMessage.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMailThread

> MailThreadOne getMailThread(id)

Get one mail thread

Returns a specific mail thread.

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

let apiInstance = new Pipedrive.MailboxApi(apiClient);
let id = 56; // Number | The ID of the mail thread
apiInstance.getMailThread(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the mail thread | 

### Return type

[**MailThreadOne**](MailThreadOne.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMailThreadMessages

> MailThreadMessages getMailThreadMessages(id)

Get all mail messages of mail thread

Returns all the mail messages inside a specified mail thread.

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

let apiInstance = new Pipedrive.MailboxApi(apiClient);
let id = 56; // Number | The ID of the mail thread
apiInstance.getMailThreadMessages(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the mail thread | 

### Return type

[**MailThreadMessages**](MailThreadMessages.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMailThreads

> MailThread getMailThreads(folder, opts)

Get mail threads

Returns mail threads in a specified folder ordered by the most recent message within.

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

let apiInstance = new Pipedrive.MailboxApi(apiClient);
let folder = "'inbox'"; // String | The type of folder to fetch
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getMailThreads(folder, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder** | **String**| The type of folder to fetch | [default to &#39;inbox&#39;]
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**MailThread**](MailThread.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMailThreadDetails

> MailThreadPut updateMailThreadDetails(id, opts)

Update mail thread details

Updates the properties of a mail thread.

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

let apiInstance = new Pipedrive.MailboxApi(apiClient);
let id = 56; // Number | The ID of the mail thread
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'dealId': 56, // Number | The ID of the deal this thread is associated with
  'leadId': "leadId_example", // String | The ID of the lead this thread is associated with
  'sharedFlag': new Pipedrive.NumberBoolean(), // NumberBoolean | Whether this thread is shared with other users in your company
  'readFlag': new Pipedrive.NumberBoolean(), // NumberBoolean | Whether this thread is read or unread
  'archivedFlag': new Pipedrive.NumberBoolean() // NumberBoolean | Whether this thread is archived or not. You can only archive threads that belong to Inbox folder. Archived threads will disappear from Inbox.
};
apiInstance.updateMailThreadDetails(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the mail thread | 
 **deal_id** | **Number**| The ID of the deal this thread is associated with | [optional] 
 **lead_id** | **String**| The ID of the lead this thread is associated with | [optional] 
 **shared_flag** | [**NumberBoolean**](NumberBoolean.md)| Whether this thread is shared with other users in your company | [optional] 
 **read_flag** | [**NumberBoolean**](NumberBoolean.md)| Whether this thread is read or unread | [optional] 
 **archived_flag** | [**NumberBoolean**](NumberBoolean.md)| Whether this thread is archived or not. You can only archive threads that belong to Inbox folder. Archived threads will disappear from Inbox. | [optional] 

### Return type

[**MailThreadPut**](MailThreadPut.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

