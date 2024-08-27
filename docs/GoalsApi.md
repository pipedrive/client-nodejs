# Pipedrive.GoalsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGoal**](GoalsApi.md#addGoal) | **POST** /goals | Add a new goal
[**deleteGoal**](GoalsApi.md#deleteGoal) | **DELETE** /goals/{id} | Delete existing goal
[**getGoalResult**](GoalsApi.md#getGoalResult) | **GET** /goals/{id}/results | Get result of a goal
[**getGoals**](GoalsApi.md#getGoals) | **GET** /goals/find | Find goals
[**updateGoal**](GoalsApi.md#updateGoal) | **PUT** /goals/{id} | Update existing goal



## addGoal

> UpsertGoalResponse addGoal(opts)

Add a new goal

Adds a new goal. Along with adding a new goal, a report is created to track the progress of your goal.

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

let apiInstance = new Pipedrive.GoalsApi(apiClient);
let opts = Pipedrive.NewGoal.constructFromObject({
  // Properties that you want to update
});
apiInstance.addGoal(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **NewGoal** | [**NewGoal**](NewGoal.md)|  | [optional] 

### Return type

[**UpsertGoalResponse**](UpsertGoalResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteGoal

> DeleteGoalResponse deleteGoal(id)

Delete existing goal

Marks a goal as deleted.

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

let apiInstance = new Pipedrive.GoalsApi(apiClient);
let id = "id_example"; // String | The ID of the goal
apiInstance.deleteGoal(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the goal | 

### Return type

[**DeleteGoalResponse**](DeleteGoalResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGoalResult

> GetGoalResultResponse getGoalResult(id, periodStart, periodEnd)

Get result of a goal

Gets the progress of a goal for the specified period.

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

let apiInstance = new Pipedrive.GoalsApi(apiClient);
let id = "id_example"; // String | The ID of the goal that the results are looked for
let periodStart = new Date("2013-10-20"); // Date | The start date of the period for which to find the goal's progress. Format: YYYY-MM-DD. This date must be the same or after the goal duration start date. 
let periodEnd = new Date("2013-10-20"); // Date | The end date of the period for which to find the goal's progress. Format: YYYY-MM-DD. This date must be the same or before the goal duration end date. 
apiInstance.getGoalResult(id, periodStart, periodEnd).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the goal that the results are looked for | 
 **period.start** | **Date**| The start date of the period for which to find the goal&#39;s progress. Format: YYYY-MM-DD. This date must be the same or after the goal duration start date.  | 
 **period.end** | **Date**| The end date of the period for which to find the goal&#39;s progress. Format: YYYY-MM-DD. This date must be the same or before the goal duration end date.  | 

### Return type

[**GetGoalResultResponse**](GetGoalResultResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGoals

> GetGoalsResponse getGoals(opts)

Find goals

Returns data about goals based on criteria. For searching, append &#x60;{searchField}&#x3D;{searchValue}&#x60; to the URL, where &#x60;searchField&#x60; can be any one of the lowest-level fields in dot-notation (e.g. &#x60;type.params.pipeline_id&#x60;; &#x60;title&#x60;). &#x60;searchValue&#x60; should be the value you are looking for on that field. Additionally, &#x60;is_active&#x3D;&lt;true|false&gt;&#x60; can be provided to search for only active/inactive goals. When providing &#x60;period.start&#x60;, &#x60;period.end&#x60; must also be provided and vice versa.

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

let apiInstance = new Pipedrive.GoalsApi(apiClient);
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'typeName': "typeName_example", // String | The type of the goal. If provided, everyone's goals will be returned.
  'title': "title_example", // String | The title of the goal
  'isActive': true, // Boolean | Whether the goal is active or not
  'assigneeId': 56, // Number | The ID of the user who's goal to fetch. When omitted, only your goals will be returned.
  'assigneeType': "assigneeType_example", // String | The type of the goal's assignee. If provided, everyone's goals will be returned.
  'expectedOutcomeTarget': 3.4, // Number | The numeric value of the outcome. If provided, everyone's goals will be returned.
  'expectedOutcomeTrackingMetric': "expectedOutcomeTrackingMetric_example", // String | The tracking metric of the expected outcome of the goal. If provided, everyone's goals will be returned.
  'expectedOutcomeCurrencyId': 56, // Number | The numeric ID of the goal's currency. Only applicable to goals with `expected_outcome.tracking_metric` with value `sum`. If provided, everyone's goals will be returned.
  'typeParamsPipelineId': [null], // [Number] | An array of pipeline IDs or `null` for all pipelines. If provided, everyone's goals will be returned.
  'typeParamsStageId': 56, // Number | The ID of the stage. Applicable to only `deals_progressed` type of goals. If provided, everyone's goals will be returned.
  'typeParamsActivityTypeId': [null], // [Number] | An array of IDs or `null` for all activity types. Only applicable for `activities_completed` and/or `activities_added` types of goals. If provided, everyone's goals will be returned.
  'periodStart': new Date("2013-10-20"), // Date | The start date of the period for which to find goals. Date in format of YYYY-MM-DD. When `period.start` is provided, `period.end` must be provided too.
  'periodEnd': new Date("2013-10-20") // Date | The end date of the period for which to find goals. Date in format of YYYY-MM-DD.
};
apiInstance.getGoals(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type.name** | **String**| The type of the goal. If provided, everyone&#39;s goals will be returned. | [optional] 
 **title** | **String**| The title of the goal | [optional] 
 **is_active** | **Boolean**| Whether the goal is active or not | [optional] [default to true]
 **assignee.id** | **Number**| The ID of the user who&#39;s goal to fetch. When omitted, only your goals will be returned. | [optional] 
 **assignee.type** | **String**| The type of the goal&#39;s assignee. If provided, everyone&#39;s goals will be returned. | [optional] 
 **expected_outcome.target** | **Number**| The numeric value of the outcome. If provided, everyone&#39;s goals will be returned. | [optional] 
 **expected_outcome.tracking_metric** | **String**| The tracking metric of the expected outcome of the goal. If provided, everyone&#39;s goals will be returned. | [optional] 
 **expected_outcome.currency_id** | **Number**| The numeric ID of the goal&#39;s currency. Only applicable to goals with &#x60;expected_outcome.tracking_metric&#x60; with value &#x60;sum&#x60;. If provided, everyone&#39;s goals will be returned. | [optional] 
 **type.params.pipeline_id** | [**[Number]**](Number.md)| An array of pipeline IDs or &#x60;null&#x60; for all pipelines. If provided, everyone&#39;s goals will be returned. | [optional] 
 **type.params.stage_id** | **Number**| The ID of the stage. Applicable to only &#x60;deals_progressed&#x60; type of goals. If provided, everyone&#39;s goals will be returned. | [optional] 
 **type.params.activity_type_id** | [**[Number]**](Number.md)| An array of IDs or &#x60;null&#x60; for all activity types. Only applicable for &#x60;activities_completed&#x60; and/or &#x60;activities_added&#x60; types of goals. If provided, everyone&#39;s goals will be returned. | [optional] 
 **period.start** | **Date**| The start date of the period for which to find goals. Date in format of YYYY-MM-DD. When &#x60;period.start&#x60; is provided, &#x60;period.end&#x60; must be provided too. | [optional] 
 **period.end** | **Date**| The end date of the period for which to find goals. Date in format of YYYY-MM-DD. | [optional] 

### Return type

[**GetGoalsResponse**](GetGoalsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateGoal

> UpsertGoalResponse updateGoal(id, opts)

Update existing goal

Updates an existing goal.

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

let apiInstance = new Pipedrive.GoalsApi(apiClient);
let id = "id_example"; // String | The ID of the goal
let opts = Pipedrive.BasicGoal.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateGoal(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the goal | 
 **BasicGoal** | [**BasicGoal**](BasicGoal.md)|  | [optional] 

### Return type

[**UpsertGoalResponse**](UpsertGoalResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

