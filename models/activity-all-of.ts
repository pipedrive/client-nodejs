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
 * @interface ActivityAllOf
 */
export interface ActivityAllOf {
    /**
     * The due date of the activity. Format: YYYY-MM-DD
     * @type {string}
     * @memberof ActivityAllOf
     */
    'due_date'?: string;
    /**
     * The due time of the activity in UTC. Format: HH:MM
     * @type {string}
     * @memberof ActivityAllOf
     */
    'due_time'?: string;
    /**
     * The duration of the activity. Format: HH:MM
     * @type {string}
     * @memberof ActivityAllOf
     */
    'duration'?: string;
    /**
     * The ID of the deal this activity is associated with
     * @type {number}
     * @memberof ActivityAllOf
     */
    'deal_id'?: number;
    /**
     * The ID of the lead in the UUID format this activity is associated with
     * @type {string}
     * @memberof ActivityAllOf
     */
    'lead_id'?: string | null;
    /**
     * The ID of the person this activity is associated with
     * @type {number}
     * @memberof ActivityAllOf
     */
    'person_id'?: number;
    /**
     * The ID of the project this activity is associated with
     * @type {number}
     * @memberof ActivityAllOf
     */
    'project_id'?: number | null;
    /**
     * The ID of the organization this activity is associated with
     * @type {number}
     * @memberof ActivityAllOf
     */
    'org_id'?: number;
    /**
     * The address of the activity.
     * @type {string}
     * @memberof ActivityAllOf
     */
    'location'?: string;
    /**
     * Additional details about the activity that is synced to your external calendar. Unlike the note added to the activity, the description is publicly visible to any guests added to the activity.
     * @type {string}
     * @memberof ActivityAllOf
     */
    'public_description'?: string;
}

