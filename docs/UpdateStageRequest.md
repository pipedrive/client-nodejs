# Pipedrive.UpdateStageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the stage | [optional] 
**pipeline_id** | **Number** | The ID of the pipeline to add stage to | [optional] 
**deal_probability** | **Number** | The success probability percentage of the deal. Used/shown when deal weighted values are used. | [optional] 
**rotten_flag** | **Boolean** | Whether deals in this stage can become rotten | [optional] 
**rotten_days** | **Number** | The number of days the deals not updated in this stage would become rotten. Applies only if the &#x60;rotten_flag&#x60; is set. | [optional] 
**order_nr** | **Number** | An order number for this stage. Order numbers should be used to order the stages in the pipeline. | [optional] 


