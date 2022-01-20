# Pipedrive.PersonFieldsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPersonField**](PersonFieldsApi.md#addPersonField) | **POST** /personFields | Add a new person field
[**deletePersonField**](PersonFieldsApi.md#deletePersonField) | **DELETE** /personFields/{id} | Delete a person field
[**deletePersonFields**](PersonFieldsApi.md#deletePersonFields) | **DELETE** /personFields | Delete multiple person fields in bulk
[**getPersonField**](PersonFieldsApi.md#getPersonField) | **GET** /personFields/{id} | Get one person field
[**getPersonFields**](PersonFieldsApi.md#getPersonFields) | **GET** /personFields | Get all person fields
[**updatePersonField**](PersonFieldsApi.md#updatePersonField) | **PUT** /personFields/{id} | Update a person field



## addPersonField

> FieldResponse addPersonField(opts)

Add a new person field

Adds a new person field. For more information on adding a new custom field, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-a-new-custom-field\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.PersonFieldsApi();
let opts = Pipedrive.FieldCreateRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.addPersonField(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldCreateRequest** | [**FieldCreateRequest**](FieldCreateRequest.md)|  | [optional] 

### Return type

[**FieldResponse**](FieldResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePersonField

> DeleteResponse deletePersonField(id)

Delete a person field

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

let apiInstance = new Pipedrive.PersonFieldsApi();
let id = 56; // Number | The ID of the field
apiInstance.deletePersonField(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the field | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePersonFields

> BulkDeleteResponse deletePersonFields(ids)

Delete multiple person fields in bulk

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

let apiInstance = new Pipedrive.PersonFieldsApi();
let ids = "ids_example"; // String | The comma-separated field IDs to delete
apiInstance.deletePersonFields(ids).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **String**| The comma-separated field IDs to delete | 

### Return type

[**BulkDeleteResponse**](BulkDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersonField

> FieldResponse getPersonField(id)

Get one person field

Returns data about a specific person field.

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

let apiInstance = new Pipedrive.PersonFieldsApi();
let id = 56; // Number | The ID of the field
apiInstance.getPersonField(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the field | 

### Return type

[**FieldResponse**](FieldResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersonFields

> FieldsResponse getPersonFields(opts)

Get all person fields

Returns data about all person fields.

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

let apiInstance = new Pipedrive.PersonFieldsApi();
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getPersonFields(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**FieldsResponse**](FieldsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePersonField

> FieldResponse updatePersonField(id, opts)

Update a person field

Updates a person field. See an example of updating custom fields’ values in &lt;a href&#x3D;\&quot; https://pipedrive.readme.io/docs/updating-custom-field-value \&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.PersonFieldsApi();
let id = 56; // Number | The ID of the field
let opts = Pipedrive.FieldUpdateRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.updatePersonField(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the field | 
 **fieldUpdateRequest** | [**FieldUpdateRequest**](FieldUpdateRequest.md)|  | [optional] 

### Return type

[**FieldResponse**](FieldResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

