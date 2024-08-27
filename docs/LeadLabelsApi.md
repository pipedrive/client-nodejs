# Pipedrive.LeadLabelsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLeadLabel**](LeadLabelsApi.md#addLeadLabel) | **POST** /leadLabels | Add a lead label
[**deleteLeadLabel**](LeadLabelsApi.md#deleteLeadLabel) | **DELETE** /leadLabels/{id} | Delete a lead label
[**getLeadLabels**](LeadLabelsApi.md#getLeadLabels) | **GET** /leadLabels | Get all lead labels
[**updateLeadLabel**](LeadLabelsApi.md#updateLeadLabel) | **PATCH** /leadLabels/{id} | Update a lead label



## addLeadLabel

> UpsertLeadLabelResponse addLeadLabel(opts)

Add a lead label

Creates a lead label.

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

let apiInstance = new Pipedrive.LeadLabelsApi(apiClient);
let opts = Pipedrive.AddLeadLabelRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.addLeadLabel(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AddLeadLabelRequest** | [**AddLeadLabelRequest**](AddLeadLabelRequest.md)|  | [optional] 

### Return type

[**UpsertLeadLabelResponse**](UpsertLeadLabelResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLeadLabel

> DeleteLeadIdResponse deleteLeadLabel(id)

Delete a lead label

Deletes a specific lead label.

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

let apiInstance = new Pipedrive.LeadLabelsApi(apiClient);
let id = "id_example"; // String | The ID of the lead label
apiInstance.deleteLeadLabel(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the lead label | 

### Return type

[**DeleteLeadIdResponse**](DeleteLeadIdResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeadLabels

> GetLeadLabelsResponse getLeadLabels()

Get all lead labels

Returns details of all lead labels. This endpoint does not support pagination and all labels are always returned.

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

let apiInstance = new Pipedrive.LeadLabelsApi(apiClient);
apiInstance.getLeadLabels().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetLeadLabelsResponse**](GetLeadLabelsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLeadLabel

> UpsertLeadLabelResponse updateLeadLabel(id, opts)

Update a lead label

Updates one or more properties of a lead label. Only properties included in the request will be updated. 

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

let apiInstance = new Pipedrive.LeadLabelsApi(apiClient);
let id = "id_example"; // String | The ID of the lead label
let opts = Pipedrive.UpdateLeadLabelRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateLeadLabel(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the lead label | 
 **UpdateLeadLabelRequest** | [**UpdateLeadLabelRequest**](UpdateLeadLabelRequest.md)|  | [optional] 

### Return type

[**UpsertLeadLabelResponse**](UpsertLeadLabelResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

