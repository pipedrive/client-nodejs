# Pipedrive.ActivityResponseObjectAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The Activity ID, generated when the Activity was created | [optional] 
**done** | **Boolean** | Whether the Activity is done or not | [optional] 
**subject** | **String** | Subject of the Activity | [optional] 
**type** | **String** | Type of the Activity. This is in correlation with the key_string parameter of ActivityTypes. | [optional] 
**userId** | **Number** | The ID of the User whom the Activity is assigned to | [optional] 
**participants** | **[Object]** | List of multiple Persons (participants) this Activity is associated with | [optional] 
**busyFlag** | **Boolean** | Marks if the Activity is set as &#39;Busy&#39; or &#39;Free&#39;. If the flag is set to true, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset. When the value of the flag is unset (null), the flag defaults to &#39;Busy&#39; if it has a time set, and &#39;Free&#39; if it is an all-day event without specified time. | [optional] 
**attendees** | **[Object]** | Attendees of the Activity. This can be either your existing Pipedrive contacts or an external email address. | [optional] 
**companyId** | **Number** | The User&#39;s company ID | [optional] 
**referenceType** | **String** | If the Activity references some other object, it is indicated here. For example, value \&quot;salesphone\&quot; refers to Activities created with Caller. | [optional] 
**referenceId** | **Number** | Together with the reference_type, gives the ID of the other object | [optional] 
**conferenceMeetingClient** | **String** | The ID of Marketplace app, which is connected to this Activity | [optional] 
**conferenceMeetingUrl** | **String** | The link to join the meeting which is associated with this Activity | [optional] 
**conferenceMeetingId** | **String** | The meeting ID of the meeting provider (Zoom, MS Teams etc.) that is associated with this Activity | [optional] 
**addTime** | **String** | The creation date and time of the Activity in UTC. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**markedAsDoneTime** | **String** | The date and time this Activity was marked as done. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**lastNotificationTime** | **String** | The date and time of latest notifications sent about this Activity to the participants or the attendees of this Activity | [optional] 
**lastNotificationUserId** | **Number** | The ID of the User who triggered the sending of the latest notifications about this Activity to the participants or the attendees of this Activity | [optional] 
**notificationLanguageId** | **Number** | The ID of the language the notifications are sent in | [optional] 
**leadId** | **String** | The ID of the Lead in the UUID format this Activity is associated with | [optional] 
**activeFlag** | **Boolean** | Whether the Activity is active or not | [optional] 
**updateTime** | **String** | The last update date and time of the Activity. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**updateUserId** | **Number** | The ID of the User who was the last to update this Activity | [optional] 
**gcalEventId** | **String** | For the Activity which syncs to Google calendar, this is the Google event ID. NB! This field is related to old Google calendar sync and will be deprecated soon. | [optional] 
**googleCalendarId** | **String** | The Google calendar ID that this Activity syncs to. NB! This field is related to old Google calendar sync and will be deprecated soon. | [optional] 
**googleCalendarEtag** | **String** | The Google calendar API etag (version) that is used for syncing this Activity. NB! This field is related to old Google calendar sync and will be deprecated soon. | [optional] 
**calendarSyncIncludeContext** | **String** | For Activities that sync to an external calendar, this setting indicates if the Activity syncs with context (what are the Deals, Persons, Organizations this Activity is related to) | [optional] 
**sourceTimezone** | **String** | The timezone the Activity was created in an external calendar | [optional] 
**recRule** | **String** | The rule for the recurrence of the Activity. Is important for activities synced into Pipedrive from an external calendar. Example: \&quot;RRULE:FREQ&#x3D;WEEKLY;BYDAY&#x3D;WE\&quot; | [optional] 
**recRuleExtension** | **String** | Additional rules for the recurrence of the Activity, extend the rec_rule. Is important for activities synced into Pipedrive from an external calendar. | [optional] 
**recMasterActivityId** | **Number** | The ID of parent Activity for a recurrent Activity if the current Activity is an exception to recurrence rules | [optional] 
**series** | **[Object]** | The list of recurring Activity instances. It is in a structure as follows: [{due_date: \&quot;2020-06-24\&quot;, due_time: \&quot;10:00:00\&quot;}] | [optional] 
**createdByUserId** | **Number** | The ID of the User who created the Activity | [optional] 
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
**orgName** | **String** | Name of the Organization this Activity is associated with | [optional] 
**personName** | **String** | Name of the Person this Activity is associated with | [optional] 
**dealTitle** | **String** | Name of the Deal this Activity is associated with | [optional] 
**ownerName** | **String** | Name of the User this Activity is owned by | [optional] 
**personDropboxBcc** | **String** | The bcc email address of the Person | [optional] 
**dealDropboxBcc** | **String** | The bcc email address of the Deal | [optional] 
**assignedToUserId** | **Number** | The ID of the User to whom the Activity is assigned to. Equal to user_id. | [optional] 
**file** | **Object** | The file that is attached to this Activity. For example, this can be a reference to an audio note file generated with Pipedrive mobile app. | [optional] 



## Enum: BusyFlagEnum


* `true` (value: `"true"`)

* `false` (value: `"false"`)




