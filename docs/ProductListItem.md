# Pipedrive.ProductListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the deal-product (the ID of the product attached to the deal) | [optional] 
**deal_id** | **Number** | The ID of the deal | [optional] 
**order_nr** | **Number** | The order number of the product | [optional] 
**product_id** | **Number** | The ID of the product | [optional] 
**product_variation_id** | **Number** | The ID of the product variation | [optional] 
**item_price** | **Number** | The price value of the product | [optional] 
**discount** | **Number** | The value of the discount. The &#x60;discount_type&#x60; field can be used to specify whether the value is an amount or a percentage | [optional] [default to 0]
**discount_type** | **String** | The type of the discount&#39;s value | [optional] [default to &#39;percentage&#39;]
**sum** | **Number** | The sum of all the products attached to the deal | [optional] 
**currency** | **String** | The currency associated with the deal product | [optional] 
**enabled_flag** | **Boolean** | Whether the product is enabled or not | [optional] 
**add_time** | **String** | The date and time when the product was added to the deal | [optional] 
**last_edit** | **String** | The date and time when the deal product was last edited | [optional] 
**comments** | **String** | The comments of the product | [optional] 
**active_flag** | **Boolean** | Whether the product is active or not | [optional] 
**tax** | **Number** | The product tax | [optional] 
**tax_method** | **String** | The tax option to be applied to the products. When using &#x60;inclusive&#x60;, the tax percentage will already be included in the price. When using &#x60;exclusive&#x60;, the tax will not be included in the price. When using &#x60;none&#x60;, no tax will be added. Use the &#x60;tax&#x60; field for defining the tax percentage amount. By default, the user setting value for tax options will be used. Changing this in one product affects the rest of the products attached to the deal | [optional] 
**name** | **String** | The product name | [optional] 
**sum_formatted** | **String** | The formatted sum of the product | [optional] 
**quantity_formatted** | **String** | The formatted quantity of the product | [optional] 
**quantity** | **Number** | The quantity of the product | [optional] 
**product** | [**ProductWithArrayPrices**](ProductWithArrayPrices.md) |  | [optional] 



## Enum: DiscountTypeEnum


* `percentage` (value: `"percentage"`)

* `amount` (value: `"amount"`)





## Enum: TaxMethodEnum


* `exclusive` (value: `"exclusive"`)

* `inclusive` (value: `"inclusive"`)

* `none` (value: `"none"`)




