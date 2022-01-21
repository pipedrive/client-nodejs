# Pipedrive.BaseStage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the stage | [optional] 
**orderNr** | **Number** | Defines the order of the stage | [optional] 
**name** | **String** | The name of the stage | [optional] 
**activeFlag** | **Boolean** | Whether the stage is active or deleted | [optional] 
**dealProbability** | **Number** | The success probability percentage of the deal. Used/shown when the deal weighted values are used. | [optional] 
**pipelineId** | **Number** | The ID of the pipeline to add the stage to | [optional] 
**rottenFlag** | **Number** | Whether deals in this stage can become rotten | [optional] 
**rottenDays** | **Number** | The number of days the deals not updated in this stage would become rotten. Applies only if the &#x60;rotten_flag&#x60; is set. | [optional] 
**addTime** | **String** | The stage creation time. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**updateTime** | **String** | The stage update time. Format: YYYY-MM-DD HH:MM:SS. | [optional] 



## Enum: RottenFlagEnum


* `0` (value: `0`)

* `1` (value: `1`)




