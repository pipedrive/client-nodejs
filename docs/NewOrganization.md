# Pipedrive.NewOrganization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Organization name | 
**ownerId** | **Number** | The ID of the user who will be marked as the owner of this Organization. When omitted, the authorized User ID will be used. | [optional] 
**visibleTo** | [**VisibleTo**](VisibleTo.md) | Visibility of the organization. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.&lt;table&gt;&lt;tr&gt;&lt;th&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner &amp;amp; followers (private)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Entire company (shared)&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; | [optional] 
**addTime** | **String** | Optional creation date &amp; time of the organization in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS | [optional] 


