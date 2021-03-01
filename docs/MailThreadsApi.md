# Pipedrive.MailThreadsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMailThread**](MailThreadsApi.md#deleteMailThread) | **DELETE** /mailbox/mailThreads/{id} | Delete mail thread
[**getMailThread**](MailThreadsApi.md#getMailThread) | **GET** /mailbox/mailThreads/{id} | Get one mail thread
[**getMailThreadMessages**](MailThreadsApi.md#getMailThreadMessages) | **GET** /mailbox/mailThreads/{id}/mailMessages | Get all mail messages of mail thread
[**getMailThreads**](MailThreadsApi.md#getMailThreads) | **GET** /mailbox/mailThreads | Get mail threads
[**updateMailThreadDetails**](MailThreadsApi.md#updateMailThreadDetails) | **PUT** /mailbox/mailThreads/{id} | Update mail thread details



## deleteMailThread

> MailThreadDelete deleteMailThread(id)

Delete mail thread

Marks mail thread as deleted.

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

let apiInstance = new Pipedrive.MailThreadsApi();
let id = 56; // Number | ID of the mail thread
apiInstance.deleteMailThread(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the mail thread | 

### Return type

[**MailThreadDelete**](MailThreadDelete.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMailThread

> MailThreadOne getMailThread(id)

Get one mail thread

Returns specific mail thread.

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

let apiInstance = new Pipedrive.MailThreadsApi();
let id = 56; // Number | ID of the mail thread
apiInstance.getMailThread(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the mail thread | 

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

Get mail messages inside specified mail thread.

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

let apiInstance = new Pipedrive.MailThreadsApi();
let id = 56; // Number | ID of the mail thread
apiInstance.getMailThreadMessages(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the mail thread | 

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

Returns mail threads in specified folder ordered by most recent message within.

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

let apiInstance = new Pipedrive.MailThreadsApi();
let folder = "'inbox'"; // String | Type of folder to fetch.
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
 **folder** | **String**| Type of folder to fetch. | [default to &#39;inbox&#39;]
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
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Pipedrive.MailThreadsApi();
let id = 56; // Number | ID of the mail thread
let opts = {
  'dealId': 56, // Number | The ID of the deal this thread is associated with
  'leadId': null, // String | The ID of the lead this thread is associated with
  'sharedFlag': new Pipedrive.NumberBoolean(), // NumberBoolean | Whether this thread is shared with other users in your company
  'readFlag': new Pipedrive.NumberBoolean(), // NumberBoolean | Whether this thread read or unread
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
 **id** | **Number**| ID of the mail thread | 
 **dealId** | **Number**| The ID of the deal this thread is associated with | [optional] 
 **leadId** | [**String**](String.md)| The ID of the lead this thread is associated with | [optional] 
 **sharedFlag** | [**NumberBoolean**](NumberBoolean.md)| Whether this thread is shared with other users in your company | [optional] 
 **readFlag** | [**NumberBoolean**](NumberBoolean.md)| Whether this thread read or unread | [optional] 
 **archivedFlag** | [**NumberBoolean**](NumberBoolean.md)| Whether this thread is archived or not. You can only archive threads that belong to Inbox folder. Archived threads will disappear from Inbox. | [optional] 

### Return type

[**MailThreadPut**](MailThreadPut.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

