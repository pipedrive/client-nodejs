# Pipedrive.ProjectsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProject**](ProjectsApi.md#addProject) | **POST** /projects | Add a project
[**archiveProject**](ProjectsApi.md#archiveProject) | **POST** /projects/{id}/archive | Archive a project
[**deleteProject**](ProjectsApi.md#deleteProject) | **DELETE** /projects/{id} | Delete a project
[**getProject**](ProjectsApi.md#getProject) | **GET** /projects/{id} | Get details of a project
[**getProjectActivities**](ProjectsApi.md#getProjectActivities) | **GET** /projects/{id}/activities | Returns project activities
[**getProjectGroups**](ProjectsApi.md#getProjectGroups) | **GET** /projects/{id}/groups | Returns project groups
[**getProjectPlan**](ProjectsApi.md#getProjectPlan) | **GET** /projects/{id}/plan | Returns project plan
[**getProjectTasks**](ProjectsApi.md#getProjectTasks) | **GET** /projects/{id}/tasks | Returns project tasks
[**getProjects**](ProjectsApi.md#getProjects) | **GET** /projects | Get all projects
[**getProjectsBoards**](ProjectsApi.md#getProjectsBoards) | **GET** /projects/boards | Get all project boards
[**getProjectsPhases**](ProjectsApi.md#getProjectsPhases) | **GET** /projects/phases | Get project phases
[**putProjectPlanActivity**](ProjectsApi.md#putProjectPlanActivity) | **PUT** /projects/{id}/plan/activities/{activityId} | Update activity in project plan
[**putProjectPlanTask**](ProjectsApi.md#putProjectPlanTask) | **PUT** /projects/{id}/plan/tasks/{taskId} | Update task in project plan
[**updateProject**](ProjectsApi.md#updateProject) | **PUT** /projects/{id} | Update a project



## addProject

> AddProjectResponse201 addProject(opts)

Add a project

Adds a new project. Note that you can supply additional custom fields along with the request that are not described here. These custom fields are different for each Pipedrive account and can be recognized by long hashes as keys.

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

let apiInstance = new Pipedrive.ProjectsApi(apiClient);
let opts = Pipedrive.ProjectPostObject.constructFromObject({
  // Properties that you want to update
});
apiInstance.addProject(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPostObject** | [**ProjectPostObject**](ProjectPostObject.md)|  | [optional] 

### Return type

[**AddProjectResponse201**](AddProjectResponse201.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## archiveProject

> UpdateProjectResponse200 archiveProject(id)

Archive a project

Archives a project.

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

let apiInstance = new Pipedrive.ProjectsApi(apiClient);
let id = 56; // Number | The ID of the project
apiInstance.archiveProject(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the project | 

### Return type

[**UpdateProjectResponse200**](UpdateProjectResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProject

> DeleteProjectResponse200 deleteProject(id)

Delete a project

Marks a project as deleted.

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

let apiInstance = new Pipedrive.ProjectsApi(apiClient);
let id = 56; // Number | The ID of the project
apiInstance.deleteProject(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the project | 

### Return type

[**DeleteProjectResponse200**](DeleteProjectResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProject

> GetProjectResponse200 getProject(id)

Get details of a project

Returns the details of a specific project. Also note that custom fields appear as long hashes in the resulting data. These hashes can be mapped against the &#x60;key&#x60; value of project fields.

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

let apiInstance = new Pipedrive.ProjectsApi(apiClient);
let id = 56; // Number | The ID of the project
apiInstance.getProject(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the project | 

### Return type

[**GetProjectResponse200**](GetProjectResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectActivities

> GetActivitiesCollectionResponse200 getProjectActivities(id)

Returns project activities

Returns activities linked to a specific project.

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

let apiInstance = new Pipedrive.ProjectsApi(apiClient);
let id = 56; // Number | The ID of the project
apiInstance.getProjectActivities(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the project | 

### Return type

[**GetActivitiesCollectionResponse200**](GetActivitiesCollectionResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectGroups

> GetProjectGroupsResponse200 getProjectGroups(id)

Returns project groups

Returns all active groups under a specific project.

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

let apiInstance = new Pipedrive.ProjectsApi(apiClient);
let id = 56; // Number | The ID of the project
apiInstance.getProjectGroups(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the project | 

### Return type

[**GetProjectGroupsResponse200**](GetProjectGroupsResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectPlan

> GetProjectPlanResponse200 getProjectPlan(id)

Returns project plan

Returns information about items in a project plan. Items consists of tasks and activities and are linked to specific project phase and group.

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

let apiInstance = new Pipedrive.ProjectsApi(apiClient);
let id = 56; // Number | The ID of the project
apiInstance.getProjectPlan(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the project | 

### Return type

[**GetProjectPlanResponse200**](GetProjectPlanResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectTasks

> GetTasksResponse200 getProjectTasks(id)

Returns project tasks

Returns tasks linked to a specific project.

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

let apiInstance = new Pipedrive.ProjectsApi(apiClient);
let id = 56; // Number | The ID of the project
apiInstance.getProjectTasks(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the project | 

### Return type

[**GetTasksResponse200**](GetTasksResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjects

> GetProjectsResponse200 getProjects(opts)

Get all projects

Returns all projects. This is a cursor-paginated endpoint. For more information, please refer to our documentation on &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/core-api-concepts-pagination\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;pagination&lt;/a&gt;.

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

let apiInstance = new Pipedrive.ProjectsApi(apiClient);
let opts = {
  'cursor': "cursor_example", // String | For pagination, the marker (an opaque string value) representing the first item on the next page
  'limit': 100, // Number | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
  'filterId': 56, // Number | The ID of the filter to use
  'status': open,completed, // String | If supplied, includes only projects with the specified statuses. Possible values are `open`, `completed`, `canceled` and `deleted`. By default `deleted` projects are not returned.
  'phaseId': 56, // Number | If supplied, only projects in specified phase are returned
  'includeArchived': true // Boolean | If supplied with `true` then archived projects are also included in the response. By default only not archived projects are returned.
};
apiInstance.getProjects(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| For pagination, the marker (an opaque string value) representing the first item on the next page | [optional] 
 **limit** | **Number**| For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. | [optional] 
 **filterId** | **Number**| The ID of the filter to use | [optional] 
 **status** | **String**| If supplied, includes only projects with the specified statuses. Possible values are &#x60;open&#x60;, &#x60;completed&#x60;, &#x60;canceled&#x60; and &#x60;deleted&#x60;. By default &#x60;deleted&#x60; projects are not returned. | [optional] 
 **phaseId** | **Number**| If supplied, only projects in specified phase are returned | [optional] 
 **includeArchived** | **Boolean**| If supplied with &#x60;true&#x60; then archived projects are also included in the response. By default only not archived projects are returned. | [optional] 

### Return type

[**GetProjectsResponse200**](GetProjectsResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectsBoards

> GetProjectBoardsResponse200 getProjectsBoards()

Get all project boards

Returns all projects boards that are not deleted.

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

let apiInstance = new Pipedrive.ProjectsApi(apiClient);
apiInstance.getProjectsBoards().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetProjectBoardsResponse200**](GetProjectBoardsResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectsPhases

> GetProjectPhasesResponse200 getProjectsPhases(boardId)

Get project phases

Returns all active project phases under a specific board.

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

let apiInstance = new Pipedrive.ProjectsApi(apiClient);
let boardId = 1; // Number | ID of the board for which phases are requested
apiInstance.getProjectsPhases(boardId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **boardId** | **Number**| ID of the board for which phases are requested | 

### Return type

[**GetProjectPhasesResponse200**](GetProjectPhasesResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putProjectPlanActivity

> UpdatedActivityPlanItem200 putProjectPlanActivity(id, activityId, opts)

Update activity in project plan

Updates an activity phase or group in a project.

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

let apiInstance = new Pipedrive.ProjectsApi(apiClient);
let id = 56; // Number | The ID of the project
let activityId = 56; // Number | The ID of the activity
let opts = Pipedrive.ProjectPutPlanItemBodyObject.constructFromObject({
  // Properties that you want to update
});
apiInstance.putProjectPlanActivity(id, activityId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the project | 
 **activityId** | **Number**| The ID of the activity | 
 **projectPutPlanItemBodyObject** | [**ProjectPutPlanItemBodyObject**](ProjectPutPlanItemBodyObject.md)|  | [optional] 

### Return type

[**UpdatedActivityPlanItem200**](UpdatedActivityPlanItem200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putProjectPlanTask

> UpdatedTaskPlanItem200 putProjectPlanTask(id, taskId, opts)

Update task in project plan

Updates a task phase or group in a project.

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

let apiInstance = new Pipedrive.ProjectsApi(apiClient);
let id = 56; // Number | The ID of the project
let taskId = 56; // Number | The ID of the task
let opts = Pipedrive.ProjectPutPlanItemBodyObject.constructFromObject({
  // Properties that you want to update
});
apiInstance.putProjectPlanTask(id, taskId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the project | 
 **taskId** | **Number**| The ID of the task | 
 **projectPutPlanItemBodyObject** | [**ProjectPutPlanItemBodyObject**](ProjectPutPlanItemBodyObject.md)|  | [optional] 

### Return type

[**UpdatedTaskPlanItem200**](UpdatedTaskPlanItem200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProject

> UpdateProjectResponse200 updateProject(id, opts)

Update a project

Updates a project.

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

let apiInstance = new Pipedrive.ProjectsApi(apiClient);
let id = 56; // Number | The ID of the project
let opts = Pipedrive.ProjectPutObject.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateProject(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the project | 
 **projectPutObject** | [**ProjectPutObject**](ProjectPutObject.md)|  | [optional] 

### Return type

[**UpdateProjectResponse200**](UpdateProjectResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

