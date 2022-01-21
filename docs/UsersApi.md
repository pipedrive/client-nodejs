# Pipedrive.UsersApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUser**](UsersApi.md#addUser) | **POST** /users | Add a new user
[**addUserRoleAssignment**](UsersApi.md#addUserRoleAssignment) | **POST** /users/{id}/roleAssignments | Add role assignment
[**deleteUserRoleAssignment**](UsersApi.md#deleteUserRoleAssignment) | **DELETE** /users/{id}/roleAssignments | Delete a role assignment
[**findUsersByName**](UsersApi.md#findUsersByName) | **GET** /users/find | Find users by name
[**getCurrentUser**](UsersApi.md#getCurrentUser) | **GET** /users/me | Get current user data
[**getUser**](UsersApi.md#getUser) | **GET** /users/{id} | Get one user
[**getUserFollowers**](UsersApi.md#getUserFollowers) | **GET** /users/{id}/followers | List followers of a user
[**getUserPermissions**](UsersApi.md#getUserPermissions) | **GET** /users/{id}/permissions | List user permissions
[**getUserRoleAssignments**](UsersApi.md#getUserRoleAssignments) | **GET** /users/{id}/roleAssignments | List role assignments
[**getUserRoleSettings**](UsersApi.md#getUserRoleSettings) | **GET** /users/{id}/roleSettings | List user role settings
[**getUsers**](UsersApi.md#getUsers) | **GET** /users | Get all users
[**updateUser**](UsersApi.md#updateUser) | **PUT** /users/{id} | Update user details



## addUser

> User addUser(name, email, activeFlag)

Add a new user

Adds a new user to the company, returns the ID upon success.

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

let apiInstance = new Pipedrive.UsersApi();
let name = "name_example"; // String | The name of the user
let email = "email_example"; // String | The email of the user
let activeFlag = true; // Boolean | Whether the user is active or not. `false` = Not activated, `true` = Activated
apiInstance.addUser(name, email, activeFlag).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the user | 
 **email** | **String**| The email of the user | 
 **activeFlag** | **Boolean**| Whether the user is active or not. &#x60;false&#x60; &#x3D; Not activated, &#x60;true&#x60; &#x3D; Activated | [default to true]

### Return type

[**User**](User.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## addUserRoleAssignment

> PostRoleAssignment addUserRoleAssignment(id, roleId)

Add role assignment

Adds a role assignment for a user.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.UsersApi();
let id = 56; // Number | The ID of the user
let roleId = 56; // Number | The ID of the role
apiInstance.addUserRoleAssignment(id, roleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the user | 
 **roleId** | **Number**| The ID of the role | 

### Return type

[**PostRoleAssignment**](PostRoleAssignment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteUserRoleAssignment

> DeleteRoleAssignment deleteUserRoleAssignment(id, roleId)

Delete a role assignment

Deletes a role assignment for a user.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.UsersApi();
let id = 56; // Number | The ID of the user
let roleId = 56; // Number | The ID of the role
apiInstance.deleteUserRoleAssignment(id, roleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the user | 
 **roleId** | **Number**| The ID of the role | 

### Return type

[**DeleteRoleAssignment**](DeleteRoleAssignment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## findUsersByName

> Users findUsersByName(term, opts)

Find users by name

Finds users by their name.

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

let apiInstance = new Pipedrive.UsersApi();
let term = "term_example"; // String | The search term to look for
let opts = {
  'searchByEmail': new Pipedrive.NumberBooleanDefault0() // NumberBooleanDefault0 | When enabled, the term will only be matched against email addresses of users. Default: `false`
};
apiInstance.findUsersByName(term, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| The search term to look for | 
 **searchByEmail** | [**NumberBooleanDefault0**](.md)| When enabled, the term will only be matched against email addresses of users. Default: &#x60;false&#x60; | [optional] 

### Return type

[**Users**](Users.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrentUser

> UserMe getCurrentUser()

Get current user data

Returns data about an authorized user within the company with bound company data: company ID, company name, and domain. Note that the &#x60;locale&#x60; property means &#39;Date/number format&#39; in the Pipedrive account settings, not the chosen language.

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

let apiInstance = new Pipedrive.UsersApi();
apiInstance.getCurrentUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserMe**](UserMe.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> User getUser(id)

Get one user

Returns data about a specific user within the company.

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

let apiInstance = new Pipedrive.UsersApi();
let id = 56; // Number | The ID of the user
apiInstance.getUser(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the user | 

### Return type

[**User**](User.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserFollowers

> UserIDs getUserFollowers(id)

List followers of a user

Lists the followers of a specific user.

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

let apiInstance = new Pipedrive.UsersApi();
let id = 56; // Number | The ID of the user
apiInstance.getUserFollowers(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the user | 

### Return type

[**UserIDs**](UserIDs.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserPermissions

> UserPermissions getUserPermissions(id)

List user permissions

Lists aggregated permissions over all assigned permission sets for a user.

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

let apiInstance = new Pipedrive.UsersApi();
let id = 56; // Number | The ID of the user
apiInstance.getUserPermissions(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the user | 

### Return type

[**UserPermissions**](UserPermissions.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserRoleAssignments

> GetRoleAssignments getUserRoleAssignments(id, opts)

List role assignments

Lists role assignments for a user.

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

let apiInstance = new Pipedrive.UsersApi();
let id = 56; // Number | The ID of the user
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getUserRoleAssignments(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the user | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**GetRoleAssignments**](GetRoleAssignments.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserRoleSettings

> GetRoleSettings getUserRoleSettings(id)

List user role settings

Lists the settings of user&#39;s assigned role.

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

let apiInstance = new Pipedrive.UsersApi();
let id = 56; // Number | The ID of the user
apiInstance.getUserRoleSettings(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the user | 

### Return type

[**GetRoleSettings**](GetRoleSettings.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsers

> Users getUsers()

Get all users

Returns data about all users within the company.

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

let apiInstance = new Pipedrive.UsersApi();
apiInstance.getUsers().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Users**](Users.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUser

> User updateUser(id, activeFlag)

Update user details

Updates the properties of a user. Currently, only &#x60;active_flag&#x60; can be updated.

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

let apiInstance = new Pipedrive.UsersApi();
let id = 56; // Number | The ID of the user
let activeFlag = true; // Boolean | Whether the user is active or not. `false` = Not activated, `true` = Activated
apiInstance.updateUser(id, activeFlag).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the user | 
 **activeFlag** | **Boolean**| Whether the user is active or not. &#x60;false&#x60; &#x3D; Not activated, &#x60;true&#x60; &#x3D; Activated | [default to true]

### Return type

[**User**](User.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

