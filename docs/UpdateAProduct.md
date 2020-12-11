# Pipedrive.UpdateAProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the product. | [optional] 
**code** | **String** | Product code. | [optional] 
**unit** | **String** | Unit in which this product is sold | [optional] 
**tax** | **Number** | Tax percentage | [optional] [default to 0]
**activeFlag** | **Object** | Whether this product will be made active or not. | [optional] 
**selectable** | **Object** | Whether this product can be selected in Deals or not. | [optional] 
**visibleTo** | **String** | Visibility of the product. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.&lt;dl class&#x3D;\&quot;fields-list\&quot;&gt;&lt;dt&gt;1&lt;/dt&gt;&lt;dd&gt;Owner &amp;amp; followers (private)&lt;/dd&gt;&lt;dt&gt;3&lt;/dt&gt;&lt;dd&gt;Entire company (shared)&lt;/dd&gt;&lt;/dl&gt; | [optional] 
**ownerId** | **Number** | ID of the user who will be marked as the owner of this product. When omitted, the authorized user ID will be used. | [optional] 
**prices** | **[Object]** | Array of objects, each containing: currency (string), price (number), cost (number, optional), overhead_cost (number, optional). Note that there can only be one price per product per currency. When &#39;prices&#39; is omitted altogether, no prices will be set up for the product | [optional] 


