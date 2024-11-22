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
 * @interface ActivityCollectionResponseObjectAllOf
 */
export interface ActivityCollectionResponseObjectAllOf {
    /**
     * The ID of the activity, generated when the activity was created
     * @type {number}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'id': number;
    /**
     * Whether the activity is done or not
     * @type {boolean}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'done': boolean;
    /**
     * The subject of the activity
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'subject': string;
    /**
     * The type of the activity. This is in correlation with the `key_string` parameter of ActivityTypes.
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'type': string;
    /**
     * The ID of the user whom the activity is assigned to
     * @type {number}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'user_id': number;
    /**
     * Marks if the activity is set as \'Busy\' or \'Free\'. If the flag is set to `true`, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset. When the value of the flag is unset (`null`), the flag defaults to \'Busy\' if it has a time set, and \'Free\' if it is an all-day event without specified time.
     * @type {boolean}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'busy_flag': boolean;
    /**
     * The user\'s company ID
     * @type {number}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'company_id': number;
    /**
     * The ID of the Marketplace app, which is connected to this activity
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'conference_meeting_client': string;
    /**
     * The link to join the meeting which is associated with this activity
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'conference_meeting_url': string;
    /**
     * The meeting ID of the meeting provider (Zoom, MS Teams etc.) that is associated with this activity
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'conference_meeting_id': string;
    /**
     * The creation date and time of the activity in UTC. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'add_time': string;
    /**
     * The date and time this activity was marked as done. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'marked_as_done_time': string;
    /**
     * Whether the activity is active or not
     * @type {boolean}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'active_flag': boolean;
    /**
     * The last update date and time of the activity. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'update_time': string;
    /**
     * The ID of the user who was the last to update this activity
     * @type {number}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'update_user_id': number;
    /**
     * The timezone the activity was created in an external calendar
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'source_timezone': string;
    /**
     * A subfield of the location field. Indicates apartment/suite number.
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'location_subpremise': string;
    /**
     * A subfield of the location field. Indicates house number.
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'location_street_number': string;
    /**
     * A subfield of the location field. Indicates street name.
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'location_route': string;
    /**
     * A subfield of the location field. Indicates district/sublocality.
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'location_sublocality': string;
    /**
     * A subfield of the location field. Indicates city/town/village/locality.
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'location_locality': string;
    /**
     * A subfield of the location field. Indicates state/county.
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'location_admin_area_level_1': string;
    /**
     * A subfield of the location field. Indicates region.
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'location_admin_area_level_2': string;
    /**
     * A subfield of the location field. Indicates country.
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'location_country': string;
    /**
     * A subfield of the location field. Indicates ZIP/postal code.
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'location_postal_code': string;
    /**
     * A subfield of the location field. Indicates full/combined address.
     * @type {string}
     * @memberof ActivityCollectionResponseObjectAllOf
     */
    'location_formatted_address': string;
}

