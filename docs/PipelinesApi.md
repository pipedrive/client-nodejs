# Pipedrive.PipelinesApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPipeline**](PipelinesApi.md#addPipeline) | **POST** /pipelines | Add a new pipeline
[**deletePipeline**](PipelinesApi.md#deletePipeline) | **DELETE** /pipelines/{id} | Delete a pipeline
[**getPipeline**](PipelinesApi.md#getPipeline) | **GET** /pipelines/{id} | Get one pipeline
[**getPipelineConversionStatistics**](PipelinesApi.md#getPipelineConversionStatistics) | **GET** /pipelines/{id}/conversion_statistics | Get deals conversion rates in pipeline
[**getPipelineDeals**](PipelinesApi.md#getPipelineDeals) | **GET** /pipelines/{id}/deals | Get deals in a pipeline
[**getPipelineMovementStatistics**](PipelinesApi.md#getPipelineMovementStatistics) | **GET** /pipelines/{id}/movement_statistics | Get deals movements in pipeline
[**getPipelines**](PipelinesApi.md#getPipelines) | **GET** /pipelines | Get all pipelines
[**updatePipeline**](PipelinesApi.md#updatePipeline) | **PUT** /pipelines/{id} | Update a pipeline



## addPipeline

> AddNewPipeline addPipeline(opts)

Add a new pipeline

Adds a new pipeline.

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

let apiInstance = new Pipedrive.PipelinesApi(apiClient);
let opts = Pipedrive.Pipeline.constructFromObject({
  // Properties that you want to update
});
apiInstance.addPipeline(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Pipeline** | [**Pipeline**](Pipeline.md)|  | [optional] 

### Return type

[**AddNewPipeline**](AddNewPipeline.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePipeline

> DeletePipelineResponse deletePipeline(id)

Delete a pipeline

Marks a pipeline as deleted.

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

let apiInstance = new Pipedrive.PipelinesApi(apiClient);
let id = 56; // Number | The ID of the pipeline
apiInstance.deletePipeline(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the pipeline | 

### Return type

[**DeletePipelineResponse**](DeletePipelineResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPipeline

> GetOnePipeline getPipeline(id, opts)

Get one pipeline

Returns data about a specific pipeline. Also returns the summary of the deals in this pipeline across its stages.

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

let apiInstance = new Pipedrive.PipelinesApi(apiClient);
let id = 56; // Number | The ID of the pipeline
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'totalsConvertCurrency': "totalsConvertCurrency_example" // String | The 3-letter currency code of any of the supported currencies. When supplied, `per_stages_converted` is returned in `deals_summary` which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to `default_currency` in which case users default currency is used.
};
apiInstance.getPipeline(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the pipeline | 
 **totals_convert_currency** | **String**| The 3-letter currency code of any of the supported currencies. When supplied, &#x60;per_stages_converted&#x60; is returned in &#x60;deals_summary&#x60; which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to &#x60;default_currency&#x60; in which case users default currency is used. | [optional] 

### Return type

[**GetOnePipeline**](GetOnePipeline.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPipelineConversionStatistics

> GetDealsConversionRatesInPipeline getPipelineConversionStatistics(id, startDate, endDate, opts)

Get deals conversion rates in pipeline

Returns all stage-to-stage conversion and pipeline-to-close rates for the given time period.

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

let apiInstance = new Pipedrive.PipelinesApi(apiClient);
let id = 56; // Number | The ID of the pipeline
let startDate = new Date("2013-10-20"); // Date | The start of the period. Date in format of YYYY-MM-DD.
let endDate = new Date("2013-10-20"); // Date | The end of the period. Date in format of YYYY-MM-DD.
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'userId': 56 // Number | The ID of the user who's pipeline metrics statistics to fetch. If omitted, the authorized user will be used.
};
apiInstance.getPipelineConversionStatistics(id, startDate, endDate, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the pipeline | 
 **start_date** | **Date**| The start of the period. Date in format of YYYY-MM-DD. | 
 **end_date** | **Date**| The end of the period. Date in format of YYYY-MM-DD. | 
 **user_id** | **Number**| The ID of the user who&#39;s pipeline metrics statistics to fetch. If omitted, the authorized user will be used. | [optional] 

### Return type

[**GetDealsConversionRatesInPipeline**](GetDealsConversionRatesInPipeline.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPipelineDeals

> GetStageDeals getPipelineDeals(id, opts)

Get deals in a pipeline

Lists deals in a specific pipeline across all its stages. If no parameters are provided open deals owned by the authorized user will be returned.

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

let apiInstance = new Pipedrive.PipelinesApi(apiClient);
let id = 56; // Number | The ID of the pipeline
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'filterId': 56, // Number | If supplied, only deals matching the given filter will be returned
  'userId': 56, // Number | If supplied, `filter_id` will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned.
  'everyone': new Pipedrive.NumberBoolean(), // NumberBoolean | If supplied, `filter_id` and `user_id` will not be considered – instead, deals owned by everyone will be returned
  'stageId': 56, // Number | If supplied, only deals within the given stage will be returned
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'getSummary': new Pipedrive.NumberBoolean(), // NumberBoolean | Whether to include a summary of the pipeline in the `additional_data` or not
  'totalsConvertCurrency': "totalsConvertCurrency_example" // String | The 3-letter currency code of any of the supported currencies. When supplied, `per_stages_converted` is returned inside `deals_summary` inside `additional_data` which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to `default_currency` in which case users default currency is used. Only works when `get_summary` parameter flag is enabled.
};
apiInstance.getPipelineDeals(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the pipeline | 
 **filter_id** | **Number**| If supplied, only deals matching the given filter will be returned | [optional] 
 **user_id** | **Number**| If supplied, &#x60;filter_id&#x60; will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned. | [optional] 
 **everyone** | [**NumberBoolean**](.md)| If supplied, &#x60;filter_id&#x60; and &#x60;user_id&#x60; will not be considered – instead, deals owned by everyone will be returned | [optional] 
 **stage_id** | **Number**| If supplied, only deals within the given stage will be returned | [optional] 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **get_summary** | [**NumberBoolean**](.md)| Whether to include a summary of the pipeline in the &#x60;additional_data&#x60; or not | [optional] 
 **totals_convert_currency** | **String**| The 3-letter currency code of any of the supported currencies. When supplied, &#x60;per_stages_converted&#x60; is returned inside &#x60;deals_summary&#x60; inside &#x60;additional_data&#x60; which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to &#x60;default_currency&#x60; in which case users default currency is used. Only works when &#x60;get_summary&#x60; parameter flag is enabled. | [optional] 

### Return type

[**GetStageDeals**](GetStageDeals.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPipelineMovementStatistics

> GetDealsMovementsInPipeline getPipelineMovementStatistics(id, startDate, endDate, opts)

Get deals movements in pipeline

Returns statistics for deals movements for the given time period.

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

let apiInstance = new Pipedrive.PipelinesApi(apiClient);
let id = 56; // Number | The ID of the pipeline
let startDate = new Date("2013-10-20"); // Date | The start of the period. Date in format of YYYY-MM-DD.
let endDate = new Date("2013-10-20"); // Date | The end of the period. Date in format of YYYY-MM-DD.
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'userId': 56 // Number | The ID of the user who's pipeline statistics to fetch. If omitted, the authorized user will be used.
};
apiInstance.getPipelineMovementStatistics(id, startDate, endDate, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the pipeline | 
 **start_date** | **Date**| The start of the period. Date in format of YYYY-MM-DD. | 
 **end_date** | **Date**| The end of the period. Date in format of YYYY-MM-DD. | 
 **user_id** | **Number**| The ID of the user who&#39;s pipeline statistics to fetch. If omitted, the authorized user will be used. | [optional] 

### Return type

[**GetDealsMovementsInPipeline**](GetDealsMovementsInPipeline.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPipelines

> GetAllPipelines getPipelines()

Get all pipelines

Returns data about all pipelines.

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

let apiInstance = new Pipedrive.PipelinesApi(apiClient);
apiInstance.getPipelines().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAllPipelines**](GetAllPipelines.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePipeline

> EditPipeline updatePipeline(id, opts)

Update a pipeline

Updates the properties of a pipeline.

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

let apiInstance = new Pipedrive.PipelinesApi(apiClient);
let id = 56; // Number | The ID of the pipeline
let opts = Pipedrive.Pipeline.constructFromObject({
  // Properties that you want to update
});
apiInstance.updatePipeline(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the pipeline | 
 **Pipeline** | [**Pipeline**](Pipeline.md)|  | [optional] 

### Return type

[**EditPipeline**](EditPipeline.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

