# Pipedrive.DealFieldsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDealField**](DealFieldsApi.md#addDealField) | **POST** /dealFields | Add a new deal field
[**deleteDealField**](DealFieldsApi.md#deleteDealField) | **DELETE** /dealFields/{id} | Delete a deal field
[**deleteDealFields**](DealFieldsApi.md#deleteDealFields) | **DELETE** /dealFields | Delete multiple deal fields in bulk
[**getDealField**](DealFieldsApi.md#getDealField) | **GET** /dealFields/{id} | Get one deal field
[**getDealFields**](DealFieldsApi.md#getDealFields) | **GET** /dealFields | Get all deal fields
[**updateDealField**](DealFieldsApi.md#updateDealField) | **PUT** /dealFields/{id} | Update a deal field



## addDealField

> FieldResponse addDealField(opts)

Add a new deal field

Adds a new deal field. For more information on adding a new custom field, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-a-new-custom-field\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.DealFieldsApi();
let opts = {
  'name': "name_example", // String | Name of the field
  'options': "options_example", // String | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. Example: `[{\\\"label\\\":\\\"New Item\\\"}]`
  'addVisibleFlag': true, // Boolean | Whether the field is available in 'add new' modal or not (both in web and mobile app)
  'fieldType': new Pipedrive.FieldTypeAsString() // FieldTypeAsString | 
};
apiInstance.addDealField(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of the field | [optional] 
 **options** | **String**| When &#x60;field_type&#x60; is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. Example: &#x60;[{\\\&quot;label\\\&quot;:\\\&quot;New Item\\\&quot;}]&#x60; | [optional] 
 **addVisibleFlag** | **Boolean**| Whether the field is available in &#39;add new&#39; modal or not (both in web and mobile app) | [optional] [default to true]
 **fieldType** | [**FieldTypeAsString**](FieldTypeAsString.md)|  | [optional] 

### Return type

[**FieldResponse**](FieldResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteDealField

> DeleteResponse deleteDealField(id)

Delete a deal field

Marks a field as deleted. For more information on how to delete a custom field, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/deleting-a-custom-field\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.DealFieldsApi();
let id = 56; // Number | ID of the field
apiInstance.deleteDealField(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the field | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteDealFields

> BulkDeleteResponse deleteDealFields(ids)

Delete multiple deal fields in bulk

Marks multiple fields as deleted.

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

let apiInstance = new Pipedrive.DealFieldsApi();
let ids = "ids_example"; // String | Comma-separated field IDs to delete
apiInstance.deleteDealFields(ids).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **String**| Comma-separated field IDs to delete | 

### Return type

[**BulkDeleteResponse**](BulkDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDealField

> FieldResponse getDealField(id)

Get one deal field

Returns data about a specific deal field.

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

let apiInstance = new Pipedrive.DealFieldsApi();
let id = 56; // Number | ID of the field
apiInstance.getDealField(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the field | 

### Return type

[**FieldResponse**](FieldResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDealFields

> FieldsResponse getDealFields()

Get all deal fields

Returns data about all deal fields

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

let apiInstance = new Pipedrive.DealFieldsApi();
apiInstance.getDealFields().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**FieldsResponse**](FieldsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDealField

> FieldResponse updateDealField(id, opts)

Update a deal field

Updates a deal field. See an example of updating custom fields’ values in &lt;a href&#x3D;\&quot; https://pipedrive.readme.io/docs/updating-custom-field-value \&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.DealFieldsApi();
let id = 56; // Number | ID of the field
let opts = {
  'name': "name_example", // String | Name of the field
  'options': "options_example", // String | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{\\\"id\\\":123,\\\"label\\\":\\\"Existing Item\\\"},{\\\"label\\\":\\\"New Item\\\"}]`
  'addVisibleFlag': true // Boolean | Whether the field is available in 'add new' modal or not (both in web and mobile app)
};
apiInstance.updateDealField(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the field | 
 **name** | **String**| Name of the field | [optional] 
 **options** | **String**| When &#x60;field_type&#x60; is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: &#x60;[{\\\&quot;id\\\&quot;:123,\\\&quot;label\\\&quot;:\\\&quot;Existing Item\\\&quot;},{\\\&quot;label\\\&quot;:\\\&quot;New Item\\\&quot;}]&#x60; | [optional] 
 **addVisibleFlag** | **Boolean**| Whether the field is available in &#39;add new&#39; modal or not (both in web and mobile app) | [optional] [default to true]

### Return type

[**FieldResponse**](FieldResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

