# Pipedrive.MessageObjectAttachments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the attachment | 
**type** | **String** | The mime-type of the attachment | 
**name** | **String** | The name of the attachment | [optional] 
**size** | **Number** | The size of the attachment | [optional] 
**url** | **String** | A URL to the file | 
**preview_url** | **String** | A URL to a preview picture of the file | [optional] 
**link_expires** | **Boolean** | If true, it will use the getMessageById endpoint for fetching updated attachment&#39;s urls. Find out more [here](https://pipedrive.readme.io/docs/implementing-messaging-app-extension) | [optional] [default to false]


