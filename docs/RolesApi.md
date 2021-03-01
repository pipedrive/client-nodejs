# Pipedrive.RolesApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrUpdateRoleSetting**](RolesApi.md#addOrUpdateRoleSetting) | **POST** /roles/{id}/settings | Add or update role setting
[**addRole**](RolesApi.md#addRole) | **POST** /roles | Add a role
[**addRoleAssignment**](RolesApi.md#addRoleAssignment) | **POST** /roles/{id}/assignments | Add role assignment
[**deleteRole**](RolesApi.md#deleteRole) | **DELETE** /roles/{id} | Delete a role
[**deleteRoleAssignment**](RolesApi.md#deleteRoleAssignment) | **DELETE** /roles/{id}/assignments | Delete a role assignment
[**getRole**](RolesApi.md#getRole) | **GET** /roles/{id} | Get one role
[**getRoleAssignments**](RolesApi.md#getRoleAssignments) | **GET** /roles/{id}/assignments | List role assignments
[**getRoleSettings**](RolesApi.md#getRoleSettings) | **GET** /roles/{id}/settings | List role settings
[**getRoleSubRoles**](RolesApi.md#getRoleSubRoles) | **GET** /roles/{id}/roles | List role sub-roles
[**getRoles**](RolesApi.md#getRoles) | **GET** /roles | Get all roles
[**updateRole**](RolesApi.md#updateRole) | **PUT** /roles/{id} | Update role details



## addOrUpdateRoleSetting

> PostRoleSettings addOrUpdateRoleSetting(id, settingKey, value)

Add or update role setting

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | ID of the role
let settingKey = "settingKey_example"; // String | 
let value = new Pipedrive.NumberBooleanDefault0(); // NumberBooleanDefault0 | Possible values for default_visibility settings: 0...1.
apiInstance.addOrUpdateRoleSetting(id, settingKey, value).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the role | 
 **settingKey** | **String**|  | 
 **value** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md)| Possible values for default_visibility settings: 0...1. | 

### Return type

[**PostRoleSettings**](PostRoleSettings.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## addRole

> PostRoles addRole(opts)

Add a role

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let opts = {
  'parentRoleId': 56, // Number | The ID of the parent Role
  'name': "name_example" // String | The name of the Role
};
apiInstance.addRole(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentRoleId** | **Number**| The ID of the parent Role | [optional] 
 **name** | **String**| The name of the Role | [optional] 

### Return type

[**PostRoles**](PostRoles.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## addRoleAssignment

> PostRoleAssignment addRoleAssignment(id, userId)

Add role assignment

Add assignment for a role

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | ID of the role
let userId = 56; // Number | ID of the user
apiInstance.addRoleAssignment(id, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the role | 
 **userId** | **Number**| ID of the user | 

### Return type

[**PostRoleAssignment**](PostRoleAssignment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteRole

> DeleteRole deleteRole(id)

Delete a role

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | ID of the role
apiInstance.deleteRole(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the role | 

### Return type

[**DeleteRole**](DeleteRole.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRoleAssignment

> DeleteRoleAssignment deleteRoleAssignment(id, userId)

Delete a role assignment

Delete assignment from a role

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | ID of the role
let userId = 56; // Number | ID of the user
apiInstance.deleteRoleAssignment(id, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the role | 
 **userId** | **Number**| ID of the user | 

### Return type

[**DeleteRoleAssignment**](DeleteRoleAssignment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRole

> GetRole getRole(id)

Get one role

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | ID of the role
apiInstance.getRole(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the role | 

### Return type

[**GetRole**](GetRole.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoleAssignments

> GetRoleAssignments getRoleAssignments(id, opts)

List role assignments

List assignments for a role

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | ID of the role
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getRoleAssignments(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the role | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**GetRoleAssignments**](GetRoleAssignments.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoleSettings

> GetRoleSettings getRoleSettings(id)

List role settings

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | ID of the role
apiInstance.getRoleSettings(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the role | 

### Return type

[**GetRoleSettings**](GetRoleSettings.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoleSubRoles

> GetRoleSubroles getRoleSubRoles(id, opts)

List role sub-roles

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | ID of the role
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getRoleSubRoles(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the role | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**GetRoleSubroles**](GetRoleSubroles.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoles

> GetRoles getRoles(opts)

Get all roles

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getRoles(opts).then((data) => {
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

[**GetRoles**](GetRoles.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRole

> PutRole updateRole(id, opts)

Update role details

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | ID of the role
let opts = {
  'parentRoleId': 56, // Number | The ID of the parent Role
  'name': "name_example" // String | The name of the Role
};
apiInstance.updateRole(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the role | 
 **parentRoleId** | **Number**| The ID of the parent Role | [optional] 
 **name** | **String**| The name of the Role | [optional] 

### Return type

[**PutRole**](PutRole.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

