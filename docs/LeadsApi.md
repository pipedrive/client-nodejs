# Pipedrive.LeadsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLead**](LeadsApi.md#addLead) | **POST** /leads | Add a lead
[**deleteLead**](LeadsApi.md#deleteLead) | **DELETE** /leads/{id} | Delete a lead
[**getLead**](LeadsApi.md#getLead) | **GET** /leads/{id} | Get one lead
[**getLeads**](LeadsApi.md#getLeads) | **GET** /leads | Get all leads
[**updateLead**](LeadsApi.md#updateLead) | **PATCH** /leads/{id} | Update a lead



## addLead

> OneLeadResponse200 addLead(opts)

Add a lead

Creates a Lead. A Lead always has to be linked to a Person or an Organization or both. All Leads created through the Public Pipedrive API will have a Lead Source &#x60;API&#x60; assigned. If a Lead contains custom fields, the fields&#39; values will be included in the response in the same format as with the &#x60;Deals&#x60; endpoints. If a custom field&#39;s value hasn&#39;t been set for the Lead, it won&#39;t appear in the response. Please note that Leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from Deals. See an example of updating custom fields’ values in &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/updating-custom-field-value\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.LeadsApi();
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
 **addLeadRequest** | [**AddLeadRequest**](AddLeadRequest.md)|  | [optional] 

### Return type

[**OneLeadResponse200**](OneLeadResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLead

> LeadIdResponse200 deleteLead(id)

Delete a lead

Deletes a specific Lead

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

let apiInstance = new Pipedrive.LeadsApi();
let id = null; // String | The ID of the Lead
apiInstance.deleteLead(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| The ID of the Lead | 

### Return type

[**LeadIdResponse200**](LeadIdResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLead

> OneLeadResponse200 getLead(id)

Get one lead

Returns details of a specific Lead. If a Lead contains custom fields, the fields&#39; values will be included in the response in the same format as with the &#x60;Deals&#x60; endpoints. If a custom field&#39;s value hasn&#39;t been set for the Lead, it won&#39;t appear in the response. Please note that Leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from Deals.

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

let apiInstance = new Pipedrive.LeadsApi();
let id = null; // String | The ID of the Lead
apiInstance.getLead(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| The ID of the Lead | 

### Return type

[**OneLeadResponse200**](OneLeadResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeads

> GetLeadsResponse200 getLeads(opts)

Get all leads

Returns multiple Leads. Leads are sorted by the time they were created, from oldest to newest. Pagination can be controlled using &#x60;limit&#x60; and &#x60;start&#x60; query parameters. If a Lead contains custom fields, the fields&#39; values will be included in the response in the same format as with the &#x60;Deals&#x60; endpoints. If a custom field&#39;s value hasn&#39;t been set for the Lead, it won&#39;t appear in the response. Please note that Leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from Deals. 

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

let apiInstance = new Pipedrive.LeadsApi();
let opts = {
  'limit': 100, // Number | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
  'start': 0, // Number | For pagination, the position that represents the first result for the page
  'archivedStatus': "archivedStatus_example" // String | Filtering based on archived status of a Lead. If not provided, `All` is used.
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
 **archivedStatus** | **String**| Filtering based on archived status of a Lead. If not provided, &#x60;All&#x60; is used. | [optional] 

### Return type

[**GetLeadsResponse200**](GetLeadsResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLead

> OneLeadResponse200 updateLead(id, opts)

Update a lead

Updates one or more properties of a Lead. Only properties included in the request will be updated. Send &#x60;null&#x60; to unset a property (applicable for example for &#x60;value&#x60;, &#x60;person_id&#x60; or &#x60;organization_id&#x60;). If a Lead contains custom fields, the fields&#39; values will be included in the response in the same format as with the &#x60;Deals&#x60; endpoints. If a custom field&#39;s value hasn&#39;t been set for the Lead, it won&#39;t appear in the response. Please note that Leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from Deals. See an example of updating custom fields’ values in &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/updating-custom-field-value\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.LeadsApi();
let id = null; // String | The ID of the Lead
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
 **id** | [**String**](.md)| The ID of the Lead | 
 **updateLeadRequest** | [**UpdateLeadRequest**](UpdateLeadRequest.md)|  | [optional] 

### Return type

[**OneLeadResponse200**](OneLeadResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

