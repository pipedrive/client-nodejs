# Pipedrive.AddLeadRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The name of the lead | 
**ownerId** | **Number** | The ID of the user which will be the owner of the created lead. If not provided, the user making the request will be used. | [optional] 
**labelIds** | **[String]** | The IDs of the lead labels which will be associated with the lead | [optional] 
**personId** | **Number** | The ID of a person which this lead will be linked to. If the person does not exist yet, it needs to be created first. This property is required unless &#x60;organization_id&#x60; is specified. | [optional] 
**organizationId** | **Number** | The ID of an organization which this lead will be linked to. If the organization does not exist yet, it needs to be created first. This property is required unless &#x60;person_id&#x60; is specified. | [optional] 
**value** | [**LeadValue**](LeadValue.md) |  | [optional] 
**expectedCloseDate** | **Date** | The date of when the deal which will be created from the lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD. | [optional] 
**visibleTo** | [**VisibleTo**](VisibleTo.md) | The visibility of the lead. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user. Read more about visibility groups &lt;a href&#x3D;\&quot;https://support.pipedrive.com/en/article/visibility-groups\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;here&lt;/a&gt;.&lt;h4&gt;Essential / Advanced plan&lt;/h4&gt;&lt;table&gt;&lt;tr&gt;&lt;th style&#x3D;\&quot;width: 40px\&quot;&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner &amp;amp; followers&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Entire company&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;h4&gt;Professional / Enterprise plan&lt;/h4&gt;&lt;table&gt;&lt;tr&gt;&lt;th style&#x3D;\&quot;width: 40px\&quot;&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner only&lt;/td&gt;&lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Owner&#39;s visibility group&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;5&#x60;&lt;/td&gt;&lt;td&gt;Owner&#39;s visibility group and sub-groups&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;7&#x60;&lt;/td&gt;&lt;td&gt;Entire company&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; | [optional] 
**wasSeen** | **Boolean** | A flag indicating whether the lead was seen by someone in the Pipedrive UI | [optional] 


