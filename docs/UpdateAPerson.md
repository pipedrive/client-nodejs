# Pipedrive.UpdateAPerson

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Person name | [optional] 
**ownerId** | **Number** | ID of the user who will be marked as the owner of this person. When omitted, the authorized user ID will be used. | [optional] 
**orgId** | **Number** | ID of the organization this person will belong to. | [optional] 
**email** | **[String]** | Email addresses (one or more) associated with the person, presented in the same manner as received by GET request of a person. | [optional] 
**phone** | **[String]** | Phone numbers (one or more) associated with the person, presented in the same manner as received by GET request of a person. | [optional] 
**visibleTo** | **String** | Visibility of the person. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.&lt;dl class&#x3D;\&quot;fields-list\&quot;&gt;&lt;dt&gt;1&lt;/dt&gt;&lt;dd&gt;Owner &amp;amp; followers (private)&lt;/dd&gt;&lt;dt&gt;3&lt;/dt&gt;&lt;dd&gt;Entire company (shared)&lt;/dd&gt;&lt;/dl&gt; | [optional] 


