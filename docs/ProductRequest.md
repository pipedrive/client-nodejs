# Pipedrive.ProductRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the product | [optional] 
**code** | **String** | The product code | [optional] 
**unit** | **String** | The unit in which this product is sold | [optional] 
**tax** | **Number** | The tax percentage | [optional] [default to 0]
**activeFlag** | [**NumberBooleanDefault1**](NumberBooleanDefault1.md) |  | [optional] 
**selectable** | [**NumberBooleanDefault1**](NumberBooleanDefault1.md) |  | [optional] 
**visibleTo** | [**VisibleTo**](VisibleTo.md) | The visibility of the product. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user. Read more about visibility groups &lt;a href&#x3D;\&quot;https://support.pipedrive.com/en/article/visibility-groups\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;here&lt;/a&gt;.&lt;h4&gt;Essential / Advanced plan&lt;/h4&gt;&lt;table&gt;&lt;tr&gt;&lt;th style&#x3D;\&quot;width: 40px\&quot;&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner &amp;amp; followers&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Entire company&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;h4&gt;Professional / Enterprise plan&lt;/h4&gt;&lt;table&gt;&lt;tr&gt;&lt;th style&#x3D;\&quot;width: 40px\&quot;&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner only&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Owner&#39;s visibility group&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;5&#x60;&lt;/td&gt;&lt;td&gt;Owner&#39;s visibility group and sub-groups&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;7&#x60;&lt;/td&gt;&lt;td&gt;Entire company&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; | [optional] 
**ownerId** | **Number** | The ID of the user who will be marked as the owner of this product. When omitted, the authorized user ID will be used. | [optional] 
**prices** | **[Object]** | Object containing price objects, where each key is the price currency code, and each value is the price object. Each price object contains: &#x60;currency&#x60; (string), &#x60;price&#x60; (number), &#x60;cost&#x60; (number, optional), &#x60;overhead_cost&#x60; (number, optional). Note that there can only be one price per product per currency. When &#x60;prices&#x60; is omitted altogether, no prices will be set up for the product. | [optional] 


