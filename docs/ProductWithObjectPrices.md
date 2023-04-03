# Pipedrive.ProductWithObjectPrices

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the product | [optional] 
**name** | **String** | The name of the product | [optional] 
**code** | **String** | The product code | [optional] 
**unit** | **String** | The unit in which this product is sold | [optional] 
**tax** | **Number** | The ax percentage | [optional] [default to 0]
**activeFlag** | **Boolean** | Whether this product is active or not | [optional] [default to true]
**selectable** | **Boolean** | Whether this product is selected in deals or not | [optional] [default to true]
**visibleTo** | [**VisibleTo**](VisibleTo.md) | Visibility of the product | [optional] 
**ownerId** | **Object** | Information about the Pipedrive user who owns the product | [optional] 
**prices** | **Object** | Object of objects, each containing: currency (string), price (number), cost (number, optional), overhead_cost (number, optional) | [optional] 


