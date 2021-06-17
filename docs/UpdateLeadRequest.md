# Pipedrive.UpdateLeadRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The name of the Lead | [optional] 
**ownerId** | **Number** | The ID of the User which will be the owner of the created Lead. If not provided, the user making the request will be used. | [optional] 
**labelIds** | **[String]** | The IDs of the Lead Labels which will be associated with the Lead | [optional] 
**personId** | **Number** | The ID of a Person which this Lead will be linked to. If the Person does not exist yet, it needs to be created first. A Lead always has to be linked to a Person or Organization or both.  | [optional] 
**organizationId** | **Number** | The ID of an Organization which this Lead will be linked to. If the Organization does not exist yet, it needs to be created first. A Lead always has to be linked to a Person or Organization or both. | [optional] 
**isArchived** | **Boolean** | A flag indicating whether the Lead is archived or not | [optional] 
**value** | [**LeadValue**](LeadValue.md) |  | [optional] 
**expectedCloseDate** | **Date** | The date of when the Deal which will be created from the Lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD. | [optional] 


