# Pipedrive.ProductsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProduct**](ProductsApi.md#addProduct) | **POST** /products | Add a product
[**addProductFollower**](ProductsApi.md#addProductFollower) | **POST** /products/{id}/followers | Add a follower to a product
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /products/{id} | Delete a product
[**deleteProductFollower**](ProductsApi.md#deleteProductFollower) | **DELETE** /products/{id}/followers/{follower_id} | Delete a follower from a product
[**findProductsByName**](ProductsApi.md#findProductsByName) | **GET** /products/find | Find products by name
[**getProduct**](ProductsApi.md#getProduct) | **GET** /products/{id} | Get one product
[**getProductDeals**](ProductsApi.md#getProductDeals) | **GET** /products/{id}/deals | Get deals where a product is attached to
[**getProductFiles**](ProductsApi.md#getProductFiles) | **GET** /products/{id}/files | List files attached to a product
[**getProductFollowers**](ProductsApi.md#getProductFollowers) | **GET** /products/{id}/followers | List followers of a product
[**getProductUsers**](ProductsApi.md#getProductUsers) | **GET** /products/{id}/permittedUsers | List permitted users
[**getProducts**](ProductsApi.md#getProducts) | **GET** /products | Get all products
[**searchProducts**](ProductsApi.md#searchProducts) | **GET** /products/search | Search products
[**updateProduct**](ProductsApi.md#updateProduct) | **PUT** /products/{id} | Update a product



## addProduct

> ProductResponse addProduct(opts)

Add a product

Adds a new product to the products inventory. For more information on how to add a product, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/adding-a-product\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.ProductsApi();
let opts = {
  'addProductRequestBody': new Pipedrive.AddProductRequestBody() // AddProductRequestBody | 
};
apiInstance.addProduct(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addProductRequestBody** | [**AddProductRequestBody**](AddProductRequestBody.md)|  | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addProductFollower

> NewFollowerResponse addProductFollower(id, opts)

Add a follower to a product

Adds a follower to a product.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.ProductsApi();
let id = 56; // Number | ID of the product
let opts = {
  'addProductFollowerRequest': new Pipedrive.AddProductFollowerRequest() // AddProductFollowerRequest | 
};
apiInstance.addProductFollower(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the product | 
 **addProductFollowerRequest** | [**AddProductFollowerRequest**](AddProductFollowerRequest.md)|  | [optional] 

### Return type

[**NewFollowerResponse**](NewFollowerResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProduct

> DeleteProductResponse deleteProduct(id)

Delete a product

Marks a product as deleted.

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

let apiInstance = new Pipedrive.ProductsApi();
let id = 56; // Number | ID of the product
apiInstance.deleteProduct(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the product | 

### Return type

[**DeleteProductResponse**](DeleteProductResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProductFollower

> DeleteProductFollowerResponse deleteProductFollower(id, followerId)

Delete a follower from a product

Deletes a follower from a product.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.ProductsApi();
let id = 56; // Number | ID of the product
let followerId = 56; // Number | ID of the follower
apiInstance.deleteProductFollower(id, followerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the product | 
 **followerId** | **Number**| ID of the follower | 

### Return type

[**DeleteProductFollowerResponse**](DeleteProductFollowerResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findProductsByName

> FindProductsByNameResponse findProductsByName(term, opts)

Find products by name

&lt;strong&gt;This endpoint is deprecated. Please use &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/#!/Products/get_products_search\&quot;&gt;/v1/products/search&lt;/a&gt; or &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/#!/ItemSearch/get_itemSearch\&quot;&gt;/v1/itemSearch&lt;/a&gt; instead&lt;/strong&gt;. &lt;br&gt; Returns data about the products that were found. If currency was set in request, prices in that currency are served back.

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

let apiInstance = new Pipedrive.ProductsApi();
let term = "term_example"; // String | Search term to look for, minimum 3 characters.
let opts = {
  'currency': "currency_example", // String | Currency code in which prices should be returned in. If omitted, prices in user's default currency will be returned.
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.findProductsByName(term, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| Search term to look for, minimum 3 characters. | 
 **currency** | **String**| Currency code in which prices should be returned in. If omitted, prices in user&#39;s default currency will be returned. | [optional] 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**FindProductsByNameResponse**](FindProductsByNameResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProduct

> ProductResponse getProduct(id)

Get one product

Returns data about a specific product.

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

let apiInstance = new Pipedrive.ProductsApi();
let id = 56; // Number | ID of the product
apiInstance.getProduct(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the product | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductDeals

> BasicDeal getProductDeals(id, opts)

Get deals where a product is attached to

Returns data about deals that have a product attached to.

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

let apiInstance = new Pipedrive.ProductsApi();
let id = 56; // Number | ID of the product
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'status': "'all_not_deleted'" // String | Only fetch deals with specific status. If omitted, all not deleted deals are fetched.
};
apiInstance.getProductDeals(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the product | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **status** | **String**| Only fetch deals with specific status. If omitted, all not deleted deals are fetched. | [optional] [default to &#39;all_not_deleted&#39;]

### Return type

[**BasicDeal**](BasicDeal.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductFiles

> ListFilesResponse getProductFiles(id, opts)

List files attached to a product

Lists files associated with a product.

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

let apiInstance = new Pipedrive.ProductsApi();
let id = 56; // Number | ID of the product
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'includeDeletedFiles': new Pipedrive.NumberBoolean(), // NumberBoolean | When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work.
  'sort': "sort_example" // String | Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment.
};
apiInstance.getProductFiles(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the product | 
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


## getProductFollowers

> UserIDs getProductFollowers(id)

List followers of a product

Lists the followers of a Product

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

let apiInstance = new Pipedrive.ProductsApi();
let id = 56; // Number | ID of the product
apiInstance.getProductFollowers(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the product | 

### Return type

[**UserIDs**](UserIDs.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductUsers

> UserIDs getProductUsers(id)

List permitted users

Lists users permitted to access a product.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.ProductsApi();
let id = 56; // Number | ID of the product
apiInstance.getProductUsers(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the product | 

### Return type

[**UserIDs**](UserIDs.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProducts

> ProductsResponse getProducts(opts)

Get all products

Returns data about all products.

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

let apiInstance = new Pipedrive.ProductsApi();
let opts = {
  'userId': 56, // Number | If supplied, only products owned by the given user will be returned.
  'filterId': 56, // Number | ID of the filter to use
  'firstChar': "firstChar_example", // String | If supplied, only products whose name starts with the specified letter will be returned (case insensitive).
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getProducts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| If supplied, only products owned by the given user will be returned. | [optional] 
 **filterId** | **Number**| ID of the filter to use | [optional] 
 **firstChar** | **String**| If supplied, only products whose name starts with the specified letter will be returned (case insensitive). | [optional] 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**ProductsResponse**](ProductsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchProducts

> ProductSearchResponse searchProducts(term, opts)

Search products

Searches all Products by name, code and/or custom fields. This endpoint is a wrapper of &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/#!/ItemSearch/get_itemSearch\&quot;&gt;/v1/itemSearch&lt;/a&gt; with a narrower OAuth scope.

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

let apiInstance = new Pipedrive.ProductsApi();
let term = "term_example"; // String | The search term to look for. Minimum 2 characters (or 1 if using exact_match).
let opts = {
  'fields': "fields_example", // String | A comma-separated string array. The fields to perform the search from. Defaults to all of them.
  'exactMatch': true, // Boolean | When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
  'includeFields': "includeFields_example", // String | Supports including optional fields in the results which are not provided by default.
  'start': 0, // Number | Pagination start. Note that the pagination is based on main results and does not include related items when using search_for_related_items parameter.
  'limit': 56 // Number | Items shown per page
};
apiInstance.searchProducts(term, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| The search term to look for. Minimum 2 characters (or 1 if using exact_match). | 
 **fields** | **String**| A comma-separated string array. The fields to perform the search from. Defaults to all of them. | [optional] 
 **exactMatch** | **Boolean**| When enabled, only full exact matches against the given term are returned. It is &lt;b&gt;not&lt;/b&gt; case sensitive. | [optional] 
 **includeFields** | **String**| Supports including optional fields in the results which are not provided by default. | [optional] 
 **start** | **Number**| Pagination start. Note that the pagination is based on main results and does not include related items when using search_for_related_items parameter. | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**ProductSearchResponse**](ProductSearchResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProduct

> ProductResponse updateProduct(id, opts)

Update a product

Updates product data.

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

let apiInstance = new Pipedrive.ProductsApi();
let id = 56; // Number | ID of the product
let opts = {
  'productRequest': new Pipedrive.ProductRequest() // ProductRequest | 
};
apiInstance.updateProduct(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the product | 
 **productRequest** | [**ProductRequest**](ProductRequest.md)|  | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

