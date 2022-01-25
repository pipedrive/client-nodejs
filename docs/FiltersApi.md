# Pipedrive.FiltersApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFilter**](FiltersApi.md#addFilter) | **POST** /filters | Add a new filter
[**deleteFilter**](FiltersApi.md#deleteFilter) | **DELETE** /filters/{id} | Delete a filter
[**deleteFilters**](FiltersApi.md#deleteFilters) | **DELETE** /filters | Delete multiple filters in bulk
[**getFilter**](FiltersApi.md#getFilter) | **GET** /filters/{id} | Get one filter
[**getFilterHelpers**](FiltersApi.md#getFilterHelpers) | **GET** /filters/helpers | Get all filter helpers
[**getFilters**](FiltersApi.md#getFilters) | **GET** /filters | Get all filters
[**updateFilter**](FiltersApi.md#updateFilter) | **PUT** /filters/{id} | Update filter



## addFilter

> FiltersPostResponse addFilter(opts)

Add a new filter

Adds a new filter, returns the ID upon success. Note that in the conditions JSON object only one first-level condition group is supported, and it must be glued with &#39;AND&#39;, and only two second level condition groups are supported of which one must be glued with &#39;AND&#39; and the second with &#39;OR&#39;. Other combinations do not work (yet) but the syntax supports introducing them in future. For more information, see the tutorial for &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-a-filter\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;adding a filter&lt;/a&gt;.

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

let apiInstance = new Pipedrive.FiltersApi();
let opts = Pipedrive.AddFilterRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.addFilter(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addFilterRequest** | [**AddFilterRequest**](AddFilterRequest.md)|  | [optional] 

### Return type

[**FiltersPostResponse**](FiltersPostResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFilter

> FiltersDeleteResponse deleteFilter(id)

Delete a filter

Marks a filter as deleted.

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

let apiInstance = new Pipedrive.FiltersApi();
let id = 56; // Number | The ID of the filter
apiInstance.deleteFilter(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the filter | 

### Return type

[**FiltersDeleteResponse**](FiltersDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteFilters

> FiltersBulkDeleteResponse deleteFilters(ids)

Delete multiple filters in bulk

Marks multiple filters as deleted.

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

let apiInstance = new Pipedrive.FiltersApi();
let ids = "ids_example"; // String | The comma-separated filter IDs to delete
apiInstance.deleteFilters(ids).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **String**| The comma-separated filter IDs to delete | 

### Return type

[**FiltersBulkDeleteResponse**](FiltersBulkDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFilter

> FiltersGetResponse getFilter(id)

Get one filter

Returns data about a specific filter. Note that this also returns the condition lines of the filter.

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

let apiInstance = new Pipedrive.FiltersApi();
let id = 56; // Number | The ID of the filter
apiInstance.getFilter(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the filter | 

### Return type

[**FiltersGetResponse**](FiltersGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFilterHelpers

> Object getFilterHelpers()

Get all filter helpers

Returns all supported filter helpers. It helps to know what conditions and helpers are available when you want to &lt;a href&#x3D;\&quot;/docs/api/v1/Filters#addFilter\&quot;&gt;add&lt;/a&gt; or &lt;a href&#x3D;\&quot;/docs/api/v1/Filters#updateFilter\&quot;&gt;update&lt;/a&gt; filters. For more information, see the tutorial for &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-a-filter\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;adding a filter&lt;/a&gt;.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.FiltersApi();
apiInstance.getFilterHelpers().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFilters

> FiltersBulkGetResponse getFilters(opts)

Get all filters

Returns data about all filters.

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

let apiInstance = new Pipedrive.FiltersApi();
let opts = {
  'type': new Pipedrive.FilterType() // FilterType | The types of filters to fetch
};
apiInstance.getFilters(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**FilterType**](.md)| The types of filters to fetch | [optional] 

### Return type

[**FiltersBulkGetResponse**](FiltersBulkGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFilter

> FiltersPostResponse updateFilter(id, opts)

Update filter

Updates an existing filter.

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

let apiInstance = new Pipedrive.FiltersApi();
let id = 56; // Number | The ID of the filter
let opts = Pipedrive.UpdateFilterRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateFilter(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the filter | 
 **updateFilterRequest** | [**UpdateFilterRequest**](UpdateFilterRequest.md)|  | [optional] 

### Return type

[**FiltersPostResponse**](FiltersPostResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

