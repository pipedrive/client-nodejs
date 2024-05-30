# Pipedrive.OrganizationRelationship

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_id** | **Number** | The ID of the base organization for the returned calculated values | [optional] 
**type** | **String** | The type of organization relationship | [optional] 
**rel_owner_org_id** | **Number** | The owner of this relationship. If type is &#x60;parent&#x60;, then the owner is the parent and the linked organization is the daughter. | [optional] 
**rel_linked_org_id** | **Number** | The linked organization in this relationship. If type is &#x60;parent&#x60;, then the linked organization is the daughter. | [optional] 



## Enum: TypeEnum


* `parent` (value: `"parent"`)

* `related` (value: `"related"`)




