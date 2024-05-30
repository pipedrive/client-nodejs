# Pipedrive.SubscriptionsApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRecurringSubscription**](SubscriptionsApi.md#addRecurringSubscription) | **POST** /subscriptions/recurring | Add a recurring subscription
[**addSubscriptionInstallment**](SubscriptionsApi.md#addSubscriptionInstallment) | **POST** /subscriptions/installment | Add an installment subscription
[**cancelRecurringSubscription**](SubscriptionsApi.md#cancelRecurringSubscription) | **PUT** /subscriptions/recurring/{id}/cancel | Cancel a recurring subscription
[**deleteSubscription**](SubscriptionsApi.md#deleteSubscription) | **DELETE** /subscriptions/{id} | Delete a subscription
[**findSubscriptionByDeal**](SubscriptionsApi.md#findSubscriptionByDeal) | **GET** /subscriptions/find/{dealId} | Find subscription by deal
[**getSubscription**](SubscriptionsApi.md#getSubscription) | **GET** /subscriptions/{id} | Get details of a subscription
[**getSubscriptionPayments**](SubscriptionsApi.md#getSubscriptionPayments) | **GET** /subscriptions/{id}/payments | Get all payments of a subscription
[**updateRecurringSubscription**](SubscriptionsApi.md#updateRecurringSubscription) | **PUT** /subscriptions/recurring/{id} | Update a recurring subscription
[**updateSubscriptionInstallment**](SubscriptionsApi.md#updateSubscriptionInstallment) | **PUT** /subscriptions/installment/{id} | Update an installment subscription



## addRecurringSubscription

> SubscriptionsIdResponse addRecurringSubscription(opts)

Add a recurring subscription

Adds a new recurring subscription.

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

let apiInstance = new Pipedrive.SubscriptionsApi(apiClient);
let opts = Pipedrive.SubscriptionRecurringCreateRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.addRecurringSubscription(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SubscriptionRecurringCreateRequest** | [**SubscriptionRecurringCreateRequest**](SubscriptionRecurringCreateRequest.md)|  | [optional] 

### Return type

[**SubscriptionsIdResponse**](SubscriptionsIdResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addSubscriptionInstallment

> SubscriptionsIdResponse addSubscriptionInstallment(opts)

Add an installment subscription

Adds a new installment subscription.

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

let apiInstance = new Pipedrive.SubscriptionsApi(apiClient);
let opts = Pipedrive.SubscriptionInstallmentCreateRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.addSubscriptionInstallment(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SubscriptionInstallmentCreateRequest** | [**SubscriptionInstallmentCreateRequest**](SubscriptionInstallmentCreateRequest.md)|  | [optional] 

### Return type

[**SubscriptionsIdResponse**](SubscriptionsIdResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cancelRecurringSubscription

> SubscriptionsIdResponse cancelRecurringSubscription(id, opts)

Cancel a recurring subscription

Cancels a recurring subscription.

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

let apiInstance = new Pipedrive.SubscriptionsApi(apiClient);
let id = 56; // Number | The ID of the subscription
let opts = Pipedrive.SubscriptionRecurringCancelRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.cancelRecurringSubscription(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the subscription | 
 **SubscriptionRecurringCancelRequest** | [**SubscriptionRecurringCancelRequest**](SubscriptionRecurringCancelRequest.md)|  | [optional] 

### Return type

[**SubscriptionsIdResponse**](SubscriptionsIdResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSubscription

> SubscriptionsIdResponse deleteSubscription(id)

Delete a subscription

Marks an installment or a recurring subscription as deleted.

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

let apiInstance = new Pipedrive.SubscriptionsApi(apiClient);
let id = 56; // Number | The ID of the subscription
apiInstance.deleteSubscription(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the subscription | 

### Return type

[**SubscriptionsIdResponse**](SubscriptionsIdResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findSubscriptionByDeal

> SubscriptionsIdResponse findSubscriptionByDeal(dealId)

Find subscription by deal

Returns details of an installment or a recurring subscription by the deal ID.

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

let apiInstance = new Pipedrive.SubscriptionsApi(apiClient);
let dealId = 56; // Number | The ID of the deal
apiInstance.findSubscriptionByDeal(dealId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealId** | **Number**| The ID of the deal | 

### Return type

[**SubscriptionsIdResponse**](SubscriptionsIdResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubscription

> SubscriptionsIdResponse getSubscription(id)

Get details of a subscription

Returns details of an installment or a recurring subscription.

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

let apiInstance = new Pipedrive.SubscriptionsApi(apiClient);
let id = 56; // Number | The ID of the subscription
apiInstance.getSubscription(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the subscription | 

### Return type

[**SubscriptionsIdResponse**](SubscriptionsIdResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubscriptionPayments

> PaymentsResponse getSubscriptionPayments(id)

Get all payments of a subscription

Returns all payments of an installment or recurring subscription.

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

let apiInstance = new Pipedrive.SubscriptionsApi(apiClient);
let id = 56; // Number | The ID of the subscription
apiInstance.getSubscriptionPayments(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the subscription | 

### Return type

[**PaymentsResponse**](PaymentsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRecurringSubscription

> SubscriptionsIdResponse updateRecurringSubscription(id, opts)

Update a recurring subscription

Updates a recurring subscription.

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

let apiInstance = new Pipedrive.SubscriptionsApi(apiClient);
let id = 56; // Number | The ID of the subscription
let opts = Pipedrive.SubscriptionRecurringUpdateRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateRecurringSubscription(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the subscription | 
 **SubscriptionRecurringUpdateRequest** | [**SubscriptionRecurringUpdateRequest**](SubscriptionRecurringUpdateRequest.md)|  | [optional] 

### Return type

[**SubscriptionsIdResponse**](SubscriptionsIdResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSubscriptionInstallment

> SubscriptionsIdResponse updateSubscriptionInstallment(id, opts)

Update an installment subscription

Updates an installment subscription.

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

let apiInstance = new Pipedrive.SubscriptionsApi(apiClient);
let id = 56; // Number | The ID of the subscription
let opts = Pipedrive.SubscriptionInstallmentUpdateRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateSubscriptionInstallment(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the subscription | 
 **SubscriptionInstallmentUpdateRequest** | [**SubscriptionInstallmentUpdateRequest**](SubscriptionInstallmentUpdateRequest.md)|  | [optional] 

### Return type

[**SubscriptionsIdResponse**](SubscriptionsIdResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

