# Pipedrive.PersonListProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the Product | [optional] 
**companyId** | **Number** | The ID of the company | [optional] 
**name** | **String** | The name of the product | [optional] 
**code** | **String** | Product code | [optional] 
**description** | **String** | The Description of the Product | [optional] 
**unit** | **String** | Unit in which this product is sold | [optional] 
**tax** | **Number** | Tax percentage | [optional] [default to 0]
**category** | **String** | Category of the Product | [optional] 
**activeFlag** | [**NumberBooleanDefault1**](NumberBooleanDefault1.md) |  | [optional] 
**selectable** | [**NumberBooleanDefault1**](NumberBooleanDefault1.md) |  | [optional] 
**firstChar** | **String** | The First letter of the Product name | [optional] 
**visibleTo** | [**VisibleTo**](VisibleTo.md) | Visibility of the product. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.&lt;table&gt;&lt;tr&gt;&lt;th&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner &amp;amp; followers (private)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Entire company (shared)&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; | [optional] 
**ownerId** | **Number** | The ID of the user who will be marked as the owner of this product. When omitted, authorized user ID will be used. | [optional] 
**filesCount** | **Number** | Files count | [optional] 
**followersCount** | **Number** | Followers count | [optional] 
**addTime** | **String** | The date and time when the Product was added to the Deal | [optional] 
**updateTime** | **String** | The date and time when the Product was updated to the Deal | [optional] 
**dealId** | **Number** | The ID of the Deal | [optional] 


