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
* @interface ParticipantChangelogItemAllOf
*/
export interface ParticipantChangelogItemAllOf {
    /**
    * The ID of the user
    * @type {number}
    */
    'actor_user_id'?: number;
    /**
    * The ID of the person
    * @type {number}
    */
    'person_id'?: number;
    /**
    * Deal participant action type
    * @type {string}
    */
    'action'?: string;
    /**
    * The deal participant action log time
    * @type {string}
    */
    'time'?: string;
}

