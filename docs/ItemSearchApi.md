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
let apiClient = new Pipedrive.ApiClient();
// Configure API key authorization: api_key
let api_key = apiClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = apiClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Pipedrive.ItemSearchApi(apiClient);
let term = "term_example"; // String | The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'itemTypes': "itemTypes_example", // String | A comma-separated string array. The type of items to perform the search from. Defaults to all.
  'fields': "fields_example", // String | A comma-separated string array. The fields to perform the search from. Defaults to all. Relevant for each item type are:<br> <table> <tr><th><b>Item type</b></th><th><b>Field</b></th></tr> <tr><td>Deal</td><td>`custom_fields`, `notes`, `title`</td></tr> <tr><td>Person</td><td>`custom_fields`, `email`, `name`, `notes`, `phone`</td></tr> <tr><td>Organization</td><td>`address`, `custom_fields`, `name`, `notes`</td></tr> <tr><td>Product</td><td>`code`, `custom_fields`, `name`</td></tr> <tr><td>Lead</td><td>`custom_fields`, `notes`, `email`, `organization_name`, `person_name`, `phone`, `title`</td></tr> <tr><td>File</td><td>`name`</td></tr> <tr><td>Mail attachment</td><td>`name`</td></tr> <tr><td>Project</td><td> `custom_fields`, `notes`, `title`, `description` </td></tr> </table> <br> Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href=\"https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.<br/> When searching for leads, the email, organization_name, person_name, and phone fields will return results only for leads not linked to contacts. For searching leads by person or organization values, please use `search_for_related_items`.
  'searchForRelatedItems': true, // Boolean | When enabled, the response will include up to 100 newest related leads and 100 newest related deals for each found person and organization and up to 100 newest related persons for each found organization
  'exactMatch': true, // Boolean | When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
  'includeFields': "includeFields_example", // String | A comma-separated string array. Supports including optional fields in the results which are not provided by default.
  'start': 0, // Number | Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.
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
 **term** | **String**| The search term to look for. Minimum 2 characters (or 1 if using &#x60;exact_match&#x60;). Please note that the search term has to be URL encoded. | 
 **item_types** | **String**| A comma-separated string array. The type of items to perform the search from. Defaults to all. | [optional] 
 **fields** | **String**| A comma-separated string array. The fields to perform the search from. Defaults to all. Relevant for each item type are:&lt;br&gt; &lt;table&gt; &lt;tr&gt;&lt;th&gt;&lt;b&gt;Item type&lt;/b&gt;&lt;/th&gt;&lt;th&gt;&lt;b&gt;Field&lt;/b&gt;&lt;/th&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;Deal&lt;/td&gt;&lt;td&gt;&#x60;custom_fields&#x60;, &#x60;notes&#x60;, &#x60;title&#x60;&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;Person&lt;/td&gt;&lt;td&gt;&#x60;custom_fields&#x60;, &#x60;email&#x60;, &#x60;name&#x60;, &#x60;notes&#x60;, &#x60;phone&#x60;&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;Organization&lt;/td&gt;&lt;td&gt;&#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;name&#x60;, &#x60;notes&#x60;&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;Product&lt;/td&gt;&lt;td&gt;&#x60;code&#x60;, &#x60;custom_fields&#x60;, &#x60;name&#x60;&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;Lead&lt;/td&gt;&lt;td&gt;&#x60;custom_fields&#x60;, &#x60;notes&#x60;, &#x60;email&#x60;, &#x60;organization_name&#x60;, &#x60;person_name&#x60;, &#x60;phone&#x60;, &#x60;title&#x60;&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;File&lt;/td&gt;&lt;td&gt;&#x60;name&#x60;&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;Mail attachment&lt;/td&gt;&lt;td&gt;&#x60;name&#x60;&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;Project&lt;/td&gt;&lt;td&gt; &#x60;custom_fields&#x60;, &#x60;notes&#x60;, &#x60;title&#x60;, &#x60;description&#x60; &lt;/td&gt;&lt;/tr&gt; &lt;/table&gt; &lt;br&gt; Only the following custom field types are searchable: &#x60;address&#x60;, &#x60;varchar&#x60;, &#x60;text&#x60;, &#x60;varchar_auto&#x60;, &#x60;double&#x60;, &#x60;monetary&#x60; and &#x60;phone&#x60;. Read more about searching by custom fields &lt;a href&#x3D;\&quot;https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;here&lt;/a&gt;.&lt;br/&gt; When searching for leads, the email, organization_name, person_name, and phone fields will return results only for leads not linked to contacts. For searching leads by person or organization values, please use &#x60;search_for_related_items&#x60;. | [optional] 
 **search_for_related_items** | **Boolean**| When enabled, the response will include up to 100 newest related leads and 100 newest related deals for each found person and organization and up to 100 newest related persons for each found organization | [optional] 
 **exact_match** | **Boolean**| When enabled, only full exact matches against the given term are returned. It is &lt;b&gt;not&lt;/b&gt; case sensitive. | [optional] 
 **include_fields** | **String**| A comma-separated string array. Supports including optional fields in the results which are not provided by default. | [optional] 
 **start** | **Number**| Pagination start. Note that the pagination is based on main results and does not include related items when using &#x60;search_for_related_items&#x60; parameter. | [optional] [default to 0]
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

Performs a search from the values of a specific field. Results can either be the distinct values of the field (useful for searching autocomplete field values), or the IDs of actual items (deals, leads, persons, organizations or products).

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

let apiInstance = new Pipedrive.ItemSearchApi(apiClient);
let term = "term_example"; // String | The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
let fieldType = "fieldType_example"; // String | The type of the field to perform the search from
let fieldKey = "fieldKey_example"; // String | The key of the field to search from. The field key can be obtained by fetching the list of the fields using any of the fields' API GET methods (dealFields, personFields, etc.). Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href=\"https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'exactMatch': false, // Boolean | When enabled, only full exact matches against the given term are returned. The search <b>is</b> case sensitive.
  'returnItemIds': true, // Boolean | Whether to return the IDs of the matching items or not. When not set or set to `0` or `false`, only distinct values of the searched field are returned. When set to `1` or `true`, the ID of each found item is returned.
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
 **term** | **String**| The search term to look for. Minimum 2 characters (or 1 if using &#x60;exact_match&#x60;). Please note that the search term has to be URL encoded. | 
 **field_type** | **String**| The type of the field to perform the search from | 
 **field_key** | **String**| The key of the field to search from. The field key can be obtained by fetching the list of the fields using any of the fields&#39; API GET methods (dealFields, personFields, etc.). Only the following custom field types are searchable: &#x60;address&#x60;, &#x60;varchar&#x60;, &#x60;text&#x60;, &#x60;varchar_auto&#x60;, &#x60;double&#x60;, &#x60;monetary&#x60; and &#x60;phone&#x60;. Read more about searching by custom fields &lt;a href&#x3D;\&quot;https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;here&lt;/a&gt;. | 
 **exact_match** | **Boolean**| When enabled, only full exact matches against the given term are returned. The search &lt;b&gt;is&lt;/b&gt; case sensitive. | [optional] [default to false]
 **return_item_ids** | **Boolean**| Whether to return the IDs of the matching items or not. When not set or set to &#x60;0&#x60; or &#x60;false&#x60;, only distinct values of the searched field are returned. When set to &#x60;1&#x60; or &#x60;true&#x60;, the ID of each found item is returned. | [optional] 
 **start** | **Number**| Pagination start | [optional] 
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**ItemSearchFieldResponse**](ItemSearchFieldResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

