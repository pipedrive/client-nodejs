# Pipedrive.ActivityResponseObjectAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The activity ID, generated when the activity was created | [optional] 
**done** | **Boolean** | Whether the activity is done or not | [optional] 
**subject** | **String** | The subject of the activity | [optional] 
**type** | **String** | The type of the activity. This is in correlation with the &#x60;key_string&#x60; parameter of ActivityTypes. | [optional] 
**userId** | **Number** | The ID of the user whom the activity is assigned to | [optional] 
**participants** | **[Object]** | List of multiple persons (participants) this activity is associated with | [optional] 
**busyFlag** | **Boolean** | Marks if the activity is set as &#39;Busy&#39; or &#39;Free&#39;. If the flag is set to &#x60;true&#x60;, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset. When the value of the flag is unset (&#x60;null&#x60;), the flag defaults to &#39;Busy&#39; if it has a time set, and &#39;Free&#39; if it is an all-day event without specified time. | [optional] 
**attendees** | **[Object]** | The attendees of the activity. This can be either your existing Pipedrive contacts or an external email address. | [optional] 
**companyId** | **Number** | The user&#39;s company ID | [optional] 
**referenceType** | **String** | If the activity references some other object, it is indicated here. For example, value &#x60;Salesphone&#x60; refers to activities created with Caller. | [optional] 
**referenceId** | **Number** | Together with the &#x60;reference_type&#x60;, gives the ID of the other object | [optional] 
**conferenceMeetingClient** | **String** | The ID of Marketplace app, which is connected to this activity | [optional] 
**conferenceMeetingUrl** | **String** | The link to join the meeting which is associated with this activity | [optional] 
**conferenceMeetingId** | **String** | The meeting ID of the meeting provider (Zoom, MS Teams etc.) that is associated with this activity | [optional] 
**addTime** | **String** | The creation date and time of the activity in UTC. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**markedAsDoneTime** | **String** | The date and time this activity was marked as done. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**lastNotificationTime** | **String** | The date and time of latest notifications sent about this activity to the participants or the attendees of this activity | [optional] 
**lastNotificationUserId** | **Number** | The ID of the user who triggered the sending of the latest notifications about this activity to the participants or the attendees of this activity | [optional] 
**notificationLanguageId** | **Number** | The ID of the language the notifications are sent in | [optional] 
**leadId** | **String** | The ID of the lead in the UUID format this activity is associated with | [optional] 
**activeFlag** | **Boolean** | Whether the activity is active or not | [optional] 
**updateTime** | **String** | The last update date and time of the activity. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**updateUserId** | **Number** | The ID of the user who was the last to update this activity | [optional] 
**gcalEventId** | **String** | For the activity which syncs to Google calendar, this is the Google event ID. NB! This field is related to old Google calendar sync and will be deprecated soon. | [optional] 
**googleCalendarId** | **String** | The Google calendar ID that this activity syncs to. NB! This field is related to old Google calendar sync and will be deprecated soon. | [optional] 
**googleCalendarEtag** | **String** | The Google calendar API etag (version) that is used for syncing this activity. NB! This field is related to old Google calendar sync and will be deprecated soon. | [optional] 
**calendarSyncIncludeContext** | **String** | For activities that sync to an external calendar, this setting indicates if the activity syncs with context (what are the deals, persons, organizations this activity is related to) | [optional] 
**sourceTimezone** | **String** | The timezone the activity was created in an external calendar | [optional] 
**recRule** | **String** | The rule for the recurrence of the activity. Is important for activities synced into Pipedrive from an external calendar. Example: \&quot;RRULE:FREQ&#x3D;WEEKLY;BYDAY&#x3D;WE\&quot; | [optional] 
**recRuleExtension** | **String** | Additional rules for the recurrence of the activity, extend the &#x60;rec_rule&#x60;. Is important for activities synced into Pipedrive from an external calendar. | [optional] 
**recMasterActivityId** | **Number** | The ID of parent activity for a recurrent activity if the current activity is an exception to recurrence rules | [optional] 
**series** | **[Object]** | The list of recurring activity instances. It is in a structure as follows: &#x60;[{due_date: \&quot;2020-06-24\&quot;, due_time: \&quot;10:00:00\&quot;}]&#x60; | [optional] 
**createdByUserId** | **Number** | The ID of the user who created the activity | [optional] 
**locationSubpremise** | **String** | Subfield of location field. Indicates apartment/suite number. | [optional] 
**locationStreetNumber** | **String** | Subfield of location field. Indicates house number. | [optional] 
**locationRoute** | **String** | Subfield of location field. Indicates street name. | [optional] 
**locationSublocality** | **String** | Subfield of location field. Indicates district/sublocality. | [optional] 
**locationLocality** | **String** | Subfield of location field. Indicates city/town/village/locality. | [optional] 
**locationAdminAreaLevel1** | **String** | Subfield of location field. Indicates state/county. | [optional] 
**locationAdminAreaLevel2** | **String** | Subfield of location field. Indicates region. | [optional] 
**locationCountry** | **String** | Subfield of location field. Indicates country. | [optional] 
**locationPostalCode** | **String** | Subfield of location field. Indicates ZIP/postal code. | [optional] 
**locationFormattedAddress** | **String** | Subfield of location field. Indicates full/combined address. | [optional] 
**locationLat** | **Number** | Subfield of location field. Indicates latitude. | [optional] 
**locationLong** | **Number** | Subfield of location field. Indicates longitude. | [optional] 
**orgName** | **String** | The name of the organization this activity is associated with | [optional] 
**personName** | **String** | The name of the person this activity is associated with | [optional] 
**dealTitle** | **String** | The name of the deal this activity is associated with | [optional] 
**ownerName** | **String** | The name of the user this activity is owned by | [optional] 
**personDropboxBcc** | **String** | The BCC email address of the person | [optional] 
**dealDropboxBcc** | **String** | The BCC email address of the deal | [optional] 
**assignedToUserId** | **Number** | The ID of the user to whom the activity is assigned to. Equal to &#x60;user_id&#x60;. | [optional] 
**file** | **Object** | The file that is attached to this activity. For example, this can be a reference to an audio note file generated with Pipedrive mobile app. | [optional] 



## Enum: BusyFlagEnum


* `true` (value: `"true"`)

* `false` (value: `"false"`)




