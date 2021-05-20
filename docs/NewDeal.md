# Pipedrive.NewDeal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | Deal title | 
**value** | **String** | Value of the deal. If omitted, value will be set to 0. | [optional] 
**currency** | **String** | Currency of the deal. Accepts a 3-character currency code. If omitted, currency will be set to the default currency of the authorized user. | [optional] 
**userId** | **Number** | ID of the user who will be marked as the owner of this deal. If omitted, the authorized user ID will be used. | [optional] 
**personId** | **Number** | ID of the person this deal will be associated with | [optional] 
**orgId** | **Number** | ID of the organization this deal will be associated with | [optional] 
**stageId** | **Number** | ID of the stage this deal will be placed in a pipeline (note that you can&#39;t supply the ID of the pipeline as this will be assigned automatically based on &#x60;stage_id&#x60;). If omitted, the deal will be placed in the first stage of the default pipeline. | [optional] 
**status** | **String** | open &#x3D; Open, won &#x3D; Won, lost &#x3D; Lost, deleted &#x3D; Deleted. If omitted, status will be set to open. | [optional] 
**expectedCloseDate** | **Date** | The expected close date of the Deal. In ISO 8601 format: YYYY-MM-DD. | [optional] 
**probability** | **Number** | Deal success probability percentage. Used/shown only when &#x60;deal_probability&#x60; for the pipeline of the deal is enabled. | [optional] 
**lostReason** | **String** | Optional message about why the deal was lost (to be used when status&#x3D;lost) | [optional] 
**visibleTo** | [**VisibleTo**](VisibleTo.md) | Visibility of the deal. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.&lt;table&gt;&lt;tr&gt;&lt;th&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner &amp;amp; followers (private)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Entire company (shared)&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; | [optional] 
**addTime** | **String** | Optional creation date &amp; time of the deal in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS | [optional] 



## Enum: StatusEnum


* `open` (value: `"open"`)

* `won` (value: `"won"`)

* `lost` (value: `"lost"`)

* `lost` (value: `"lost"`)

* `deleted` (value: `"deleted"`)




