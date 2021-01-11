# Pipedrive.DealsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDeal**](DealsApi.md#addDeal) | **POST** /deals | Add a deal
[**addDealFollower**](DealsApi.md#addDealFollower) | **POST** /deals/{id}/followers | Add a follower to a deal
[**addDealParticipant**](DealsApi.md#addDealParticipant) | **POST** /deals/{id}/participants | Add a participant to a deal
[**addDealProduct**](DealsApi.md#addDealProduct) | **POST** /deals/{id}/products | Add a product to the deal, eventually creating a new item called a deal-product
[**deleteDeal**](DealsApi.md#deleteDeal) | **DELETE** /deals/{id} | Delete a deal
[**deleteDealFollower**](DealsApi.md#deleteDealFollower) | **DELETE** /deals/{id}/followers/{follower_id} | Delete a follower from a deal
[**deleteDealParticipant**](DealsApi.md#deleteDealParticipant) | **DELETE** /deals/{id}/participants/{deal_participant_id} | Delete a participant from a deal
[**deleteDealProduct**](DealsApi.md#deleteDealProduct) | **DELETE** /deals/{id}/products/{product_attachment_id} | Delete an attached product from a deal
[**deleteDeals**](DealsApi.md#deleteDeals) | **DELETE** /deals | Delete multiple deals in bulk
[**duplicateDeal**](DealsApi.md#duplicateDeal) | **POST** /deals/{id}/duplicate | Duplicate deal
[**getDeal**](DealsApi.md#getDeal) | **GET** /deals/{id} | Get details of a deal
[**getDealActivities**](DealsApi.md#getDealActivities) | **GET** /deals/{id}/activities | List activities associated with a deal
[**getDealFiles**](DealsApi.md#getDealFiles) | **GET** /deals/{id}/files | List files attached to a deal
[**getDealFollowers**](DealsApi.md#getDealFollowers) | **GET** /deals/{id}/followers | List followers of a deal
[**getDealMailMessages**](DealsApi.md#getDealMailMessages) | **GET** /deals/{id}/mailMessages | List mail messages associated with a deal
[**getDealParticipants**](DealsApi.md#getDealParticipants) | **GET** /deals/{id}/participants | List participants of a deal
[**getDealPersons**](DealsApi.md#getDealPersons) | **GET** /deals/{id}/persons | List all persons associated with a deal
[**getDealProducts**](DealsApi.md#getDealProducts) | **GET** /deals/{id}/products | List products attached to a deal
[**getDealUpdates**](DealsApi.md#getDealUpdates) | **GET** /deals/{id}/flow | List updates about a deal
[**getDealUsers**](DealsApi.md#getDealUsers) | **GET** /deals/{id}/permittedUsers | List permitted users
[**getDeals**](DealsApi.md#getDeals) | **GET** /deals | Get all deals
[**getDealsByName**](DealsApi.md#getDealsByName) | **GET** /deals/find | Find deals by name
[**getDealsSummary**](DealsApi.md#getDealsSummary) | **GET** /deals/summary | Get deals summary
[**getDealsTimeline**](DealsApi.md#getDealsTimeline) | **GET** /deals/timeline | Get deals timeline
[**mergeDeals**](DealsApi.md#mergeDeals) | **PUT** /deals/{id}/merge | Merge two deals
[**searchDeals**](DealsApi.md#searchDeals) | **GET** /deals/search | Search deals
[**updateDeal**](DealsApi.md#updateDeal) | **PUT** /deals/{id} | Update a deal
[**updateDealProduct**](DealsApi.md#updateDealProduct) | **PUT** /deals/{id}/products/{product_attachment_id} | Update product attachment details of the deal-product (a product already attached to a deal)



## addDeal

> GetAddedDeal addDeal(opts)

Add a deal

Adds a new deal. Note that you can supply additional custom fields along with the request that are not described here. These custom fields are different for each Pipedrive account and can be recognized by long hashes as keys. To determine which custom fields exists, fetch the dealFields and look for &#39;key&#39; values. For more information on how to add a deal, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/creating-a-deal\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.DealsApi();
let opts = {
  'title': "title_example", // String | Deal title
  'value': "value_example", // String | Value of the deal. If omitted, value will be set to 0.
  'currency': "currency_example", // String | Currency of the deal. Accepts a 3-character currency code. If omitted, currency will be set to the default currency of the authorized user.
  'userId': 56, // Number | ID of the user who will be marked as the owner of this deal. If omitted, the authorized user ID will be used.
  'personId': 56, // Number | ID of the person this deal will be associated with
  'orgId': 56, // Number | ID of the organization this deal will be associated with
  'stageId': 56, // Number | ID of the stage this deal will be placed in a pipeline (note that you can't supply the ID of the pipeline as this will be assigned automatically based on stage_id). If omitted, the deal will be placed in the first stage of the default pipeline.
  'status': "status_example", // String | open = Open, won = Won, lost = Lost, deleted = Deleted. If omitted, status will be set to open.
  'expectedCloseDate': new Date("2013-10-20"), // Date | The expected close date of the Deal. In ISO 8601 format: YYYY-MM-DD.
  'probability': 3.4, // Number | Deal success probability percentage. Used/shown only when deal_probability for the pipeline of the deal is enabled.
  'lostReason': "lostReason_example", // String | Optional message about why the deal was lost (to be used when status=lost)
  'visibleTo': new Pipedrive.VisibleTo(), // VisibleTo | Visibility of the deal. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.<dl class=\\\"fields-list\\\"><dt>1</dt><dd>Owner &amp; followers (private)</dd><dt>3</dt><dd>Entire company (shared)</dd></dl>
  'addTime': "addTime_example" // String | Optional creation date & time of the deal in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
};
apiInstance.addDeal(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**| Deal title | [optional] 
 **value** | **String**| Value of the deal. If omitted, value will be set to 0. | [optional] 
 **currency** | **String**| Currency of the deal. Accepts a 3-character currency code. If omitted, currency will be set to the default currency of the authorized user. | [optional] 
 **userId** | **Number**| ID of the user who will be marked as the owner of this deal. If omitted, the authorized user ID will be used. | [optional] 
 **personId** | **Number**| ID of the person this deal will be associated with | [optional] 
 **orgId** | **Number**| ID of the organization this deal will be associated with | [optional] 
 **stageId** | **Number**| ID of the stage this deal will be placed in a pipeline (note that you can&#39;t supply the ID of the pipeline as this will be assigned automatically based on stage_id). If omitted, the deal will be placed in the first stage of the default pipeline. | [optional] 
 **status** | **String**| open &#x3D; Open, won &#x3D; Won, lost &#x3D; Lost, deleted &#x3D; Deleted. If omitted, status will be set to open. | [optional] 
 **expectedCloseDate** | **Date**| The expected close date of the Deal. In ISO 8601 format: YYYY-MM-DD. | [optional] 
 **probability** | **Number**| Deal success probability percentage. Used/shown only when deal_probability for the pipeline of the deal is enabled. | [optional] 
 **lostReason** | **String**| Optional message about why the deal was lost (to be used when status&#x3D;lost) | [optional] 
 **visibleTo** | [**VisibleTo**](VisibleTo.md)| Visibility of the deal. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.&lt;dl class&#x3D;\\\&quot;fields-list\\\&quot;&gt;&lt;dt&gt;1&lt;/dt&gt;&lt;dd&gt;Owner &amp;amp; followers (private)&lt;/dd&gt;&lt;dt&gt;3&lt;/dt&gt;&lt;dd&gt;Entire company (shared)&lt;/dd&gt;&lt;/dl&gt; | [optional] 
 **addTime** | **String**| Optional creation date &amp; time of the deal in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS | [optional] 

### Return type

[**GetAddedDeal**](GetAddedDeal.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## addDealFollower

> AddedDealFollower addDealFollower(id, userId)

Add a follower to a deal

Adds a follower to a deal.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let userId = 56; // Number | ID of the user
apiInstance.addDealFollower(id, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
 **userId** | **Number**| ID of the user | 

### Return type

[**AddedDealFollower**](AddedDealFollower.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## addDealParticipant

> PostDealParticipants addDealParticipant(id, personId)

Add a participant to a deal

Adds a participant to a deal.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let personId = 56; // Number | ID of the person
apiInstance.addDealParticipant(id, personId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
 **personId** | **Number**| ID of the person | 

### Return type

[**PostDealParticipants**](PostDealParticipants.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## addDealProduct

> GetAddProductAttachementDetails addDealProduct(id, opts)

Add a product to the deal, eventually creating a new item called a deal-product

Adds a product to the deal.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let opts = {
  'newDealProduct': new Pipedrive.NewDealProduct() // NewDealProduct | 
};
apiInstance.addDealProduct(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
 **newDealProduct** | [**NewDealProduct**](NewDealProduct.md)|  | [optional] 

### Return type

[**GetAddProductAttachementDetails**](GetAddProductAttachementDetails.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDeal

> DeleteDeal deleteDeal(id)

Delete a deal

Marks a deal as deleted.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
apiInstance.deleteDeal(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 

### Return type

[**DeleteDeal**](DeleteDeal.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteDealFollower

> DeleteDealFollower deleteDealFollower(id, followerId)

Delete a follower from a deal

Deletes a follower from a deal.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let followerId = 56; // Number | ID of the follower
apiInstance.deleteDealFollower(id, followerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
 **followerId** | **Number**| ID of the follower | 

### Return type

[**DeleteDealFollower**](DeleteDealFollower.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteDealParticipant

> DeleteDealParticipant deleteDealParticipant(id, dealParticipantId)

Delete a participant from a deal

Deletes a participant from a deal.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let dealParticipantId = 56; // Number | ID of the deal participant
apiInstance.deleteDealParticipant(id, dealParticipantId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
 **dealParticipantId** | **Number**| ID of the deal participant | 

### Return type

[**DeleteDealParticipant**](DeleteDealParticipant.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteDealProduct

> DeleteDealProduct deleteDealProduct(id, productAttachmentId)

Delete an attached product from a deal

Deletes a product attachment from a deal, using the product_attachment_id.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let productAttachmentId = 56; // Number | Product attachment ID. This is returned as product_attachment_id after attaching a product to a deal or as id when listing the products attached to a deal.
apiInstance.deleteDealProduct(id, productAttachmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
 **productAttachmentId** | **Number**| Product attachment ID. This is returned as product_attachment_id after attaching a product to a deal or as id when listing the products attached to a deal. | 

### Return type

[**DeleteDealProduct**](DeleteDealProduct.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteDeals

> DeleteMultipleDeals deleteDeals(ids)

Delete multiple deals in bulk

Marks multiple deals as deleted.

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

let apiInstance = new Pipedrive.DealsApi();
let ids = "ids_example"; // String | Comma-separated IDs that will be deleted
apiInstance.deleteDeals(ids).then((data) => {
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

[**DeleteMultipleDeals**](DeleteMultipleDeals.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## duplicateDeal

> GetDuplicatedDeal duplicateDeal(id)

Duplicate deal

Duplicate a deal

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
apiInstance.duplicateDeal(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 

### Return type

[**GetDuplicatedDeal**](GetDuplicatedDeal.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDeal

> GetDeal getDeal(id)

Get details of a deal

Returns details of a specific deal. Note that this also returns some additional fields which are not present when asking for all deals – such as deal age and stay in pipeline stages. Also note that custom fields appear as long hashes in the resulting data. These hashes can be mapped against the &#39;key&#39; value of dealFields. For more information on how to get all details of a deal, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/getting-details-of-a-deal\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
apiInstance.getDeal(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 

### Return type

[**GetDeal**](GetDeal.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDealActivities

> DealListActivitiesResponse getDealActivities(id, opts)

List activities associated with a deal

Lists activities associated with a deal.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'done': new Pipedrive.NumberBoolean(), // NumberBoolean | Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both Done and Not done activities.
  'exclude': "exclude_example" // String | A comma-separated string of activity IDs to exclude from result
};
apiInstance.getDealActivities(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **done** | [**NumberBoolean**](.md)| Whether the activity is done or not. 0 &#x3D; Not done, 1 &#x3D; Done. If omitted returns both Done and Not done activities. | [optional] 
 **exclude** | **String**| A comma-separated string of activity IDs to exclude from result | [optional] 

### Return type

[**DealListActivitiesResponse**](DealListActivitiesResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDealFiles

> ListFilesResponse getDealFiles(id, opts)

List files attached to a deal

Lists files associated with a deal.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'includeDeletedFiles': new Pipedrive.NumberBoolean(), // NumberBoolean | When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work.
  'sort': "sort_example" // String | Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment.
};
apiInstance.getDealFiles(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
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


## getDealFollowers

> ListFollowersResponse getDealFollowers(id)

List followers of a deal

Lists the followers of a deal.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
apiInstance.getDealFollowers(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 

### Return type

[**ListFollowersResponse**](ListFollowersResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDealMailMessages

> ListMailMessagesResponse getDealMailMessages(id, opts)

List mail messages associated with a deal

Lists mail messages associated with a deal.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getDealMailMessages(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**ListMailMessagesResponse**](ListMailMessagesResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDealParticipants

> DealParticipants getDealParticipants(id, opts)

List participants of a deal

Lists participants associated with a deal.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getDealParticipants(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**DealParticipants**](DealParticipants.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDealPersons

> ListPersonsResponse getDealPersons(id, opts)

List all persons associated with a deal

Lists all persons associated with a deal, regardless of whether the person is the primary contact of the deal, or added as a participant.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getDealPersons(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**ListPersonsResponse**](ListPersonsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDealProducts

> ListProductsResponse getDealProducts(id, opts)

List products attached to a deal

Lists products attached to a deal.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'includeProductData': new Pipedrive.NumberBoolean() // NumberBoolean | Whether to fetch product data along with each attached product (1) or not (0, default).
};
apiInstance.getDealProducts(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **includeProductData** | [**NumberBoolean**](.md)| Whether to fetch product data along with each attached product (1) or not (0, default). | [optional] 

### Return type

[**ListProductsResponse**](ListProductsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDealUpdates

> DealFlowResponse getDealUpdates(id, opts)

List updates about a deal

Lists updates about a deal.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'allChanges': "allChanges_example", // String | Whether to show custom field updates or not. 1 = Include custom field changes. If omitted returns changes without custom field updates.
  'items': "items_example" // String | A comma-separated string for filtering out item specific updates. (Possible values - activity, plannedActivity, note, file, change, deal, follower, participant, mailMessage, mailMessageWithAttachment, invoice, activityFile, document)
};
apiInstance.getDealUpdates(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **allChanges** | **String**| Whether to show custom field updates or not. 1 &#x3D; Include custom field changes. If omitted returns changes without custom field updates. | [optional] 
 **items** | **String**| A comma-separated string for filtering out item specific updates. (Possible values - activity, plannedActivity, note, file, change, deal, follower, participant, mailMessage, mailMessageWithAttachment, invoice, activityFile, document) | [optional] 

### Return type

[**DealFlowResponse**](DealFlowResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDealUsers

> ListPermittedUsersResponse getDealUsers(id)

List permitted users

List users permitted to access a deal

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
apiInstance.getDealUsers(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 

### Return type

[**ListPermittedUsersResponse**](ListPermittedUsersResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDeals

> GetDeals getDeals(opts)

Get all deals

Returns all deals. For more information on how to get all deals, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/getting-all-deals\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.DealsApi();
let opts = {
  'userId': 56, // Number | If supplied, only deals matching the given user will be returned. However, `filter_id` and `owned_by_you` takes precedence over `user_id` when supplied.
  'filterId': 56, // Number | ID of the filter to use
  'stageId': 56, // Number | If supplied, only deals within the given stage will be returned.
  'status': "'all_not_deleted'", // String | Only fetch deals with specific status. If omitted, all not deleted deals are fetched.
  'start': 0, // Number | Pagination start
  'limit': 56, // Number | Items shown per page
  'sort': "sort_example", // String | Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys).
  'ownedByYou': new Pipedrive.NumberBoolean() // NumberBoolean | When supplied, only deals owned by you are returned. However, `filter_id` takes precedence over `owned_by_you` when both are supplied.
};
apiInstance.getDeals(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| If supplied, only deals matching the given user will be returned. However, &#x60;filter_id&#x60; and &#x60;owned_by_you&#x60; takes precedence over &#x60;user_id&#x60; when supplied. | [optional] 
 **filterId** | **Number**| ID of the filter to use | [optional] 
 **stageId** | **Number**| If supplied, only deals within the given stage will be returned. | [optional] 
 **status** | **String**| Only fetch deals with specific status. If omitted, all not deleted deals are fetched. | [optional] [default to &#39;all_not_deleted&#39;]
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 
 **sort** | **String**| Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). | [optional] 
 **ownedByYou** | [**NumberBoolean**](.md)| When supplied, only deals owned by you are returned. However, &#x60;filter_id&#x60; takes precedence over &#x60;owned_by_you&#x60; when both are supplied. | [optional] 

### Return type

[**GetDeals**](GetDeals.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDealsByName

> GetDealsByName getDealsByName(term, opts)

Find deals by name

&lt;strong&gt;This endpoint is deprecated. Please use &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/#!/Deals/get_deals_search\&quot;&gt;/v1/deals/search&lt;/a&gt; or &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/#!/ItemSearch/get_itemSearch\&quot;&gt;/v1/itemSearch&lt;/a&gt; instead&lt;/strong&gt;. &lt;br&gt; Searches all deals by their title.

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

let apiInstance = new Pipedrive.DealsApi();
let term = "term_example"; // String | Search term to look for
let opts = {
  'personId': 56, // Number | ID of the person the Deal is associated with.
  'orgId': 56 // Number | ID of the organization the Deal is associated with.
};
apiInstance.getDealsByName(term, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| Search term to look for | 
 **personId** | **Number**| ID of the person the Deal is associated with. | [optional] 
 **orgId** | **Number**| ID of the organization the Deal is associated with. | [optional] 

### Return type

[**GetDealsByName**](GetDealsByName.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDealsSummary

> GetDealsSummary getDealsSummary(opts)

Get deals summary

Returns summary of all the deals.

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

let apiInstance = new Pipedrive.DealsApi();
let opts = {
  'status': "status_example", // String | Only fetch deals with specific status. open = Open, won = Won, lost = Lost
  'filterId': 56, // Number | user_id will not be considered. Only deals matching the given filter will be returned.
  'userId': 56, // Number | Only deals matching the given user will be returned. user_id will not be considered if you use filter_id.
  'stageId': 56 // Number | Only deals within the given stage will be returned.
};
apiInstance.getDealsSummary(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| Only fetch deals with specific status. open &#x3D; Open, won &#x3D; Won, lost &#x3D; Lost | [optional] 
 **filterId** | **Number**| user_id will not be considered. Only deals matching the given filter will be returned. | [optional] 
 **userId** | **Number**| Only deals matching the given user will be returned. user_id will not be considered if you use filter_id. | [optional] 
 **stageId** | **Number**| Only deals within the given stage will be returned. | [optional] 

### Return type

[**GetDealsSummary**](GetDealsSummary.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDealsTimeline

> GetDealsTimeline getDealsTimeline(startDate, interval, amount, fieldKey, opts)

Get deals timeline

Returns open and won deals, grouped by defined interval of time set in a date-type dealField (field_key) — e.g. when month is the chosen interval, and 3 months are asked starting from  January 1st, 2012, deals are returned grouped into 3 groups — January, February and March — based on the value of the given field_key.

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

let apiInstance = new Pipedrive.DealsApi();
let startDate = new Date("2013-10-20"); // Date | Date where the first interval starts. Format: YYYY-MM-DD
let interval = "interval_example"; // String | The type of interval<dl class=\"fields-list\"><dt>day</dt><dd>Day</dd><dt>week</dt><dd>A full week (7 days) starting from start_date</dd><dt>month</dt><dd>A full month (depending on the number of days in given month) starting from start_date</dd><dt>quarter</dt><dd>A full quarter (3 months) starting from start_date</dd></dl>
let amount = 56; // Number | The number of given intervals, starting from start_date, to fetch. E.g. 3 (months).
let fieldKey = "fieldKey_example"; // String | The date field key which deals will be retrieved from
let opts = {
  'userId': 56, // Number | If supplied, only deals matching the given user will be returned.
  'pipelineId': 56, // Number | If supplied, only deals matching the given pipeline will be returned
  'filterId': 56, // Number | If supplied, only deals matching the given filter will be returned
  'excludeDeals': new Pipedrive.NumberBoolean(), // NumberBoolean | Whether to exclude deals list (1) or not (0). Note that when deals are excluded, the timeline summary (counts and values) is still returned.
  'totalsConvertCurrency': "totalsConvertCurrency_example" // String | 3-letter currency code of any of the supported currencies. When supplied, totals_converted is returned per each interval which contains the currency-converted total amounts in the given currency. You may also set this parameter to 'default_currency' in which case users default currency is used.
};
apiInstance.getDealsTimeline(startDate, interval, amount, fieldKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**| Date where the first interval starts. Format: YYYY-MM-DD | 
 **interval** | **String**| The type of interval&lt;dl class&#x3D;\&quot;fields-list\&quot;&gt;&lt;dt&gt;day&lt;/dt&gt;&lt;dd&gt;Day&lt;/dd&gt;&lt;dt&gt;week&lt;/dt&gt;&lt;dd&gt;A full week (7 days) starting from start_date&lt;/dd&gt;&lt;dt&gt;month&lt;/dt&gt;&lt;dd&gt;A full month (depending on the number of days in given month) starting from start_date&lt;/dd&gt;&lt;dt&gt;quarter&lt;/dt&gt;&lt;dd&gt;A full quarter (3 months) starting from start_date&lt;/dd&gt;&lt;/dl&gt; | 
 **amount** | **Number**| The number of given intervals, starting from start_date, to fetch. E.g. 3 (months). | 
 **fieldKey** | **String**| The date field key which deals will be retrieved from | 
 **userId** | **Number**| If supplied, only deals matching the given user will be returned. | [optional] 
 **pipelineId** | **Number**| If supplied, only deals matching the given pipeline will be returned | [optional] 
 **filterId** | **Number**| If supplied, only deals matching the given filter will be returned | [optional] 
 **excludeDeals** | [**NumberBoolean**](.md)| Whether to exclude deals list (1) or not (0). Note that when deals are excluded, the timeline summary (counts and values) is still returned. | [optional] 
 **totalsConvertCurrency** | **String**| 3-letter currency code of any of the supported currencies. When supplied, totals_converted is returned per each interval which contains the currency-converted total amounts in the given currency. You may also set this parameter to &#39;default_currency&#39; in which case users default currency is used. | [optional] 

### Return type

[**GetDealsTimeline**](GetDealsTimeline.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mergeDeals

> GetMergedDeal mergeDeals(id, mergeWithId)

Merge two deals

Merges a deal with another deal. For more information on how to merge two deals, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/merging-two-deals\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let mergeWithId = 56; // Number | ID of the deal that the deal will be merged with
apiInstance.mergeDeals(id, mergeWithId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
 **mergeWithId** | **Number**| ID of the deal that the deal will be merged with | 

### Return type

[**GetMergedDeal**](GetMergedDeal.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## searchDeals

> DealSearchResponse searchDeals(term, opts)

Search deals

Searches all Deals by title, notes and/or custom fields. This endpoint is a wrapper of &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/#!/ItemSearch/get_itemSearch\&quot;&gt;/v1/itemSearch&lt;/a&gt; with a narrower OAuth scope. Found Deals can be filtered by Person ID and Organization ID.

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

let apiInstance = new Pipedrive.DealsApi();
let term = "term_example"; // String | The search term to look for. Minimum 2 characters (or 1 if using exact_match).
let opts = {
  'fields': "fields_example", // String | A comma-separated string array. The fields to perform the search from. Defaults to all of them.
  'exactMatch': true, // Boolean | When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
  'personId': 56, // Number | Will filter Deals by the provided Person ID. The upper limit of found Deals associated with the Person is 2000.
  'organizationId': 56, // Number | Will filter Deals by the provided Organization ID. The upper limit of found Deals associated with the Organization is 2000.
  'status': "status_example", // String | Will filter Deals by the provided specific status. open = Open, won = Won, lost = Lost. The upper limit of found Deals associated with the status is 2000.
  'includeFields': "includeFields_example", // String | Supports including optional fields in the results which are not provided by default.
  'start': 0, // Number | Pagination start. Note that the pagination is based on main results and does not include related items when using search_for_related_items parameter.
  'limit': 56 // Number | Items shown per page
};
apiInstance.searchDeals(term, opts).then((data) => {
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
 **personId** | **Number**| Will filter Deals by the provided Person ID. The upper limit of found Deals associated with the Person is 2000. | [optional] 
 **organizationId** | **Number**| Will filter Deals by the provided Organization ID. The upper limit of found Deals associated with the Organization is 2000. | [optional] 
 **status** | **String**| Will filter Deals by the provided specific status. open &#x3D; Open, won &#x3D; Won, lost &#x3D; Lost. The upper limit of found Deals associated with the status is 2000. | [optional] 
 **includeFields** | **String**| Supports including optional fields in the results which are not provided by default. | [optional] 
 **start** | **Number**| Pagination start. Note that the pagination is based on main results and does not include related items when using search_for_related_items parameter. | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**DealSearchResponse**](DealSearchResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDeal

> GetAddedDeal updateDeal(id, opts)

Update a deal

Updates the properties of a deal. For more information on how to update a deal, see &lt;a href&#x3D;\&quot;https://pipedrive.readme.io/docs/updating-a-deal\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;this tutorial&lt;/a&gt;.

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

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let opts = {
  'title': "title_example", // String | Deal title
  'value': "value_example", // String | Value of the deal. If omitted, value will be set to 0.
  'currency': "currency_example", // String | Currency of the deal. Accepts a 3-character currency code. If omitted, currency will be set to the default currency of the authorized user.
  'userId': 56, // Number | ID of the user who will be marked as the owner of this deal. If omitted, the authorized user ID will be used.
  'personId': 56, // Number | ID of the person this deal will be associated with
  'orgId': 56, // Number | ID of the organization this deal will be associated with
  'stageId': 56, // Number | ID of the stage this deal will be placed in a pipeline (note that you can't supply the ID of the pipeline as this will be assigned automatically based on stage_id). If omitted, the deal will be placed in the first stage of the default pipeline.
  'status': "status_example", // String | open = Open, won = Won, lost = Lost, deleted = Deleted. If omitted, status will be set to open.
  'expectedCloseDate': new Date("2013-10-20"), // Date | The expected close date of the Deal. In ISO 8601 format: YYYY-MM-DD.
  'probability': 3.4, // Number | Deal success probability percentage. Used/shown only when deal_probability for the pipeline of the deal is enabled.
  'lostReason': "lostReason_example", // String | Optional message about why the deal was lost (to be used when status=lost)
  'visibleTo': new Pipedrive.VisibleTo() // VisibleTo | Visibility of the deal. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.<dl class=\\\"fields-list\\\"><dt>1</dt><dd>Owner &amp; followers (private)</dd><dt>3</dt><dd>Entire company (shared)</dd></dl>
};
apiInstance.updateDeal(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
 **title** | **String**| Deal title | [optional] 
 **value** | **String**| Value of the deal. If omitted, value will be set to 0. | [optional] 
 **currency** | **String**| Currency of the deal. Accepts a 3-character currency code. If omitted, currency will be set to the default currency of the authorized user. | [optional] 
 **userId** | **Number**| ID of the user who will be marked as the owner of this deal. If omitted, the authorized user ID will be used. | [optional] 
 **personId** | **Number**| ID of the person this deal will be associated with | [optional] 
 **orgId** | **Number**| ID of the organization this deal will be associated with | [optional] 
 **stageId** | **Number**| ID of the stage this deal will be placed in a pipeline (note that you can&#39;t supply the ID of the pipeline as this will be assigned automatically based on stage_id). If omitted, the deal will be placed in the first stage of the default pipeline. | [optional] 
 **status** | **String**| open &#x3D; Open, won &#x3D; Won, lost &#x3D; Lost, deleted &#x3D; Deleted. If omitted, status will be set to open. | [optional] 
 **expectedCloseDate** | **Date**| The expected close date of the Deal. In ISO 8601 format: YYYY-MM-DD. | [optional] 
 **probability** | **Number**| Deal success probability percentage. Used/shown only when deal_probability for the pipeline of the deal is enabled. | [optional] 
 **lostReason** | **String**| Optional message about why the deal was lost (to be used when status&#x3D;lost) | [optional] 
 **visibleTo** | [**VisibleTo**](VisibleTo.md)| Visibility of the deal. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.&lt;dl class&#x3D;\\\&quot;fields-list\\\&quot;&gt;&lt;dt&gt;1&lt;/dt&gt;&lt;dd&gt;Owner &amp;amp; followers (private)&lt;/dd&gt;&lt;dt&gt;3&lt;/dt&gt;&lt;dd&gt;Entire company (shared)&lt;/dd&gt;&lt;/dl&gt; | [optional] 

### Return type

[**GetAddedDeal**](GetAddedDeal.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## updateDealProduct

> GetProductAttachementDetails updateDealProduct(id, productAttachmentId, opts)

Update product attachment details of the deal-product (a product already attached to a deal)

Updates product attachment details.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.DealsApi();
let id = 56; // Number | ID of the deal
let productAttachmentId = 56; // Number | ID of the deal-product (the ID of the product attached to the deal)
let opts = {
  'basicDealProduct': new Pipedrive.BasicDealProduct() // BasicDealProduct | 
};
apiInstance.updateDealProduct(id, productAttachmentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the deal | 
 **productAttachmentId** | **Number**| ID of the deal-product (the ID of the product attached to the deal) | 
 **basicDealProduct** | [**BasicDealProduct**](BasicDealProduct.md)|  | [optional] 

### Return type

[**GetProductAttachementDetails**](GetProductAttachementDetails.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

