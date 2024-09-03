# Pipedrive.BaseOrganizationItemFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the organization | [optional] 
**company_id** | **Number** | The ID of the company related to the organization | [optional] 
**owner_id** | [**Owner**](Owner.md) |  | [optional] 
**name** | **String** | The name of the organization | [optional] 
**active_flag** | **Boolean** | Whether the organization is active or not | [optional] 
**picture_id** | [**PictureDataWithValue**](PictureDataWithValue.md) |  | [optional] 
**country_code** | **String** | The country code of the organization | [optional] 
**first_char** | **String** | The first character of the organization name | [optional] 
**add_time** | **String** | The creation date and time of the organization | [optional] 
**update_time** | **String** | The last updated date and time of the organization | [optional] 
**visible_to** | **String** | The visibility group ID of who can see the organization | [optional] 
**label** | **Number** | The label assigned to the organization. When the &#x60;label&#x60; field is updated, the &#x60;label_ids&#x60; field value will be overwritten by the &#x60;label&#x60; field value. | [optional] 
**label_ids** | **[Number]** | The IDs of labels assigned to the organization. When the &#x60;label_ids&#x60; field is updated, the &#x60;label&#x60; field value will be set to the first value of the &#x60;label_ids&#x60; field. | [optional] 
**owner_name** | **String** | The name of the organization owner | [optional] 
**cc_email** | **String** | The BCC email associated with the organization | [optional] 


