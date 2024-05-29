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
 *
 */

import ApiClient from '../ApiClient';
import ActivityObjectFragment from './ActivityObjectFragment';
import ActivityResponseObjectAllOf from './ActivityResponseObjectAllOf';

/**
 * The ActivityResponseObject model module.
 * @module model/ActivityResponseObject
 * @version 1.0.0
 */
class ActivityResponseObject {
    /**
     * Constructs a new <code>ActivityResponseObject</code>.
     * @alias module:model/ActivityResponseObject
     * @implements module:model/ActivityObjectFragment
     * @implements module:model/ActivityResponseObjectAllOf
     */
    constructor() { 
        ActivityObjectFragment.initialize(this);ActivityResponseObjectAllOf.initialize(this);
        ActivityResponseObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivityResponseObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivityResponseObject} obj Optional instance to populate.
     * @return {module:model/ActivityResponseObject} The populated <code>ActivityResponseObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityResponseObject();
            ActivityObjectFragment.constructFromObject(data, obj);
            ActivityResponseObjectAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('due_date')) {
                obj['due_date'] = ApiClient.convertToType(data['due_date'], 'Date');

                delete data['due_date'];
            }
            if (data.hasOwnProperty('due_time')) {
                obj['due_time'] = ApiClient.convertToType(data['due_time'], 'String');

                delete data['due_time'];
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'String');

                delete data['duration'];
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');

                delete data['deal_id'];
            }
            if (data.hasOwnProperty('lead_id')) {
                obj['lead_id'] = ApiClient.convertToType(data['lead_id'], 'String');

                delete data['lead_id'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'Number');

                delete data['project_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');

                delete data['location'];
            }
            if (data.hasOwnProperty('public_description')) {
                obj['public_description'] = ApiClient.convertToType(data['public_description'], 'String');

                delete data['public_description'];
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');

                delete data['note'];
            }
            if (data.hasOwnProperty('done')) {
                obj['done'] = ApiClient.convertToType(data['done'], 'Boolean');

                delete data['done'];
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');

                delete data['subject'];
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');

                delete data['type'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [Object]);

                delete data['participants'];
            }
            if (data.hasOwnProperty('busy_flag')) {
                obj['busy_flag'] = ApiClient.convertToType(data['busy_flag'], 'Boolean');

                delete data['busy_flag'];
            }
            if (data.hasOwnProperty('attendees')) {
                obj['attendees'] = ApiClient.convertToType(data['attendees'], [Object]);

                delete data['attendees'];
            }
            if (data.hasOwnProperty('company_id')) {
                obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');

                delete data['company_id'];
            }
            if (data.hasOwnProperty('reference_type')) {
                obj['reference_type'] = ApiClient.convertToType(data['reference_type'], 'String');

                delete data['reference_type'];
            }
            if (data.hasOwnProperty('reference_id')) {
                obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'Number');

                delete data['reference_id'];
            }
            if (data.hasOwnProperty('conference_meeting_client')) {
                obj['conference_meeting_client'] = ApiClient.convertToType(data['conference_meeting_client'], 'String');

                delete data['conference_meeting_client'];
            }
            if (data.hasOwnProperty('conference_meeting_url')) {
                obj['conference_meeting_url'] = ApiClient.convertToType(data['conference_meeting_url'], 'String');

                delete data['conference_meeting_url'];
            }
            if (data.hasOwnProperty('conference_meeting_id')) {
                obj['conference_meeting_id'] = ApiClient.convertToType(data['conference_meeting_id'], 'String');

                delete data['conference_meeting_id'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('marked_as_done_time')) {
                obj['marked_as_done_time'] = ApiClient.convertToType(data['marked_as_done_time'], 'String');

                delete data['marked_as_done_time'];
            }
            if (data.hasOwnProperty('last_notification_time')) {
                obj['last_notification_time'] = ApiClient.convertToType(data['last_notification_time'], 'String');

                delete data['last_notification_time'];
            }
            if (data.hasOwnProperty('last_notification_user_id')) {
                obj['last_notification_user_id'] = ApiClient.convertToType(data['last_notification_user_id'], 'Number');

                delete data['last_notification_user_id'];
            }
            if (data.hasOwnProperty('notification_language_id')) {
                obj['notification_language_id'] = ApiClient.convertToType(data['notification_language_id'], 'Number');

                delete data['notification_language_id'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('update_user_id')) {
                obj['update_user_id'] = ApiClient.convertToType(data['update_user_id'], 'Number');

                delete data['update_user_id'];
            }
            if (data.hasOwnProperty('gcal_event_id')) {
                obj['gcal_event_id'] = ApiClient.convertToType(data['gcal_event_id'], 'String');

                delete data['gcal_event_id'];
            }
            if (data.hasOwnProperty('google_calendar_id')) {
                obj['google_calendar_id'] = ApiClient.convertToType(data['google_calendar_id'], 'String');

                delete data['google_calendar_id'];
            }
            if (data.hasOwnProperty('google_calendar_etag')) {
                obj['google_calendar_etag'] = ApiClient.convertToType(data['google_calendar_etag'], 'String');

                delete data['google_calendar_etag'];
            }
            if (data.hasOwnProperty('calendar_sync_include_context')) {
                obj['calendar_sync_include_context'] = ApiClient.convertToType(data['calendar_sync_include_context'], 'String');

                delete data['calendar_sync_include_context'];
            }
            if (data.hasOwnProperty('source_timezone')) {
                obj['source_timezone'] = ApiClient.convertToType(data['source_timezone'], 'String');

                delete data['source_timezone'];
            }
            if (data.hasOwnProperty('rec_rule')) {
                obj['rec_rule'] = ApiClient.convertToType(data['rec_rule'], 'String');

                delete data['rec_rule'];
            }
            if (data.hasOwnProperty('rec_rule_extension')) {
                obj['rec_rule_extension'] = ApiClient.convertToType(data['rec_rule_extension'], 'String');

                delete data['rec_rule_extension'];
            }
            if (data.hasOwnProperty('rec_master_activity_id')) {
                obj['rec_master_activity_id'] = ApiClient.convertToType(data['rec_master_activity_id'], 'Number');

                delete data['rec_master_activity_id'];
            }
            if (data.hasOwnProperty('series')) {
                obj['series'] = ApiClient.convertToType(data['series'], [Object]);

                delete data['series'];
            }
            if (data.hasOwnProperty('created_by_user_id')) {
                obj['created_by_user_id'] = ApiClient.convertToType(data['created_by_user_id'], 'Number');

                delete data['created_by_user_id'];
            }
            if (data.hasOwnProperty('location_subpremise')) {
                obj['location_subpremise'] = ApiClient.convertToType(data['location_subpremise'], 'String');

                delete data['location_subpremise'];
            }
            if (data.hasOwnProperty('location_street_number')) {
                obj['location_street_number'] = ApiClient.convertToType(data['location_street_number'], 'String');

                delete data['location_street_number'];
            }
            if (data.hasOwnProperty('location_route')) {
                obj['location_route'] = ApiClient.convertToType(data['location_route'], 'String');

                delete data['location_route'];
            }
            if (data.hasOwnProperty('location_sublocality')) {
                obj['location_sublocality'] = ApiClient.convertToType(data['location_sublocality'], 'String');

                delete data['location_sublocality'];
            }
            if (data.hasOwnProperty('location_locality')) {
                obj['location_locality'] = ApiClient.convertToType(data['location_locality'], 'String');

                delete data['location_locality'];
            }
            if (data.hasOwnProperty('location_admin_area_level_1')) {
                obj['location_admin_area_level_1'] = ApiClient.convertToType(data['location_admin_area_level_1'], 'String');

                delete data['location_admin_area_level_1'];
            }
            if (data.hasOwnProperty('location_admin_area_level_2')) {
                obj['location_admin_area_level_2'] = ApiClient.convertToType(data['location_admin_area_level_2'], 'String');

                delete data['location_admin_area_level_2'];
            }
            if (data.hasOwnProperty('location_country')) {
                obj['location_country'] = ApiClient.convertToType(data['location_country'], 'String');

                delete data['location_country'];
            }
            if (data.hasOwnProperty('location_postal_code')) {
                obj['location_postal_code'] = ApiClient.convertToType(data['location_postal_code'], 'String');

                delete data['location_postal_code'];
            }
            if (data.hasOwnProperty('location_formatted_address')) {
                obj['location_formatted_address'] = ApiClient.convertToType(data['location_formatted_address'], 'String');

                delete data['location_formatted_address'];
            }
            if (data.hasOwnProperty('org_name')) {
                obj['org_name'] = ApiClient.convertToType(data['org_name'], 'String');

                delete data['org_name'];
            }
            if (data.hasOwnProperty('person_name')) {
                obj['person_name'] = ApiClient.convertToType(data['person_name'], 'String');

                delete data['person_name'];
            }
            if (data.hasOwnProperty('deal_title')) {
                obj['deal_title'] = ApiClient.convertToType(data['deal_title'], 'String');

                delete data['deal_title'];
            }
            if (data.hasOwnProperty('owner_name')) {
                obj['owner_name'] = ApiClient.convertToType(data['owner_name'], 'String');

                delete data['owner_name'];
            }
            if (data.hasOwnProperty('person_dropbox_bcc')) {
                obj['person_dropbox_bcc'] = ApiClient.convertToType(data['person_dropbox_bcc'], 'String');

                delete data['person_dropbox_bcc'];
            }
            if (data.hasOwnProperty('deal_dropbox_bcc')) {
                obj['deal_dropbox_bcc'] = ApiClient.convertToType(data['deal_dropbox_bcc'], 'String');

                delete data['deal_dropbox_bcc'];
            }
            if (data.hasOwnProperty('assigned_to_user_id')) {
                obj['assigned_to_user_id'] = ApiClient.convertToType(data['assigned_to_user_id'], 'Number');

                delete data['assigned_to_user_id'];
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], Object);

                delete data['file'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The due date of the activity. Format: YYYY-MM-DD
 * @member {Date} due_date
 */
ActivityResponseObject.prototype['due_date'] = undefined;

/**
 * The due time of the activity in UTC. Format: HH:MM
 * @member {String} due_time
 */
ActivityResponseObject.prototype['due_time'] = undefined;

/**
 * The duration of the activity. Format: HH:MM
 * @member {String} duration
 */
ActivityResponseObject.prototype['duration'] = undefined;

/**
 * The ID of the deal this activity is associated with
 * @member {Number} deal_id
 */
ActivityResponseObject.prototype['deal_id'] = undefined;

/**
 * The ID of the lead in the UUID format this activity is associated with
 * @member {String} lead_id
 */
ActivityResponseObject.prototype['lead_id'] = undefined;

/**
 * The ID of the person this activity is associated with
 * @member {Number} person_id
 */
ActivityResponseObject.prototype['person_id'] = undefined;

/**
 * The ID of the project this activity is associated with
 * @member {Number} project_id
 */
ActivityResponseObject.prototype['project_id'] = undefined;

/**
 * The ID of the organization this activity is associated with
 * @member {Number} org_id
 */
ActivityResponseObject.prototype['org_id'] = undefined;

/**
 * The address of the activity.
 * @member {String} location
 */
ActivityResponseObject.prototype['location'] = undefined;

/**
 * Additional details about the activity that is synced to your external calendar. Unlike the note added to the activity, the description is publicly visible to any guests added to the activity.
 * @member {String} public_description
 */
ActivityResponseObject.prototype['public_description'] = undefined;

/**
 * The ID of the activity, generated when the activity was created
 * @member {Number} id
 */
ActivityResponseObject.prototype['id'] = undefined;

/**
 * The note of the activity (HTML format)
 * @member {String} note
 */
ActivityResponseObject.prototype['note'] = undefined;

/**
 * Whether the activity is done or not
 * @member {Boolean} done
 */
ActivityResponseObject.prototype['done'] = undefined;

/**
 * The subject of the activity
 * @member {String} subject
 */
ActivityResponseObject.prototype['subject'] = undefined;

/**
 * The type of the activity. This is in correlation with the `key_string` parameter of ActivityTypes.
 * @member {String} type
 */
ActivityResponseObject.prototype['type'] = undefined;

/**
 * The ID of the user whom the activity is assigned to
 * @member {Number} user_id
 */
ActivityResponseObject.prototype['user_id'] = undefined;

/**
 * List of multiple persons (participants) this activity is associated with
 * @member {Array.<Object>} participants
 */
ActivityResponseObject.prototype['participants'] = undefined;

/**
 * Marks if the activity is set as 'Busy' or 'Free'. If the flag is set to `true`, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset. When the value of the flag is unset (`null`), the flag defaults to 'Busy' if it has a time set, and 'Free' if it is an all-day event without specified time.
 * @member {Boolean} busy_flag
 */
ActivityResponseObject.prototype['busy_flag'] = undefined;

/**
 * The attendees of the activity. This can be either your existing Pipedrive contacts or an external email address.
 * @member {Array.<Object>} attendees
 */
ActivityResponseObject.prototype['attendees'] = undefined;

/**
 * The user's company ID
 * @member {Number} company_id
 */
ActivityResponseObject.prototype['company_id'] = undefined;

/**
 * If the activity references some other object, it is indicated here. For example, value `Salesphone` refers to activities created with Caller.
 * @member {String} reference_type
 */
ActivityResponseObject.prototype['reference_type'] = undefined;

/**
 * Together with the `reference_type`, gives the ID of the other object
 * @member {Number} reference_id
 */
ActivityResponseObject.prototype['reference_id'] = undefined;

/**
 * The ID of the Marketplace app, which is connected to this activity
 * @member {String} conference_meeting_client
 */
ActivityResponseObject.prototype['conference_meeting_client'] = undefined;

/**
 * The link to join the meeting which is associated with this activity
 * @member {String} conference_meeting_url
 */
ActivityResponseObject.prototype['conference_meeting_url'] = undefined;

/**
 * The meeting ID of the meeting provider (Zoom, MS Teams etc.) that is associated with this activity
 * @member {String} conference_meeting_id
 */
ActivityResponseObject.prototype['conference_meeting_id'] = undefined;

/**
 * The creation date and time of the activity in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} add_time
 */
ActivityResponseObject.prototype['add_time'] = undefined;

/**
 * The date and time this activity was marked as done. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} marked_as_done_time
 */
ActivityResponseObject.prototype['marked_as_done_time'] = undefined;

/**
 * The date and time of latest notifications sent about this activity to the participants or the attendees of this activity
 * @member {String} last_notification_time
 */
ActivityResponseObject.prototype['last_notification_time'] = undefined;

/**
 * The ID of the user who triggered the sending of the latest notifications about this activity to the participants or the attendees of this activity
 * @member {Number} last_notification_user_id
 */
ActivityResponseObject.prototype['last_notification_user_id'] = undefined;

/**
 * The ID of the language the notifications are sent in
 * @member {Number} notification_language_id
 */
ActivityResponseObject.prototype['notification_language_id'] = undefined;

/**
 * Whether the activity is active or not
 * @member {Boolean} active_flag
 */
ActivityResponseObject.prototype['active_flag'] = undefined;

/**
 * The last update date and time of the activity. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} update_time
 */
ActivityResponseObject.prototype['update_time'] = undefined;

/**
 * The ID of the user who was the last to update this activity
 * @member {Number} update_user_id
 */
ActivityResponseObject.prototype['update_user_id'] = undefined;

/**
 * For the activity which syncs to Google calendar, this is the Google event ID. NB! This field is related to old Google calendar sync and will be deprecated soon.
 * @member {String} gcal_event_id
 */
ActivityResponseObject.prototype['gcal_event_id'] = undefined;

/**
 * The Google calendar ID that this activity syncs to. NB! This field is related to old Google calendar sync and will be deprecated soon.
 * @member {String} google_calendar_id
 */
ActivityResponseObject.prototype['google_calendar_id'] = undefined;

/**
 * The Google calendar API etag (version) that is used for syncing this activity. NB! This field is related to old Google calendar sync and will be deprecated soon.
 * @member {String} google_calendar_etag
 */
ActivityResponseObject.prototype['google_calendar_etag'] = undefined;

/**
 * For activities that sync to an external calendar, this setting indicates if the activity syncs with context (what are the deals, persons, organizations this activity is related to)
 * @member {String} calendar_sync_include_context
 */
ActivityResponseObject.prototype['calendar_sync_include_context'] = undefined;

/**
 * The timezone the activity was created in an external calendar
 * @member {String} source_timezone
 */
ActivityResponseObject.prototype['source_timezone'] = undefined;

/**
 * The rule for the recurrence of the activity. Is important for activities synced into Pipedrive from an external calendar. Example: \"RRULE:FREQ=WEEKLY;BYDAY=WE\"
 * @member {String} rec_rule
 */
ActivityResponseObject.prototype['rec_rule'] = undefined;

/**
 * Additional rules for the recurrence of the activity, extend the `rec_rule`. Is important for activities synced into Pipedrive from an external calendar.
 * @member {String} rec_rule_extension
 */
ActivityResponseObject.prototype['rec_rule_extension'] = undefined;

/**
 * The ID of parent activity for a recurrent activity if the current activity is an exception to recurrence rules
 * @member {Number} rec_master_activity_id
 */
ActivityResponseObject.prototype['rec_master_activity_id'] = undefined;

/**
 * The list of recurring activity instances. It is in a structure as follows: `[{due_date: \"2020-06-24\", due_time: \"10:00:00\"}]`
 * @member {Array.<Object>} series
 */
ActivityResponseObject.prototype['series'] = undefined;

/**
 * The ID of the user who created the activity
 * @member {Number} created_by_user_id
 */
ActivityResponseObject.prototype['created_by_user_id'] = undefined;

/**
 * A subfield of the location field. Indicates apartment/suite number.
 * @member {String} location_subpremise
 */
ActivityResponseObject.prototype['location_subpremise'] = undefined;

/**
 * A subfield of the location field. Indicates house number.
 * @member {String} location_street_number
 */
ActivityResponseObject.prototype['location_street_number'] = undefined;

/**
 * A subfield of the location field. Indicates street name.
 * @member {String} location_route
 */
ActivityResponseObject.prototype['location_route'] = undefined;

/**
 * A subfield of the location field. Indicates district/sublocality.
 * @member {String} location_sublocality
 */
ActivityResponseObject.prototype['location_sublocality'] = undefined;

/**
 * A subfield of the location field. Indicates city/town/village/locality.
 * @member {String} location_locality
 */
ActivityResponseObject.prototype['location_locality'] = undefined;

/**
 * A subfield of the location field. Indicates state/county.
 * @member {String} location_admin_area_level_1
 */
ActivityResponseObject.prototype['location_admin_area_level_1'] = undefined;

/**
 * A subfield of the location field. Indicates region.
 * @member {String} location_admin_area_level_2
 */
ActivityResponseObject.prototype['location_admin_area_level_2'] = undefined;

/**
 * A subfield of the location field. Indicates country.
 * @member {String} location_country
 */
ActivityResponseObject.prototype['location_country'] = undefined;

/**
 * A subfield of the location field. Indicates ZIP/postal code.
 * @member {String} location_postal_code
 */
ActivityResponseObject.prototype['location_postal_code'] = undefined;

/**
 * A subfield of the location field. Indicates full/combined address.
 * @member {String} location_formatted_address
 */
ActivityResponseObject.prototype['location_formatted_address'] = undefined;

/**
 * The name of the organization this activity is associated with
 * @member {String} org_name
 */
ActivityResponseObject.prototype['org_name'] = undefined;

/**
 * The name of the person this activity is associated with
 * @member {String} person_name
 */
ActivityResponseObject.prototype['person_name'] = undefined;

/**
 * The name of the deal this activity is associated with
 * @member {String} deal_title
 */
ActivityResponseObject.prototype['deal_title'] = undefined;

/**
 * The name of the user this activity is owned by
 * @member {String} owner_name
 */
ActivityResponseObject.prototype['owner_name'] = undefined;

/**
 * The BCC email address of the person
 * @member {String} person_dropbox_bcc
 */
ActivityResponseObject.prototype['person_dropbox_bcc'] = undefined;

/**
 * The BCC email address of the deal
 * @member {String} deal_dropbox_bcc
 */
ActivityResponseObject.prototype['deal_dropbox_bcc'] = undefined;

/**
 * The ID of the user to whom the activity is assigned to. Equal to `user_id`.
 * @member {Number} assigned_to_user_id
 */
ActivityResponseObject.prototype['assigned_to_user_id'] = undefined;

/**
 * The file that is attached to this activity. For example, this can be a reference to an audio note file generated with Pipedrive mobile app.
 * @member {Object} file
 */
ActivityResponseObject.prototype['file'] = undefined;


// Implement ActivityObjectFragment interface:
/**
 * The due date of the activity. Format: YYYY-MM-DD
 * @member {Date} due_date
 */
ActivityObjectFragment.prototype['due_date'] = undefined;
/**
 * The due time of the activity in UTC. Format: HH:MM
 * @member {String} due_time
 */
ActivityObjectFragment.prototype['due_time'] = undefined;
/**
 * The duration of the activity. Format: HH:MM
 * @member {String} duration
 */
ActivityObjectFragment.prototype['duration'] = undefined;
/**
 * The ID of the deal this activity is associated with
 * @member {Number} deal_id
 */
ActivityObjectFragment.prototype['deal_id'] = undefined;
/**
 * The ID of the lead in the UUID format this activity is associated with
 * @member {String} lead_id
 */
ActivityObjectFragment.prototype['lead_id'] = undefined;
/**
 * The ID of the person this activity is associated with
 * @member {Number} person_id
 */
ActivityObjectFragment.prototype['person_id'] = undefined;
/**
 * The ID of the project this activity is associated with
 * @member {Number} project_id
 */
ActivityObjectFragment.prototype['project_id'] = undefined;
/**
 * The ID of the organization this activity is associated with
 * @member {Number} org_id
 */
ActivityObjectFragment.prototype['org_id'] = undefined;
/**
 * The address of the activity.
 * @member {String} location
 */
ActivityObjectFragment.prototype['location'] = undefined;
/**
 * Additional details about the activity that is synced to your external calendar. Unlike the note added to the activity, the description is publicly visible to any guests added to the activity.
 * @member {String} public_description
 */
ActivityObjectFragment.prototype['public_description'] = undefined;
// Implement ActivityResponseObjectAllOf interface:
/**
 * The ID of the activity, generated when the activity was created
 * @member {Number} id
 */
ActivityResponseObjectAllOf.prototype['id'] = undefined;
/**
 * The note of the activity (HTML format)
 * @member {String} note
 */
ActivityResponseObjectAllOf.prototype['note'] = undefined;
/**
 * Whether the activity is done or not
 * @member {Boolean} done
 */
ActivityResponseObjectAllOf.prototype['done'] = undefined;
/**
 * The subject of the activity
 * @member {String} subject
 */
ActivityResponseObjectAllOf.prototype['subject'] = undefined;
/**
 * The type of the activity. This is in correlation with the `key_string` parameter of ActivityTypes.
 * @member {String} type
 */
ActivityResponseObjectAllOf.prototype['type'] = undefined;
/**
 * The ID of the user whom the activity is assigned to
 * @member {Number} user_id
 */
ActivityResponseObjectAllOf.prototype['user_id'] = undefined;
/**
 * List of multiple persons (participants) this activity is associated with
 * @member {Array.<Object>} participants
 */
ActivityResponseObjectAllOf.prototype['participants'] = undefined;
/**
 * Marks if the activity is set as 'Busy' or 'Free'. If the flag is set to `true`, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset. When the value of the flag is unset (`null`), the flag defaults to 'Busy' if it has a time set, and 'Free' if it is an all-day event without specified time.
 * @member {Boolean} busy_flag
 */
ActivityResponseObjectAllOf.prototype['busy_flag'] = undefined;
/**
 * The attendees of the activity. This can be either your existing Pipedrive contacts or an external email address.
 * @member {Array.<Object>} attendees
 */
ActivityResponseObjectAllOf.prototype['attendees'] = undefined;
/**
 * The user's company ID
 * @member {Number} company_id
 */
ActivityResponseObjectAllOf.prototype['company_id'] = undefined;
/**
 * If the activity references some other object, it is indicated here. For example, value `Salesphone` refers to activities created with Caller.
 * @member {String} reference_type
 */
ActivityResponseObjectAllOf.prototype['reference_type'] = undefined;
/**
 * Together with the `reference_type`, gives the ID of the other object
 * @member {Number} reference_id
 */
ActivityResponseObjectAllOf.prototype['reference_id'] = undefined;
/**
 * The ID of the Marketplace app, which is connected to this activity
 * @member {String} conference_meeting_client
 */
ActivityResponseObjectAllOf.prototype['conference_meeting_client'] = undefined;
/**
 * The link to join the meeting which is associated with this activity
 * @member {String} conference_meeting_url
 */
ActivityResponseObjectAllOf.prototype['conference_meeting_url'] = undefined;
/**
 * The meeting ID of the meeting provider (Zoom, MS Teams etc.) that is associated with this activity
 * @member {String} conference_meeting_id
 */
ActivityResponseObjectAllOf.prototype['conference_meeting_id'] = undefined;
/**
 * The creation date and time of the activity in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} add_time
 */
ActivityResponseObjectAllOf.prototype['add_time'] = undefined;
/**
 * The date and time this activity was marked as done. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} marked_as_done_time
 */
ActivityResponseObjectAllOf.prototype['marked_as_done_time'] = undefined;
/**
 * The date and time of latest notifications sent about this activity to the participants or the attendees of this activity
 * @member {String} last_notification_time
 */
ActivityResponseObjectAllOf.prototype['last_notification_time'] = undefined;
/**
 * The ID of the user who triggered the sending of the latest notifications about this activity to the participants or the attendees of this activity
 * @member {Number} last_notification_user_id
 */
ActivityResponseObjectAllOf.prototype['last_notification_user_id'] = undefined;
/**
 * The ID of the language the notifications are sent in
 * @member {Number} notification_language_id
 */
ActivityResponseObjectAllOf.prototype['notification_language_id'] = undefined;
/**
 * Whether the activity is active or not
 * @member {Boolean} active_flag
 */
ActivityResponseObjectAllOf.prototype['active_flag'] = undefined;
/**
 * The last update date and time of the activity. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} update_time
 */
ActivityResponseObjectAllOf.prototype['update_time'] = undefined;
/**
 * The ID of the user who was the last to update this activity
 * @member {Number} update_user_id
 */
ActivityResponseObjectAllOf.prototype['update_user_id'] = undefined;
/**
 * For the activity which syncs to Google calendar, this is the Google event ID. NB! This field is related to old Google calendar sync and will be deprecated soon.
 * @member {String} gcal_event_id
 */
ActivityResponseObjectAllOf.prototype['gcal_event_id'] = undefined;
/**
 * The Google calendar ID that this activity syncs to. NB! This field is related to old Google calendar sync and will be deprecated soon.
 * @member {String} google_calendar_id
 */
ActivityResponseObjectAllOf.prototype['google_calendar_id'] = undefined;
/**
 * The Google calendar API etag (version) that is used for syncing this activity. NB! This field is related to old Google calendar sync and will be deprecated soon.
 * @member {String} google_calendar_etag
 */
ActivityResponseObjectAllOf.prototype['google_calendar_etag'] = undefined;
/**
 * For activities that sync to an external calendar, this setting indicates if the activity syncs with context (what are the deals, persons, organizations this activity is related to)
 * @member {String} calendar_sync_include_context
 */
ActivityResponseObjectAllOf.prototype['calendar_sync_include_context'] = undefined;
/**
 * The timezone the activity was created in an external calendar
 * @member {String} source_timezone
 */
ActivityResponseObjectAllOf.prototype['source_timezone'] = undefined;
/**
 * The rule for the recurrence of the activity. Is important for activities synced into Pipedrive from an external calendar. Example: \"RRULE:FREQ=WEEKLY;BYDAY=WE\"
 * @member {String} rec_rule
 */
ActivityResponseObjectAllOf.prototype['rec_rule'] = undefined;
/**
 * Additional rules for the recurrence of the activity, extend the `rec_rule`. Is important for activities synced into Pipedrive from an external calendar.
 * @member {String} rec_rule_extension
 */
ActivityResponseObjectAllOf.prototype['rec_rule_extension'] = undefined;
/**
 * The ID of parent activity for a recurrent activity if the current activity is an exception to recurrence rules
 * @member {Number} rec_master_activity_id
 */
ActivityResponseObjectAllOf.prototype['rec_master_activity_id'] = undefined;
/**
 * The list of recurring activity instances. It is in a structure as follows: `[{due_date: \"2020-06-24\", due_time: \"10:00:00\"}]`
 * @member {Array.<Object>} series
 */
ActivityResponseObjectAllOf.prototype['series'] = undefined;
/**
 * The ID of the user who created the activity
 * @member {Number} created_by_user_id
 */
ActivityResponseObjectAllOf.prototype['created_by_user_id'] = undefined;
/**
 * A subfield of the location field. Indicates apartment/suite number.
 * @member {String} location_subpremise
 */
ActivityResponseObjectAllOf.prototype['location_subpremise'] = undefined;
/**
 * A subfield of the location field. Indicates house number.
 * @member {String} location_street_number
 */
ActivityResponseObjectAllOf.prototype['location_street_number'] = undefined;
/**
 * A subfield of the location field. Indicates street name.
 * @member {String} location_route
 */
ActivityResponseObjectAllOf.prototype['location_route'] = undefined;
/**
 * A subfield of the location field. Indicates district/sublocality.
 * @member {String} location_sublocality
 */
ActivityResponseObjectAllOf.prototype['location_sublocality'] = undefined;
/**
 * A subfield of the location field. Indicates city/town/village/locality.
 * @member {String} location_locality
 */
ActivityResponseObjectAllOf.prototype['location_locality'] = undefined;
/**
 * A subfield of the location field. Indicates state/county.
 * @member {String} location_admin_area_level_1
 */
ActivityResponseObjectAllOf.prototype['location_admin_area_level_1'] = undefined;
/**
 * A subfield of the location field. Indicates region.
 * @member {String} location_admin_area_level_2
 */
ActivityResponseObjectAllOf.prototype['location_admin_area_level_2'] = undefined;
/**
 * A subfield of the location field. Indicates country.
 * @member {String} location_country
 */
ActivityResponseObjectAllOf.prototype['location_country'] = undefined;
/**
 * A subfield of the location field. Indicates ZIP/postal code.
 * @member {String} location_postal_code
 */
ActivityResponseObjectAllOf.prototype['location_postal_code'] = undefined;
/**
 * A subfield of the location field. Indicates full/combined address.
 * @member {String} location_formatted_address
 */
ActivityResponseObjectAllOf.prototype['location_formatted_address'] = undefined;
/**
 * The name of the organization this activity is associated with
 * @member {String} org_name
 */
ActivityResponseObjectAllOf.prototype['org_name'] = undefined;
/**
 * The name of the person this activity is associated with
 * @member {String} person_name
 */
ActivityResponseObjectAllOf.prototype['person_name'] = undefined;
/**
 * The name of the deal this activity is associated with
 * @member {String} deal_title
 */
ActivityResponseObjectAllOf.prototype['deal_title'] = undefined;
/**
 * The name of the user this activity is owned by
 * @member {String} owner_name
 */
ActivityResponseObjectAllOf.prototype['owner_name'] = undefined;
/**
 * The BCC email address of the person
 * @member {String} person_dropbox_bcc
 */
ActivityResponseObjectAllOf.prototype['person_dropbox_bcc'] = undefined;
/**
 * The BCC email address of the deal
 * @member {String} deal_dropbox_bcc
 */
ActivityResponseObjectAllOf.prototype['deal_dropbox_bcc'] = undefined;
/**
 * The ID of the user to whom the activity is assigned to. Equal to `user_id`.
 * @member {Number} assigned_to_user_id
 */
ActivityResponseObjectAllOf.prototype['assigned_to_user_id'] = undefined;
/**
 * The file that is attached to this activity. For example, this can be a reference to an audio note file generated with Pipedrive mobile app.
 * @member {Object} file
 */
ActivityResponseObjectAllOf.prototype['file'] = undefined;




export default ActivityResponseObject;

