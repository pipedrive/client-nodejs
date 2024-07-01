# Pipedrive.RecentsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRecents**](RecentsApi.md#getRecents) | **GET** /recents | Get recents



## getRecents

> GetRecents getRecents(sinceTimestamp, opts)

Get recents

Returns data about all recent changes occurred after the given timestamp.

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

let apiInstance = new Pipedrive.RecentsApi(apiClient);
let sinceTimestamp = "sinceTimestamp_example"; // String | The timestamp in UTC. Format: YYYY-MM-DD HH:MM:SS.
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'items': "items_example", // String | Multiple selection of item types to include in the query (optional)
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getRecents(sinceTimestamp, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since_timestamp** | **String**| The timestamp in UTC. Format: YYYY-MM-DD HH:MM:SS. | 
 **items** | **String**| Multiple selection of item types to include in the query (optional) | [optional] 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**GetRecents**](GetRecents.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

