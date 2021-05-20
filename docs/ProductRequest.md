# Pipedrive.ProductRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the product. | [optional] 
**code** | **String** | Product code. | [optional] 
**unit** | **String** | Unit in which this product is sold | [optional] 
**tax** | **Number** | Tax percentage | [optional] [default to 0]
**activeFlag** | [**NumberBooleanDefault1**](NumberBooleanDefault1.md) |  | [optional] 
**selectable** | [**NumberBooleanDefault1**](NumberBooleanDefault1.md) |  | [optional] 
**visibleTo** | [**VisibleTo**](VisibleTo.md) | Visibility of the product. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.&lt;table&gt;&lt;tr&gt;&lt;th&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner &amp;amp; followers (private)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Entire company (shared)&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; | [optional] 
**ownerId** | **Number** | ID of the user who will be marked as the owner of this product. When omitted, the authorized user ID will be used. | [optional] 
**prices** | **[Object]** | Array of objects, each containing: &#x60;currency&#x60; (string), &#x60;price&#x60; (number), &#x60;cost&#x60; (number, optional), &#x60;overhead_cost&#x60; (number, optional). Note that there can only be one price per product per currency. When &#x60;prices&#x60; is omitted altogether, no prices will be set up for the product | [optional] 


