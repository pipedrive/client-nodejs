# Pipedrive.AddOrganizationRelationshipRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orgId** | **Number** | ID of the base organization for the returned calculated values | [optional] 
**type** | **String** | The type of organization relationship | 
**relOwnerOrgId** | **Number** | The owner of this relationship. If type is &#x60;parent&#x60;, then the owner is the parent and the linked organization is the daughter. | 
**relLinkedOrgId** | **Number** | The linked organization in this relationship. If type is &#x60;parent&#x60;, then the linked organization is the daughter. | 



## Enum: TypeEnum


* `parent` (value: `"parent"`)

* `related` (value: `"related"`)




