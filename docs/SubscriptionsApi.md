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
[**getSubscriptionPayments**](SubscriptionsApi.md#getSubscriptionPayments) | **GET** /subscriptions/{id}/payments | Get all payments of a Subscription
[**updateRecurringSubscription**](SubscriptionsApi.md#updateRecurringSubscription) | **PUT** /subscriptions/recurring/{id} | Update a recurring subscription
[**updateSubscriptionInstallment**](SubscriptionsApi.md#updateSubscriptionInstallment) | **PUT** /subscriptions/installment/{id} | Update an installment subscription



## addRecurringSubscription

> SubscriptionsIdResponse addRecurringSubscription(opts)

Add a recurring subscription

Adds a new recurring Subscription.

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

let apiInstance = new Pipedrive.SubscriptionsApi();
let opts = {
  'subscriptionRecurringCreateRequest': new Pipedrive.SubscriptionRecurringCreateRequest() // SubscriptionRecurringCreateRequest | 
};
apiInstance.addRecurringSubscription(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionRecurringCreateRequest** | [**SubscriptionRecurringCreateRequest**](SubscriptionRecurringCreateRequest.md)|  | [optional] 

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

Adds a new installment Subscription.

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

let apiInstance = new Pipedrive.SubscriptionsApi();
let opts = {
  'subscriptionInstallmentCreateRequest': new Pipedrive.SubscriptionInstallmentCreateRequest() // SubscriptionInstallmentCreateRequest | 
};
apiInstance.addSubscriptionInstallment(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionInstallmentCreateRequest** | [**SubscriptionInstallmentCreateRequest**](SubscriptionInstallmentCreateRequest.md)|  | [optional] 

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

Cancels a recurring Subscription.

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

let apiInstance = new Pipedrive.SubscriptionsApi();
let id = 56; // Number | ID of the Subscription
let opts = {
  'subscriptionRecurringCancelRequest': new Pipedrive.SubscriptionRecurringCancelRequest() // SubscriptionRecurringCancelRequest | 
};
apiInstance.cancelRecurringSubscription(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the Subscription | 
 **subscriptionRecurringCancelRequest** | [**SubscriptionRecurringCancelRequest**](SubscriptionRecurringCancelRequest.md)|  | [optional] 

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

Marks an installment or a recurring Subscription as deleted.

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

let apiInstance = new Pipedrive.SubscriptionsApi();
let id = 56; // Number | ID of the Subscription
apiInstance.deleteSubscription(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the Subscription | 

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

Returns details of an installment or a recurring Subscription by Deal ID.

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

let apiInstance = new Pipedrive.SubscriptionsApi();
let dealId = 56; // Number | ID of the Deal
apiInstance.findSubscriptionByDeal(dealId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealId** | **Number**| ID of the Deal | 

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

Returns details of an installment or a recurring Subscription.

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

let apiInstance = new Pipedrive.SubscriptionsApi();
let id = 56; // Number | ID of the Subscription
apiInstance.getSubscription(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the Subscription | 

### Return type

[**SubscriptionsIdResponse**](SubscriptionsIdResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubscriptionPayments

> PaymentsResponse getSubscriptionPayments(id)

Get all payments of a Subscription

Returns all payments of an installment or recurring Subscription.

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

let apiInstance = new Pipedrive.SubscriptionsApi();
let id = 56; // Number | ID of the Subscription
apiInstance.getSubscriptionPayments(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the Subscription | 

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

Updates a recurring Subscription.

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

let apiInstance = new Pipedrive.SubscriptionsApi();
let id = 56; // Number | ID of the Subscription
let opts = {
  'subscriptionRecurringUpdateRequest': new Pipedrive.SubscriptionRecurringUpdateRequest() // SubscriptionRecurringUpdateRequest | 
};
apiInstance.updateRecurringSubscription(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the Subscription | 
 **subscriptionRecurringUpdateRequest** | [**SubscriptionRecurringUpdateRequest**](SubscriptionRecurringUpdateRequest.md)|  | [optional] 

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

Updates an installment Subscription.

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

let apiInstance = new Pipedrive.SubscriptionsApi();
let id = 56; // Number | ID of the Subscription
let opts = {
  'subscriptionInstallmentUpdateRequest': new Pipedrive.SubscriptionInstallmentUpdateRequest() // SubscriptionInstallmentUpdateRequest | 
};
apiInstance.updateSubscriptionInstallment(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the Subscription | 
 **subscriptionInstallmentUpdateRequest** | [**SubscriptionInstallmentUpdateRequest**](SubscriptionInstallmentUpdateRequest.md)|  | [optional] 

### Return type

[**SubscriptionsIdResponse**](SubscriptionsIdResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

