# Pipedrive.DealProductRequestBody

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
**enabled_flag** | **Boolean** | Whether the product is enabled for a deal or not  This makes it possible to add products to a deal with a specific price and discount criteria, but keep them disabled, which refrains them from being included in the deal value calculation. When omitted, the product will be marked as enabled by default  Not possible to disable the product if the deal has installments associated and the product is the last one enabled  Not possible to enable the product if the deal has installments associated and the product is recurring  | [optional] [default to true]



## Enum: DiscountTypeEnum


* `percentage` (value: `"percentage"`)

* `amount` (value: `"amount"`)





## Enum: TaxMethodEnum


* `exclusive` (value: `"exclusive"`)

* `inclusive` (value: `"inclusive"`)

* `none` (value: `"none"`)




