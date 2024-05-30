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
[**getRolePipelines**](RolesApi.md#getRolePipelines) | **GET** /roles/{id}/pipelines | List pipeline visibility for a role
[**getRoleSettings**](RolesApi.md#getRoleSettings) | **GET** /roles/{id}/settings | List role settings
[**getRoles**](RolesApi.md#getRoles) | **GET** /roles | Get all roles
[**updateRole**](RolesApi.md#updateRole) | **PUT** /roles/{id} | Update role details
[**updateRolePipelines**](RolesApi.md#updateRolePipelines) | **PUT** /roles/{id}/pipelines | Update pipeline visibility for a role



## addOrUpdateRoleSetting

> PostRoleSettings addOrUpdateRoleSetting(id, opts)

Add or update role setting

Adds or updates the visibility setting for a role.

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

let apiInstance = new Pipedrive.RolesApi(apiClient);
let id = 56; // Number | The ID of the role
let opts = Pipedrive.AddOrUpdateRoleSettingRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.addOrUpdateRoleSetting(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 
 **AddOrUpdateRoleSettingRequest** | [**AddOrUpdateRoleSettingRequest**](AddOrUpdateRoleSettingRequest.md)|  | [optional] 

### Return type

[**PostRoleSettings**](PostRoleSettings.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addRole

> PostRoles addRole(opts)

Add a role

Adds a new role.

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

let apiInstance = new Pipedrive.RolesApi(apiClient);
let opts = Pipedrive.AddRole.constructFromObject({
  // Properties that you want to update
});
apiInstance.addRole(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AddRole** | [**AddRole**](AddRole.md)|  | [optional] 

### Return type

[**PostRoles**](PostRoles.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addRoleAssignment

> PostRoleAssignment addRoleAssignment(id, opts)

Add role assignment

Assigns a user to a role.

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

let apiInstance = new Pipedrive.RolesApi(apiClient);
let id = 56; // Number | The ID of the role
let opts = Pipedrive.AddRoleAssignmentRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.addRoleAssignment(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 
 **AddRoleAssignmentRequest** | [**AddRoleAssignmentRequest**](AddRoleAssignmentRequest.md)|  | [optional] 

### Return type

[**PostRoleAssignment**](PostRoleAssignment.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRole

> DeleteRole deleteRole(id)

Delete a role

Marks a role as deleted.

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

let apiInstance = new Pipedrive.RolesApi(apiClient);
let id = 56; // Number | The ID of the role
apiInstance.deleteRole(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 

### Return type

[**DeleteRole**](DeleteRole.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRoleAssignment

> DeleteRoleAssignment deleteRoleAssignment(id, opts)

Delete a role assignment

Removes the assigned user from a role and adds to the default role.

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

let apiInstance = new Pipedrive.RolesApi(apiClient);
let id = 56; // Number | The ID of the role
let opts = Pipedrive.DeleteRoleAssignmentRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.deleteRoleAssignment(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 
 **DeleteRoleAssignmentRequest** | [**DeleteRoleAssignmentRequest**](DeleteRoleAssignmentRequest.md)|  | [optional] 

### Return type

[**DeleteRoleAssignment**](DeleteRoleAssignment.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRole

> GetRole getRole(id)

Get one role

Returns the details of a specific role.

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

let apiInstance = new Pipedrive.RolesApi(apiClient);
let id = 56; // Number | The ID of the role
apiInstance.getRole(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 

### Return type

[**GetRole**](GetRole.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoleAssignments

> GetRoleAssignments getRoleAssignments(id, opts)

List role assignments

Returns all users assigned to a role.

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

let apiInstance = new Pipedrive.RolesApi(apiClient);
let id = 56; // Number | The ID of the role
// snake_case as well as camelCase is supported for naming opts properties
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
 **id** | **Number**| The ID of the role | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**GetRoleAssignments**](GetRoleAssignments.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRolePipelines

> GetRolePipelines getRolePipelines(id, opts)

List pipeline visibility for a role

Returns the list of either visible or hidden pipeline IDs for a specific role. For more information on pipeline visibility, please refer to the &lt;a href&#x3D;\&quot;https://support.pipedrive.com/en/article/visibility-groups\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;Visibility groups article&lt;/a&gt;.

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

let apiInstance = new Pipedrive.RolesApi(apiClient);
let id = 56; // Number | The ID of the role
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'visible': true // Boolean | Whether to return the visible or hidden pipelines for the role
};
apiInstance.getRolePipelines(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 
 **visible** | **Boolean**| Whether to return the visible or hidden pipelines for the role | [optional] [default to true]

### Return type

[**GetRolePipelines**](GetRolePipelines.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoleSettings

> GetRoleSettings getRoleSettings(id)

List role settings

Returns the visibility settings of a specific role.

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

let apiInstance = new Pipedrive.RolesApi(apiClient);
let id = 56; // Number | The ID of the role
apiInstance.getRoleSettings(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 

### Return type

[**GetRoleSettings**](GetRoleSettings.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoles

> GetRoles getRoles(opts)

Get all roles

Returns all the roles within the company.

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

let apiInstance = new Pipedrive.RolesApi(apiClient);
// snake_case as well as camelCase is supported for naming opts properties
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

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRole

> PutRole updateRole(id, opts)

Update role details

Updates the parent role and/or the name of a specific role.

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

let apiInstance = new Pipedrive.RolesApi(apiClient);
let id = 56; // Number | The ID of the role
let opts = Pipedrive.BaseRole.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateRole(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 
 **BaseRole** | [**BaseRole**](BaseRole.md)|  | [optional] 

### Return type

[**PutRole**](PutRole.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRolePipelines

> GetRolePipelines updateRolePipelines(id, opts)

Update pipeline visibility for a role

Updates the specified pipelines to be visible and/or hidden for a specific role. For more information on pipeline visibility, please refer to the &lt;a href&#x3D;\&quot;https://support.pipedrive.com/en/article/visibility-groups\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;Visibility groups article&lt;/a&gt;.

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

let apiInstance = new Pipedrive.RolesApi(apiClient);
let id = 56; // Number | The ID of the role
let opts = Pipedrive.PutRolePipelinesBody.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateRolePipelines(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 
 **PutRolePipelinesBody** | [**PutRolePipelinesBody**](PutRolePipelinesBody.md)|  | [optional] 

### Return type

[**GetRolePipelines**](GetRolePipelines.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

