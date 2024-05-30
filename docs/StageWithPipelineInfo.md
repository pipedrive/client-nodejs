# Pipedrive.StageWithPipelineInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the stage | [optional] 
**order_nr** | **Number** | Defines the order of the stage | [optional] 
**name** | **String** | The name of the stage | [optional] 
**active_flag** | **Boolean** | Whether the stage is active or deleted | [optional] 
**deal_probability** | **Number** | The success probability percentage of the deal. Used/shown when the deal weighted values are used. | [optional] 
**pipeline_id** | **Number** | The ID of the pipeline to add the stage to | [optional] 
**rotten_flag** | **Boolean** | Whether deals in this stage can become rotten | [optional] 
**rotten_days** | **Number** | The number of days the deals not updated in this stage would become rotten. Applies only if the &#x60;rotten_flag&#x60; is set. | [optional] 
**add_time** | **String** | The stage creation time. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**update_time** | **String** | The stage update time. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**pipeline_name** | **String** | The name of the pipeline | [optional] 
**pipeline_deal_probability** | **Boolean** | The pipeline deal probability. When &#x60;true&#x60;, overrides the stage probability. | [optional] 


