# Pipedrive.PersonsCollectionResponseObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the person | [optional] 
**active_flag** | **Boolean** | Whether the person is active or not | [optional] 
**owner_id** | **Number** | The ID of the owner related to the person | [optional] 
**org_id** | **Number** | The ID of the organization related to the person | [optional] 
**name** | **String** | The name of the person | [optional] 
**email** | [**[BasicPersonEmail]**](BasicPersonEmail.md) | An email address as a string or an array of email objects related to the person. The structure of the array is as follows: &#x60;[{ \&quot;value\&quot;: \&quot;mail@example.com\&quot;, \&quot;primary\&quot;: \&quot;true\&quot;, \&quot;label\&quot;: \&quot;main\&quot; }]&#x60;. Please note that only &#x60;value&#x60; is required. | [optional] 
**phone** | [**[BasePersonItemPhone]**](BasePersonItemPhone.md) | A phone number supplied as a string or an array of phone objects related to the person. The structure of the array is as follows: &#x60;[{ \&quot;value\&quot;: \&quot;12345\&quot;, \&quot;primary\&quot;: \&quot;true\&quot;, \&quot;label\&quot;: \&quot;mobile\&quot; }]&#x60;. Please note that only &#x60;value&#x60; is required. | [optional] 
**update_time** | **String** | The last updated date and time of the person. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**delete_time** | **String** | The date and time this person was deleted. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**add_time** | **String** | The date and time when the person was added/created. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**visible_to** | **String** | The visibility group ID of who can see the person | [optional] 
**picture_id** | **Number** | The ID of the picture associated with the item | [optional] 
**label** | **Number** | The label assigned to the person. When the &#x60;label&#x60; field is updated, the &#x60;label_ids&#x60; field value will be overwritten by the &#x60;label&#x60; field value. | [optional] 
**label_ids** | **[Number]** | The IDs of labels assigned to the person. When the &#x60;label_ids&#x60; field is updated, the &#x60;label&#x60; field value will be set to the first value of the &#x60;label_ids&#x60; field. | [optional] 
**cc_email** | **String** | The BCC email associated with the person | [optional] 


