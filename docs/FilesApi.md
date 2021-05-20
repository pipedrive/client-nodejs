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

Lets you upload a file and associate it with Deal, Person, Organization, Activity or Product. For more information on how to add a file, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-a-file\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.FilesApi();
let file = "/path/to/file"; // File | A single file, supplied in the multipart/form-data encoding and contained within the given boundaries.
let opts = {
  'dealId': 56, // Number | ID of the deal to associate file(s) with
  'personId': 56, // Number | ID of the person to associate file(s) with
  'orgId': 56, // Number | ID of the organization to associate file(s) with
  'productId': 56, // Number | ID of the product to associate file(s) with
  'activityId': 56 // Number | ID of the activity to associate file(s) with
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
 **file** | **File**| A single file, supplied in the multipart/form-data encoding and contained within the given boundaries. | 
 **dealId** | **Number**| ID of the deal to associate file(s) with | [optional] 
 **personId** | **Number**| ID of the person to associate file(s) with | [optional] 
 **orgId** | **Number**| ID of the organization to associate file(s) with | [optional] 
 **productId** | **Number**| ID of the product to associate file(s) with | [optional] 
 **activityId** | **Number**| ID of the activity to associate file(s) with | [optional] 

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

Creates a new empty file in the remote location (&#x60;googledrive&#x60;) that will be linked to the item you supply. For more information on how to add a remote file, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-a-remote-file\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.FilesApi();
let fileType = "fileType_example"; // String | The file type
let title = "title_example"; // String | The title of the file
let itemType = "itemType_example"; // String | The item type
let itemId = 56; // Number | ID of the item to associate the file with
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
 **fileType** | **String**| The file type | 
 **title** | **String**| The title of the file | 
 **itemType** | **String**| The item type | 
 **itemId** | **Number**| ID of the item to associate the file with | 
 **remoteLocation** | **String**| The location type to send the file to. Only &#x60;googledrive&#x60; is supported at the moment. | 

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

Marks a file as deleted.

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

let apiInstance = new Pipedrive.FilesApi();
let id = 56; // Number | ID of the file
apiInstance.deleteFile(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the file | 

### Return type

[**DeleteFile**](DeleteFile.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## downloadFile

> File downloadFile(id)

Download one file

Initializes a file download.

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

let apiInstance = new Pipedrive.FilesApi();
let id = 56; // Number | ID of the file
apiInstance.downloadFile(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the file | 

### Return type

**File**

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
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Pipedrive.FilesApi();
let id = 56; // Number | ID of the file
apiInstance.getFile(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the file | 

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
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Pipedrive.FilesApi();
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'includeDeletedFiles': new Pipedrive.NumberBoolean(), // NumberBoolean | When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work.
  'sort': "sort_example" // String | Field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment.
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
 **includeDeletedFiles** | [**NumberBoolean**](.md)| When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work. | [optional] 
 **sort** | **String**| Field names and sorting mode separated by a comma (&#x60;field_name_1 ASC&#x60;, &#x60;field_name_2 DESC&#x60;). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment. | [optional] 

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

Links an existing remote file (&#x60;googledrive&#x60;) to the item you supply. For more information on how to link a remote file, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-a-remote-file\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.FilesApi();
let itemType = "itemType_example"; // String | The item type
let itemId = 56; // Number | ID of the item to associate the file with
let remoteId = "remoteId_example"; // String | The remote item id
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
 **itemType** | **String**| The item type | 
 **itemId** | **Number**| ID of the item to associate the file with | 
 **remoteId** | **String**| The remote item id | 
 **remoteLocation** | **String**| The location type to send the file to. Only &#x60;googledrive&#x60; is supported at the moment. | 

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
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Pipedrive.FilesApi();
let id = 56; // Number | ID of the file
let opts = {
  'name': "name_example", // String | Visible name of the file
  'description': "description_example" // String | Description of the file
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
 **id** | **Number**| ID of the file | 
 **name** | **String**| Visible name of the file | [optional] 
 **description** | **String**| Description of the file | [optional] 

### Return type

[**UpdateFile**](UpdateFile.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

