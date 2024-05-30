# Pipedrive.NotesApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNote**](NotesApi.md#addNote) | **POST** /notes | Add a note
[**addNoteComment**](NotesApi.md#addNoteComment) | **POST** /notes/{id}/comments | Add a comment to a note
[**deleteComment**](NotesApi.md#deleteComment) | **DELETE** /notes/{id}/comments/{commentId} | Delete a comment related to a note
[**deleteNote**](NotesApi.md#deleteNote) | **DELETE** /notes/{id} | Delete a note
[**getComment**](NotesApi.md#getComment) | **GET** /notes/{id}/comments/{commentId} | Get one comment
[**getNote**](NotesApi.md#getNote) | **GET** /notes/{id} | Get one note
[**getNoteComments**](NotesApi.md#getNoteComments) | **GET** /notes/{id}/comments | Get all comments for a note
[**getNotes**](NotesApi.md#getNotes) | **GET** /notes | Get all notes
[**updateCommentForNote**](NotesApi.md#updateCommentForNote) | **PUT** /notes/{id}/comments/{commentId} | Update a comment related to a note
[**updateNote**](NotesApi.md#updateNote) | **PUT** /notes/{id} | Update a note



## addNote

> PostNote addNote(opts)

Add a note

Adds a new note.

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

let apiInstance = new Pipedrive.NotesApi(apiClient);
let opts = Pipedrive.AddNoteRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.addNote(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AddNoteRequest** | [**AddNoteRequest**](AddNoteRequest.md)|  | [optional] 

### Return type

[**PostNote**](PostNote.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addNoteComment

> PostComment addNoteComment(id, opts)

Add a comment to a note

Adds a new comment to a note.

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

let apiInstance = new Pipedrive.NotesApi(apiClient);
let id = 56; // Number | The ID of the note
let opts = Pipedrive.CommentPostPutObject.constructFromObject({
  // Properties that you want to update
});
apiInstance.addNoteComment(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the note | 
 **CommentPostPutObject** | [**CommentPostPutObject**](CommentPostPutObject.md)|  | [optional] 

### Return type

[**PostComment**](PostComment.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteComment

> DeleteComment deleteComment(id, commentId)

Delete a comment related to a note

Deletes a comment.

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

let apiInstance = new Pipedrive.NotesApi(apiClient);
let id = 56; // Number | The ID of the note
let commentId = "commentId_example"; // String | The ID of the comment
apiInstance.deleteComment(id, commentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the note | 
 **commentId** | **String**| The ID of the comment | 

### Return type

[**DeleteComment**](DeleteComment.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteNote

> DeleteNote deleteNote(id)

Delete a note

Deletes a specific note.

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

let apiInstance = new Pipedrive.NotesApi(apiClient);
let id = 56; // Number | The ID of the note
apiInstance.deleteNote(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the note | 

### Return type

[**DeleteNote**](DeleteNote.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getComment

> PostComment getComment(id, commentId)

Get one comment

Returns the details of a comment.

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

let apiInstance = new Pipedrive.NotesApi(apiClient);
let id = 56; // Number | The ID of the note
let commentId = "commentId_example"; // String | The ID of the comment
apiInstance.getComment(id, commentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the note | 
 **commentId** | **String**| The ID of the comment | 

### Return type

[**PostComment**](PostComment.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNote

> PostNote getNote(id)

Get one note

Returns details about a specific note.

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

let apiInstance = new Pipedrive.NotesApi(apiClient);
let id = 56; // Number | The ID of the note
apiInstance.getNote(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the note | 

### Return type

[**PostNote**](PostNote.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNoteComments

> GetComments getNoteComments(id, opts)

Get all comments for a note

Returns all comments associated with a note.

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

let apiInstance = new Pipedrive.NotesApi(apiClient);
let id = 56; // Number | The ID of the note
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getNoteComments(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the note | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**GetComments**](GetComments.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNotes

> GetNotes getNotes(opts)

Get all notes

Returns all notes.

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

let apiInstance = new Pipedrive.NotesApi(apiClient);
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'userId': 56, // Number | The ID of the user whose notes to fetch. If omitted, notes by all users will be returned.
  'leadId': "leadId_example", // String | The ID of the lead which notes to fetch. If omitted, notes about all leads will be returned.
  'dealId': 56, // Number | The ID of the deal which notes to fetch. If omitted, notes about all deals will be returned.
  'personId': 56, // Number | The ID of the person whose notes to fetch. If omitted, notes about all persons will be returned.
  'orgId': 56, // Number | The ID of the organization which notes to fetch. If omitted, notes about all organizations will be returned.
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'sort': "sort_example", // String | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `content`, `add_time`, `update_time`.
  'startDate': new Date("2013-10-20"), // Date | The date in format of YYYY-MM-DD from which notes to fetch
  'endDate': new Date("2013-10-20"), // Date | The date in format of YYYY-MM-DD until which notes to fetch to
  'pinnedToLeadFlag': new Pipedrive.NumberBoolean(), // NumberBoolean | If set, the results are filtered by note to lead pinning state
  'pinnedToDealFlag': new Pipedrive.NumberBoolean(), // NumberBoolean | If set, the results are filtered by note to deal pinning state
  'pinnedToOrganizationFlag': new Pipedrive.NumberBoolean(), // NumberBoolean | If set, the results are filtered by note to organization pinning state
  'pinnedToPersonFlag': new Pipedrive.NumberBoolean() // NumberBoolean | If set, the results are filtered by note to person pinning state
};
apiInstance.getNotes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**| The ID of the user whose notes to fetch. If omitted, notes by all users will be returned. | [optional] 
 **lead_id** | **String**| The ID of the lead which notes to fetch. If omitted, notes about all leads will be returned. | [optional] 
 **deal_id** | **Number**| The ID of the deal which notes to fetch. If omitted, notes about all deals will be returned. | [optional] 
 **person_id** | **Number**| The ID of the person whose notes to fetch. If omitted, notes about all persons will be returned. | [optional] 
 **org_id** | **Number**| The ID of the organization which notes to fetch. If omitted, notes about all organizations will be returned. | [optional] 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **sort** | **String**| The field names and sorting mode separated by a comma (&#x60;field_name_1 ASC&#x60;, &#x60;field_name_2 DESC&#x60;). Only first-level field keys are supported (no nested keys). Supported fields: &#x60;id&#x60;, &#x60;user_id&#x60;, &#x60;deal_id&#x60;, &#x60;person_id&#x60;, &#x60;org_id&#x60;, &#x60;content&#x60;, &#x60;add_time&#x60;, &#x60;update_time&#x60;. | [optional] 
 **start_date** | **Date**| The date in format of YYYY-MM-DD from which notes to fetch | [optional] 
 **end_date** | **Date**| The date in format of YYYY-MM-DD until which notes to fetch to | [optional] 
 **pinned_to_lead_flag** | [**NumberBoolean**](.md)| If set, the results are filtered by note to lead pinning state | [optional] 
 **pinned_to_deal_flag** | [**NumberBoolean**](.md)| If set, the results are filtered by note to deal pinning state | [optional] 
 **pinned_to_organization_flag** | [**NumberBoolean**](.md)| If set, the results are filtered by note to organization pinning state | [optional] 
 **pinned_to_person_flag** | [**NumberBoolean**](.md)| If set, the results are filtered by note to person pinning state | [optional] 

### Return type

[**GetNotes**](GetNotes.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCommentForNote

> PostComment updateCommentForNote(id, commentId, opts)

Update a comment related to a note

Updates a comment related to a note.

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

let apiInstance = new Pipedrive.NotesApi(apiClient);
let id = 56; // Number | The ID of the note
let commentId = "commentId_example"; // String | The ID of the comment
let opts = Pipedrive.CommentPostPutObject.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateCommentForNote(id, commentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the note | 
 **commentId** | **String**| The ID of the comment | 
 **CommentPostPutObject** | [**CommentPostPutObject**](CommentPostPutObject.md)|  | [optional] 

### Return type

[**PostComment**](PostComment.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateNote

> PostNote updateNote(id, opts)

Update a note

Updates a note.

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

let apiInstance = new Pipedrive.NotesApi(apiClient);
let id = 56; // Number | The ID of the note
let opts = Pipedrive.Note.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateNote(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the note | 
 **Note** | [**Note**](Note.md)|  | [optional] 

### Return type

[**PostNote**](PostNote.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

