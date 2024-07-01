# Pipedrive.UpdateDealProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **Number** | The ID of the product to use | [optional] 
**item_price** | **Number** | The price at which this product will be added to the deal | [optional] 
**quantity** | **Number** | How many items of this product will be added to the deal | [optional] 
**discount** | **Number** | The value of the discount. The &#x60;discount_type&#x60; field can be used to specify whether the value is an amount or a percentage | [optional] [default to 0]
**discount_type** | **String** | The type of the discount&#39;s value | [optional] [default to &#39;percentage&#39;]
**product_variation_id** | **Number** | The ID of the product variation to use. When omitted, no variation will be used | [optional] 
**comments** | **String** | A textual comment associated with this product-deal attachment | [optional] 
**tax** | **Number** | The tax percentage | [optional] [default to 0]
**tax_method** | **String** | The tax option to be applied to the products. When using &#x60;inclusive&#x60;, the tax percentage will already be included in the price. When using &#x60;exclusive&#x60;, the tax will not be included in the price. When using &#x60;none&#x60;, no tax will be added. Use the &#x60;tax&#x60; field for defining the tax percentage amount | [optional] 
**enabled_flag** | **Boolean** | Whether the product is enabled for a deal or not. This makes it possible to add products to a deal with a specific price and discount criteria, but keep them disabled, which refrains them from being included in the deal value calculation. When omitted, the product will be marked as enabled by default | [optional] [default to true]
**billing_frequency** | [**BillingFrequency**](BillingFrequency.md) |  | [optional] 
**billing_frequency_cycles** | **Number** | Only available in Advanced and above plans  The number of times the billing frequency repeats for a product in a deal  When &#x60;billing_frequency&#x60; is set to &#x60;one-time&#x60;, this field must be &#x60;null&#x60;  For all the other values of &#x60;billing_frequency&#x60;, &#x60;null&#x60; represents a product billed indefinitely  Must be a positive integer less or equal to 312  | [optional] 
**billing_start_date** | **String** | Only available in Advanced and above plans  The billing start date. Must be between 15 years in the past and 15 years in the future  | [optional] 



## Enum: DiscountTypeEnum


* `percentage` (value: `"percentage"`)

* `amount` (value: `"amount"`)





## Enum: TaxMethodEnum


* `exclusive` (value: `"exclusive"`)

* `inclusive` (value: `"inclusive"`)

* `none` (value: `"none"`)




