# Pipedrive.OrganizationsCollectionResponseObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | The full address of the organization | [optional] 
**address_subpremise** | **String** | The sub-premise of the organization location | [optional] 
**address_street_number** | **String** | The street number of the organization location | [optional] 
**address_route** | **String** | The route of the organization location | [optional] 
**address_sublocality** | **String** | The sub-locality of the organization location | [optional] 
**address_locality** | **String** | The locality of the organization location | [optional] 
**address_admin_area_level_1** | **String** | The level 1 admin area of the organization location | [optional] 
**address_admin_area_level_2** | **String** | The level 2 admin area of the organization location | [optional] 
**address_country** | **String** | The country of the organization location | [optional] 
**address_postal_code** | **String** | The postal code of the organization location | [optional] 
**address_formatted_address** | **String** | The formatted organization location | [optional] 
**id** | **Number** | The ID of the organization | [optional] 
**active_flag** | **Boolean** | Whether the organization is active or not | [optional] 
**owner_id** | **Number** | The ID of the owner | [optional] 
**name** | **String** | The name of the organization | [optional] 
**update_time** | **String** | The last updated date and time of the organization. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**delete_time** | **String** | The date and time this organization was deleted. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**add_time** | **String** | The date and time when the organization was added/created. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**visible_to** | **String** | The visibility group ID of who can see the organization | [optional] 
**label** | **Number** | The label assigned to the organization. When the &#x60;label&#x60; field is updated, the &#x60;label_ids&#x60; field value will be overwritten by the &#x60;label&#x60; field value. | [optional] 
**label_ids** | **[Number]** | The IDs of labels assigned to the organization. When the &#x60;label_ids&#x60; field is updated, the &#x60;label&#x60; field value will be set to the first value of the &#x60;label_ids&#x60; field. | [optional] 
**cc_email** | **String** | The BCC email associated with the organization | [optional] 


