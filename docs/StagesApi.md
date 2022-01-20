# Pipedrive.StagesApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addStage**](StagesApi.md#addStage) | **POST** /stages | Add a new stage
[**deleteStage**](StagesApi.md#deleteStage) | **DELETE** /stages/{id} | Delete a stage
[**deleteStages**](StagesApi.md#deleteStages) | **DELETE** /stages | Delete multiple stages in bulk
[**getStage**](StagesApi.md#getStage) | **GET** /stages/{id} | Get one stage
[**getStageDeals**](StagesApi.md#getStageDeals) | **GET** /stages/{id}/deals | Get deals in a stage
[**getStages**](StagesApi.md#getStages) | **GET** /stages | Get all stages
[**updateStage**](StagesApi.md#updateStage) | **PUT** /stages/{id} | Update stage details



## addStage

> GetAddUpdateStage addStage(opts)

Add a new stage

Adds a new stage, returns the ID upon success.

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

let apiInstance = new Pipedrive.StagesApi();
let opts = Pipedrive.Stage.constructFromObject({
  // Properties that you want to update
});
apiInstance.addStage(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stage** | [**Stage**](Stage.md)|  | [optional] 

### Return type

[**GetAddUpdateStage**](GetAddUpdateStage.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteStage

> DeleteStageResponse200 deleteStage(id)

Delete a stage

Marks a stage as deleted.

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

let apiInstance = new Pipedrive.StagesApi();
let id = 56; // Number | The ID of the stage
apiInstance.deleteStage(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the stage | 

### Return type

[**DeleteStageResponse200**](DeleteStageResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteStages

> DeleteStagesResponse200 deleteStages(ids)

Delete multiple stages in bulk

Marks multiple stages as deleted.

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

let apiInstance = new Pipedrive.StagesApi();
let ids = "ids_example"; // String | The comma-separated stage IDs to delete
apiInstance.deleteStages(ids).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **String**| The comma-separated stage IDs to delete | 

### Return type

[**DeleteStagesResponse200**](DeleteStagesResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStage

> GetOneStage getStage(id)

Get one stage

Returns data about a specific stage.

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

let apiInstance = new Pipedrive.StagesApi();
let id = 56; // Number | The ID of the stage
apiInstance.getStage(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the stage | 

### Return type

[**GetOneStage**](GetOneStage.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStageDeals

> GetStageDeals getStageDeals(id, opts)

Get deals in a stage

Lists deals in a specific stage.

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

let apiInstance = new Pipedrive.StagesApi();
let id = 56; // Number | The ID of the stage
let opts = {
  'filterId': 56, // Number | If supplied, only deals matching the given filter will be returned
  'userId': 56, // Number | If supplied, `filter_id` will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned.
  'everyone': new Pipedrive.NumberBoolean(), // NumberBoolean | If supplied, `filter_id` and `user_id` will not be considered – instead, deals owned by everyone will be returned
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getStageDeals(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the stage | 
 **filterId** | **Number**| If supplied, only deals matching the given filter will be returned | [optional] 
 **userId** | **Number**| If supplied, &#x60;filter_id&#x60; will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned. | [optional] 
 **everyone** | [**NumberBoolean**](.md)| If supplied, &#x60;filter_id&#x60; and &#x60;user_id&#x60; will not be considered – instead, deals owned by everyone will be returned | [optional] 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**GetStageDeals**](GetStageDeals.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStages

> GetStages getStages(opts)

Get all stages

Returns data about all stages.

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

let apiInstance = new Pipedrive.StagesApi();
let opts = {
  'pipelineId': 56 // Number | The ID of the pipeline to fetch stages for. If omitted, stages for all pipelines will be fetched.
};
apiInstance.getStages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pipelineId** | **Number**| The ID of the pipeline to fetch stages for. If omitted, stages for all pipelines will be fetched. | [optional] 

### Return type

[**GetStages**](GetStages.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateStage

> GetAddUpdateStage updateStage(id, opts)

Update stage details

Updates the properties of a stage.

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

let apiInstance = new Pipedrive.StagesApi();
let id = 56; // Number | The ID of the stage
let opts = Pipedrive.UpdateStageRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateStage(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the stage | 
 **updateStageRequest** | [**UpdateStageRequest**](UpdateStageRequest.md)|  | [optional] 

### Return type

[**GetAddUpdateStage**](GetAddUpdateStage.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

