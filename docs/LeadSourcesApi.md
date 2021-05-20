# Pipedrive.LeadSourcesApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLeadSources**](LeadSourcesApi.md#getLeadSources) | **GET** /leadSources | Get all lead sources



## getLeadSources

> GetLeadSourcesResponse200 getLeadSources()

Get all lead sources

Returns all Lead Sources. Please note that the list of Lead Sources is fixed, it cannot be modified. All Leads created through the Public Pipedrive API will have a Lead Source &#x60;API&#x60; assigned. 

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

let apiInstance = new Pipedrive.LeadSourcesApi();
apiInstance.getLeadSources().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetLeadSourcesResponse200**](GetLeadSourcesResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

