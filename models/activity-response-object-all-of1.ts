/* tslint:disable */
/* eslint-disable */
/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ActivityResponseObjectAllOf1
 */
export interface ActivityResponseObjectAllOf1 {
    /**
     * The ID of the activity, generated when the activity was created
     * @type {number}
     * @memberof ActivityResponseObjectAllOf1
     */
    'id'?: number;
    /**
     * The note of the activity (HTML format)
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'note'?: string;
    /**
     * Whether the activity is done or not
     * @type {boolean}
     * @memberof ActivityResponseObjectAllOf1
     */
    'done'?: boolean;
    /**
     * The subject of the activity
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'subject'?: string;
    /**
     * The type of the activity. This is in correlation with the `key_string` parameter of ActivityTypes.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'type'?: string;
    /**
     * The ID of the user whom the activity is assigned to
     * @type {number}
     * @memberof ActivityResponseObjectAllOf1
     */
    'user_id'?: number;
    /**
     * List of multiple persons (participants) this activity is associated with
     * @type {Array<object>}
     * @memberof ActivityResponseObjectAllOf1
     */
    'participants'?: Array<object> | null;
    /**
     * Marks if the activity is set as \'Busy\' or \'Free\'. If the flag is set to `true`, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset. When the value of the flag is unset (`null`), the flag defaults to \'Busy\' if it has a time set, and \'Free\' if it is an all-day event without specified time.
     * @type {boolean}
     * @memberof ActivityResponseObjectAllOf1
     */
    'busy_flag'?: boolean;
    /**
     * The attendees of the activity. This can be either your existing Pipedrive contacts or an external email address.
     * @type {Array<object>}
     * @memberof ActivityResponseObjectAllOf1
     */
    'attendees'?: Array<object> | null;
    /**
     * The user\'s company ID
     * @type {number}
     * @memberof ActivityResponseObjectAllOf1
     */
    'company_id'?: number;
    /**
     * If the activity references some other object, it is indicated here. For example, value `Salesphone` refers to activities created with Caller.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'reference_type'?: string;
    /**
     * Together with the `reference_type`, gives the ID of the other object
     * @type {number}
     * @memberof ActivityResponseObjectAllOf1
     */
    'reference_id'?: number;
    /**
     * The ID of the Marketplace app, which is connected to this activity
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'conference_meeting_client'?: string;
    /**
     * The link to join the meeting which is associated with this activity
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'conference_meeting_url'?: string;
    /**
     * The meeting ID of the meeting provider (Zoom, MS Teams etc.) that is associated with this activity
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'conference_meeting_id'?: string;
    /**
     * The creation date and time of the activity in UTC. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'add_time'?: string;
    /**
     * The date and time this activity was marked as done. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'marked_as_done_time'?: string;
    /**
     * The date and time of latest notifications sent about this activity to the participants or the attendees of this activity
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'last_notification_time'?: string;
    /**
     * The ID of the user who triggered the sending of the latest notifications about this activity to the participants or the attendees of this activity
     * @type {number}
     * @memberof ActivityResponseObjectAllOf1
     */
    'last_notification_user_id'?: number;
    /**
     * The ID of the language the notifications are sent in
     * @type {number}
     * @memberof ActivityResponseObjectAllOf1
     */
    'notification_language_id'?: number;
    /**
     * Whether the activity is active or not
     * @type {boolean}
     * @memberof ActivityResponseObjectAllOf1
     */
    'active_flag'?: boolean;
    /**
     * The last update date and time of the activity. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'update_time'?: string;
    /**
     * The ID of the user who was the last to update this activity
     * @type {number}
     * @memberof ActivityResponseObjectAllOf1
     */
    'update_user_id'?: number;
    /**
     * For the activity which syncs to Google calendar, this is the Google event ID. NB! This field is related to old Google calendar sync and will be deprecated soon.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'gcal_event_id'?: string;
    /**
     * The Google calendar ID that this activity syncs to. NB! This field is related to old Google calendar sync and will be deprecated soon.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'google_calendar_id'?: string;
    /**
     * The Google calendar API etag (version) that is used for syncing this activity. NB! This field is related to old Google calendar sync and will be deprecated soon.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'google_calendar_etag'?: string;
    /**
     * For activities that sync to an external calendar, this setting indicates if the activity syncs with context (what are the deals, persons, organizations this activity is related to)
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'calendar_sync_include_context'?: string;
    /**
     * The timezone the activity was created in an external calendar
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'source_timezone'?: string;
    /**
     * The rule for the recurrence of the activity. Is important for activities synced into Pipedrive from an external calendar. Example: \"RRULE:FREQ=WEEKLY;BYDAY=WE\"
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'rec_rule'?: string;
    /**
     * Additional rules for the recurrence of the activity, extend the `rec_rule`. Is important for activities synced into Pipedrive from an external calendar.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'rec_rule_extension'?: string;
    /**
     * The ID of parent activity for a recurrent activity if the current activity is an exception to recurrence rules
     * @type {number}
     * @memberof ActivityResponseObjectAllOf1
     */
    'rec_master_activity_id'?: number;
    /**
     * The list of recurring activity instances. It is in a structure as follows: `[{due_date: \"2020-06-24\", due_time: \"10:00:00\"}]`
     * @type {Array<object>}
     * @memberof ActivityResponseObjectAllOf1
     */
    'series'?: Array<object>;
    /**
     * The ID of the user who created the activity
     * @type {number}
     * @memberof ActivityResponseObjectAllOf1
     */
    'created_by_user_id'?: number;
    /**
     * A subfield of the location field. Indicates apartment/suite number.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'location_subpremise'?: string;
    /**
     * A subfield of the location field. Indicates house number.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'location_street_number'?: string;
    /**
     * A subfield of the location field. Indicates street name.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'location_route'?: string;
    /**
     * A subfield of the location field. Indicates district/sublocality.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'location_sublocality'?: string;
    /**
     * A subfield of the location field. Indicates city/town/village/locality.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'location_locality'?: string;
    /**
     * A subfield of the location field. Indicates state/county.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'location_admin_area_level_1'?: string;
    /**
     * A subfield of the location field. Indicates region.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'location_admin_area_level_2'?: string;
    /**
     * A subfield of the location field. Indicates country.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'location_country'?: string;
    /**
     * A subfield of the location field. Indicates ZIP/postal code.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'location_postal_code'?: string;
    /**
     * A subfield of the location field. Indicates full/combined address.
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'location_formatted_address'?: string;
    /**
     * The name of the organization this activity is associated with
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'org_name'?: string;
    /**
     * The name of the person this activity is associated with
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'person_name'?: string;
    /**
     * The name of the deal this activity is associated with
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'deal_title'?: string;
    /**
     * The name of the user this activity is owned by
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'owner_name'?: string;
    /**
     * The BCC email address of the person
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'person_dropbox_bcc'?: string;
    /**
     * The BCC email address of the deal
     * @type {string}
     * @memberof ActivityResponseObjectAllOf1
     */
    'deal_dropbox_bcc'?: string;
    /**
     * The ID of the user to whom the activity is assigned to. Equal to `user_id`.
     * @type {number}
     * @memberof ActivityResponseObjectAllOf1
     */
    'assigned_to_user_id'?: number;
    /**
     * The file that is attached to this activity. For example, this can be a reference to an audio note file generated with Pipedrive mobile app.
     * @type {object}
     * @memberof ActivityResponseObjectAllOf1
     */
    'file'?: object;
}

