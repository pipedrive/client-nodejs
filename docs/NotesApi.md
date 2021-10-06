# Pipedrive.NotesApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNote**](NotesApi.md#addNote) | **POST** /notes | Add a note
[**deleteNote**](NotesApi.md#deleteNote) | **DELETE** /notes/{id} | Delete a note
[**getNote**](NotesApi.md#getNote) | **GET** /notes/{id} | Get one note
[**getNotes**](NotesApi.md#getNotes) | **GET** /notes | Get all notes
[**updateNote**](NotesApi.md#updateNote) | **PUT** /notes/{id} | Update a note



## addNote

> PostNote addNote(opts)

Add a note

Adds a new note.

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

let apiInstance = new Pipedrive.NotesApi();
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
 **addNoteRequest** | [**AddNoteRequest**](AddNoteRequest.md)|  | [optional] 

### Return type

[**PostNote**](PostNote.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteNote

> DeleteNote deleteNote(id)

Delete a note

Deletes a specific note.

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

let apiInstance = new Pipedrive.NotesApi();
let id = 56; // Number | ID of the note
apiInstance.deleteNote(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the note | 

### Return type

[**DeleteNote**](DeleteNote.md)

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
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Pipedrive.NotesApi();
let id = 56; // Number | ID of the note
apiInstance.getNote(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the note | 

### Return type

[**PostNote**](PostNote.md)

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
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Pipedrive.NotesApi();
let opts = {
  'userId': 56, // Number | The ID of the user whose notes to fetch. If omitted, notes by all users will be returned.
  'leadId': null, // String | The ID of the lead which notes to fetch. If omitted, notes about all leads will be returned.
  'dealId': 56, // Number | The ID of the deal which notes to fetch. If omitted, notes about all deals will be returned.
  'personId': 56, // Number | The ID of the person whose notes to fetch. If omitted, notes about all persons will be returned.
  'orgId': 56, // Number | The ID of the organization which notes to fetch. If omitted, notes about all organizations will be returned
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'sort': "sort_example", // String | Field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `content`, `add_time`, `update_time`.
  'startDate': new Date("2013-10-20"), // Date | Date in format of YYYY-MM-DD from which notes to fetch.
  'endDate': new Date("2013-10-20"), // Date | Date in format of YYYY-MM-DD until which notes to fetch to.
  'pinnedToLeadFlag': new Pipedrive.NumberBoolean(), // NumberBoolean | If set, then results are filtered by note to lead pinning state
  'pinnedToDealFlag': new Pipedrive.NumberBoolean(), // NumberBoolean | If set, then results are filtered by note to deal pinning state
  'pinnedToOrganizationFlag': new Pipedrive.NumberBoolean(), // NumberBoolean | If set, then results are filtered by note to organization pinning state
  'pinnedToPersonFlag': new Pipedrive.NumberBoolean() // NumberBoolean | If set, then results are filtered by note to person pinning state
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
 **userId** | **Number**| The ID of the user whose notes to fetch. If omitted, notes by all users will be returned. | [optional] 
 **leadId** | [**String**](.md)| The ID of the lead which notes to fetch. If omitted, notes about all leads will be returned. | [optional] 
 **dealId** | **Number**| The ID of the deal which notes to fetch. If omitted, notes about all deals will be returned. | [optional] 
 **personId** | **Number**| The ID of the person whose notes to fetch. If omitted, notes about all persons will be returned. | [optional] 
 **orgId** | **Number**| The ID of the organization which notes to fetch. If omitted, notes about all organizations will be returned | [optional] 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **sort** | **String**| Field names and sorting mode separated by a comma (&#x60;field_name_1 ASC&#x60;, &#x60;field_name_2 DESC&#x60;). Only first-level field keys are supported (no nested keys). Supported fields: &#x60;id&#x60;, &#x60;user_id&#x60;, &#x60;deal_id&#x60;, &#x60;person_id&#x60;, &#x60;org_id&#x60;, &#x60;content&#x60;, &#x60;add_time&#x60;, &#x60;update_time&#x60;. | [optional] 
 **startDate** | **Date**| Date in format of YYYY-MM-DD from which notes to fetch. | [optional] 
 **endDate** | **Date**| Date in format of YYYY-MM-DD until which notes to fetch to. | [optional] 
 **pinnedToLeadFlag** | [**NumberBoolean**](.md)| If set, then results are filtered by note to lead pinning state | [optional] 
 **pinnedToDealFlag** | [**NumberBoolean**](.md)| If set, then results are filtered by note to deal pinning state | [optional] 
 **pinnedToOrganizationFlag** | [**NumberBoolean**](.md)| If set, then results are filtered by note to organization pinning state | [optional] 
 **pinnedToPersonFlag** | [**NumberBoolean**](.md)| If set, then results are filtered by note to person pinning state | [optional] 

### Return type

[**GetNotes**](GetNotes.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateNote

> PostNote updateNote(id, opts)

Update a note

Updates a note.

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

let apiInstance = new Pipedrive.NotesApi();
let id = 56; // Number | ID of the note
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
 **id** | **Number**| ID of the note | 
 **note** | [**Note**](Note.md)|  | [optional] 

### Return type

[**PostNote**](PostNote.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

