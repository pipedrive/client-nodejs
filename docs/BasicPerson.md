# Pipedrive.BasicPerson

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the person | [optional] 
**owner_id** | **Number** | The ID of the user who will be marked as the owner of this person. When omitted, the authorized user ID will be used. | [optional] 
**org_id** | **Number** | The ID of the organization this person will belong to | [optional] 
**email** | [**[BasicPersonEmail]**](BasicPersonEmail.md) | List of email data related to the person | [optional] 
**phone** | [**[BasePersonItemPhone]**](BasePersonItemPhone.md) | List of phone data related to the person | [optional] 
**visible_to** | [**VisibleTo**](VisibleTo.md) | The visibility of the person. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user.&lt;table&gt;&lt;tr&gt;&lt;th&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner &amp;amp; followers (private)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Entire company (shared)&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; | [optional] 


