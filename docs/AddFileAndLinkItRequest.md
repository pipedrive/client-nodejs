# Pipedrive.AddFileAndLinkItRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileType** | **String** | The file type | 
**title** | **String** | The title of the file | 
**itemType** | **String** | The item type | 
**itemId** | **Number** | ID of the item to associate the file with | 
**remoteLocation** | **String** | The location type to send the file to. Only &#x60;googledrive&#x60; is supported at the moment. | 



## Enum: FileTypeEnum


* `gdoc` (value: `"gdoc"`)

* `gslides` (value: `"gslides"`)

* `gsheet` (value: `"gsheet"`)

* `gform` (value: `"gform"`)

* `gdraw` (value: `"gdraw"`)





## Enum: ItemTypeEnum


* `deal` (value: `"deal"`)

* `organization` (value: `"organization"`)

* `person` (value: `"person"`)





## Enum: RemoteLocationEnum


* `googledrive` (value: `"googledrive"`)




