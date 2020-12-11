# Pipedrive.ActivitiesApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addActivity**](ActivitiesApi.md#addActivity) | **POST** /activities | Add an Activity
[**deleteActivities**](ActivitiesApi.md#deleteActivities) | **DELETE** /activities | Delete multiple Activities in bulk
[**deleteActivity**](ActivitiesApi.md#deleteActivity) | **DELETE** /activities/{id} | Delete an Activity
[**getActivities**](ActivitiesApi.md#getActivities) | **GET** /activities | Get all Activities assigned to a particular User
[**getActivity**](ActivitiesApi.md#getActivity) | **GET** /activities/{id} | Get details of an Activity
[**updateActivity**](ActivitiesApi.md#updateActivity) | **PUT** /activities/{id} | Edit an Activity



## addActivity

> AddActivityResponse200 addActivity(opts)

Add an Activity

Adds a new Activity. Includes more_activities_scheduled_in_context property in response&#39;s additional_data which indicates whether there are more undone Activities scheduled with the same Deal, Person or Organization (depending on the supplied data). For more information on how to add an Activity, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-an-activity\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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
  'activityPostObject': new Pipedrive.ActivityPostObject() // ActivityPostObject | 
};
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

Delete multiple Activities in bulk

Marks multiple Activities as deleted

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
let ids = "ids_example"; // String | Comma-separated IDs of Activities that will be deleted
apiInstance.deleteActivities(ids).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **String**| Comma-separated IDs of Activities that will be deleted | 

### Return type

[**DeleteActivitiesResponse200**](DeleteActivitiesResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteActivity

> DeleteActivityResponse200 deleteActivity(id)

Delete an Activity

Deletes an Activity

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
let id = 56; // Number | The ID of the Activity
apiInstance.deleteActivity(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Activity | 

### Return type

[**DeleteActivityResponse200**](DeleteActivityResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActivities

> GetActivitiesResponse200 getActivities(opts)

Get all Activities assigned to a particular User

Returns all Activities assigned to a particular User.

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
  'userId': 56, // Number | The ID of the User whose Activities will be fetched. If omitted, the User associated with the API token will be used. If 0, Activities for all company Users will be fetched based on the permission sets.
  'filterId': 56, // Number | The ID of the Filter to use (will narrow down results if used together with user_id parameter)
  'type': "type_example", // String | Type of the Activity, can be one type or multiple types separated by a comma. This is in correlation with the key_string parameter of ActivityTypes.
  'limit': 100, // Number | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
  'start': 0, // Number | For pagination, the position that represents the first result for the page
  'startDate': new Date("2013-10-20"), // Date | Use the Activity due date where you wish to begin fetching Activities from. Insert due date in YYYY-MM-DD format.
  'endDate': new Date("2013-10-20"), // Date | Use the Activity due date where you wish to stop fetching Activities from. Insert due date in YYYY-MM-DD format.
  'done': new Pipedrive.NumberBoolean() // NumberBoolean | Whether the Activity is done or not. 0 = Not done, 1 = Done. If omitted returns both Done and Not done activities.
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
 **userId** | **Number**| The ID of the User whose Activities will be fetched. If omitted, the User associated with the API token will be used. If 0, Activities for all company Users will be fetched based on the permission sets. | [optional] 
 **filterId** | **Number**| The ID of the Filter to use (will narrow down results if used together with user_id parameter) | [optional] 
 **type** | **String**| Type of the Activity, can be one type or multiple types separated by a comma. This is in correlation with the key_string parameter of ActivityTypes. | [optional] 
 **limit** | **Number**| For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. | [optional] 
 **start** | **Number**| For pagination, the position that represents the first result for the page | [optional] 
 **startDate** | **Date**| Use the Activity due date where you wish to begin fetching Activities from. Insert due date in YYYY-MM-DD format. | [optional] 
 **endDate** | **Date**| Use the Activity due date where you wish to stop fetching Activities from. Insert due date in YYYY-MM-DD format. | [optional] 
 **done** | [**NumberBoolean**](.md)| Whether the Activity is done or not. 0 &#x3D; Not done, 1 &#x3D; Done. If omitted returns both Done and Not done activities. | [optional] 

### Return type

[**GetActivitiesResponse200**](GetActivitiesResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActivity

> GetActivityResponse200 getActivity(id)

Get details of an Activity

Returns details of a specific Activity

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
let id = 56; // Number | The ID of the Activity
apiInstance.getActivity(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Activity | 

### Return type

[**GetActivityResponse200**](GetActivityResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateActivity

> UpdateActivityResponse200 updateActivity(id, opts)

Edit an Activity

Modifies an Activity. Includes more_activities_scheduled_in_context property in response&#39;s additional_data which indicates whether there are more undone activities scheduled with the same Deal, Person or Organization (depending on the supplied data).

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
let id = 56; // Number | The ID of the Activity
let opts = {
  'activityPutObject': new Pipedrive.ActivityPutObject() // ActivityPutObject | 
};
apiInstance.updateActivity(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Activity | 
 **activityPutObject** | [**ActivityPutObject**](ActivityPutObject.md)|  | [optional] 

### Return type

[**UpdateActivityResponse200**](UpdateActivityResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

