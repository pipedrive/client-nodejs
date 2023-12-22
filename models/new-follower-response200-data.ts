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
 * @interface NewFollowerResponse200Data
 */
export interface NewFollowerResponse200Data {
    /**
     * The ID of the user that was added as follower
     * @type {number}
     * @memberof NewFollowerResponse200Data
     */
    'user_id'?: number;
    /**
     * The ID of the follower
     * @type {number}
     * @memberof NewFollowerResponse200Data
     */
    'id'?: number;
    /**
     * The ID of the product
     * @type {number}
     * @memberof NewFollowerResponse200Data
     */
    'product_id'?: number;
    /**
     * The follower creation time. Format: YYYY-MM-DD HH:MM:SS
     * @type {string}
     * @memberof NewFollowerResponse200Data
     */
    'add_time'?: string;
}
