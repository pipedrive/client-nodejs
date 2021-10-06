# Pipedrive.AddLeadRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The name of the Lead | 
**ownerId** | **Number** | The ID of the User which will be the owner of the created Lead. If not provided, the user making the request will be used. | [optional] 
**labelIds** | **[String]** | The IDs of the Lead Labels which will be associated with the Lead | [optional] 
**personId** | **Number** | The ID of a Person which this Lead will be linked to. If the Person does not exist yet, it needs to be created first. This property is required unless &#x60;organization_id&#x60; is specified. | [optional] 
**organizationId** | **Number** | The ID of an Organization which this Lead will be linked to. If the Organization does not exist yet, it needs to be created first. This property is required unless &#x60;person_id&#x60; is specified. | [optional] 
**value** | [**LeadValue**](LeadValue.md) |  | [optional] 
**expectedCloseDate** | **Date** | The date of when the Deal which will be created from the Lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD. | [optional] 
**visibleTo** | [**VisibleTo**](VisibleTo.md) | Visibility of the Lead. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.&lt;table&gt;&lt;tr&gt;&lt;th&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner &amp;amp; followers (private)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Entire company (shared)&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; | [optional] 
**wasSeen** | **Boolean** | A flag indicating whether the Lead was seen by someone in the Pipedrive UI | [optional] 



## Enum: WasSeenEnum


* `true` (value: `"true"`)

* `false` (value: `"false"`)




