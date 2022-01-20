# Pipedrive.TeamsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTeam**](TeamsApi.md#addTeam) | **POST** /teams | Add a new team
[**addTeamUser**](TeamsApi.md#addTeamUser) | **POST** /teams/{id}/users | Add users to a team
[**deleteTeamUser**](TeamsApi.md#deleteTeamUser) | **DELETE** /teams/{id}/users | Delete users from a team
[**getTeam**](TeamsApi.md#getTeam) | **GET** /teams/{id} | Get a single team
[**getTeamUsers**](TeamsApi.md#getTeamUsers) | **GET** /teams/{id}/users | Get all users in a team
[**getTeams**](TeamsApi.md#getTeams) | **GET** /teams | Get all teams
[**getUserTeams**](TeamsApi.md#getUserTeams) | **GET** /teams/user/{id} | Get all teams of a user
[**updateTeam**](TeamsApi.md#updateTeam) | **PUT** /teams/{id} | Update a team



## addTeam

> Team addTeam(opts)

Add a new team

Adds a new team to the company and returns the created object.

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

let apiInstance = new Pipedrive.TeamsApi();
let opts = Pipedrive.CreateTeam.constructFromObject({
  // Properties that you want to update
});
apiInstance.addTeam(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTeam** | [**CreateTeam**](CreateTeam.md)|  | [optional] 

### Return type

[**Team**](Team.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addTeamUser

> UserIDs addTeamUser(id, opts)

Add users to a team

Adds users to an existing team.

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

let apiInstance = new Pipedrive.TeamsApi();
let id = 56; // Number | The ID of the team
let opts = Pipedrive.AddTeamUserRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.addTeamUser(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the team | 
 **addTeamUserRequest** | [**AddTeamUserRequest**](AddTeamUserRequest.md)|  | [optional] 

### Return type

[**UserIDs**](UserIDs.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTeamUser

> UserIDs deleteTeamUser(id, opts)

Delete users from a team

Deletes users from an existing team.

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

let apiInstance = new Pipedrive.TeamsApi();
let id = 56; // Number | The ID of the team
let opts = Pipedrive.DeleteTeamUserRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.deleteTeamUser(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the team | 
 **deleteTeamUserRequest** | [**DeleteTeamUserRequest**](DeleteTeamUserRequest.md)|  | [optional] 

### Return type

[**UserIDs**](UserIDs.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTeam

> Team getTeam(id, opts)

Get a single team

Returns data about a specific team.

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

let apiInstance = new Pipedrive.TeamsApi();
let id = 56; // Number | The ID of the team
let opts = {
  'skipUsers': new Pipedrive.NumberBooleanDefault0() // NumberBooleanDefault0 | When enabled, the teams will not include IDs of member users
};
apiInstance.getTeam(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the team | 
 **skipUsers** | [**NumberBooleanDefault0**](.md)| When enabled, the teams will not include IDs of member users | [optional] 

### Return type

[**Team**](Team.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamUsers

> UserIDs getTeamUsers(id)

Get all users in a team

Returns a list of all user IDs within a team.

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

let apiInstance = new Pipedrive.TeamsApi();
let id = 56; // Number | The ID of the team
apiInstance.getTeamUsers(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the team | 

### Return type

[**UserIDs**](UserIDs.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeams

> Teams getTeams(opts)

Get all teams

Returns data about teams within the company.

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

let apiInstance = new Pipedrive.TeamsApi();
let opts = {
  'orderBy': "'id'", // String | The field name to sort returned teams by
  'skipUsers': new Pipedrive.NumberBooleanDefault0() // NumberBooleanDefault0 | When enabled, the teams will not include IDs of member users
};
apiInstance.getTeams(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderBy** | **String**| The field name to sort returned teams by | [optional] [default to &#39;id&#39;]
 **skipUsers** | [**NumberBooleanDefault0**](.md)| When enabled, the teams will not include IDs of member users | [optional] 

### Return type

[**Teams**](Teams.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserTeams

> Teams getUserTeams(id, opts)

Get all teams of a user

Returns data about all teams which have the specified user as a member.

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

let apiInstance = new Pipedrive.TeamsApi();
let id = 56; // Number | The ID of the user
let opts = {
  'orderBy': "'id'", // String | The field name to sort returned teams by
  'skipUsers': new Pipedrive.NumberBooleanDefault0() // NumberBooleanDefault0 | When enabled, the teams will not include IDs of member users
};
apiInstance.getUserTeams(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the user | 
 **orderBy** | **String**| The field name to sort returned teams by | [optional] [default to &#39;id&#39;]
 **skipUsers** | [**NumberBooleanDefault0**](.md)| When enabled, the teams will not include IDs of member users | [optional] 

### Return type

[**Teams**](Teams.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTeam

> Team updateTeam(id, opts)

Update a team

Updates an existing team and returns the updated object.

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

let apiInstance = new Pipedrive.TeamsApi();
let id = 56; // Number | The ID of the team
let opts = Pipedrive.UpdateTeam.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateTeam(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the team | 
 **updateTeam** | [**UpdateTeam**](UpdateTeam.md)|  | [optional] 

### Return type

[**Team**](Team.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

