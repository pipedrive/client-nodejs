# Pipedrive.BasePersonItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the person | [optional] 
**company_id** | **Number** | The ID of the company related to the person | [optional] 
**active_flag** | **Boolean** | Whether the person is active or not | [optional] 
**phone** | [**[BasePersonItemPhone]**](BasePersonItemPhone.md) | List of phone data related to the person | [optional] 
**email** | [**[BasePersonItemEmail]**](BasePersonItemEmail.md) | List of email data related to the person | [optional] 
**first_char** | **String** | The first letter of the name of the person | [optional] 
**add_time** | **String** | The date and time when the person was added/created. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**update_time** | **String** | The last updated date and time of the person. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**visible_to** | **String** | The visibility group ID of who can see the person | [optional] 
**picture_id** | [**PictureDataWithID**](PictureDataWithID.md) |  | [optional] 
**label** | **Number** | The label assigned to the person | [optional] 
**org_name** | **String** | The name of the organization associated with the person | [optional] 
**owner_name** | **String** | The name of the owner associated with the person | [optional] 
**cc_email** | **String** | The BCC email associated with the person | [optional] 


