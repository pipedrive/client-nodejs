# Pipedrive.TasksApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTask**](TasksApi.md#addTask) | **POST** /tasks | Add a task
[**deleteTask**](TasksApi.md#deleteTask) | **DELETE** /tasks/{id} | Delete a task
[**getTask**](TasksApi.md#getTask) | **GET** /tasks/{id} | Get details of a task
[**getTasks**](TasksApi.md#getTasks) | **GET** /tasks | Get all tasks
[**updateTask**](TasksApi.md#updateTask) | **PUT** /tasks/{id} | Update a task



## addTask

> AddTaskResponse addTask(opts)

Add a task

Adds a new task.

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

let apiInstance = new Pipedrive.TasksApi(apiClient);
let opts = Pipedrive.TaskPostObject.constructFromObject({
  // Properties that you want to update
});
apiInstance.addTask(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TaskPostObject** | [**TaskPostObject**](TaskPostObject.md)|  | [optional] 

### Return type

[**AddTaskResponse**](AddTaskResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTask

> DeleteTaskResponse deleteTask(id)

Delete a task

Marks a task as deleted. If the task has subtasks then those will also be deleted.

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

let apiInstance = new Pipedrive.TasksApi(apiClient);
let id = 56; // Number | The ID of the task
apiInstance.deleteTask(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the task | 

### Return type

[**DeleteTaskResponse**](DeleteTaskResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTask

> GetTaskResponse getTask(id)

Get details of a task

Returns the details of a specific task.

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

let apiInstance = new Pipedrive.TasksApi(apiClient);
let id = 56; // Number | The ID of the task
apiInstance.getTask(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the task | 

### Return type

[**GetTaskResponse**](GetTaskResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTasks

> GetTasksResponse getTasks(opts)

Get all tasks

Returns all tasks. This is a cursor-paginated endpoint. For more information, please refer to our documentation on &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/core-api-concepts-pagination\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;pagination&lt;/a&gt;.

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

let apiInstance = new Pipedrive.TasksApi(apiClient);
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'cursor': "cursor_example", // String | For pagination, the marker (an opaque string value) representing the first item on the next page
  'limit': 500, // Number | For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned.
  'assigneeId': 56, // Number | If supplied, only tasks that are assigned to this user are returned
  'projectId': 56, // Number | If supplied, only tasks that are assigned to this project are returned
  'parentTaskId': 56, // Number | If `null` is supplied then only parent tasks are returned. If integer is supplied then only subtasks of a specific task are returned. By default all tasks are returned.
  'done': new Pipedrive.NumberBoolean() // NumberBoolean | Whether the task is done or not. `0` = Not done, `1` = Done. If not omitted then returns both done and not done tasks.
};
apiInstance.getTasks(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| For pagination, the marker (an opaque string value) representing the first item on the next page | [optional] 
 **limit** | **Number**| For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned. | [optional] 
 **assignee_id** | **Number**| If supplied, only tasks that are assigned to this user are returned | [optional] 
 **project_id** | **Number**| If supplied, only tasks that are assigned to this project are returned | [optional] 
 **parent_task_id** | **Number**| If &#x60;null&#x60; is supplied then only parent tasks are returned. If integer is supplied then only subtasks of a specific task are returned. By default all tasks are returned. | [optional] 
 **done** | [**NumberBoolean**](.md)| Whether the task is done or not. &#x60;0&#x60; &#x3D; Not done, &#x60;1&#x60; &#x3D; Done. If not omitted then returns both done and not done tasks. | [optional] 

### Return type

[**GetTasksResponse**](GetTasksResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTask

> UpdateTaskResponse updateTask(id, opts)

Update a task

Updates a task.

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

let apiInstance = new Pipedrive.TasksApi(apiClient);
let id = 56; // Number | The ID of the task
let opts = Pipedrive.TaskPutObject.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateTask(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the task | 
 **TaskPutObject** | [**TaskPutObject**](TaskPutObject.md)|  | [optional] 

### Return type

[**UpdateTaskResponse**](UpdateTaskResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

