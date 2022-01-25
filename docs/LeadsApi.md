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

Creates a lead. A lead always has to be linked to a person or an organization or both. All leads created through the Pipedrive API will have a lead source &#x60;API&#x60; assigned. Here&#39;s the tutorial for &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-a-lead\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;adding a lead&lt;/a&gt;. If a lead contains custom fields, the fields&#39; values will be included in the response in the same format as with the &#x60;Deals&#x60; endpoints. If a custom field&#39;s value hasn&#39;t been set for the lead, it won&#39;t appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields&#39; structure from deals. See an example given in the &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/updating-custom-field-value\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;updating custom fields&#39; values tutorial&lt;/a&gt;.

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

Deletes a specific lead.

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

[**LeadIdResponse200**](LeadIdResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLead

> OneLeadResponse200 getLead(id)

Get one lead

Returns details of a specific lead. If a lead contains custom fields, the fields&#39; values will be included in the response in the same format as with the &#x60;Deals&#x60; endpoints. If a custom field&#39;s value hasn&#39;t been set for the lead, it won&#39;t appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from deals.

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

[**OneLeadResponse200**](OneLeadResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeads

> GetLeadsResponse200 getLeads(opts)

Get all leads

Returns multiple leads. Leads are sorted by the time they were created, from oldest to newest. Pagination can be controlled using &#x60;limit&#x60; and &#x60;start&#x60; query parameters. If a lead contains custom fields, the fields&#39; values will be included in the response in the same format as with the &#x60;Deals&#x60; endpoints. If a custom field&#39;s value hasn&#39;t been set for the lead, it won&#39;t appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields&#39; structure from deals. 

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
  'archivedStatus': "archivedStatus_example" // String | Filtering based on the archived status of a lead. If not provided, `All` is used.
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
 **archivedStatus** | **String**| Filtering based on the archived status of a lead. If not provided, &#x60;All&#x60; is used. | [optional] 

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

Updates one or more properties of a lead. Only properties included in the request will be updated. Send &#x60;null&#x60; to unset a property (applicable for example for &#x60;value&#x60;, &#x60;person_id&#x60; or &#x60;organization_id&#x60;). If a lead contains custom fields, the fields&#39; values will be included in the response in the same format as with the &#x60;Deals&#x60; endpoints. If a custom field&#39;s value hasn&#39;t been set for the lead, it won&#39;t appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from deals. See an example given in the &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/updating-custom-field-value\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;updating custom fields’ values tutorial&lt;/a&gt;.

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
 **updateLeadRequest** | [**UpdateLeadRequest**](UpdateLeadRequest.md)|  | [optional] 

### Return type

[**OneLeadResponse200**](OneLeadResponse200.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

