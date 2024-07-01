# Pipedrive.CallLogsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCallLog**](CallLogsApi.md#addCallLog) | **POST** /callLogs | Add a call log
[**addCallLogAudioFile**](CallLogsApi.md#addCallLogAudioFile) | **POST** /callLogs/{id}/recordings | Attach an audio file to the call log
[**deleteCallLog**](CallLogsApi.md#deleteCallLog) | **DELETE** /callLogs/{id} | Delete a call log
[**getCallLog**](CallLogsApi.md#getCallLog) | **GET** /callLogs/{id} | Get details of a call log
[**getUserCallLogs**](CallLogsApi.md#getUserCallLogs) | **GET** /callLogs | Get all call logs assigned to a particular user



## addCallLog

> CallLogResponse200 addCallLog(opts)

Add a call log

Adds a new call log.

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

let apiInstance = new Pipedrive.CallLogsApi(apiClient);
let opts = Pipedrive.CallLogObject.constructFromObject({
  // Properties that you want to update
});
apiInstance.addCallLog(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CallLogObject** | [**CallLogObject**](CallLogObject.md)|  | [optional] 

### Return type

[**CallLogResponse200**](CallLogResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addCallLogAudioFile

> BaseResponse addCallLogAudioFile(id, file)

Attach an audio file to the call log

Adds an audio recording to the call log. That audio can be played by those who have access to the call log object.

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

let apiInstance = new Pipedrive.CallLogsApi(apiClient);
let id = 3cde3b05035cae14dcfc172bd8000d08; // String | The ID received when you create the call log
let file = "/path/to/file"; // File | Audio file supported by the HTML5 specification
apiInstance.addCallLogAudioFile(id, file).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID received when you create the call log | 
 **file** | **File**| Audio file supported by the HTML5 specification | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## deleteCallLog

> BaseResponse deleteCallLog(id)

Delete a call log

Deletes a call log. If there is an audio recording attached to it, it will also be deleted. The related activity will not be removed by this request. If you want to remove the related activities, please use the endpoint which is specific for activities.

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

let apiInstance = new Pipedrive.CallLogsApi(apiClient);
let id = 3cde3b05035cae14dcfc172bd8000d08; // String | The ID received when you create the call log
apiInstance.deleteCallLog(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID received when you create the call log | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCallLog

> CallLogResponse200 getCallLog(id)

Get details of a call log

Returns details of a specific call log.

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

let apiInstance = new Pipedrive.CallLogsApi(apiClient);
let id = 3cde3b05035cae14dcfc172bd8000d08; // String | The ID received when you create the call log
apiInstance.getCallLog(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID received when you create the call log | 

### Return type

[**CallLogResponse200**](CallLogResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserCallLogs

> CallLogsResponse getUserCallLogs(opts)

Get all call logs assigned to a particular user

Returns all call logs assigned to a particular user.

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

let apiInstance = new Pipedrive.CallLogsApi(apiClient);
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | For pagination, the limit of entries to be returned. The upper limit is 50.
};
apiInstance.getUserCallLogs(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| For pagination, the limit of entries to be returned. The upper limit is 50. | [optional] 

### Return type

[**CallLogsResponse**](CallLogsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

