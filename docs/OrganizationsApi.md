# Pipedrive.OrganizationsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrganization**](OrganizationsApi.md#addOrganization) | **POST** /organizations | Add an organization
[**addOrganizationFollower**](OrganizationsApi.md#addOrganizationFollower) | **POST** /organizations/{id}/followers | Add a follower to an organization
[**deleteOrganization**](OrganizationsApi.md#deleteOrganization) | **DELETE** /organizations/{id} | Delete an organization
[**deleteOrganizationFollower**](OrganizationsApi.md#deleteOrganizationFollower) | **DELETE** /organizations/{id}/followers/{follower_id} | Delete a follower from an organization
[**deleteOrganizations**](OrganizationsApi.md#deleteOrganizations) | **DELETE** /organizations | Delete multiple organizations in bulk
[**getOrganization**](OrganizationsApi.md#getOrganization) | **GET** /organizations/{id} | Get details of an organization
[**getOrganizationActivities**](OrganizationsApi.md#getOrganizationActivities) | **GET** /organizations/{id}/activities | List activities associated with an organization
[**getOrganizationByName**](OrganizationsApi.md#getOrganizationByName) | **GET** /organizations/find | Find organizations by name
[**getOrganizationDeals**](OrganizationsApi.md#getOrganizationDeals) | **GET** /organizations/{id}/deals | List deals associated with an organization
[**getOrganizationFiles**](OrganizationsApi.md#getOrganizationFiles) | **GET** /organizations/{id}/files | List files attached to an organization
[**getOrganizationFollowers**](OrganizationsApi.md#getOrganizationFollowers) | **GET** /organizations/{id}/followers | List followers of an organization
[**getOrganizationMailMessages**](OrganizationsApi.md#getOrganizationMailMessages) | **GET** /organizations/{id}/mailMessages | List mail messages associated with an organization
[**getOrganizationPersons**](OrganizationsApi.md#getOrganizationPersons) | **GET** /organizations/{id}/persons | List persons of an organization
[**getOrganizationUpdates**](OrganizationsApi.md#getOrganizationUpdates) | **GET** /organizations/{id}/flow | List updates about an organization
[**getOrganizationUsers**](OrganizationsApi.md#getOrganizationUsers) | **GET** /organizations/{id}/permittedUsers | List permitted users
[**getOrganizations**](OrganizationsApi.md#getOrganizations) | **GET** /organizations | Get all organizations
[**mergeOrganizations**](OrganizationsApi.md#mergeOrganizations) | **PUT** /organizations/{id}/merge | Merge two organizations
[**searchOrganization**](OrganizationsApi.md#searchOrganization) | **GET** /organizations/search | Search organizations
[**updateOrganization**](OrganizationsApi.md#updateOrganization) | **PUT** /organizations/{id} | Update an organization



## addOrganization

> OrganizationPostResponse addOrganization(opts)

Add an organization

Adds a new organization. Note that you can supply additional custom fields along with the request that are not described here. These custom fields are different for each Pipedrive account and can be recognized by long hashes as keys. To determine which custom fields exists, fetch the organizationFields and look for &#x60;key&#x60; values. For more information on how to add an organization, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-an-organization\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let opts = {
  'name': "name_example", // String | Organization name
  'ownerId': 56, // Number | The ID of the user who will be marked as the owner of this Organization. When omitted, the authorized User ID will be used.
  'visibleTo': new Pipedrive.VisibleTo(), // VisibleTo | Visibility of the organization. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.<table><tr><th>Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers (private)</td></tr><tr><td>`3`</td><td>Entire company (shared)</td></tr></table>
  'addTime': "addTime_example" // String | Optional creation date & time of the organization in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
};
apiInstance.addOrganization(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Organization name | [optional] 
 **ownerId** | **Number**| The ID of the user who will be marked as the owner of this Organization. When omitted, the authorized User ID will be used. | [optional] 
 **visibleTo** | [**VisibleTo**](VisibleTo.md)| Visibility of the organization. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.&lt;table&gt;&lt;tr&gt;&lt;th&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner &amp;amp; followers (private)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Entire company (shared)&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; | [optional] 
 **addTime** | **String**| Optional creation date &amp; time of the organization in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS | [optional] 

### Return type

[**OrganizationPostResponse**](OrganizationPostResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## addOrganizationFollower

> OrganizationFollowerPostResponse addOrganizationFollower(id, userId)

Add a follower to an organization

Adds a follower to an organization.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let id = 56; // Number | The ID of the Organization
let userId = 56; // Number | The ID of the user
apiInstance.addOrganizationFollower(id, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Organization | 
 **userId** | **Number**| The ID of the user | 

### Return type

[**OrganizationFollowerPostResponse**](OrganizationFollowerPostResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteOrganization

> OrganizationDeleteResponse deleteOrganization(id)

Delete an organization

Marks an organization as deleted.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let id = 56; // Number | The ID of the Organization
apiInstance.deleteOrganization(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Organization | 

### Return type

[**OrganizationDeleteResponse**](OrganizationDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteOrganizationFollower

> OrganizationFollowerDeleteResponse deleteOrganizationFollower(id, followerId)

Delete a follower from an organization

Deletes a follower from an organization. You can retrieve the &#x60;follower_id&#x60; from the &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/Organizations#getOrganizationFollowers\&quot;&gt;List followers of an organization&lt;/a&gt; endpoint.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.OrganizationsApi();
let id = 56; // Number | The ID of the Organization
let followerId = 56; // Number | The ID of the follower
apiInstance.deleteOrganizationFollower(id, followerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Organization | 
 **followerId** | **Number**| The ID of the follower | 

### Return type

[**OrganizationFollowerDeleteResponse**](OrganizationFollowerDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteOrganizations

> OrganizationsDeleteResponse deleteOrganizations(ids)

Delete multiple organizations in bulk

Marks multiple organizations as deleted.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let ids = "ids_example"; // String | Comma-separated IDs that will be deleted
apiInstance.deleteOrganizations(ids).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **String**| Comma-separated IDs that will be deleted | 

### Return type

[**OrganizationsDeleteResponse**](OrganizationsDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganization

> OrganizationDetailsGetResponse getOrganization(id)

Get details of an organization

Returns details of an organization. Note that this also returns some additional fields which are not present when asking for all organizations. Also note that custom fields appear as long hashes in the resulting data. These hashes can be mapped against the &#x60;key&#x60; value of organizationFields.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let id = 56; // Number | The ID of the Organization
apiInstance.getOrganization(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Organization | 

### Return type

[**OrganizationDetailsGetResponse**](OrganizationDetailsGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationActivities

> ListActivitiesResponse getOrganizationActivities(id, opts)

List activities associated with an organization

Lists activities associated with an organization.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let id = 56; // Number | The ID of the Organization
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'done': new Pipedrive.NumberBoolean(), // NumberBoolean | Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both Done and Not done activities.
  'exclude': "exclude_example" // String | A comma-separated string of activity IDs to exclude from result
};
apiInstance.getOrganizationActivities(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Organization | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **done** | [**NumberBoolean**](.md)| Whether the activity is done or not. 0 &#x3D; Not done, 1 &#x3D; Done. If omitted returns both Done and Not done activities. | [optional] 
 **exclude** | **String**| A comma-separated string of activity IDs to exclude from result | [optional] 

### Return type

[**ListActivitiesResponse**](ListActivitiesResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationByName

> Object getOrganizationByName(term, opts)

Find organizations by name

This endpoint is deprecated. Please use &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/Organizations#searchOrganization\&quot;&gt;/v1/organizations/search&lt;/a&gt; or &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/ItemSearch#searchItem\&quot;&gt;/v1/itemSearch&lt;/a&gt; instead. &lt;br&gt; Searches all organizations by their name.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let term = "term_example"; // String | Search term to look for
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getOrganizationByName(term, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| Search term to look for | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationDeals

> ListDealsResponse getOrganizationDeals(id, opts)

List deals associated with an organization

Lists deals associated with an organization.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let id = 56; // Number | The ID of the Organization
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'status': "'all_not_deleted'", // String | Only fetch deals with specific status. If omitted, all not deleted deals are fetched.
  'sort': "sort_example", // String | Field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).
  'onlyPrimaryAssociation': new Pipedrive.NumberBoolean() // NumberBoolean | If set, only deals that are directly associated to the organization are fetched. If not set (default), all deals are fetched that are either directly or indirectly related to the organization. Indirect relations include relations through custom, organization-type fields and through persons of the given organization.
};
apiInstance.getOrganizationDeals(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Organization | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **status** | **String**| Only fetch deals with specific status. If omitted, all not deleted deals are fetched. | [optional] [default to &#39;all_not_deleted&#39;]
 **sort** | **String**| Field names and sorting mode separated by a comma (&#x60;field_name_1 ASC&#x60;, &#x60;field_name_2 DESC&#x60;). Only first-level field keys are supported (no nested keys). | [optional] 
 **onlyPrimaryAssociation** | [**NumberBoolean**](.md)| If set, only deals that are directly associated to the organization are fetched. If not set (default), all deals are fetched that are either directly or indirectly related to the organization. Indirect relations include relations through custom, organization-type fields and through persons of the given organization. | [optional] 

### Return type

[**ListDealsResponse**](ListDealsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationFiles

> ListFilesResponse getOrganizationFiles(id, opts)

List files attached to an organization

Lists files associated with an organization.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let id = 56; // Number | The ID of the Organization
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'includeDeletedFiles': new Pipedrive.NumberBoolean(), // NumberBoolean | When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work.
  'sort': "sort_example" // String | Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment.
};
apiInstance.getOrganizationFiles(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Organization | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **includeDeletedFiles** | [**NumberBoolean**](.md)| When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work. | [optional] 
 **sort** | **String**| Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment. | [optional] 

### Return type

[**ListFilesResponse**](ListFilesResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationFollowers

> OrganizationFollowersListResponse getOrganizationFollowers(id)

List followers of an organization

Lists the followers of an organization.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let id = 56; // Number | The ID of the Organization
apiInstance.getOrganizationFollowers(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Organization | 

### Return type

[**OrganizationFollowersListResponse**](OrganizationFollowersListResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationMailMessages

> ListMailMessagesResponse getOrganizationMailMessages(id, opts)

List mail messages associated with an organization

Lists mail messages associated with an organization.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let id = 56; // Number | The ID of the Organization
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getOrganizationMailMessages(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Organization | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**ListMailMessagesResponse**](ListMailMessagesResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationPersons

> ListPersonsResponse getOrganizationPersons(id, opts)

List persons of an organization

Lists persons associated with an organization.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let id = 56; // Number | The ID of the Organization
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getOrganizationPersons(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Organization | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**ListPersonsResponse**](ListPersonsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationUpdates

> OrganizationFlowResponse getOrganizationUpdates(id, opts)

List updates about an organization

Lists updates about an organization.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let id = 56; // Number | The ID of the Organization
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'allChanges': "allChanges_example", // String | Whether to show custom field updates or not. 1 = Include custom field changes. If omitted returns changes without custom field updates.
  'items': "items_example" // String | A comma-separated string for filtering out item specific updates. (Possible values - activity, plannedActivity, note, file, change, deal, follower, participant, mailMessage, mailMessageWithAttachment, invoice, activityFile, document)
};
apiInstance.getOrganizationUpdates(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Organization | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **allChanges** | **String**| Whether to show custom field updates or not. 1 &#x3D; Include custom field changes. If omitted returns changes without custom field updates. | [optional] 
 **items** | **String**| A comma-separated string for filtering out item specific updates. (Possible values - activity, plannedActivity, note, file, change, deal, follower, participant, mailMessage, mailMessageWithAttachment, invoice, activityFile, document) | [optional] 

### Return type

[**OrganizationFlowResponse**](OrganizationFlowResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationUsers

> ListPermittedUsersResponse1 getOrganizationUsers(id)

List permitted users

List users permitted to access an organization

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.OrganizationsApi();
let id = 56; // Number | The ID of the Organization
apiInstance.getOrganizationUsers(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Organization | 

### Return type

[**ListPermittedUsersResponse1**](ListPermittedUsersResponse1.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizations

> AllOrganizationsGetResponse getOrganizations(opts)

Get all organizations

Returns all organizations

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

let apiInstance = new Pipedrive.OrganizationsApi();
let opts = {
  'userId': 56, // Number | If supplied, only organizations owned by the given user will be returned. However, `filter_id` takes precedence over `user_id` when both are supplied.
  'filterId': 56, // Number | ID of the filter to use
  'firstChar': "firstChar_example", // String | If supplied, only organizations whose name starts with the specified letter will be returned (case insensitive).
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'sort': "sort_example" // String | Field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).
};
apiInstance.getOrganizations(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| If supplied, only organizations owned by the given user will be returned. However, &#x60;filter_id&#x60; takes precedence over &#x60;user_id&#x60; when both are supplied. | [optional] 
 **filterId** | **Number**| ID of the filter to use | [optional] 
 **firstChar** | **String**| If supplied, only organizations whose name starts with the specified letter will be returned (case insensitive). | [optional] 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **sort** | **String**| Field names and sorting mode separated by a comma (&#x60;field_name_1 ASC&#x60;, &#x60;field_name_2 DESC&#x60;). Only first-level field keys are supported (no nested keys). | [optional] 

### Return type

[**AllOrganizationsGetResponse**](AllOrganizationsGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mergeOrganizations

> OrganizationsMergeResponse mergeOrganizations(id, mergeWithId)

Merge two organizations

Merges an organization with another organization. For more information on how to merge two organizations, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/merging-two-organizations\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let id = 56; // Number | The ID of the Organization
let mergeWithId = 56; // Number | The ID of the Organization that the Organization will be merged with
apiInstance.mergeOrganizations(id, mergeWithId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Organization | 
 **mergeWithId** | **Number**| The ID of the Organization that the Organization will be merged with | 

### Return type

[**OrganizationsMergeResponse**](OrganizationsMergeResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## searchOrganization

> OrganizationSearchResponse searchOrganization(term, opts)

Search organizations

Searches all Organizations by name, address, notes and/or custom fields. This endpoint is a wrapper of &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/ItemSearch#searchItem\&quot;&gt;/v1/itemSearch&lt;/a&gt; with a narrower OAuth scope.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let term = "term_example"; // String | The search term to look for. Minimum 2 characters (or 1 if using `exact_match`).
let opts = {
  'fields': "fields_example", // String | A comma-separated string array. The fields to perform the search from. Defaults to all of them.
  'exactMatch': true, // Boolean | When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
  'start': 0, // Number | Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.
  'limit': 56 // Number | Items shown per page
};
apiInstance.searchOrganization(term, opts).then((data) => {
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
 **start** | **Number**| Pagination start. Note that the pagination is based on main results and does not include related items when using &#x60;search_for_related_items&#x60; parameter. | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**OrganizationSearchResponse**](OrganizationSearchResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateOrganization

> OrganizationUpdateResponse updateOrganization(id, opts)

Update an organization

Updates the properties of an organization.

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

let apiInstance = new Pipedrive.OrganizationsApi();
let id = 56; // Number | The ID of the Organization
let opts = {
  'name': "name_example", // String | Organization name
  'ownerId': 56, // Number | The ID of the user who will be marked as the owner of this Organization. When omitted, the authorized User ID will be used.
  'visibleTo': new Pipedrive.VisibleTo() // VisibleTo | Visibility of the organization. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.<table><tr><th>Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers (private)</td></tr><tr><td>`3`</td><td>Entire company (shared)</td></tr></table>
};
apiInstance.updateOrganization(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Organization | 
 **name** | **String**| Organization name | [optional] 
 **ownerId** | **Number**| The ID of the user who will be marked as the owner of this Organization. When omitted, the authorized User ID will be used. | [optional] 
 **visibleTo** | [**VisibleTo**](VisibleTo.md)| Visibility of the organization. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.&lt;table&gt;&lt;tr&gt;&lt;th&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner &amp;amp; followers (private)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Entire company (shared)&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; | [optional] 

### Return type

[**OrganizationUpdateResponse**](OrganizationUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

