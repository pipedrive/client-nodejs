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
**activeFlag** | [**NumberBooleanDefault1**](NumberBooleanDefault1.md) | Whether this product will be made active or not | [optional] 
**selectable** | [**NumberBooleanDefault1**](NumberBooleanDefault1.md) | Whether this product can be selected in Deals or not | [optional] 
**firstChar** | **String** | The First letter of the Product name | [optional] 
**visibleTo** | [**VisibleTo**](VisibleTo.md) | Visibility of the product. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.&lt;dl class&#x3D;\&quot;fields-list\&quot;&gt;&lt;dt&gt;1&lt;/dt&gt;&lt;dd&gt;Owner &amp;amp; followers (private)&lt;/dd&gt;&lt;dt&gt;3&lt;/dt&gt;&lt;dd&gt;Entire company (shared)&lt;/dd&gt;&lt;/dl&gt; | [optional] 
**ownerId** | **Number** | The ID of the user who will be marked as the owner of this product. When omitted, authorized user ID will be used. | [optional] 
**filesCount** | **Number** | Files count | [optional] 
**followersCount** | **Number** | Followers count | [optional] 
**addTime** | **String** | The date and time when the Product was added to the Deal | [optional] 
**updateTime** | **String** | The date and time when the Product was updated to the Deal | [optional] 
**dealId** | **Number** | The ID of the Deal | [optional] 


