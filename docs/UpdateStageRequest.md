# Pipedrive.UpdateStageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the stage | [optional] 
**pipelineId** | **Number** | The ID of the pipeline to add stage to | [optional] 
**dealProbability** | **Number** | The success probability percentage of the deal. Used/shown when deal weighted values are used. | [optional] 
**rottenFlag** | **Number** | Whether deals in this stage can become rotten | [optional] 
**rottenDays** | **Number** | The number of days the deals not updated in this stage would become rotten. Applies only if the &#x60;rotten_flag&#x60; is set. | [optional] 
**orderNr** | **Number** | An order number for this stage. Order numbers should be used to order the stages in the pipeline. | [optional] 



## Enum: RottenFlagEnum


* `0` (value: `0`)

* `1` (value: `1`)




