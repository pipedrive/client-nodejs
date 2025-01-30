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
* @interface AddTeamRequest
*/
export interface AddTeamRequest {
    /**
    * The team name
    * @type {string}
    */
    'name'?: string;
    /**
    * The team description
    * @type {string}
    */
    'description'?: string;
    /**
    * The team manager ID
    * @type {number}
    */
    'manager_id'?: number;
    /**
    * The IDs of the users that belong to the team
    * @type {Array<number>}
    */
    'users'?: Array<number>;
}

