# Pipedrive.BasePersonItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the person | [optional] 
**company_id** | **Number** | The ID of the company related to the person | [optional] 
**active_flag** | **Boolean** | Whether the person is active or not | [optional] 
**phone** | [**[BasePersonItemPhone]**](BasePersonItemPhone.md) | A phone number supplied as a string or an array of phone objects related to the person. The structure of the array is as follows: &#x60;[{ \&quot;value\&quot;: \&quot;12345\&quot;, \&quot;primary\&quot;: \&quot;true\&quot;, \&quot;label\&quot;: \&quot;mobile\&quot; }]&#x60;. Please note that only &#x60;value&#x60; is required. | [optional] 
**email** | [**[BasePersonItemEmail]**](BasePersonItemEmail.md) | An email address as a string or an array of email objects related to the person. The structure of the array is as follows: &#x60;[{ \&quot;value\&quot;: \&quot;mail@example.com\&quot;, \&quot;primary\&quot;: \&quot;true\&quot;, \&quot;label\&quot;: \&quot;main\&quot; } ]&#x60;. Please note that only &#x60;value&#x60; is required. | [optional] 
**first_char** | **String** | The first letter of the name of the person | [optional] 
**add_time** | **String** | The date and time when the person was added/created. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**update_time** | **String** | The last updated date and time of the person. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**visible_to** | **String** | The visibility group ID of who can see the person | [optional] 
**picture_id** | [**PictureDataWithID**](PictureDataWithID.md) |  | [optional] 
**label** | **Number** | The label assigned to the person. When the &#x60;label&#x60; field is updated, the &#x60;label_ids&#x60; field value will be overwritten by the &#x60;label&#x60; field value. | [optional] 
**label_ids** | **[Number]** | The IDs of labels assigned to the person. When the &#x60;label_ids&#x60; field is updated, the &#x60;label&#x60; field value will be set to the first value of the &#x60;label_ids&#x60; field. | [optional] 
**org_name** | **String** | The name of the organization associated with the person | [optional] 
**owner_name** | **String** | The name of the owner associated with the person | [optional] 
**cc_email** | **String** | The BCC email associated with the person | [optional] 


