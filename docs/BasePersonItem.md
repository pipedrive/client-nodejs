# Pipedrive.BasePersonItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the person | [optional] 
**companyId** | **Number** | The ID of the company related to the person | [optional] 
**activeFlag** | **Boolean** | Whether the person is active or not | [optional] 
**phone** | [**[BasePersonItemPhone]**](BasePersonItemPhone.md) | A phone number supplied as a string or an array of phone objects related to the person. The structure of the array is as follows: &#x60;[{ \&quot;value\&quot;: \&quot;12345\&quot;, \&quot;primary\&quot;: \&quot;true\&quot;, \&quot;label\&quot;: \&quot;mobile\&quot; }]&#x60;. Please note that only &#x60;value&#x60; is required. | [optional] 
**email** | [**[BasePersonItemEmail]**](BasePersonItemEmail.md) | An email address as a string or an array of email objects related to the person. The structure of the array is as follows: &#x60;[{ \&quot;value\&quot;: \&quot;mail@example.com\&quot;, \&quot;primary\&quot;: \&quot;true\&quot;, \&quot;label\&quot;: \&quot;main\&quot; } ]&#x60;. Please note that only &#x60;value&#x60; is required. | [optional] 
**primaryEmail** | **String** | The primary email of the person | [optional] 
**firstChar** | **String** | The first letter of the name of the person | [optional] 
**addTime** | **String** | The date and time when the person was added/created. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**updateTime** | **String** | The last updated date and time of the person. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**visibleTo** | **String** | The visibility group ID of who can see the person | [optional] 
**pictureId** | [**PictureDataWithID**](PictureDataWithID.md) |  | [optional] 
**label** | **Number** | The label assigned to the person | [optional] 
**orgName** | **String** | The name of the organization associated with the person | [optional] 
**ownerName** | **String** | The name of the owner associated with the person | [optional] 
**ccEmail** | **String** | The BCC email associated with the person | [optional] 


