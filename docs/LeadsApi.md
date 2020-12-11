# Pipedrive.LeadsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLead**](LeadsApi.md#addLead) | **POST** /leads | Add a lead
[**addLeadLabel**](LeadsApi.md#addLeadLabel) | **POST** /leadLabels | Add a lead label
[**deleteLead**](LeadsApi.md#deleteLead) | **DELETE** /leads/{id} | Delete a lead
[**deleteLeadLabel**](LeadsApi.md#deleteLeadLabel) | **DELETE** /leadLabels/{id} | Delete a lead label
[**getLead**](LeadsApi.md#getLead) | **GET** /leads/{id} | Get one lead
[**getLeadLabels**](LeadsApi.md#getLeadLabels) | **GET** /leadLabels | Get all lead labels
[**getLeadSources**](LeadsApi.md#getLeadSources) | **GET** /leadSources | Get all lead sources
[**getLeads**](LeadsApi.md#getLeads) | **GET** /leads | Get all leads
[**updateLead**](LeadsApi.md#updateLead) | **PATCH** /leads/{id} | Update a lead
[**updateLeadLabel**](LeadsApi.md#updateLeadLabel) | **PATCH** /leadLabels/{id} | Update a lead label



## addLead

> OneLeadResponse200 addLead(opts)

Add a lead

Creates a Lead. A Lead always has to be linked to a Person or an Organization or both. All Leads created through the Public Pipedrive API will have a Lead Source &#x60;API&#x60; assigned. If a Lead contains custom fields, the fields&#39; values will be included in the response in the same format as with the &#x60;Deals&#x60; endpoints. If a custom field&#39;s value hasn&#39;t been set for the Lead, it won&#39;t appear in the response. Please note that Leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from Deals. See an example of updating custom fields’ values in &lt;a href&#x3D;\\\&quot; https://pipedrive.readme.io/docs/updating-custom-field-value \\\&quot; target&#x3D;\\\&quot;_blank\\\&quot; rel&#x3D;\\\&quot;noopener noreferrer\\\&quot;&gt;this tutorial&lt;/a&gt;. 

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
  'addLeadRequest': new Pipedrive.AddLeadRequest() // AddLeadRequest | 
};
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


## addLeadLabel

> AddOrUpdateLeadLabelResponse200 addLeadLabel(opts)

Add a lead label

Creates a Lead Label

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
  'addLeadLabelRequest': new Pipedrive.AddLeadLabelRequest() // AddLeadLabelRequest | 
};
apiInstance.addLeadLabel(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addLeadLabelRequest** | [**AddLeadLabelRequest**](AddLeadLabelRequest.md)|  | [optional] 

### Return type

[**AddOrUpdateLeadLabelResponse200**](AddOrUpdateLeadLabelResponse200.md)

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


## deleteLeadLabel

> LeadIdResponse200 deleteLeadLabel(id)

Delete a lead label

Deletes a specific Lead Label

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
let id = null; // String | The ID of the Lead Label
apiInstance.deleteLeadLabel(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| The ID of the Lead Label | 

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


## getLeadLabels

> GetLeadLabelsResponse200 getLeadLabels()

Get all lead labels

Returns details of all Lead Labels. This endpoint does not support pagination and all Labels are always returned.

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
apiInstance.getLeadLabels().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetLeadLabelsResponse200**](GetLeadLabelsResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeadSources

> GetLeadSourcesResponse200 getLeadSources()

Get all lead sources

Returns all Lead Sources. Please note that the list of Lead Sources is fixed, it cannot be modified. All Leads created through the Public Pipedrive API will have a Lead Source &#x60;API&#x60; assigned. 

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
apiInstance.getLeadSources().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetLeadSourcesResponse200**](GetLeadSourcesResponse200.md)

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

Updates one or more properties of a Lead. Only properties included in the request will be updated. Send &#x60;null&#x60; to unset a property (applicable for example for &#x60;value&#x60;, &#x60;person_id&#x60; or &#x60;organization_id&#x60;). If a Lead contains custom fields, the fields&#39; values will be included in the response in the same format as with the &#x60;Deals&#x60; endpoints. If a custom field&#39;s value hasn&#39;t been set for the Lead, it won&#39;t appear in the response. Please note that Leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from Deals. See an example of updating custom fields’ values in &lt;a href&#x3D;\\\&quot; https://pipedrive.readme.io/docs/updating-custom-field-value \\\&quot; target&#x3D;\\\&quot;_blank\\\&quot; rel&#x3D;\\\&quot;noopener noreferrer\\\&quot;&gt;this tutorial&lt;/a&gt;. 

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
let opts = {
  'updateLeadRequest': new Pipedrive.UpdateLeadRequest() // UpdateLeadRequest | 
};
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


## updateLeadLabel

> AddOrUpdateLeadLabelResponse200 updateLeadLabel(id, opts)

Update a lead label

Updates one or more properties of a Lead Label. Only properties included in the request will be updated. 

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
let id = null; // String | The ID of the Lead Label
let opts = {
  'updateLeadLabelRequest': new Pipedrive.UpdateLeadLabelRequest() // UpdateLeadLabelRequest | 
};
apiInstance.updateLeadLabel(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| The ID of the Lead Label | 
 **updateLeadLabelRequest** | [**UpdateLeadLabelRequest**](UpdateLeadLabelRequest.md)|  | [optional] 

### Return type

[**AddOrUpdateLeadLabelResponse200**](AddOrUpdateLeadLabelResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

