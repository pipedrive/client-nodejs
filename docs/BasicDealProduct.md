# Pipedrive.BasicDealProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productId** | **Number** | The ID of the product to use |
**itemPrice** | **Number** | The price at which this product will be added to the deal |
**quantity** | **Number** | Quantity – e.g. how many items of this product will be added to the deal |
**discountPercentage** | **Number** | The discount %. If omitted, will be set to 0. | [optional] [default to 0]
**duration** | **Number** | The duration of the product. If omitted, will be set to 1. | [optional] [default to 1]
**durationUnit** | [**DealProductUnitDuration**](DealProductUnitDuration.md) | The unit duration of the product | [optional]
**productVariationId** | **Number** | The ID of the product variation to use. When omitted, no variation will be used. | [optional]
**comments** | **String** | A textual comment associated with this product-deal attachment | [optional]
**tax** | **Number** | The tax percentage | [optional] [default to 0]
**enabledFlag** | **Boolean** | Whether the product is enabled for a deal or not. This makes it possible to add products to a deal with a specific price and discount criteria, but keep them disabled, which refrains them from being included in the deal value calculation. When omitted, the product will be marked as enabled by default. | [optional] [default to true]


