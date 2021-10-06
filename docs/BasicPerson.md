# Pipedrive.BasicPerson

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Person name | [optional] 
**ownerId** | **Number** | ID of the user who will be marked as the owner of this person. When omitted, the authorized user ID will be used. | [optional] 
**orgId** | **Number** | ID of the organization this person will belong to. | [optional] 
**email** | **[String]** | Email addresses (one or more) associated with the person, presented in the same manner as received by GET request of a person. | [optional] 
**phone** | **[String]** | Phone numbers (one or more) associated with the person, presented in the same manner as received by GET request of a person. | [optional] 
**visibleTo** | [**VisibleTo**](VisibleTo.md) | Visibility of the person. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.&lt;table&gt;&lt;tr&gt;&lt;th&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner &amp;amp; followers (private)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Entire company (shared)&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; | [optional] 


