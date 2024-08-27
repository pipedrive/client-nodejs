# Pipedrive.ActivitiesApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addActivity**](ActivitiesApi.md#addActivity) | **POST** /activities | Add an activity
[**deleteActivities**](ActivitiesApi.md#deleteActivities) | **DELETE** /activities | Delete multiple activities in bulk
[**deleteActivity**](ActivitiesApi.md#deleteActivity) | **DELETE** /activities/{id} | Delete an activity
[**getActivities**](ActivitiesApi.md#getActivities) | **GET** /activities | Get all activities assigned to a particular user
[**getActivitiesCollection**](ActivitiesApi.md#getActivitiesCollection) | **GET** /activities/collection | Get all activities (BETA)
[**getActivity**](ActivitiesApi.md#getActivity) | **GET** /activities/{id} | Get details of an activity
[**updateActivity**](ActivitiesApi.md#updateActivity) | **PUT** /activities/{id} | Update an activity



## addActivity

> AddActivityResponse addActivity(opts)

Add an activity

Adds a new activity. Includes &#x60;more_activities_scheduled_in_context&#x60; property in response&#39;s &#x60;additional_data&#x60; which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data). For more information, see the tutorial for &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-an-activity\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;adding an activity&lt;/a&gt;. &lt;br /&gt; &lt;br /&gt; ***Starting from 30.09.2024, activity attendees will receive updates only if the activity owner has an active calendar sync***

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

let apiInstance = new Pipedrive.ActivitiesApi(apiClient);
let opts = Pipedrive.ActivityPostObject.constructFromObject({
  // Properties that you want to update
});
apiInstance.addActivity(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ActivityPostObject** | [**ActivityPostObject**](ActivityPostObject.md)|  | [optional] 

### Return type

[**AddActivityResponse**](AddActivityResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteActivities

> DeleteActivitiesResponse deleteActivities(ids)

Delete multiple activities in bulk

Marks multiple activities as deleted. After 30 days, the activities will be permanently deleted.

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

let apiInstance = new Pipedrive.ActivitiesApi(apiClient);
let ids = "ids_example"; // String | The comma-separated IDs of activities that will be deleted
apiInstance.deleteActivities(ids).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **String**| The comma-separated IDs of activities that will be deleted | 

### Return type

[**DeleteActivitiesResponse**](DeleteActivitiesResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteActivity

> DeleteActivityResponse deleteActivity(id)

Delete an activity

Marks an activity as deleted. After 30 days, the activity will be permanently deleted.

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

let apiInstance = new Pipedrive.ActivitiesApi(apiClient);
let id = 56; // Number | The ID of the activity
apiInstance.deleteActivity(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the activity | 

### Return type

[**DeleteActivityResponse**](DeleteActivityResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActivities

> GetActivitiesResponse getActivities(opts)

Get all activities assigned to a particular user

Returns all activities assigned to a particular user.

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

let apiInstance = new Pipedrive.ActivitiesApi(apiClient);
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'userId': 56, // Number | The ID of the user whose activities will be fetched. If omitted, the user associated with the API token will be used. If 0, activities for all company users will be fetched based on the permission sets.
  'filterId': 56, // Number | The ID of the filter to use (will narrow down results if used together with `user_id` parameter)
  'type': "type_example", // String | The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the `key_string` parameter of ActivityTypes.
  'limit': 100, // Number | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
  'start': 0, // Number | For pagination, the position that represents the first result for the page
  'startDate': new Date("2013-10-20"), // Date | Use the activity due date where you wish to begin fetching activities from. Insert due date in YYYY-MM-DD format.
  'endDate': new Date("2013-10-20"), // Date | Use the activity due date where you wish to stop fetching activities from. Insert due date in YYYY-MM-DD format.
  'done': new Pipedrive.NumberBoolean() // NumberBoolean | Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both done and not done activities.
};
apiInstance.getActivities(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**| The ID of the user whose activities will be fetched. If omitted, the user associated with the API token will be used. If 0, activities for all company users will be fetched based on the permission sets. | [optional] 
 **filter_id** | **Number**| The ID of the filter to use (will narrow down results if used together with &#x60;user_id&#x60; parameter) | [optional] 
 **type** | **String**| The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the &#x60;key_string&#x60; parameter of ActivityTypes. | [optional] 
 **limit** | **Number**| For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. | [optional] 
 **start** | **Number**| For pagination, the position that represents the first result for the page | [optional] 
 **start_date** | **Date**| Use the activity due date where you wish to begin fetching activities from. Insert due date in YYYY-MM-DD format. | [optional] 
 **end_date** | **Date**| Use the activity due date where you wish to stop fetching activities from. Insert due date in YYYY-MM-DD format. | [optional] 
 **done** | [**NumberBoolean**](.md)| Whether the activity is done or not. 0 &#x3D; Not done, 1 &#x3D; Done. If omitted returns both done and not done activities. | [optional] 

### Return type

[**GetActivitiesResponse**](GetActivitiesResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActivitiesCollection

> GetActivitiesCollectionResponse getActivitiesCollection(opts)

Get all activities (BETA)

Returns all activities. This is a cursor-paginated endpoint that is currently in BETA. For more information, please refer to our documentation on &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/core-api-concepts-pagination\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;pagination&lt;/a&gt;. Please note that only global admins (those with global permissions) can access these endpoints. Users with regular permissions will receive a 403 response. Read more about global permissions &lt;a href&#x3D;\&quot;https://support.pipedrive.com/en/article/global-user-management\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;here&lt;/a&gt;.

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

let apiInstance = new Pipedrive.ActivitiesApi(apiClient);
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'cursor': "cursor_example", // String | For pagination, the marker (an opaque string value) representing the first item on the next page
  'limit': 100, // Number | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed.
  'since': "since_example", // String | The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.
  'until': "until_example", // String | The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.
  'userId': 56, // Number | The ID of the user whose activities will be fetched. If omitted, all activities are returned.
  'done': true, // Boolean | Whether the activity is done or not. `false` = Not done, `true` = Done. If omitted, returns both done and not done activities.
  'type': "type_example" // String | The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the `key_string` parameter of ActivityTypes.
};
apiInstance.getActivitiesCollection(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| For pagination, the marker (an opaque string value) representing the first item on the next page | [optional] 
 **limit** | **Number**| For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed. | [optional] 
 **since** | **String**| The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the &#x60;update_time&#x60; field. | [optional] 
 **until** | **String**| The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the &#x60;update_time&#x60; field. | [optional] 
 **user_id** | **Number**| The ID of the user whose activities will be fetched. If omitted, all activities are returned. | [optional] 
 **done** | **Boolean**| Whether the activity is done or not. &#x60;false&#x60; &#x3D; Not done, &#x60;true&#x60; &#x3D; Done. If omitted, returns both done and not done activities. | [optional] 
 **type** | **String**| The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the &#x60;key_string&#x60; parameter of ActivityTypes. | [optional] 

### Return type

[**GetActivitiesCollectionResponse**](GetActivitiesCollectionResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActivity

> GetActivityResponse getActivity(id)

Get details of an activity

Returns the details of a specific activity.

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

let apiInstance = new Pipedrive.ActivitiesApi(apiClient);
let id = 56; // Number | The ID of the activity
apiInstance.getActivity(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the activity | 

### Return type

[**GetActivityResponse**](GetActivityResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateActivity

> UpdateActivityResponse updateActivity(id, opts)

Update an activity

Updates an activity. Includes &#x60;more_activities_scheduled_in_context&#x60; property in response&#39;s &#x60;additional_data&#x60; which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data). &lt;br /&gt; &lt;br /&gt; ***Starting from 30.09.2024, activity attendees will receive updates only if the activity owner has an active calendar sync***

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

let apiInstance = new Pipedrive.ActivitiesApi(apiClient);
let id = 56; // Number | The ID of the activity
let opts = Pipedrive.ActivityPutObject.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateActivity(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the activity | 
 **ActivityPutObject** | [**ActivityPutObject**](ActivityPutObject.md)|  | [optional] 

### Return type

[**UpdateActivityResponse**](UpdateActivityResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

