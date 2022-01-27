# Pipedrive.ActivityTypesApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addActivityType**](ActivityTypesApi.md#addActivityType) | **POST** /activityTypes | Add new activity type
[**deleteActivityType**](ActivityTypesApi.md#deleteActivityType) | **DELETE** /activityTypes/{id} | Delete an activity type
[**deleteActivityTypes**](ActivityTypesApi.md#deleteActivityTypes) | **DELETE** /activityTypes | Delete multiple activity types in bulk
[**getActivityTypes**](ActivityTypesApi.md#getActivityTypes) | **GET** /activityTypes | Get all activity types
[**updateActivityType**](ActivityTypesApi.md#updateActivityType) | **PUT** /activityTypes/{id} | Update an activity type



## addActivityType

> ActivityTypeCreateUpdateDeleteResponse addActivityType(name, iconKey, opts)

Add new activity type

Adds a new activity type.

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

let apiInstance = new Pipedrive.ActivityTypesApi();
let name = "name_example"; // String | The name of the activity type
let iconKey = new Pipedrive.IconKey(); // IconKey | 
let opts = {
  'color': "color_example" // String | A designated color for the activity type in 6-character HEX format (e.g. `FFFFFF` for white, `000000` for black)
};
apiInstance.addActivityType(name, iconKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the activity type | 
 **iconKey** | [**IconKey**](IconKey.md)|  | 
 **color** | **String**| A designated color for the activity type in 6-character HEX format (e.g. &#x60;FFFFFF&#x60; for white, &#x60;000000&#x60; for black) | [optional] 

### Return type

[**ActivityTypeCreateUpdateDeleteResponse**](ActivityTypeCreateUpdateDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteActivityType

> ActivityTypeCreateUpdateDeleteResponse deleteActivityType(id)

Delete an activity type

Marks an activity type as deleted.

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

let apiInstance = new Pipedrive.ActivityTypesApi();
let id = 56; // Number | The ID of the activity type
apiInstance.deleteActivityType(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the activity type | 

### Return type

[**ActivityTypeCreateUpdateDeleteResponse**](ActivityTypeCreateUpdateDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteActivityTypes

> ActivityTypeBulkDeleteResponse deleteActivityTypes(ids)

Delete multiple activity types in bulk

Marks multiple activity types as deleted.

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

let apiInstance = new Pipedrive.ActivityTypesApi();
let ids = "ids_example"; // String | The comma-separated activity type IDs
apiInstance.deleteActivityTypes(ids).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **String**| The comma-separated activity type IDs | 

### Return type

[**ActivityTypeBulkDeleteResponse**](ActivityTypeBulkDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActivityTypes

> ActivityTypeListResponse getActivityTypes()

Get all activity types

Returns all activity types.

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

let apiInstance = new Pipedrive.ActivityTypesApi();
apiInstance.getActivityTypes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ActivityTypeListResponse**](ActivityTypeListResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateActivityType

> ActivityTypeCreateUpdateDeleteResponse updateActivityType(id, opts)

Update an activity type

Updates an activity type.

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

let apiInstance = new Pipedrive.ActivityTypesApi();
let id = 56; // Number | The ID of the activity type
let opts = {
  'name': "name_example", // String | The name of the activity type
  'iconKey': new Pipedrive.IconKey(), // IconKey | 
  'color': "color_example", // String | A designated color for the activity type in 6-character HEX format (e.g. `FFFFFF` for white, `000000` for black)
  'orderNr': 56 // Number | An order number for this activity type. Order numbers should be used to order the types in the activity type selections.
};
apiInstance.updateActivityType(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the activity type | 
 **name** | **String**| The name of the activity type | [optional] 
 **iconKey** | [**IconKey**](IconKey.md)|  | [optional] 
 **color** | **String**| A designated color for the activity type in 6-character HEX format (e.g. &#x60;FFFFFF&#x60; for white, &#x60;000000&#x60; for black) | [optional] 
 **orderNr** | **Number**| An order number for this activity type. Order numbers should be used to order the types in the activity type selections. | [optional] 

### Return type

[**ActivityTypeCreateUpdateDeleteResponse**](ActivityTypeCreateUpdateDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

