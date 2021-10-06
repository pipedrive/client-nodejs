# Pipedrive.LeadLabelsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLeadLabel**](LeadLabelsApi.md#addLeadLabel) | **POST** /leadLabels | Add a lead label
[**deleteLeadLabel**](LeadLabelsApi.md#deleteLeadLabel) | **DELETE** /leadLabels/{id} | Delete a lead label
[**getLeadLabels**](LeadLabelsApi.md#getLeadLabels) | **GET** /leadLabels | Get all lead labels
[**updateLeadLabel**](LeadLabelsApi.md#updateLeadLabel) | **PATCH** /leadLabels/{id} | Update a lead label



## addLeadLabel

> AddOrUpdateLeadLabelResponse200 addLeadLabel(opts)

Add a lead label

Creates a Lead Label

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

let apiInstance = new Pipedrive.LeadLabelsApi();
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
 **addLeadLabelRequest** | [**AddLeadLabelRequest**](AddLeadLabelRequest.md)|  | [optional] 

### Return type

[**AddOrUpdateLeadLabelResponse200**](AddOrUpdateLeadLabelResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLeadLabel

> LeadIdResponse200 deleteLeadLabel(id)

Delete a lead label

Deletes a specific Lead Label

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

let apiInstance = new Pipedrive.LeadLabelsApi();
let id = null; // String | The ID of the Lead Label
apiInstance.deleteLeadLabel(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| The ID of the Lead Label | 

### Return type

[**LeadIdResponse200**](LeadIdResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeadLabels

> GetLeadLabelsResponse200 getLeadLabels()

Get all lead labels

Returns details of all Lead Labels. This endpoint does not support pagination and all Labels are always returned.

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

let apiInstance = new Pipedrive.LeadLabelsApi();
apiInstance.getLeadLabels().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetLeadLabelsResponse200**](GetLeadLabelsResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLeadLabel

> AddOrUpdateLeadLabelResponse200 updateLeadLabel(id, opts)

Update a lead label

Updates one or more properties of a Lead Label. Only properties included in the request will be updated. 

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

let apiInstance = new Pipedrive.LeadLabelsApi();
let id = null; // String | The ID of the Lead Label
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
 **id** | [**String**](.md)| The ID of the Lead Label | 
 **updateLeadLabelRequest** | [**UpdateLeadLabelRequest**](UpdateLeadLabelRequest.md)|  | [optional] 

### Return type

[**AddOrUpdateLeadLabelResponse200**](AddOrUpdateLeadLabelResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

