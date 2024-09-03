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
 * @interface GetAssociatedFollowersResponseAllOfDataInner
 */
export interface GetAssociatedFollowersResponseAllOfDataInner {
    /**
     * The ID of the user
     * @type {number}
     * @memberof GetAssociatedFollowersResponseAllOfDataInner
     */
    'user_id'?: number;
    /**
     * The ID of the user follower
     * @type {number}
     * @memberof GetAssociatedFollowersResponseAllOfDataInner
     */
    'id'?: number;
    /**
     * The ID of the deal which the follower was added to
     * @type {number}
     * @memberof GetAssociatedFollowersResponseAllOfDataInner
     */
    'deal_id'?: number;
    /**
     * The date and time when the follower was added to the person
     * @type {string}
     * @memberof GetAssociatedFollowersResponseAllOfDataInner
     */
    'add_time'?: string;
}
