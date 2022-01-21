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

> AddOrUpdateGoalResponse200 addGoal(opts)

Add a new goal

Adds a new goal. Along with adding a new goal, a report is created to track the progress of your goal.

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

let apiInstance = new Pipedrive.GoalsApi();
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
 **newGoal** | [**NewGoal**](NewGoal.md)|  | [optional] 

### Return type

[**AddOrUpdateGoalResponse200**](AddOrUpdateGoalResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteGoal

> DeleteGoalResponse200 deleteGoal(id)

Delete existing goal

Marks a goal as deleted.

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

let apiInstance = new Pipedrive.GoalsApi();
let id = "id_example"; // String | The ID of the goal to be deleted
apiInstance.deleteGoal(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the goal to be deleted | 

### Return type

[**DeleteGoalResponse200**](DeleteGoalResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGoalResult

> GetGoalResultResponse200 getGoalResult(id, periodStart, periodEnd)

Get result of a goal

Gets the progress of a goal for the specified period.

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

let apiInstance = new Pipedrive.GoalsApi();
let id = "id_example"; // String | The ID of the goal that the results are looked for
let periodStart = new Date("2013-10-20"); // Date | The start date of the period for which to find progress of a goal. Date in format of YYYY-MM-DD. This date must be the same or after the goal duration start date.
let periodEnd = new Date("2013-10-20"); // Date | The end date of the period for which to find progress of a goal. Date in format of YYYY-MM-DD. This date must be the same or before the goal duration end date.
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
 **periodStart** | **Date**| The start date of the period for which to find progress of a goal. Date in format of YYYY-MM-DD. This date must be the same or after the goal duration start date. | 
 **periodEnd** | **Date**| The end date of the period for which to find progress of a goal. Date in format of YYYY-MM-DD. This date must be the same or before the goal duration end date. | 

### Return type

[**GetGoalResultResponse200**](GetGoalResultResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGoals

> GetGoalsResponse200 getGoals(opts)

Find goals

Returns data about goals based on criteria. For searching, append &#x60;{searchField}&#x3D;{searchValue}&#x60; to the URL, where &#x60;searchField&#x60; can be any one of the lowest-level fields in dot-notation (e.g. &#x60;type.params.pipeline_id&#x60;; &#x60;title&#x60;). &#x60;searchValue&#x60; should be the value you are looking for on that field. Additionally, &#x60;is_active&#x3D;&lt;true|false&gt;&#x60; can be provided to search for only active/inactive goals. When providing &#x60;period.start&#x60;, &#x60;period.end&#x60; must also be provided and vice versa.

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

let apiInstance = new Pipedrive.GoalsApi();
let opts = {
  'typeName': "typeName_example", // String | The type of the goal. If provided, everyone's goals will be returned.
  'title': "title_example", // String | The title of the goal
  'isActive': true, // Boolean | Whether the goal is active or not
  'assigneeId': 56, // Number | The ID of the user who's goal to fetch. When omitted, only your goals will be returned.
  'assigneeType': "assigneeType_example", // String | The type of the goal's assignee. If provided, everyone's goals will be returned.
  'expectedOutcomeTarget': 3.4, // Number | The numeric value of the outcome. If provided, everyone's goals will be returned.
  'expectedOutcomeTrackingMetric': "expectedOutcomeTrackingMetric_example", // String | The tracking metric of the expected outcome of the goal. If provided, everyone's goals will be returned.
  'expectedOutcomeCurrencyId': 56, // Number | The numeric ID of the goal's currency. Only applicable to goals with `expected_outcome.tracking_metric` with value `sum`. If provided, everyone's goals will be returned.
  'typeParamsPipelineId': 56, // Number | The ID of the pipeline or `null` for all pipelines. If provided, everyone's goals will be returned.
  'typeParamsStageId': 56, // Number | The ID of the stage. Applicable to only `deals_progressed` type of goals. If provided, everyone's goals will be returned.
  'typeParamsActivityTypeId': 56, // Number | The ID of the activity type. Applicable to only `activities_completed` or `activities_added` types of goals. If provided, everyone's goals will be returned.
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
 **typeName** | **String**| The type of the goal. If provided, everyone&#39;s goals will be returned. | [optional] 
 **title** | **String**| The title of the goal | [optional] 
 **isActive** | **Boolean**| Whether the goal is active or not | [optional] [default to true]
 **assigneeId** | **Number**| The ID of the user who&#39;s goal to fetch. When omitted, only your goals will be returned. | [optional] 
 **assigneeType** | **String**| The type of the goal&#39;s assignee. If provided, everyone&#39;s goals will be returned. | [optional] 
 **expectedOutcomeTarget** | **Number**| The numeric value of the outcome. If provided, everyone&#39;s goals will be returned. | [optional] 
 **expectedOutcomeTrackingMetric** | **String**| The tracking metric of the expected outcome of the goal. If provided, everyone&#39;s goals will be returned. | [optional] 
 **expectedOutcomeCurrencyId** | **Number**| The numeric ID of the goal&#39;s currency. Only applicable to goals with &#x60;expected_outcome.tracking_metric&#x60; with value &#x60;sum&#x60;. If provided, everyone&#39;s goals will be returned. | [optional] 
 **typeParamsPipelineId** | **Number**| The ID of the pipeline or &#x60;null&#x60; for all pipelines. If provided, everyone&#39;s goals will be returned. | [optional] 
 **typeParamsStageId** | **Number**| The ID of the stage. Applicable to only &#x60;deals_progressed&#x60; type of goals. If provided, everyone&#39;s goals will be returned. | [optional] 
 **typeParamsActivityTypeId** | **Number**| The ID of the activity type. Applicable to only &#x60;activities_completed&#x60; or &#x60;activities_added&#x60; types of goals. If provided, everyone&#39;s goals will be returned. | [optional] 
 **periodStart** | **Date**| The start date of the period for which to find goals. Date in format of YYYY-MM-DD. When &#x60;period.start&#x60; is provided, &#x60;period.end&#x60; must be provided too. | [optional] 
 **periodEnd** | **Date**| The end date of the period for which to find goals. Date in format of YYYY-MM-DD. | [optional] 

### Return type

[**GetGoalsResponse200**](GetGoalsResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateGoal

> AddOrUpdateGoalResponse200 updateGoal(id, opts)

Update existing goal

Updates an existing goal.

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

let apiInstance = new Pipedrive.GoalsApi();
let id = "id_example"; // String | The ID of the goal to be updated
let opts = {
  'title': "title_example", // String | The title of the goal
  'assignee': {key: null}, // Object | Who this goal is assigned to. It requires the following JSON structure: { \\\"id\\\": \\\"1\\\", \\\"type\\\": \\\"person\\\" }. `type` can be either `person`, `company` or `team`. ID of the assignee person, company or team.
  'type': {key: null}, // Object | The type of the goal. It requires the following JSON structure: { \\\"name\\\": \\\"deals_started\\\", \\\"params\\\": { \\\"pipeline_id\\\": 1 } }. Type can be one of: `deals_won`, `deals_progressed`, `activities_completed`, `activities_added`, `deals_started` or `revenue_forecast`. `params` can include `pipeline_id`, `stage_id` or `activity_type_id`. `stage_id` is related to only `deals_progressed` type of goals and `activity_type_id` to `activities_completed` or `activities_added` types of goals. To track goal in all pipelines set `pipeline_id` as `null`.
  'expectedOutcome': {key: null}, // Object | The expected outcome of the goal. Expected outcome can be tracked either by `quantity` or by `sum`. It requires the following JSON structure: { \\\"target\\\": \\\"50\\\", \\\"tracking_metric\\\": \\\"quantity\\\" } or { \\\"target\\\": \\\"50\\\", \\\"tracking_metric\\\": \\\"sum\\\", \\\"currency_id\\\": 1 }. `currency_id` should only be added to `sum` type of goals.
  'duration': {key: null}, // Object | The date when the goal starts and ends. It requires the following JSON structure: { \\\"start\\\": \\\"2019-01-01\\\", \\\"end\\\": \\\"2022-12-31\\\" }. Date in format of YYYY-MM-DD. \\\"end\\\" can be set to `null` for an infinite, open-ended goal.
  'interval': "interval_example" // String | The interval of the goal
};
apiInstance.updateGoal(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the goal to be updated | 
 **title** | **String**| The title of the goal | [optional] 
 **assignee** | [**Object**](Object.md)| Who this goal is assigned to. It requires the following JSON structure: { \\\&quot;id\\\&quot;: \\\&quot;1\\\&quot;, \\\&quot;type\\\&quot;: \\\&quot;person\\\&quot; }. &#x60;type&#x60; can be either &#x60;person&#x60;, &#x60;company&#x60; or &#x60;team&#x60;. ID of the assignee person, company or team. | [optional] 
 **type** | [**Object**](Object.md)| The type of the goal. It requires the following JSON structure: { \\\&quot;name\\\&quot;: \\\&quot;deals_started\\\&quot;, \\\&quot;params\\\&quot;: { \\\&quot;pipeline_id\\\&quot;: 1 } }. Type can be one of: &#x60;deals_won&#x60;, &#x60;deals_progressed&#x60;, &#x60;activities_completed&#x60;, &#x60;activities_added&#x60;, &#x60;deals_started&#x60; or &#x60;revenue_forecast&#x60;. &#x60;params&#x60; can include &#x60;pipeline_id&#x60;, &#x60;stage_id&#x60; or &#x60;activity_type_id&#x60;. &#x60;stage_id&#x60; is related to only &#x60;deals_progressed&#x60; type of goals and &#x60;activity_type_id&#x60; to &#x60;activities_completed&#x60; or &#x60;activities_added&#x60; types of goals. To track goal in all pipelines set &#x60;pipeline_id&#x60; as &#x60;null&#x60;. | [optional] 
 **expectedOutcome** | [**Object**](Object.md)| The expected outcome of the goal. Expected outcome can be tracked either by &#x60;quantity&#x60; or by &#x60;sum&#x60;. It requires the following JSON structure: { \\\&quot;target\\\&quot;: \\\&quot;50\\\&quot;, \\\&quot;tracking_metric\\\&quot;: \\\&quot;quantity\\\&quot; } or { \\\&quot;target\\\&quot;: \\\&quot;50\\\&quot;, \\\&quot;tracking_metric\\\&quot;: \\\&quot;sum\\\&quot;, \\\&quot;currency_id\\\&quot;: 1 }. &#x60;currency_id&#x60; should only be added to &#x60;sum&#x60; type of goals. | [optional] 
 **duration** | [**Object**](Object.md)| The date when the goal starts and ends. It requires the following JSON structure: { \\\&quot;start\\\&quot;: \\\&quot;2019-01-01\\\&quot;, \\\&quot;end\\\&quot;: \\\&quot;2022-12-31\\\&quot; }. Date in format of YYYY-MM-DD. \\\&quot;end\\\&quot; can be set to &#x60;null&#x60; for an infinite, open-ended goal. | [optional] 
 **interval** | **String**| The interval of the goal | [optional] 

### Return type

[**AddOrUpdateGoalResponse200**](AddOrUpdateGoalResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

