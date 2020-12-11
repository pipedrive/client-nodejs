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

Adds a new goal.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.GoalsApi();
let opts = {
  'title': "title_example", // String | Title of the goal.
  'assignee': null, // Object | Who is this goal assigned to. It requires the following JSON structure: { \\\"id\\\": \\\"1\\\", \\\"type\\\": \\\"person\\\" }. `type` can be either `person`, `company` or `team`. ID of the assignee person, company or team.
  'type': null, // Object | Type of the goal. It requires the following JSON structure: { \\\"name\\\": \\\"deals_started\\\", \\\"params\\\": { \\\"pipeline_id\\\": 1 } }. Type can be one of: `deals_won`,`deals_progressed`,`activities_completed`,`activities_added` or `deals_started`. `params` can include `pipeline_id`, `stage_id` or `activity_type_id`. `stage_id` is related to only `deals_progressed` type of goals and `activity_type_id` to `activities_completed` or `activities_added` types of goals. To track goal in all pipelines set `pipeline_id` as `null`.
  'expectedOutcome': null, // Object | Expected outcome of the goal. Expected outcome can be tracked either by `quantity` or by `sum`. It requires the following JSON structure: { \\\"target\\\": \\\"50\\\", \\\"tracking_metric\\\": \\\"quantity\\\" } or { \\\"target\\\": \\\"50\\\", \\\"tracking_metric\\\": \\\"sum\\\", \\\"currency_id\\\": 1 }. `currency_id` should only be added to `sum` type of goals.
  'duration': null, // Object | Date when the goal starts and ends. It requires the following JSON structure: { \\\"start\\\": \\\"2019-01-01\\\", \\\"end\\\": \\\"2022-12-31\\\" }. Date in format of YYYY-MM-DD.
  'interval': "interval_example" // String | Date when the goal starts and ends. It requires the following JSON structure: { \\\"start\\\": \\\"2019-01-01\\\", \\\"end\\\": \\\"2022-12-31\\\" }. Date in format of YYYY-MM-DD.
};
apiInstance.addGoal(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**| Title of the goal. | [optional] 
 **assignee** | [**Object**](Object.md)| Who is this goal assigned to. It requires the following JSON structure: { \\\&quot;id\\\&quot;: \\\&quot;1\\\&quot;, \\\&quot;type\\\&quot;: \\\&quot;person\\\&quot; }. &#x60;type&#x60; can be either &#x60;person&#x60;, &#x60;company&#x60; or &#x60;team&#x60;. ID of the assignee person, company or team. | [optional] 
 **type** | [**Object**](Object.md)| Type of the goal. It requires the following JSON structure: { \\\&quot;name\\\&quot;: \\\&quot;deals_started\\\&quot;, \\\&quot;params\\\&quot;: { \\\&quot;pipeline_id\\\&quot;: 1 } }. Type can be one of: &#x60;deals_won&#x60;,&#x60;deals_progressed&#x60;,&#x60;activities_completed&#x60;,&#x60;activities_added&#x60; or &#x60;deals_started&#x60;. &#x60;params&#x60; can include &#x60;pipeline_id&#x60;, &#x60;stage_id&#x60; or &#x60;activity_type_id&#x60;. &#x60;stage_id&#x60; is related to only &#x60;deals_progressed&#x60; type of goals and &#x60;activity_type_id&#x60; to &#x60;activities_completed&#x60; or &#x60;activities_added&#x60; types of goals. To track goal in all pipelines set &#x60;pipeline_id&#x60; as &#x60;null&#x60;. | [optional] 
 **expectedOutcome** | [**Object**](Object.md)| Expected outcome of the goal. Expected outcome can be tracked either by &#x60;quantity&#x60; or by &#x60;sum&#x60;. It requires the following JSON structure: { \\\&quot;target\\\&quot;: \\\&quot;50\\\&quot;, \\\&quot;tracking_metric\\\&quot;: \\\&quot;quantity\\\&quot; } or { \\\&quot;target\\\&quot;: \\\&quot;50\\\&quot;, \\\&quot;tracking_metric\\\&quot;: \\\&quot;sum\\\&quot;, \\\&quot;currency_id\\\&quot;: 1 }. &#x60;currency_id&#x60; should only be added to &#x60;sum&#x60; type of goals. | [optional] 
 **duration** | [**Object**](Object.md)| Date when the goal starts and ends. It requires the following JSON structure: { \\\&quot;start\\\&quot;: \\\&quot;2019-01-01\\\&quot;, \\\&quot;end\\\&quot;: \\\&quot;2022-12-31\\\&quot; }. Date in format of YYYY-MM-DD. | [optional] 
 **interval** | **String**| Date when the goal starts and ends. It requires the following JSON structure: { \\\&quot;start\\\&quot;: \\\&quot;2019-01-01\\\&quot;, \\\&quot;end\\\&quot;: \\\&quot;2022-12-31\\\&quot; }. Date in format of YYYY-MM-DD. | [optional] 

### Return type

[**AddOrUpdateGoalResponse200**](AddOrUpdateGoalResponse200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteGoal

> DeleteGoalResponse200 deleteGoal(id)

Delete existing goal

Marks goal as deleted.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.GoalsApi();
let id = "id_example"; // String | ID of the goal to be deleted.
apiInstance.deleteGoal(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the goal to be deleted. | 

### Return type

[**DeleteGoalResponse200**](DeleteGoalResponse200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGoalResult

> GetGoalResultResponse200 getGoalResult(id, periodStart, periodEnd)

Get result of a goal

Gets progress of a goal for specified period.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.GoalsApi();
let id = "id_example"; // String | ID of the goal that the results are looked for.
let periodStart = new Date("2013-10-20"); // Date | Start date of the period for which to find progress of a goal. Date in format of YYYY-MM-DD.
let periodEnd = new Date("2013-10-20"); // Date | End date of the period for which to find progress of a goal. Date in format of YYYY-MM-DD.
apiInstance.getGoalResult(id, periodStart, periodEnd).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the goal that the results are looked for. | 
 **periodStart** | **Date**| Start date of the period for which to find progress of a goal. Date in format of YYYY-MM-DD. | 
 **periodEnd** | **Date**| End date of the period for which to find progress of a goal. Date in format of YYYY-MM-DD. | 

### Return type

[**GetGoalResultResponse200**](GetGoalResultResponse200.md)

### Authorization

[api_key](../README.md#api_key)

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

let apiInstance = new Pipedrive.GoalsApi();
let opts = {
  'typeName': "typeName_example", // String | Type of the goal. If provided, everyone's goals will be returned.
  'title': "title_example", // String | Title of the goal.
  'isActive': true, // Boolean | Whether goal is active or not.
  'assigneeId': 56, // Number | ID of the user who's goal to fetch. When omitted, only your goals will be returned.
  'assigneeType': "assigneeType_example", // String | Type of the goal's assignee. If provided, everyone's goals will be returned.
  'expectedOutcomeTarget': 3.4, // Number | Numeric value of the outcome. If provided, everyone's goals will be returned.
  'expectedOutcomeTrackingMetric': "expectedOutcomeTrackingMetric_example", // String | Tracking metric of the expected outcome of the goal. If provided, everyone's goals will be returned.
  'expectedOutcomeCurrencyId': 56, // Number | Numeric ID of the goal's currency. Only applicable to goals with `expected_outcome.tracking_metric` with value `sum`. If provided, everyone's goals will be returned.
  'typeParamsPipelineId': 56, // Number | ID of the pipeline or `null` for all pipelines. If provided, everyone's goals will be returned.
  'typeParamsStageId': 56, // Number | ID of the stage. Applicable to only `deals_progressed` type of goals. If provided, everyone's goals will be returned.
  'typeParamsActivityTypeId': 56, // Number | ID of the activity type. Applicable to only `activities_completed` or `activities_added` types of goals. If provided, everyone's goals will be returned.
  'periodStart': new Date("2013-10-20"), // Date | Start date of the period for which to find goals. Date in format of YYYY-MM-DD. When `period.start` is provided, `period.end` must be provided too.
  'periodEnd': new Date("2013-10-20") // Date | End date of the period for which to find goals. Date in format of YYYY-MM-DD.
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
 **typeName** | **String**| Type of the goal. If provided, everyone&#39;s goals will be returned. | [optional] 
 **title** | **String**| Title of the goal. | [optional] 
 **isActive** | **Boolean**| Whether goal is active or not. | [optional] [default to true]
 **assigneeId** | **Number**| ID of the user who&#39;s goal to fetch. When omitted, only your goals will be returned. | [optional] 
 **assigneeType** | **String**| Type of the goal&#39;s assignee. If provided, everyone&#39;s goals will be returned. | [optional] 
 **expectedOutcomeTarget** | **Number**| Numeric value of the outcome. If provided, everyone&#39;s goals will be returned. | [optional] 
 **expectedOutcomeTrackingMetric** | **String**| Tracking metric of the expected outcome of the goal. If provided, everyone&#39;s goals will be returned. | [optional] 
 **expectedOutcomeCurrencyId** | **Number**| Numeric ID of the goal&#39;s currency. Only applicable to goals with &#x60;expected_outcome.tracking_metric&#x60; with value &#x60;sum&#x60;. If provided, everyone&#39;s goals will be returned. | [optional] 
 **typeParamsPipelineId** | **Number**| ID of the pipeline or &#x60;null&#x60; for all pipelines. If provided, everyone&#39;s goals will be returned. | [optional] 
 **typeParamsStageId** | **Number**| ID of the stage. Applicable to only &#x60;deals_progressed&#x60; type of goals. If provided, everyone&#39;s goals will be returned. | [optional] 
 **typeParamsActivityTypeId** | **Number**| ID of the activity type. Applicable to only &#x60;activities_completed&#x60; or &#x60;activities_added&#x60; types of goals. If provided, everyone&#39;s goals will be returned. | [optional] 
 **periodStart** | **Date**| Start date of the period for which to find goals. Date in format of YYYY-MM-DD. When &#x60;period.start&#x60; is provided, &#x60;period.end&#x60; must be provided too. | [optional] 
 **periodEnd** | **Date**| End date of the period for which to find goals. Date in format of YYYY-MM-DD. | [optional] 

### Return type

[**GetGoalsResponse200**](GetGoalsResponse200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateGoal

> AddOrUpdateGoalResponse200 updateGoal(id, opts)

Update existing goal

Updates existing goal.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.GoalsApi();
let id = "id_example"; // String | ID of the goal to be updated.
let opts = {
  'title': "title_example", // String | Title of the goal.
  'assignee': null, // Object | Who is this goal assigned to. It requires the following JSON structure: { \\\"id\\\": \\\"1\\\", \\\"type\\\": \\\"person\\\" }. `type` can be either `person`, `company` or `team`. ID of the assignee person, company or team.
  'type': null, // Object | Type of the goal. It requires the following JSON structure: { \\\"name\\\": \\\"deals_started\\\", \\\"params\\\": { \\\"pipeline_id\\\": 1 } }. Type can be one of: `deals_won`,`deals_progressed`,`activities_completed`,`activities_added` or `deals_started`. `params` can include `pipeline_id`, `stage_id` or `activity_type_id`. `stage_id` is related to only `deals_progressed` type of goals and `activity_type_id` to `activities_completed` or `activities_added` types of goals. To track goal in all pipelines set `pipeline_id` as `null`.
  'expectedOutcome': null, // Object | Expected outcome of the goal. Expected outcome can be tracked either by `quantity` or by `sum`. It requires the following JSON structure: { \\\"target\\\": \\\"50\\\", \\\"tracking_metric\\\": \\\"quantity\\\" } or { \\\"target\\\": \\\"50\\\", \\\"tracking_metric\\\": \\\"sum\\\", \\\"currency_id\\\": 1 }. `currency_id` should only be added to `sum` type of goals.
  'duration': null, // Object | Date when the goal starts and ends. It requires the following JSON structure: { \\\"start\\\": \\\"2019-01-01\\\", \\\"end\\\": \\\"2022-12-31\\\" }. Date in format of YYYY-MM-DD.
  'interval': "interval_example" // String | Date when the goal starts and ends. It requires the following JSON structure: { \\\"start\\\": \\\"2019-01-01\\\", \\\"end\\\": \\\"2022-12-31\\\" }. Date in format of YYYY-MM-DD.
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
 **id** | **String**| ID of the goal to be updated. | 
 **title** | **String**| Title of the goal. | [optional] 
 **assignee** | [**Object**](Object.md)| Who is this goal assigned to. It requires the following JSON structure: { \\\&quot;id\\\&quot;: \\\&quot;1\\\&quot;, \\\&quot;type\\\&quot;: \\\&quot;person\\\&quot; }. &#x60;type&#x60; can be either &#x60;person&#x60;, &#x60;company&#x60; or &#x60;team&#x60;. ID of the assignee person, company or team. | [optional] 
 **type** | [**Object**](Object.md)| Type of the goal. It requires the following JSON structure: { \\\&quot;name\\\&quot;: \\\&quot;deals_started\\\&quot;, \\\&quot;params\\\&quot;: { \\\&quot;pipeline_id\\\&quot;: 1 } }. Type can be one of: &#x60;deals_won&#x60;,&#x60;deals_progressed&#x60;,&#x60;activities_completed&#x60;,&#x60;activities_added&#x60; or &#x60;deals_started&#x60;. &#x60;params&#x60; can include &#x60;pipeline_id&#x60;, &#x60;stage_id&#x60; or &#x60;activity_type_id&#x60;. &#x60;stage_id&#x60; is related to only &#x60;deals_progressed&#x60; type of goals and &#x60;activity_type_id&#x60; to &#x60;activities_completed&#x60; or &#x60;activities_added&#x60; types of goals. To track goal in all pipelines set &#x60;pipeline_id&#x60; as &#x60;null&#x60;. | [optional] 
 **expectedOutcome** | [**Object**](Object.md)| Expected outcome of the goal. Expected outcome can be tracked either by &#x60;quantity&#x60; or by &#x60;sum&#x60;. It requires the following JSON structure: { \\\&quot;target\\\&quot;: \\\&quot;50\\\&quot;, \\\&quot;tracking_metric\\\&quot;: \\\&quot;quantity\\\&quot; } or { \\\&quot;target\\\&quot;: \\\&quot;50\\\&quot;, \\\&quot;tracking_metric\\\&quot;: \\\&quot;sum\\\&quot;, \\\&quot;currency_id\\\&quot;: 1 }. &#x60;currency_id&#x60; should only be added to &#x60;sum&#x60; type of goals. | [optional] 
 **duration** | [**Object**](Object.md)| Date when the goal starts and ends. It requires the following JSON structure: { \\\&quot;start\\\&quot;: \\\&quot;2019-01-01\\\&quot;, \\\&quot;end\\\&quot;: \\\&quot;2022-12-31\\\&quot; }. Date in format of YYYY-MM-DD. | [optional] 
 **interval** | **String**| Date when the goal starts and ends. It requires the following JSON structure: { \\\&quot;start\\\&quot;: \\\&quot;2019-01-01\\\&quot;, \\\&quot;end\\\&quot;: \\\&quot;2022-12-31\\\&quot; }. Date in format of YYYY-MM-DD. | [optional] 

### Return type

[**AddOrUpdateGoalResponse200**](AddOrUpdateGoalResponse200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

