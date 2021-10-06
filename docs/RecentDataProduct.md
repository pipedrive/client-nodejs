# Pipedrive.RecentDataProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the Product | [optional] 
**name** | **String** | Name of the product | [optional] 
**code** | **String** | Product code | [optional] 
**description** | **String** | Description of the Product | [optional] 
**unit** | **String** | Unit in which this product is sold | [optional] 
**tax** | **Number** | Tax percentage | [optional] [default to 0]
**category** | **String** | Category of the Product | [optional] 
**activeFlag** | **Boolean** | Whether this product will be made active or not | [optional] 
**selectable** | **Boolean** | Whether this product can be selected in Deals or not | [optional] 
**firstChar** | **String** | First letter of the Product name | [optional] 
**visibleTo** | **Number** | Visibility of the product. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user. | [optional] 
**ownerId** | **Number** | ID of the user who will be marked as the owner of this product. When omitted, authorized user ID will be used | [optional] 
**filesCount** | **Number** | Files count | [optional] 
**followersCount** | **Number** | Followers count | [optional] 
**addTime** | **String** | Date and time when the Product was added to the Deal | [optional] 
**updateTime** | **String** | Date and time when the Product was updated to the Deal | [optional] 
**prices** | **[Object]** | Array of objects, each containing: &#x60;currency&#x60; (string), &#x60;price&#x60; (number), &#x60;cost&#x60; (number, optional), &#x60;overhead_cost&#x60; (number, optional). Note that there can only be one price per product per currency. When &#x60;prices&#x60; is omitted altogether, no prices will be set up for the product. | [optional] 


