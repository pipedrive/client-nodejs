# Pipedrive.AddLeadRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The name of the lead | 
**owner_id** | **Number** | The ID of the user which will be the owner of the created lead. If not provided, the user making the request will be used. | [optional] 
**label_ids** | **[String]** | The IDs of the lead labels which will be associated with the lead | [optional] 
**person_id** | **Number** | The ID of a person which this lead will be linked to. If the person does not exist yet, it needs to be created first. This property is required unless &#x60;organization_id&#x60; is specified. | [optional] 
**organization_id** | **Number** | The ID of an organization which this lead will be linked to. If the organization does not exist yet, it needs to be created first. This property is required unless &#x60;person_id&#x60; is specified. | [optional] 
**value** | [**LeadValue**](LeadValue.md) |  | [optional] 
**expected_close_date** | **Date** | The date of when the deal which will be created from the lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD. | [optional] 
**visible_to** | [**VisibleTo**](VisibleTo.md) | The visibility of the lead. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user.&lt;table&gt;&lt;tr&gt;&lt;th&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner &amp;amp; followers (private)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Entire company (shared)&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; | [optional] 
**was_seen** | **Boolean** | A flag indicating whether the lead was seen by someone in the Pipedrive UI | [optional] 



## Enum: WasSeenEnum


* `true` (value: `"true"`)

* `false` (value: `"false"`)




