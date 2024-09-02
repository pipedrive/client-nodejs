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
 * The filter object
 * @export
 * @interface GetFiltersResponse200AllOfDataInner
 */
export interface GetFiltersResponse200AllOfDataInner {
    /**
     * The ID of the filter
     * @type {number}
     * @memberof GetFiltersResponse200AllOfDataInner
     */
    'id'?: number;
    /**
     * The name of the filter
     * @type {string}
     * @memberof GetFiltersResponse200AllOfDataInner
     */
    'name'?: string;
    /**
     * The active flag of the filter
     * @type {boolean}
     * @memberof GetFiltersResponse200AllOfDataInner
     */
    'active_flag'?: boolean;
    /**
     * The type of the item
     * @type {string}
     * @memberof GetFiltersResponse200AllOfDataInner
     */
    'type'?: string;
    /**
     * The owner of the filter
     * @type {number}
     * @memberof GetFiltersResponse200AllOfDataInner
     */
    'user_id'?: number;
    /**
     * The date and time when the filter was added
     * @type {string}
     * @memberof GetFiltersResponse200AllOfDataInner
     */
    'add_time'?: string;
    /**
     * The date and time when the filter was updated
     * @type {string}
     * @memberof GetFiltersResponse200AllOfDataInner
     */
    'update_time'?: string;
    /**
     * The visibility group ID of who can see then filter
     * @type {number}
     * @memberof GetFiltersResponse200AllOfDataInner
     */
    'visible_to'?: number;
    /**
     * Used by Pipedrive webapp
     * @type {number}
     * @memberof GetFiltersResponse200AllOfDataInner
     */
    'custom_view_id'?: number;
}

