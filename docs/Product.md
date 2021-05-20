# Pipedrive.Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the product | [optional] 
**name** | **String** | The name of the product | [optional] 
**code** | **String** | Product code | [optional] 
**unit** | **String** | The unit in which this product is sold | [optional] 
**tax** | **Number** | Tax percentage | [optional] [default to 0]
**activeFlag** | [**NumberBooleanDefault1**](NumberBooleanDefault1.md) |  | [optional] 
**selectable** | [**NumberBooleanDefault1**](NumberBooleanDefault1.md) |  | [optional] 
**visibleTo** | [**VisibleTo**](VisibleTo.md) | Visibility of the product | [optional] 
**ownerId** | **Object** | Information about the Pipedrive User who owns the product | [optional] 
**prices** | **[Object]** | Array of objects, each containing: currency (string), price (number), cost (number, optional), overhead_cost (number, optional) | [optional] 


