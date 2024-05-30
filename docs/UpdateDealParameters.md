# Pipedrive.UpdateDealParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **String** | The value of the deal. | [optional] 
**label** | **[Number]** | Array of the deal labels IDs. | [optional] 
**currency** | **String** | The currency of the deal. Accepts a 3-character currency code. | [optional] 
**user_id** | **Number** | The ID of the user which will be the new owner of the deal. | [optional] 
**person_id** | **Number** | The ID of a person which this deal will be linked to. If the person does not exist yet, it needs to be created first. | [optional] 
**org_id** | **Number** | The ID of an organization which this deal will be linked to. If the organization does not exist yet, it needs to be created first. | [optional] 
**pipeline_id** | **Number** | The ID of the pipeline this deal will be added to. By default, the deal will be added to the first stage of the specified pipeline. Please note that &#x60;pipeline_id&#x60; and &#x60;stage_id&#x60; should not be used together as &#x60;pipeline_id&#x60; will be ignored. | [optional] 
**stage_id** | **Number** | The ID of the stage this deal will be added to. Please note that a pipeline will be assigned automatically based on the &#x60;stage_id&#x60;. | [optional] 
**status** | **String** | open &#x3D; Open, won &#x3D; Won, lost &#x3D; Lost, deleted &#x3D; Deleted. | [optional] 
**channel** | **Number** | The ID of Marketing channel this deal was created from. Provided value must be one of the channels configured for your company which you can fetch with &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/DealFields#getDealField\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;GET /v1/dealFields&lt;/a&gt;. | [optional] 
**channel_id** | **String** | The optional ID to further distinguish the Marketing channel. | [optional] 



## Enum: StatusEnum


* `open` (value: `"open"`)

* `won` (value: `"won"`)

* `lost` (value: `"lost"`)

* `deleted` (value: `"deleted"`)




