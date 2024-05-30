# Pipedrive.FilesApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFile**](FilesApi.md#addFile) | **POST** /files | Add file
[**addFileAndLinkIt**](FilesApi.md#addFileAndLinkIt) | **POST** /files/remote | Create a remote file and link it to an item
[**deleteFile**](FilesApi.md#deleteFile) | **DELETE** /files/{id} | Delete a file
[**downloadFile**](FilesApi.md#downloadFile) | **GET** /files/{id}/download | Download one file
[**getFile**](FilesApi.md#getFile) | **GET** /files/{id} | Get one file
[**getFiles**](FilesApi.md#getFiles) | **GET** /files | Get all files
[**linkFileToItem**](FilesApi.md#linkFileToItem) | **POST** /files/remoteLink | Link a remote file to an item
[**updateFile**](FilesApi.md#updateFile) | **PUT** /files/{id} | Update file details



## addFile

> AddFile addFile(file, opts)

Add file

Lets you upload a file and associate it with a deal, person, organization, activity, product or lead. For more information, see the tutorial for &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-a-file\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;adding a file&lt;/a&gt;.

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

let apiInstance = new Pipedrive.FilesApi(apiClient);
let file = "/path/to/file"; // File | A single file, supplied in the multipart/form-data encoding and contained within the given boundaries
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'dealId': 56, // Number | The ID of the deal to associate file(s) with
  'personId': 56, // Number | The ID of the person to associate file(s) with
  'orgId': 56, // Number | The ID of the organization to associate file(s) with
  'productId': 56, // Number | The ID of the product to associate file(s) with
  'activityId': 56, // Number | The ID of the activity to associate file(s) with
  'leadId': "leadId_example" // String | The ID of the lead to associate file(s) with
};
apiInstance.addFile(file, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| A single file, supplied in the multipart/form-data encoding and contained within the given boundaries | 
 **deal_id** | **Number**| The ID of the deal to associate file(s) with | [optional] 
 **person_id** | **Number**| The ID of the person to associate file(s) with | [optional] 
 **org_id** | **Number**| The ID of the organization to associate file(s) with | [optional] 
 **product_id** | **Number**| The ID of the product to associate file(s) with | [optional] 
 **activity_id** | **Number**| The ID of the activity to associate file(s) with | [optional] 
 **lead_id** | **String**| The ID of the lead to associate file(s) with | [optional] 

### Return type

[**AddFile**](AddFile.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## addFileAndLinkIt

> CreateRemoteFileAndLinkItToItem addFileAndLinkIt(fileType, title, itemType, itemId, remoteLocation)

Create a remote file and link it to an item

Creates a new empty file in the remote location (&#x60;googledrive&#x60;) that will be linked to the item you supply. For more information, see the tutorial for &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-a-remote-file\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;adding a remote file&lt;/a&gt;.

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

let apiInstance = new Pipedrive.FilesApi(apiClient);
let fileType = "fileType_example"; // String | The file type
let title = "title_example"; // String | The title of the file
let itemType = "itemType_example"; // String | The item type
let itemId = 56; // Number | The ID of the item to associate the file with
let remoteLocation = "remoteLocation_example"; // String | The location type to send the file to. Only `googledrive` is supported at the moment.
apiInstance.addFileAndLinkIt(fileType, title, itemType, itemId, remoteLocation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_type** | **String**| The file type | 
 **title** | **String**| The title of the file | 
 **item_type** | **String**| The item type | 
 **item_id** | **Number**| The ID of the item to associate the file with | 
 **remote_location** | **String**| The location type to send the file to. Only &#x60;googledrive&#x60; is supported at the moment. | 

### Return type

[**CreateRemoteFileAndLinkItToItem**](CreateRemoteFileAndLinkItToItem.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteFile

> DeleteFile deleteFile(id)

Delete a file

Marks a file as deleted. After 30 days, the file will be permanently deleted.

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

let apiInstance = new Pipedrive.FilesApi(apiClient);
let id = 56; // Number | The ID of the file
apiInstance.deleteFile(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the file | 

### Return type

[**DeleteFile**](DeleteFile.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## downloadFile

> Blob downloadFile(id)

Download one file

Initializes a file download.

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

let apiInstance = new Pipedrive.FilesApi(apiClient);
let id = 56; // Number | The ID of the file
apiInstance.downloadFile(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the file | 

### Return type

**Blob**

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## getFile

> GetOneFile getFile(id)

Get one file

Returns data about a specific file.

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

let apiInstance = new Pipedrive.FilesApi(apiClient);
let id = 56; // Number | The ID of the file
apiInstance.getFile(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the file | 

### Return type

[**GetOneFile**](GetOneFile.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFiles

> GetAllFiles getFiles(opts)

Get all files

Returns data about all files.

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

let apiInstance = new Pipedrive.FilesApi(apiClient);
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'sort': "sort_example" // String | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `product_id`, `add_time`, `update_time`, `file_name`, `file_type`, `file_size`, `comment`.
};
apiInstance.getFiles(opts).then((data) => {
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
 **sort** | **String**| The field names and sorting mode separated by a comma (&#x60;field_name_1 ASC&#x60;, &#x60;field_name_2 DESC&#x60;). Only first-level field keys are supported (no nested keys). Supported fields: &#x60;id&#x60;, &#x60;user_id&#x60;, &#x60;deal_id&#x60;, &#x60;person_id&#x60;, &#x60;org_id&#x60;, &#x60;product_id&#x60;, &#x60;add_time&#x60;, &#x60;update_time&#x60;, &#x60;file_name&#x60;, &#x60;file_type&#x60;, &#x60;file_size&#x60;, &#x60;comment&#x60;. | [optional] 

### Return type

[**GetAllFiles**](GetAllFiles.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## linkFileToItem

> LinkRemoteFileToItem linkFileToItem(itemType, itemId, remoteId, remoteLocation)

Link a remote file to an item

Links an existing remote file (&#x60;googledrive&#x60;) to the item you supply. For more information, see the tutorial for &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-a-remote-file\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;adding a remote file&lt;/a&gt;.

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

let apiInstance = new Pipedrive.FilesApi(apiClient);
let itemType = "itemType_example"; // String | The item type
let itemId = 56; // Number | The ID of the item to associate the file with
let remoteId = "remoteId_example"; // String | The remote item ID
let remoteLocation = "remoteLocation_example"; // String | The location type to send the file to. Only `googledrive` is supported at the moment.
apiInstance.linkFileToItem(itemType, itemId, remoteId, remoteLocation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_type** | **String**| The item type | 
 **item_id** | **Number**| The ID of the item to associate the file with | 
 **remote_id** | **String**| The remote item ID | 
 **remote_location** | **String**| The location type to send the file to. Only &#x60;googledrive&#x60; is supported at the moment. | 

### Return type

[**LinkRemoteFileToItem**](LinkRemoteFileToItem.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## updateFile

> UpdateFile updateFile(id, opts)

Update file details

Updates the properties of a file.

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

let apiInstance = new Pipedrive.FilesApi(apiClient);
let id = 56; // Number | The ID of the file
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'name': "name_example", // String | The visible name of the file
  'description': "description_example" // String | The description of the file
};
apiInstance.updateFile(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the file | 
 **name** | **String**| The visible name of the file | [optional] 
 **description** | **String**| The description of the file | [optional] 

### Return type

[**UpdateFile**](UpdateFile.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

