# Pipedrive.ItemSearchApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchItem**](ItemSearchApi.md#searchItem) | **GET** /itemSearch | Perform a search from multiple item types
[**searchItemByField**](ItemSearchApi.md#searchItemByField) | **GET** /itemSearch/field | Perform a search using a specific field from an item type



## searchItem

> ItemSearchResponse searchItem(term, opts)

Perform a search from multiple item types

Performs a search from your choice of item types and fields.

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

let apiInstance = new Pipedrive.ItemSearchApi();
let term = "term_example"; // String | The search term to look for. Minimum 2 characters (or 1 if using exact_match).
let opts = {
  'itemTypes': "itemTypes_example", // String | A comma-separated string array. The type of items to perform the search from. Defaults to all.
  'fields': "fields_example", // String | A comma-separated string array. The fields to perform the search from. Defaults to all. Relevant for each item type are:<br> <table> <tr><th><b>Item type</b></th><th><b>Field</b></th></tr> <tr><td>Deal</td><td>custom_fields, notes, title</td></tr> <tr><td>Person</td><td>custom_fields, email, name, notes, phone</td></tr> <tr><td>Organization</td><td>address, custom_fields, name, notes</td></tr> <tr><td>Product</td><td>code, custom_fields, name</td></tr> <tr><td>Lead</td><td>email, organization_name, person_name, phone, title</td></tr> <tr><td>File</td><td>name</td></tr> <tr><td>Mail attachment</td><td>name</td></tr> </table>
  'searchForRelatedItems': true, // Boolean | When enabled, the response will include up to 100 newest related Leads and 100 newest related Deals for each found Person and Organization and up to 100 newest related Persons for each found Organization.
  'exactMatch': true, // Boolean | When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
  'includeFields': "includeFields_example", // String | A comma-separated string array. Supports including optional fields in the results which are not provided by default.
  'start': 0, // Number | Pagination start. Note that the pagination is based on main results and does not include related items when using search_for_related_items parameter.
  'limit': 56 // Number | Items shown per page
};
apiInstance.searchItem(term, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| The search term to look for. Minimum 2 characters (or 1 if using exact_match). | 
 **itemTypes** | **String**| A comma-separated string array. The type of items to perform the search from. Defaults to all. | [optional] 
 **fields** | **String**| A comma-separated string array. The fields to perform the search from. Defaults to all. Relevant for each item type are:&lt;br&gt; &lt;table&gt; &lt;tr&gt;&lt;th&gt;&lt;b&gt;Item type&lt;/b&gt;&lt;/th&gt;&lt;th&gt;&lt;b&gt;Field&lt;/b&gt;&lt;/th&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;Deal&lt;/td&gt;&lt;td&gt;custom_fields, notes, title&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;Person&lt;/td&gt;&lt;td&gt;custom_fields, email, name, notes, phone&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;Organization&lt;/td&gt;&lt;td&gt;address, custom_fields, name, notes&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;Product&lt;/td&gt;&lt;td&gt;code, custom_fields, name&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;Lead&lt;/td&gt;&lt;td&gt;email, organization_name, person_name, phone, title&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;File&lt;/td&gt;&lt;td&gt;name&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;Mail attachment&lt;/td&gt;&lt;td&gt;name&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt; | [optional] 
 **searchForRelatedItems** | **Boolean**| When enabled, the response will include up to 100 newest related Leads and 100 newest related Deals for each found Person and Organization and up to 100 newest related Persons for each found Organization. | [optional] 
 **exactMatch** | **Boolean**| When enabled, only full exact matches against the given term are returned. It is &lt;b&gt;not&lt;/b&gt; case sensitive. | [optional] 
 **includeFields** | **String**| A comma-separated string array. Supports including optional fields in the results which are not provided by default. | [optional] 
 **start** | **Number**| Pagination start. Note that the pagination is based on main results and does not include related items when using search_for_related_items parameter. | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**ItemSearchResponse**](ItemSearchResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchItemByField

> ItemSearchFieldResponse searchItemByField(term, fieldType, fieldKey, opts)

Perform a search using a specific field from an item type

Performs a search from the values of a specific field. Results can either be the distinct values of the field (useful for searching autocomplete field values), or the IDs of actual items (Deals, Persons, Organizations or Products).

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

let apiInstance = new Pipedrive.ItemSearchApi();
let term = "term_example"; // String | The search term to look for. Minimum 2 characters (or 1 if using exact_match).
let fieldType = "fieldType_example"; // String | The type of the field to perform the search from
let fieldKey = "fieldKey_example"; // String | The key of the field to search from. The field key can be obtained by fetching the list of the fields using any of the fields' API GET methods (dealFields, personFields, etc.).
let opts = {
  'exactMatch': false, // Boolean | When enabled, only full exact matches against the given term are returned. The search <b>is</b> case sensitive.
  'returnItemIds': true, // Boolean | Whether to return the IDs of the matching items or not. When not set or set to 0 or false, only distinct values of the searched field are returned. When set to 1 or true, the ID of each found item is returned.
  'start': 56, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.searchItemByField(term, fieldType, fieldKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| The search term to look for. Minimum 2 characters (or 1 if using exact_match). | 
 **fieldType** | **String**| The type of the field to perform the search from | 
 **fieldKey** | **String**| The key of the field to search from. The field key can be obtained by fetching the list of the fields using any of the fields&#39; API GET methods (dealFields, personFields, etc.). | 
 **exactMatch** | **Boolean**| When enabled, only full exact matches against the given term are returned. The search &lt;b&gt;is&lt;/b&gt; case sensitive. | [optional] [default to false]
 **returnItemIds** | **Boolean**| Whether to return the IDs of the matching items or not. When not set or set to 0 or false, only distinct values of the searched field are returned. When set to 1 or true, the ID of each found item is returned. | [optional] 
 **start** | **Number**| Pagination start | [optional] 
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**ItemSearchFieldResponse**](ItemSearchFieldResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicatoin/json

