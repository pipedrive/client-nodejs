# Pipedrive.BasicDealProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemPrice** | **Number** | Price at which this product will be added to the deal | [optional] 
**quantity** | **Number** | Quantity – e.g. how many items of this product will be added to the deal | [optional] 
**discountPercentage** | **Number** | Discount %. If omitted, will be set to 0 | [optional] [default to 0]
**duration** | **Number** | Duration of the product (when product durations are not enabled for the company or if omitted, defaults to 1) | [optional] [default to 1]
**productVariationId** | **Number** | ID of the product variation to use. When omitted, no variation will be used. | [optional] 
**comments** | **String** | Any textual comment associated with this product-deal attachment. Visible and editable in the application UI. | [optional] 
**enabledFlag** | [**NumberBoolean**](NumberBoolean.md) | Whether the product is enabled on the deal or not. This makes it possible to add products to a deal with specific price and discount criteria - but keep them disabled, which refrains them from being included in deal price calculation. When omitted, the product will be marked as enabled by default. | [optional] 


