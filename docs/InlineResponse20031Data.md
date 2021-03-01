# Pipedrive.InlineResponse20031Data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique ID of the Lead in the UUID format | [optional] 
**title** | **String** | The title of the Lead | [optional] 
**ownerId** | **Number** | The ID of the User who owns the Lead | [optional] 
**creatorId** | **Number** | The ID of the User who created the Lead | [optional] 
**note** | **String** | The Lead note. Can contain some allowed HTML tags. | [optional] 
**labelIds** | **[String]** | The IDs of the Lead Labels which are associated with the Lead | [optional] 
**personId** | **Number** | The ID of a Person which this Lead is linked to | [optional] 
**organizationId** | **Number** | The ID of an Organization which this Lead is linked to | [optional] 
**sourceName** | **String** | Defines where the Lead comes from. Will be &#x60;API&#x60; if the Lead was created through the Public API and will be empty string if the Lead was created manually through the UI.  | [optional] 
**isArchived** | **Boolean** | A flag indicating whether the Lead is archived or not | [optional] 
**wasSeen** | **Boolean** | A flag indicating whether the Lead was seen by someone in the Pipedrive UI | [optional] 
**value** | [**InlineResponse20031Value**](InlineResponse20031Value.md) |  | [optional] 
**expectedCloseDate** | **Date** | The date of when the Deal which will be created from the Lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD. | [optional] 
**nextActivityId** | **Number** | The ID of the next activity associated with the Lead | [optional] 
**addTime** | **Date** | The date and time of when the Lead was created. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. | [optional] 
**updateTime** | **Date** | The date and time of when the Lead was last updated. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. | [optional] 


