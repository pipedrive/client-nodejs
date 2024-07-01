# Pipedrive.BaseProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the product | [optional] 
**name** | **String** | The name of the product | [optional] 
**code** | **String** | The product code | [optional] 
**unit** | **String** | The unit in which this product is sold | [optional] 
**tax** | **Number** | The tax percentage | [optional] [default to 0]
**active_flag** | **Boolean** | Whether this product is active or not | [optional] [default to true]
**selectable** | **Boolean** | Whether this product is selected in deals or not | [optional] [default to true]
**visible_to** | [**VisibleTo**](VisibleTo.md) | Visibility of the product | [optional] 
**owner_id** | **Object** | Information about the Pipedrive user who owns the product | [optional] 
**billing_frequency** | **String** | Only available in Advanced and above plans  How often a customer is billed for access to a service or product  | [optional] [default to &#39;one-time&#39;]
**billing_frequency_cycles** | **Number** | Only available in Advanced and above plans  The number of times the billing frequency repeats for a product in a deal  When &#x60;billing_frequency&#x60; is set to &#x60;one-time&#x60;, this field is always &#x60;null&#x60;  For all the other values of &#x60;billing_frequency&#x60;, &#x60;null&#x60; represents a product billed indefinitely  Must be a positive integer less or equal to 312  | [optional] 



## Enum: BillingFrequencyEnum


* `one-time` (value: `"one-time"`)

* `annually` (value: `"annually"`)

* `semi-annually` (value: `"semi-annually"`)

* `quarterly` (value: `"quarterly"`)

* `monthly` (value: `"monthly"`)

* `weekly` (value: `"weekly"`)




