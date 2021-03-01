# Pipedrive.AddALead

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The name of the Lead | 
**ownerId** | **Number** | The ID of the User which will be the owner of the created Lead. If not provided, the user making the request will be used. | [optional] 
**note** | **String** | The Lead note. Can contain some allowed HTML tags. | [optional] 
**labelIds** | **[String]** | The IDs of the Lead Labels which will be associated with the Lead | [optional] 
**personId** | **Number** | The ID of a Person which this Lead will be linked to. If the Person does not exist yet, it needs to be created first. This property is required unless &#x60;organization_id&#x60; is specified. | [optional] 
**organizationId** | **Number** | The ID of an Organization which this Lead will be linked to. If the Organization does not exist yet, it needs to be created first. This property is required unless &#x60;person_id&#x60; is specified. | [optional] 
**value** | [**InlineResponse20031Value**](InlineResponse20031Value.md) |  | [optional] 
**expectedCloseDate** | **Date** | The date of when the Deal which will be created from the Lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD. | [optional] 


