# Pipedrive.BasicDealProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_price** | **Number** | The price at which this product will be added to the deal | [optional] 
**quantity** | **Number** | Quantity – e.g. how many items of this product will be added to the deal | [optional] 
**discount_percentage** | **Number** | The discount %. If omitted, will be set to 0. | [optional] [default to 0]
**duration** | **Number** | The duration of the product (when product durations are not enabled for the company or if omitted, defaults to 1) | [optional] [default to 1]
**product_variation_id** | **Number** | The ID of the product variation to use. When omitted, no variation will be used. | [optional] 
**comments** | **String** | Any textual comment associated with this product-deal attachment. Visible and editable in the application UI. | [optional] 
**tax** | **Number** | The tax percentage | [optional] [default to 0]
**enabled_flag** | [**NumberBoolean**](NumberBoolean.md) | Whether the product is enabled on the deal or not. This makes it possible to add products to a deal with a specific price and discount criteria - but keep them disabled, which refrains them from being included in the deal price calculation. When omitted, the product will be marked as enabled by default. | [optional] 


