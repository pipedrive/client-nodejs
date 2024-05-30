# Pipedrive.CurrenciesApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrencies**](CurrenciesApi.md#getCurrencies) | **GET** /currencies | Get all supported currencies



## getCurrencies

> Currencies getCurrencies(opts)

Get all supported currencies

Returns all supported currencies in given account which should be used when saving monetary values with other objects. The &#x60;code&#x60; parameter of the returning objects is the currency code according to ISO 4217 for all non-custom currencies.

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

let apiInstance = new Pipedrive.CurrenciesApi(apiClient);
// snake_case as well as camelCase is supported for naming opts properties
let opts = {
  'term': "term_example" // String | Optional search term that is searched for from currency's name and/or code
};
apiInstance.getCurrencies(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| Optional search term that is searched for from currency&#39;s name and/or code | [optional] 

### Return type

[**Currencies**](Currencies.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

