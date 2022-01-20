# Pipedrive.ActivitiesApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addActivity**](ActivitiesApi.md#addActivity) | **POST** /activities | Add an activity
[**deleteActivities**](ActivitiesApi.md#deleteActivities) | **DELETE** /activities | Delete multiple activities in bulk
[**deleteActivity**](ActivitiesApi.md#deleteActivity) | **DELETE** /activities/{id} | Delete an activity
[**getActivities**](ActivitiesApi.md#getActivities) | **GET** /activities | Get all activities assigned to a particular user
[**getActivity**](ActivitiesApi.md#getActivity) | **GET** /activities/{id} | Get details of an activity
[**updateActivity**](ActivitiesApi.md#updateActivity) | **PUT** /activities/{id} | Update an activity



## addActivity

> AddActivityResponse200 addActivity(opts)

Add an activity

Adds a new activity. Includes &#x60;more_activities_scheduled_in_context&#x60; property in response&#39;s &#x60;additional_data&#x60; which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data). For more information on how to add an activity, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-an-activity\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.ActivitiesApi();
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
 **activityPostObject** | [**ActivityPostObject**](ActivityPostObject.md)|  | [optional] 

### Return type

[**AddActivityResponse200**](AddActivityResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteActivities

> DeleteActivitiesResponse200 deleteActivities(ids)

Delete multiple activities in bulk

Marks multiple activities as deleted.

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

let apiInstance = new Pipedrive.ActivitiesApi();
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

[**DeleteActivitiesResponse200**](DeleteActivitiesResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteActivity

> DeleteActivityResponse200 deleteActivity(id)

Delete an activity

Marks an activity as deleted.

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

let apiInstance = new Pipedrive.ActivitiesApi();
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

[**DeleteActivityResponse200**](DeleteActivityResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActivities

> GetActivitiesResponse200 getActivities(opts)

Get all activities assigned to a particular user

Returns all activities assigned to a particular user.

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

let apiInstance = new Pipedrive.ActivitiesApi();
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
 **userId** | **Number**| The ID of the user whose activities will be fetched. If omitted, the user associated with the API token will be used. If 0, activities for all company users will be fetched based on the permission sets. | [optional] 
 **filterId** | **Number**| The ID of the filter to use (will narrow down results if used together with &#x60;user_id&#x60; parameter) | [optional] 
 **type** | **String**| The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the &#x60;key_string&#x60; parameter of ActivityTypes. | [optional] 
 **limit** | **Number**| For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. | [optional] 
 **start** | **Number**| For pagination, the position that represents the first result for the page | [optional] 
 **startDate** | **Date**| Use the activity due date where you wish to begin fetching activities from. Insert due date in YYYY-MM-DD format. | [optional] 
 **endDate** | **Date**| Use the activity due date where you wish to stop fetching activities from. Insert due date in YYYY-MM-DD format. | [optional] 
 **done** | [**NumberBoolean**](.md)| Whether the activity is done or not. 0 &#x3D; Not done, 1 &#x3D; Done. If omitted returns both done and not done activities. | [optional] 

### Return type

[**GetActivitiesResponse200**](GetActivitiesResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActivity

> GetActivityResponse200 getActivity(id)

Get details of an activity

Returns the details of a specific activity.

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

let apiInstance = new Pipedrive.ActivitiesApi();
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

[**GetActivityResponse200**](GetActivityResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateActivity

> UpdateActivityResponse200 updateActivity(id, opts)

Update an activity

Updates an activity. Includes &#x60;more_activities_scheduled_in_context&#x60; property in response&#39;s &#x60;additional_data&#x60; which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data).

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

let apiInstance = new Pipedrive.ActivitiesApi();
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
 **activityPutObject** | [**ActivityPutObject**](ActivityPutObject.md)|  | [optional] 

### Return type

[**UpdateActivityResponse200**](UpdateActivityResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

