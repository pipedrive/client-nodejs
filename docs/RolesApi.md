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

Adds or updates the visibility setting for a role.

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
let id = 56; // Number | The ID of the role
let settingKey = "settingKey_example"; // String | 
let value = 56; // Number | Possible values for the `default_visibility` setting depending on the subscription plan:<br> <table class='role-setting'> <caption><b>Essential / Advanced plan</b></caption> <tr><th><b>Value</b></th><th><b>Description</b></th></tr> <tr><td>`1`</td><td>Owner & Followers</td></tr> <tr><td>`3`</td><td>Entire company</td></tr> </table> <br> <table class='role-setting'> <caption><b>Professional / Enterprise plan</b></caption> <tr><th><b>Value</b></th><th><b>Description</b></th></tr> <tr><td>`1`</td><td>Owner only</td></tr> <tr><td>`3`</td><td>Owner&#39;s visibility group</td></tr> <tr><td>`5`</td><td>Owner&#39;s visibility group and sub-groups</td></tr> <tr><td>`7`</td><td>Entire company</td></tr> </table> <br> Read more about visibility groups <a href='https://support.pipedrive.com/en/article/visibility-groups'>here</a>.
apiInstance.addOrUpdateRoleSetting(id, settingKey, value).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 
 **settingKey** | **String**|  | 
 **value** | **Number**| Possible values for the &#x60;default_visibility&#x60; setting depending on the subscription plan:&lt;br&gt; &lt;table class&#x3D;&#39;role-setting&#39;&gt; &lt;caption&gt;&lt;b&gt;Essential / Advanced plan&lt;/b&gt;&lt;/caption&gt; &lt;tr&gt;&lt;th&gt;&lt;b&gt;Value&lt;/b&gt;&lt;/th&gt;&lt;th&gt;&lt;b&gt;Description&lt;/b&gt;&lt;/th&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner &amp; Followers&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Entire company&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt; &lt;br&gt; &lt;table class&#x3D;&#39;role-setting&#39;&gt; &lt;caption&gt;&lt;b&gt;Professional / Enterprise plan&lt;/b&gt;&lt;/caption&gt; &lt;tr&gt;&lt;th&gt;&lt;b&gt;Value&lt;/b&gt;&lt;/th&gt;&lt;th&gt;&lt;b&gt;Description&lt;/b&gt;&lt;/th&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner only&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Owner&amp;#39;s visibility group&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&#x60;5&#x60;&lt;/td&gt;&lt;td&gt;Owner&amp;#39;s visibility group and sub-groups&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&#x60;7&#x60;&lt;/td&gt;&lt;td&gt;Entire company&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt; &lt;br&gt; Read more about visibility groups &lt;a href&#x3D;&#39;https://support.pipedrive.com/en/article/visibility-groups&#39;&gt;here&lt;/a&gt;. | 

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
  'parentRoleId': 56, // Number | The ID of the parent role
  'name': "name_example" // String | The name of the role
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
 **parentRoleId** | **Number**| The ID of the parent role | [optional] 
 **name** | **String**| The name of the role | [optional] 

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

Adds assignment for a role.

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
let id = 56; // Number | The ID of the role
let userId = 56; // Number | The ID of the user
apiInstance.addRoleAssignment(id, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 
 **userId** | **Number**| The ID of the user | 

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

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRoleAssignment

> DeleteRoleAssignment deleteRoleAssignment(id, userId)

Delete a role assignment

Deletes assignment from a role.

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
let id = 56; // Number | The ID of the role
let userId = 56; // Number | The ID of the user
apiInstance.deleteRoleAssignment(id, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 
 **userId** | **Number**| The ID of the user | 

### Return type

[**DeleteRoleAssignment**](DeleteRoleAssignment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
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

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoleAssignments

> GetRoleAssignments getRoleAssignments(id, opts)

List role assignments

Lists assignments for a role.

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
let id = 56; // Number | The ID of the role
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
let id = 56; // Number | The ID of the role
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
 **id** | **Number**| The ID of the role | 
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
let id = 56; // Number | The ID of the role
let opts = {
  'parentRoleId': 56, // Number | The ID of the parent role
  'name': "name_example" // String | The name of the role
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
 **id** | **Number**| The ID of the role | 
 **parentRoleId** | **Number**| The ID of the parent role | [optional] 
 **name** | **String**| The name of the role | [optional] 

### Return type

[**PutRole**](PutRole.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

