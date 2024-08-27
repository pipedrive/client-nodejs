# Pipedrive.LeadsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLead**](LeadsApi.md#addLead) | **POST** /leads | Add a lead
[**deleteLead**](LeadsApi.md#deleteLead) | **DELETE** /leads/{id} | Delete a lead
[**getLead**](LeadsApi.md#getLead) | **GET** /leads/{id} | Get one lead
[**getLeadUsers**](LeadsApi.md#getLeadUsers) | **GET** /leads/{id}/permittedUsers | List permitted users
[**getLeads**](LeadsApi.md#getLeads) | **GET** /leads | Get all leads
[**searchLeads**](LeadsApi.md#searchLeads) | **GET** /leads/search | Search leads
[**updateLead**](LeadsApi.md#updateLead) | **PATCH** /leads/{id} | Update a lead



## addLead

> GetLeadResponse addLead(opts)

Add a lead

Creates a lead. A lead always has to be linked to a person or an organization or both. All leads created through the Pipedrive API will have a lead source and origin set to &#x60;API&#x60;. Here&#39;s the tutorial for &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-a-lead\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;adding a lead&lt;/a&gt;. If a lead contains custom fields, the fields&#39; values will be included in the response in the same format as with the &#x60;Deals&#x60; endpoints. If a custom field&#39;s value hasn&#39;t been set for the lead, it won&#39;t appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields&#39; structure from deals. See an example given in the &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/updating-custom-field-value\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;updating custom fields&#39; values tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.LeadsApi(apiClient);
let opts = Pipedrive.AddLeadRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.addLead(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AddLeadRequest** | [**AddLeadRequest**](AddLeadRequest.md)|  | [optional] 

### Return type

[**GetLeadResponse**](GetLeadResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLead

> GetLeadIdResponse deleteLead(id)

Delete a lead

Deletes a specific lead.

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

let apiInstance = new Pipedrive.LeadsApi(apiClient);
let id = "id_example"; // String | The ID of the lead
apiInstance.deleteLead(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the lead | 

### Return type

[**GetLeadIdResponse**](GetLeadIdResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLead

> GetLeadResponse getLead(id)

Get one lead

Returns details of a specific lead. If a lead contains custom fields, the fields&#39; values will be included in the response in the same format as with the &#x60;Deals&#x60; endpoints. If a custom field&#39;s value hasn&#39;t been set for the lead, it won&#39;t appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from deals.

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

let apiInstance = new Pipedrive.LeadsApi(apiClient);
let id = "id_example"; // String | The ID of the lead
apiInstance.getLead(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the lead | 

### Return type

[**GetLeadResponse**](GetLeadResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeadUsers

> UserIDs getLeadUsers(id)

List permitted users

Lists the users permitted to access a lead.

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

let apiInstance = new Pipedrive.LeadsApi(apiClient);
let id = "id_example"; // String | The ID of the lead
apiInstance.getLeadUsers(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the lead | 

### Return type

[**UserIDs**](UserIDs.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeads

> GetLeadsResponse getLeads(opts)

Get all leads

Returns multiple leads. Leads are sorted by the time they were created, from oldest to newest. Pagination can be controlled using &#x60;limit&#x60; and &#x60;start&#x60; query parameters. If a lead contains custom fields, the fields&#39; values will be included in the response in the same format as with the &#x60;Deals&#x60; endpoints. If a custom field&#39;s value hasn&#39;t been set for the lead, it won&#39;t appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields&#39; structure from deals. 

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

let apiInstance = new Pipedrive.LeadsApi(apiClient);
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'limit': 100, // Number | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
  'start': 0, // Number | For pagination, the position that represents the first result for the page
  'archivedStatus': "archivedStatus_example", // String | Filtering based on the archived status of a lead. If not provided, `All` is used.
  'ownerId': 1, // Number | If supplied, only leads matching the given user will be returned. However, `filter_id` takes precedence over `owner_id` when supplied.
  'personId': 1, // Number | If supplied, only leads matching the given person will be returned. However, `filter_id` takes precedence over `person_id` when supplied.
  'organizationId': 1, // Number | If supplied, only leads matching the given organization will be returned. However, `filter_id` takes precedence over `organization_id` when supplied.
  'filterId': 1, // Number | The ID of the filter to use
  'sort': "sort_example" // String | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).
};
apiInstance.getLeads(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. | [optional] 
 **start** | **Number**| For pagination, the position that represents the first result for the page | [optional] 
 **archived_status** | **String**| Filtering based on the archived status of a lead. If not provided, &#x60;All&#x60; is used. | [optional] 
 **owner_id** | **Number**| If supplied, only leads matching the given user will be returned. However, &#x60;filter_id&#x60; takes precedence over &#x60;owner_id&#x60; when supplied. | [optional] 
 **person_id** | **Number**| If supplied, only leads matching the given person will be returned. However, &#x60;filter_id&#x60; takes precedence over &#x60;person_id&#x60; when supplied. | [optional] 
 **organization_id** | **Number**| If supplied, only leads matching the given organization will be returned. However, &#x60;filter_id&#x60; takes precedence over &#x60;organization_id&#x60; when supplied. | [optional] 
 **filter_id** | **Number**| The ID of the filter to use | [optional] 
 **sort** | **String**| The field names and sorting mode separated by a comma (&#x60;field_name_1 ASC&#x60;, &#x60;field_name_2 DESC&#x60;). Only first-level field keys are supported (no nested keys). | [optional] 

### Return type

[**GetLeadsResponse**](GetLeadsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchLeads

> LeadSearchResponse searchLeads(term, opts)

Search leads

Searches all leads by title, notes and/or custom fields. This endpoint is a wrapper of &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/ItemSearch#searchItem\&quot;&gt;/v1/itemSearch&lt;/a&gt; with a narrower OAuth scope. Found leads can be filtered by the person ID and the organization ID.

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

let apiInstance = new Pipedrive.LeadsApi(apiClient);
let term = "term_example"; // String | The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'fields': "fields_example", // String | A comma-separated string array. The fields to perform the search from. Defaults to all of them.
  'exactMatch': true, // Boolean | When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
  'personId': 56, // Number | Will filter leads by the provided person ID. The upper limit of found leads associated with the person is 2000.
  'organizationId': 56, // Number | Will filter leads by the provided organization ID. The upper limit of found leads associated with the organization is 2000.
  'includeFields': "includeFields_example", // String | Supports including optional fields in the results which are not provided by default
  'start': 0, // Number | Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.
  'limit': 56 // Number | Items shown per page
};
apiInstance.searchLeads(term, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| The search term to look for. Minimum 2 characters (or 1 if using &#x60;exact_match&#x60;). Please note that the search term has to be URL encoded. | 
 **fields** | **String**| A comma-separated string array. The fields to perform the search from. Defaults to all of them. | [optional] 
 **exact_match** | **Boolean**| When enabled, only full exact matches against the given term are returned. It is &lt;b&gt;not&lt;/b&gt; case sensitive. | [optional] 
 **person_id** | **Number**| Will filter leads by the provided person ID. The upper limit of found leads associated with the person is 2000. | [optional] 
 **organization_id** | **Number**| Will filter leads by the provided organization ID. The upper limit of found leads associated with the organization is 2000. | [optional] 
 **include_fields** | **String**| Supports including optional fields in the results which are not provided by default | [optional] 
 **start** | **Number**| Pagination start. Note that the pagination is based on main results and does not include related items when using &#x60;search_for_related_items&#x60; parameter. | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**LeadSearchResponse**](LeadSearchResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLead

> GetLeadResponse updateLead(id, opts)

Update a lead

Updates one or more properties of a lead. Only properties included in the request will be updated. Send &#x60;null&#x60; to unset a property (applicable for example for &#x60;value&#x60;, &#x60;person_id&#x60; or &#x60;organization_id&#x60;). If a lead contains custom fields, the fields&#39; values will be included in the response in the same format as with the &#x60;Deals&#x60; endpoints. If a custom field&#39;s value hasn&#39;t been set for the lead, it won&#39;t appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from deals. See an example given in the &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/updating-custom-field-value\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;updating custom fields’ values tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.LeadsApi(apiClient);
let id = "id_example"; // String | The ID of the lead
let opts = Pipedrive.UpdateLeadRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateLead(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the lead | 
 **UpdateLeadRequest** | [**UpdateLeadRequest**](UpdateLeadRequest.md)|  | [optional] 

### Return type

[**GetLeadResponse**](GetLeadResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

