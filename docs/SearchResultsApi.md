# Pipedrive.SearchResultsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchResultsApi.md#search) | **GET** /searchResults | Perform a search
[**searchByField**](SearchResultsApi.md#searchByField) | **GET** /searchResults/field | Perform a search using a specific field value



## search

> Object search(term, opts)

Perform a search

This endpoint is deprecated. Please use &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/ItemSearch#searchItem\&quot;&gt;/v1/itemSearch&lt;/a&gt; instead. &lt;br&gt; Performs a search across the account and returns SearchResults.

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

let apiInstance = new Pipedrive.SearchResultsApi();
let term = "term_example"; // String | Search term to look for, minimum 2 characters.
let opts = {
  'itemType': "itemType_example", // String | Search for items of exact type. If omitted, all types of items are searched.
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'exactMatch': new Pipedrive.NumberBoolean() // NumberBoolean | When enabled, only full exact matches against the given term are returned. The minimum 2 character limit for the term is discarded when exact_match is enabled. It will only work if search term is 30 characters or less.
};
apiInstance.search(term, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| Search term to look for, minimum 2 characters. | 
 **itemType** | **String**| Search for items of exact type. If omitted, all types of items are searched. | [optional] 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **exactMatch** | [**NumberBoolean**](.md)| When enabled, only full exact matches against the given term are returned. The minimum 2 character limit for the term is discarded when exact_match is enabled. It will only work if search term is 30 characters or less. | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchByField

> Object searchByField(term, fieldType, fieldKey, opts)

Perform a search using a specific field value

This endpoint is deprecated. Please use &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/ItemSearch#searchItemByField\&quot;&gt;/v1/itemSearch/field&lt;/a&gt; instead. &lt;br&gt;  Performs a search from a specific field&#39;s values. Results can be either the distinct values of the field (useful for searching autocomplete field values), or actual items IDs (deals, persons, organizations or products).

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

let apiInstance = new Pipedrive.SearchResultsApi();
let term = "term_example"; // String | Search term to look for, minimum 2 characters.
let fieldType = "fieldType_example"; // String | Type of the field to perform the search from.
let fieldKey = "fieldKey_example"; // String | Key of the field to search from. Field key can be obtained by fetching the list of fields using any of fields API GET methods (dealFields, personFields, ..).
let opts = {
  'exactMatch': new Pipedrive.NumberBoolean(), // NumberBoolean | When enabled, only full exact matches against the given term are returned. By default, term can be present anywhere in the resulting field values to be considered a match. The minimum 2 character limit for the term is discarded when exact_match is enabled.
  'returnFieldKey': "returnFieldKey_example", // String | Name of the field in search results from which the search was performed. When omitted, 'value' will be used. You may want to set this parameter to match the field_key.
  'returnItemIds': new Pipedrive.NumberBoolean(), // NumberBoolean | Whether to return matching items IDs in search results. When omitted or set to 0, only distinct values of the searched field are returned. When enabled, the return_field_key parameter is ignored and the results include the searched field as its own key.
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.searchByField(term, fieldType, fieldKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| Search term to look for, minimum 2 characters. | 
 **fieldType** | **String**| Type of the field to perform the search from. | 
 **fieldKey** | **String**| Key of the field to search from. Field key can be obtained by fetching the list of fields using any of fields API GET methods (dealFields, personFields, ..). | 
 **exactMatch** | [**NumberBoolean**](.md)| When enabled, only full exact matches against the given term are returned. By default, term can be present anywhere in the resulting field values to be considered a match. The minimum 2 character limit for the term is discarded when exact_match is enabled. | [optional] 
 **returnFieldKey** | **String**| Name of the field in search results from which the search was performed. When omitted, &#39;value&#39; will be used. You may want to set this parameter to match the field_key. | [optional] 
 **returnItemIds** | [**NumberBoolean**](.md)| Whether to return matching items IDs in search results. When omitted or set to 0, only distinct values of the searched field are returned. When enabled, the return_field_key parameter is ignored and the results include the searched field as its own key. | [optional] 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

