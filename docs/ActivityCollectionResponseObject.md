# Pipedrive.ActivityCollectionResponseObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**due_date** | **Date** | The due date of the activity. Format: YYYY-MM-DD | [optional] 
**due_time** | **String** | The due time of the activity in UTC. Format: HH:MM | [optional] 
**duration** | **String** | The duration of the activity. Format: HH:MM | [optional] 
**deal_id** | **Number** | The ID of the deal this activity is associated with | [optional] 
**lead_id** | **String** | The ID of the lead in the UUID format this activity is associated with | [optional] 
**person_id** | **Number** | The ID of the person this activity is associated with | [optional] 
**project_id** | **Number** | The ID of the project this activity is associated with | [optional] 
**org_id** | **Number** | The ID of the organization this activity is associated with | [optional] 
**location** | **String** | The address of the activity. | [optional] 
**public_description** | **String** | Additional details about the activity that is synced to your external calendar. Unlike the note added to the activity, the description is publicly visible to any guests added to the activity. | [optional] 
**id** | **Number** | The ID of the activity, generated when the activity was created | [optional] 
**done** | **Boolean** | Whether the activity is done or not | [optional] 
**subject** | **String** | The subject of the activity | [optional] 
**type** | **String** | The type of the activity. This is in correlation with the &#x60;key_string&#x60; parameter of ActivityTypes. | [optional] 
**user_id** | **Number** | The ID of the user whom the activity is assigned to | [optional] 
**busy_flag** | **Boolean** | Marks if the activity is set as &#39;Busy&#39; or &#39;Free&#39;. If the flag is set to &#x60;true&#x60;, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset. When the value of the flag is unset (&#x60;null&#x60;), the flag defaults to &#39;Busy&#39; if it has a time set, and &#39;Free&#39; if it is an all-day event without specified time. | [optional] 
**company_id** | **Number** | The user&#39;s company ID | [optional] 
**conference_meeting_client** | **String** | The ID of the Marketplace app, which is connected to this activity | [optional] 
**conference_meeting_url** | **String** | The link to join the meeting which is associated with this activity | [optional] 
**conference_meeting_id** | **String** | The meeting ID of the meeting provider (Zoom, MS Teams etc.) that is associated with this activity | [optional] 
**add_time** | **String** | The creation date and time of the activity in UTC. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**marked_as_done_time** | **String** | The date and time this activity was marked as done. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**active_flag** | **Boolean** | Whether the activity is active or not | [optional] 
**update_time** | **String** | The last update date and time of the activity. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**update_user_id** | **Number** | The ID of the user who was the last to update this activity | [optional] 
**source_timezone** | **String** | The timezone the activity was created in an external calendar | [optional] 
**location_subpremise** | **String** | A subfield of the location field. Indicates apartment/suite number. | [optional] 
**location_street_number** | **String** | A subfield of the location field. Indicates house number. | [optional] 
**location_route** | **String** | A subfield of the location field. Indicates street name. | [optional] 
**location_sublocality** | **String** | A subfield of the location field. Indicates district/sublocality. | [optional] 
**location_locality** | **String** | A subfield of the location field. Indicates city/town/village/locality. | [optional] 
**location_admin_area_level_1** | **String** | A subfield of the location field. Indicates state/county. | [optional] 
**location_admin_area_level_2** | **String** | A subfield of the location field. Indicates region. | [optional] 
**location_country** | **String** | A subfield of the location field. Indicates country. | [optional] 
**location_postal_code** | **String** | A subfield of the location field. Indicates ZIP/postal code. | [optional] 
**location_formatted_address** | **String** | A subfield of the location field. Indicates full/combined address. | [optional] 


