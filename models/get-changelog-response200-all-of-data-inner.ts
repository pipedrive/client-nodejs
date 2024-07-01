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
 * @interface GetChangelogResponse200AllOfDataInner
 */
export interface GetChangelogResponse200AllOfDataInner {
    /**
     * The key of the field that was changed
     * @type {string}
     * @memberof GetChangelogResponse200AllOfDataInner
     */
    'field_key'?: string;
    /**
     * The value of the field before the change
     * @type {string}
     * @memberof GetChangelogResponse200AllOfDataInner
     */
    'old_value'?: string | null;
    /**
     * The value of the field after the change
     * @type {string}
     * @memberof GetChangelogResponse200AllOfDataInner
     */
    'new_value'?: string | null;
    /**
     * The ID of the user who made the change
     * @type {number}
     * @memberof GetChangelogResponse200AllOfDataInner
     */
    'actor_user_id'?: number;
    /**
     * The date and time of the change
     * @type {string}
     * @memberof GetChangelogResponse200AllOfDataInner
     */
    'time'?: string;
    /**
     * The source of change, for example \'app\', \'mobile\', \'api\', etc.
     * @type {string}
     * @memberof GetChangelogResponse200AllOfDataInner
     */
    'change_source'?: string | null;
    /**
     * The user agent from which the change was made
     * @type {string}
     * @memberof GetChangelogResponse200AllOfDataInner
     */
    'change_source_user_agent'?: string | null;
    /**
     * Whether the change was made as part of a bulk update
     * @type {boolean}
     * @memberof GetChangelogResponse200AllOfDataInner
     */
    'is_bulk_update_flag'?: boolean;
}

