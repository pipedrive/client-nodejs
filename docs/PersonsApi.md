# Pipedrive.PersonsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPerson**](PersonsApi.md#addPerson) | **POST** /persons | Add a person
[**addPersonFollower**](PersonsApi.md#addPersonFollower) | **POST** /persons/{id}/followers | Add a follower to a person
[**addPersonPicture**](PersonsApi.md#addPersonPicture) | **POST** /persons/{id}/picture | Add person picture
[**deletePerson**](PersonsApi.md#deletePerson) | **DELETE** /persons/{id} | Delete a person
[**deletePersonFollower**](PersonsApi.md#deletePersonFollower) | **DELETE** /persons/{id}/followers/{follower_id} | Delete a follower from a person
[**deletePersonPicture**](PersonsApi.md#deletePersonPicture) | **DELETE** /persons/{id}/picture | Delete person picture
[**deletePersons**](PersonsApi.md#deletePersons) | **DELETE** /persons | Delete multiple persons in bulk
[**getPerson**](PersonsApi.md#getPerson) | **GET** /persons/{id} | Get details of a person
[**getPersonActivities**](PersonsApi.md#getPersonActivities) | **GET** /persons/{id}/activities | List activities associated with a person
[**getPersonDeals**](PersonsApi.md#getPersonDeals) | **GET** /persons/{id}/deals | List deals associated with a person
[**getPersonFiles**](PersonsApi.md#getPersonFiles) | **GET** /persons/{id}/files | List files attached to a person
[**getPersonFollowers**](PersonsApi.md#getPersonFollowers) | **GET** /persons/{id}/followers | List followers of a person
[**getPersonMailMessages**](PersonsApi.md#getPersonMailMessages) | **GET** /persons/{id}/mailMessages | List mail messages associated with a person
[**getPersonProducts**](PersonsApi.md#getPersonProducts) | **GET** /persons/{id}/products | List products associated with a person
[**getPersonUpdates**](PersonsApi.md#getPersonUpdates) | **GET** /persons/{id}/flow | List updates about a person
[**getPersonUsers**](PersonsApi.md#getPersonUsers) | **GET** /persons/{id}/permittedUsers | List permitted users
[**getPersons**](PersonsApi.md#getPersons) | **GET** /persons | Get all persons
[**mergePersons**](PersonsApi.md#mergePersons) | **PUT** /persons/{id}/merge | Merge two persons
[**searchPersons**](PersonsApi.md#searchPersons) | **GET** /persons/search | Search persons
[**updatePerson**](PersonsApi.md#updatePerson) | **PUT** /persons/{id} | Update a person



## addPerson

> AddPersonResponse addPerson(opts)

Add a person

Adds a new person. Note that you can supply additional custom fields along with the request that are not described here. These custom fields are different for each Pipedrive account and can be recognized by long hashes as keys. To determine which custom fields exists, fetch the personFields and look for &#x60;key&#x60; values.&lt;br&gt;If a company uses the [Campaigns product](https://pipedrive.readme.io/docs/campaigns-in-pipedrive-api), then this endpoint will also accept and return the &#x60;data.marketing_status&#x60; field.

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

let apiInstance = new Pipedrive.PersonsApi();
let opts = Pipedrive.NewPerson.constructFromObject({
  // Properties that you want to update
});
apiInstance.addPerson(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newPerson** | [**NewPerson**](NewPerson.md)|  | [optional] 

### Return type

[**AddPersonResponse**](AddPersonResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addPersonFollower

> AddFollowerToPersonResponse addPersonFollower(id, opts)

Add a follower to a person

Adds a follower to a person.

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

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
let opts = Pipedrive.AddPersonFollowerRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.addPersonFollower(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 
 **addPersonFollowerRequest** | [**AddPersonFollowerRequest**](AddPersonFollowerRequest.md)|  | [optional] 

### Return type

[**AddFollowerToPersonResponse**](AddFollowerToPersonResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addPersonPicture

> AddPersonPictureResponse addPersonPicture(id, file, opts)

Add person picture

Adds a picture to a person. If a picture is already set, the old picture will be replaced. Added image (or the cropping parameters supplied with the request) should have an equal width and height and should be at least 128 pixels. GIF, JPG and PNG are accepted. All added images will be resized to 128 and 512 pixel wide squares.

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

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
let file = "/path/to/file"; // File | One image supplied in the multipart/form-data encoding
let opts = {
  'cropX': 56, // Number | X coordinate to where start cropping form (in pixels)
  'cropY': 56, // Number | Y coordinate to where start cropping form (in pixels)
  'cropWidth': 56, // Number | The width of the cropping area (in pixels)
  'cropHeight': 56 // Number | The height of the cropping area (in pixels)
};
apiInstance.addPersonPicture(id, file, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 
 **file** | **File**| One image supplied in the multipart/form-data encoding | 
 **cropX** | **Number**| X coordinate to where start cropping form (in pixels) | [optional] 
 **cropY** | **Number**| Y coordinate to where start cropping form (in pixels) | [optional] 
 **cropWidth** | **Number**| The width of the cropping area (in pixels) | [optional] 
 **cropHeight** | **Number**| The height of the cropping area (in pixels) | [optional] 

### Return type

[**AddPersonPictureResponse**](AddPersonPictureResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## deletePerson

> DeletePersonResponse deletePerson(id)

Delete a person

Marks a person as deleted.

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

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
apiInstance.deletePerson(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 

### Return type

[**DeletePersonResponse**](DeletePersonResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePersonFollower

> DeletePersonResponse deletePersonFollower(id, followerId)

Delete a follower from a person

Deletes a follower from a person.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
let followerId = 56; // Number | The ID of the follower
apiInstance.deletePersonFollower(id, followerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 
 **followerId** | **Number**| The ID of the follower | 

### Return type

[**DeletePersonResponse**](DeletePersonResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePersonPicture

> DeletePersonResponse deletePersonPicture(id)

Delete person picture

Deletes a person’s picture.

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

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
apiInstance.deletePersonPicture(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 

### Return type

[**DeletePersonResponse**](DeletePersonResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePersons

> DeletePersonsInBulkResponse deletePersons(opts)

Delete multiple persons in bulk

Marks multiple persons as deleted.

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

let apiInstance = new Pipedrive.PersonsApi();
let opts = {
  'ids': "ids_example" // String | The comma-separated IDs that will be deleted
};
apiInstance.deletePersons(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **String**| The comma-separated IDs that will be deleted | [optional] 

### Return type

[**DeletePersonsInBulkResponse**](DeletePersonsInBulkResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPerson

> GetPersonDetailsResponse getPerson(id)

Get details of a person

Returns the details of a person. Note that this also returns some additional fields which are not present when asking for all persons. Also note that custom fields appear as long hashes in the resulting data. These hashes can be mapped against the &#x60;key&#x60; value of personFields.&lt;br&gt;If a company uses the [Campaigns product](https://pipedrive.readme.io/docs/campaigns-in-pipedrive-api), then this endpoint will also return the &#x60;data.marketing_status&#x60; field.

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

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
apiInstance.getPerson(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 

### Return type

[**GetPersonDetailsResponse**](GetPersonDetailsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersonActivities

> ListActivitiesResponse getPersonActivities(id, opts)

List activities associated with a person

Lists activities associated with a person.

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

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'done': new Pipedrive.NumberBoolean(), // NumberBoolean | Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted, returns both Done and Not done activities.
  'exclude': "exclude_example" // String | A comma-separated string of activity IDs to exclude from result
};
apiInstance.getPersonActivities(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **done** | [**NumberBoolean**](.md)| Whether the activity is done or not. 0 &#x3D; Not done, 1 &#x3D; Done. If omitted, returns both Done and Not done activities. | [optional] 
 **exclude** | **String**| A comma-separated string of activity IDs to exclude from result | [optional] 

### Return type

[**ListActivitiesResponse**](ListActivitiesResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersonDeals

> ListDealsResponse getPersonDeals(id, opts)

List deals associated with a person

Lists deals associated with a person.

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

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'status': "'all_not_deleted'", // String | Only fetch deals with a specific status. If omitted, all not deleted deals are fetched.
  'sort': "sort_example" // String | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).
};
apiInstance.getPersonDeals(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **status** | **String**| Only fetch deals with a specific status. If omitted, all not deleted deals are fetched. | [optional] [default to &#39;all_not_deleted&#39;]
 **sort** | **String**| The field names and sorting mode separated by a comma (&#x60;field_name_1 ASC&#x60;, &#x60;field_name_2 DESC&#x60;). Only first-level field keys are supported (no nested keys). | [optional] 

### Return type

[**ListDealsResponse**](ListDealsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersonFiles

> ListFilesResponse getPersonFiles(id, opts)

List files attached to a person

Lists files associated with a person.

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

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'includeDeletedFiles': new Pipedrive.NumberBoolean(), // NumberBoolean | When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work.
  'sort': "sort_example" // String | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment.
};
apiInstance.getPersonFiles(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **includeDeletedFiles** | [**NumberBoolean**](.md)| When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work. | [optional] 
 **sort** | **String**| The field names and sorting mode separated by a comma (&#x60;field_name_1 ASC&#x60;, &#x60;field_name_2 DESC&#x60;). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment. | [optional] 

### Return type

[**ListFilesResponse**](ListFilesResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersonFollowers

> ListFollowersResponse getPersonFollowers(id)

List followers of a person

Lists the followers of a person.

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

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
apiInstance.getPersonFollowers(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 

### Return type

[**ListFollowersResponse**](ListFollowersResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersonMailMessages

> ListMailMessagesResponse getPersonMailMessages(id, opts)

List mail messages associated with a person

Lists mail messages associated with a person.

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

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getPersonMailMessages(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**ListMailMessagesResponse**](ListMailMessagesResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersonProducts

> ListPersonProductsResponse getPersonProducts(id, opts)

List products associated with a person

Lists products associated with a person.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getPersonProducts(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**ListPersonProductsResponse**](ListPersonProductsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersonUpdates

> PersonFlowResponse getPersonUpdates(id, opts)

List updates about a person

Lists updates about a person.&lt;br&gt;If a company uses the [Campaigns product](https://pipedrive.readme.io/docs/campaigns-in-pipedrive-api), then this endpoint&#39;s response will also include updates for the &#x60;marketing_status&#x60; field.

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

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'allChanges': "allChanges_example", // String | Whether to show custom field updates or not. 1 = Include custom field changes. If omitted returns changes without custom field updates.
  'items': "items_example" // String | A comma-separated string for filtering out item specific updates. (Possible values - call, activity, plannedActivity, change, note, deal, file, dealChange, personChange, organizationChange, follower, dealFollower, personFollower, organizationFollower, participant, comment, mailMessage, mailMessageWithAttachment, invoice, document, marketing_campaign_stat, marketing_status_change)
};
apiInstance.getPersonUpdates(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **allChanges** | **String**| Whether to show custom field updates or not. 1 &#x3D; Include custom field changes. If omitted returns changes without custom field updates. | [optional] 
 **items** | **String**| A comma-separated string for filtering out item specific updates. (Possible values - call, activity, plannedActivity, change, note, deal, file, dealChange, personChange, organizationChange, follower, dealFollower, personFollower, organizationFollower, participant, comment, mailMessage, mailMessageWithAttachment, invoice, document, marketing_campaign_stat, marketing_status_change) | [optional] 

### Return type

[**PersonFlowResponse**](PersonFlowResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersonUsers

> ListPermittedUsersResponse1 getPersonUsers(id)

List permitted users

List users permitted to access a person.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
apiInstance.getPersonUsers(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 

### Return type

[**ListPermittedUsersResponse1**](ListPermittedUsersResponse1.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersons

> GetAllPersonsResponse getPersons(opts)

Get all persons

Returns all persons.

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

let apiInstance = new Pipedrive.PersonsApi();
let opts = {
  'userId': 56, // Number | If supplied, only persons owned by the given user will be returned. However, `filter_id` takes precedence over `user_id` when both are supplied.
  'filterId': 56, // Number | The ID of the filter to use
  'firstChar': "firstChar_example", // String | If supplied, only persons whose name starts with the specified letter will be returned (case insensitive)
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'sort': "sort_example" // String | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).
};
apiInstance.getPersons(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| If supplied, only persons owned by the given user will be returned. However, &#x60;filter_id&#x60; takes precedence over &#x60;user_id&#x60; when both are supplied. | [optional] 
 **filterId** | **Number**| The ID of the filter to use | [optional] 
 **firstChar** | **String**| If supplied, only persons whose name starts with the specified letter will be returned (case insensitive) | [optional] 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **sort** | **String**| The field names and sorting mode separated by a comma (&#x60;field_name_1 ASC&#x60;, &#x60;field_name_2 DESC&#x60;). Only first-level field keys are supported (no nested keys). | [optional] 

### Return type

[**GetAllPersonsResponse**](GetAllPersonsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mergePersons

> MergePersonsResponse mergePersons(id, opts)

Merge two persons

Merges a person with another person. For more information on how to merge two persons, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/merging-two-persons\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
let opts = Pipedrive.MergePersonsRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.mergePersons(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 
 **mergePersonsRequest** | [**MergePersonsRequest**](MergePersonsRequest.md)|  | [optional] 

### Return type

[**MergePersonsResponse**](MergePersonsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchPersons

> PersonSearchResponse searchPersons(term, opts)

Search persons

Searches all persons by name, email, phone, notes and/or custom fields. This endpoint is a wrapper of &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/ItemSearch#searchItem\&quot;&gt;/v1/itemSearch&lt;/a&gt; with a narrower OAuth scope. Found persons can be filtered by organization ID.

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

let apiInstance = new Pipedrive.PersonsApi();
let term = "term_example"; // String | The search term to look for. Minimum 2 characters (or 1 if using `exact_match`).
let opts = {
  'fields': "fields_example", // String | A comma-separated string array. The fields to perform the search from. Defaults to all of them.
  'exactMatch': true, // Boolean | When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
  'organizationId': 56, // Number | Will filter persons by the provided organization ID. The upper limit of found persons associated with the organization is 2000.
  'includeFields': "includeFields_example", // String | Supports including optional fields in the results which are not provided by default
  'start': 0, // Number | Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.
  'limit': 56 // Number | Items shown per page
};
apiInstance.searchPersons(term, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| The search term to look for. Minimum 2 characters (or 1 if using &#x60;exact_match&#x60;). | 
 **fields** | **String**| A comma-separated string array. The fields to perform the search from. Defaults to all of them. | [optional] 
 **exactMatch** | **Boolean**| When enabled, only full exact matches against the given term are returned. It is &lt;b&gt;not&lt;/b&gt; case sensitive. | [optional] 
 **organizationId** | **Number**| Will filter persons by the provided organization ID. The upper limit of found persons associated with the organization is 2000. | [optional] 
 **includeFields** | **String**| Supports including optional fields in the results which are not provided by default | [optional] 
 **start** | **Number**| Pagination start. Note that the pagination is based on main results and does not include related items when using &#x60;search_for_related_items&#x60; parameter. | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**PersonSearchResponse**](PersonSearchResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePerson

> UpdatePersonResponse updatePerson(id, opts)

Update a person

Updates the properties of a person. For more information on how to update a person, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/updating-a-person\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.&lt;br&gt;If a company uses the [Campaigns product](https://pipedrive.readme.io/docs/campaigns-in-pipedrive-api), then this endpoint will also accept and return the &#x60;data.marketing_status&#x60; field.

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

let apiInstance = new Pipedrive.PersonsApi();
let id = 56; // Number | The ID of the person
let opts = Pipedrive.BasicPerson.constructFromObject({
  // Properties that you want to update
});
apiInstance.updatePerson(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the person | 
 **basicPerson** | [**BasicPerson**](BasicPerson.md)|  | [optional] 

### Return type

[**UpdatePersonResponse**](UpdatePersonResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

