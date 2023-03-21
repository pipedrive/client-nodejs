# Pipedrive.ActivityCollectionResponseObjectAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the activity, generated when the activity was created | [optional] 
**done** | **Boolean** | Whether the activity is done or not | [optional] 
**subject** | **String** | The subject of the activity | [optional] 
**type** | **String** | The type of the activity. This is in correlation with the &#x60;key_string&#x60; parameter of ActivityTypes. | [optional] 
**userId** | **Number** | The ID of the user whom the activity is assigned to | [optional] 
**busyFlag** | **Boolean** | Marks if the activity is set as &#39;Busy&#39; or &#39;Free&#39;. If the flag is set to &#x60;true&#x60;, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset. When the value of the flag is unset (&#x60;null&#x60;), the flag defaults to &#39;Busy&#39; if it has a time set, and &#39;Free&#39; if it is an all-day event without specified time. | [optional] 
**companyId** | **Number** | The user&#39;s company ID | [optional] 
**conferenceMeetingClient** | **String** | The ID of the Marketplace app, which is connected to this activity | [optional] 
**conferenceMeetingUrl** | **String** | The link to join the meeting which is associated with this activity | [optional] 
**conferenceMeetingId** | **String** | The meeting ID of the meeting provider (Zoom, MS Teams etc.) that is associated with this activity | [optional] 
**addTime** | **String** | The creation date and time of the activity in UTC. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**markedAsDoneTime** | **String** | The date and time this activity was marked as done. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**activeFlag** | **Boolean** | Whether the activity is active or not | [optional] 
**updateTime** | **String** | The last update date and time of the activity. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**updateUserId** | **Number** | The ID of the user who was the last to update this activity | [optional] 
**sourceTimezone** | **String** | The timezone the activity was created in an external calendar | [optional] 
**locationSubpremise** | **String** | A subfield of the location field. Indicates apartment/suite number. | [optional] 
**locationStreetNumber** | **String** | A subfield of the location field. Indicates house number. | [optional] 
**locationRoute** | **String** | A subfield of the location field. Indicates street name. | [optional] 
**locationSublocality** | **String** | A subfield of the location field. Indicates district/sublocality. | [optional] 
**locationLocality** | **String** | A subfield of the location field. Indicates city/town/village/locality. | [optional] 
**locationAdminAreaLevel1** | **String** | A subfield of the location field. Indicates state/county. | [optional] 
**locationAdminAreaLevel2** | **String** | A subfield of the location field. Indicates region. | [optional] 
**locationCountry** | **String** | A subfield of the location field. Indicates country. | [optional] 
**locationPostalCode** | **String** | A subfield of the location field. Indicates ZIP/postal code. | [optional] 
**locationFormattedAddress** | **String** | A subfield of the location field. Indicates full/combined address. | [optional] 



## Enum: BusyFlagEnum


* `true` (value: `"true"`)

* `false` (value: `"false"`)




