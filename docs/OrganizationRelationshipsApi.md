# Pipedrive.OrganizationRelationshipsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrganizationRelationship**](OrganizationRelationshipsApi.md#addOrganizationRelationship) | **POST** /organizationRelationships | Create an organization relationship
[**deleteOrganizationRelationship**](OrganizationRelationshipsApi.md#deleteOrganizationRelationship) | **DELETE** /organizationRelationships/{id} | Delete an organization relationship
[**getOrganizationRelationship**](OrganizationRelationshipsApi.md#getOrganizationRelationship) | **GET** /organizationRelationships/{id} | Get one organization relationship
[**getOrganizationRelationships**](OrganizationRelationshipsApi.md#getOrganizationRelationships) | **GET** /organizationRelationships | Get all relationships for organization
[**updateOrganizationRelationship**](OrganizationRelationshipsApi.md#updateOrganizationRelationship) | **PUT** /organizationRelationships/{id} | Update an organization relationship



## addOrganizationRelationship

> OrganizationRelationshipPostResponse addOrganizationRelationship(opts)

Create an organization relationship

Creates and returns an organization relationship.

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

let apiInstance = new Pipedrive.OrganizationRelationshipsApi(apiClient);
let opts = Pipedrive.AddOrganizationRelationshipRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.addOrganizationRelationship(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AddOrganizationRelationshipRequest** | [**AddOrganizationRelationshipRequest**](AddOrganizationRelationshipRequest.md)|  | [optional] 

### Return type

[**OrganizationRelationshipPostResponse**](OrganizationRelationshipPostResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOrganizationRelationship

> OrganizationRelationshipDeleteResponse deleteOrganizationRelationship(id)

Delete an organization relationship

Deletes an organization relationship and returns the deleted ID.

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

let apiInstance = new Pipedrive.OrganizationRelationshipsApi(apiClient);
let id = 56; // Number | The ID of the organization relationship
apiInstance.deleteOrganizationRelationship(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the organization relationship | 

### Return type

[**OrganizationRelationshipDeleteResponse**](OrganizationRelationshipDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationRelationship

> OrganizationRelationshipGetResponse getOrganizationRelationship(id, opts)

Get one organization relationship

Finds and returns an organization relationship from its ID.

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

let apiInstance = new Pipedrive.OrganizationRelationshipsApi(apiClient);
let id = 56; // Number | The ID of the organization relationship
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'orgId': 56 // Number | The ID of the base organization for the returned calculated values
};
apiInstance.getOrganizationRelationship(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the organization relationship | 
 **org_id** | **Number**| The ID of the base organization for the returned calculated values | [optional] 

### Return type

[**OrganizationRelationshipGetResponse**](OrganizationRelationshipGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationRelationships

> AllOrganizationRelationshipsGetResponse getOrganizationRelationships(orgId)

Get all relationships for organization

Gets all of the relationships for a supplied organization ID.

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

let apiInstance = new Pipedrive.OrganizationRelationshipsApi(apiClient);
let orgId = 56; // Number | The ID of the organization to get relationships for
apiInstance.getOrganizationRelationships(orgId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **Number**| The ID of the organization to get relationships for | 

### Return type

[**AllOrganizationRelationshipsGetResponse**](AllOrganizationRelationshipsGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateOrganizationRelationship

> OrganizationRelationshipUpdateResponse updateOrganizationRelationship(id, opts)

Update an organization relationship

Updates and returns an organization relationship.

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

let apiInstance = new Pipedrive.OrganizationRelationshipsApi(apiClient);
let id = 56; // Number | The ID of the organization relationship
let opts = Pipedrive.OrganizationRelationship.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateOrganizationRelationship(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the organization relationship | 
 **OrganizationRelationship** | [**OrganizationRelationship**](OrganizationRelationship.md)|  | [optional] 

### Return type

[**OrganizationRelationshipUpdateResponse**](OrganizationRelationshipUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

