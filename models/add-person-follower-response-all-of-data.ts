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
 * @interface AddPersonFollowerResponseAllOfData
 */
export interface AddPersonFollowerResponseAllOfData {
    /**
     * The ID of the user who was added as a follower to a person
     * @type {number}
     * @memberof AddPersonFollowerResponseAllOfData
     */
    'user_id'?: number;
    /**
     * The ID of the follower
     * @type {number}
     * @memberof AddPersonFollowerResponseAllOfData
     */
    'id'?: number;
    /**
     * The ID of the person to whom the follower was added
     * @type {number}
     * @memberof AddPersonFollowerResponseAllOfData
     */
    'person_id'?: number;
    /**
     * The date and time when the follower was added to a person. Format: YYYY-MM-DD HH:MM:SS
     * @type {string}
     * @memberof AddPersonFollowerResponseAllOfData
     */
    'add_time'?: string;
}
