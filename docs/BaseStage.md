# Pipedrive.BaseStage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the Stage | [optional] 
**orderNr** | **Number** | Defines the order of the Stage | [optional] 
**name** | **String** | The name of the Stage | [optional] 
**activeFlag** | **Boolean** | If the Stage is active or deleted | [optional] 
**dealProbability** | **Number** | The Deal success probability percentage. Used/shown when the Deal weighted values are used. | [optional] 
**pipelineId** | **Number** | The ID of the Pipeline to add the Stage to | [optional] 
**rottenFlag** | **Number** | Whether Deals in this Stage can become rotten | [optional] 
**rottenDays** | **Number** | The number of days the Deals are not updated in this Stage would become rotten. Applies only if the &#x60;rotten_flag&#x60; is set. | [optional] 
**addTime** | **String** | The Stage creation time. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**updateTime** | **String** | The Stage update time. Format: YYYY-MM-DD HH:MM:SS. | [optional] 



## Enum: RottenFlagEnum


* `0` (value: `0`)

* `1` (value: `1`)




