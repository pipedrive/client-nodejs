# Pipedrive.OrganizationsCollectionResponseObjectAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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


