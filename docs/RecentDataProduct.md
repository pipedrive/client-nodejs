# Pipedrive.RecentDataProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the product | [optional] 
**name** | **String** | The name of the product | [optional] 
**code** | **String** | The product code | [optional] 
**description** | **String** | The description of the product | [optional] 
**unit** | **String** | The unit in which this product is sold | [optional] 
**tax** | **Number** | The tax percentage | [optional] [default to 0]
**category** | **String** | The category of the product | [optional] 
**activeFlag** | **Boolean** | Whether this product will be made active or not | [optional] 
**selectable** | **Boolean** | Whether this product can be selected in deals or not | [optional] 
**firstChar** | **String** | The first letter of the product name | [optional] 
**visibleTo** | **Number** | The visibility of the product. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user. | [optional] 
**ownerId** | **Number** | The ID of the user who will be marked as the owner of this product. When omitted, authorized user ID will be used. | [optional] 
**filesCount** | **Number** | The count of files | [optional] 
**followersCount** | **Number** | The count of followers | [optional] 
**addTime** | **String** | The date and time when the product was added to the deal | [optional] 
**updateTime** | **String** | The date and time when the product was updated to the deal | [optional] 
**prices** | **[Object]** | Array of objects, each containing: &#x60;currency&#x60; (string), &#x60;price&#x60; (number), &#x60;cost&#x60; (number, optional), &#x60;overhead_cost&#x60; (number, optional). Note that there can only be one price per product per currency. When &#x60;prices&#x60; is omitted altogether, no prices will be set up for the product. | [optional] 


