# Pipedrive.MeetingsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserProviderLink**](MeetingsApi.md#deleteUserProviderLink) | **DELETE** /meetings/userProviderLinks/{id} | Delete the link between a user and the installed video call integration
[**saveUserProviderLink**](MeetingsApi.md#saveUserProviderLink) | **POST** /meetings/userProviderLinks | Link a user with the installed video call integration



## deleteUserProviderLink

> UserProviderLinkSuccessResponse deleteUserProviderLink(id)

Delete the link between a user and the installed video call integration

A video calling provider must call this endpoint to remove the link between a user and the installed video calling app.

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

let apiInstance = new Pipedrive.MeetingsApi(apiClient);
let id = "id_example"; // String | Unique identifier linking a user to the installed integration
apiInstance.deleteUserProviderLink(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier linking a user to the installed integration | 

### Return type

[**UserProviderLinkSuccessResponse**](UserProviderLinkSuccessResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## saveUserProviderLink

> UserProviderLinkSuccessResponse saveUserProviderLink(opts)

Link a user with the installed video call integration

A video calling provider must call this endpoint after a user has installed the video calling app so that the new user&#39;s information is sent.

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

let apiInstance = new Pipedrive.MeetingsApi(apiClient);
let opts = Pipedrive.UserProviderLinkCreateRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.saveUserProviderLink(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UserProviderLinkCreateRequest** | [**UserProviderLinkCreateRequest**](UserProviderLinkCreateRequest.md)|  | [optional] 

### Return type

[**UserProviderLinkSuccessResponse**](UserProviderLinkSuccessResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

