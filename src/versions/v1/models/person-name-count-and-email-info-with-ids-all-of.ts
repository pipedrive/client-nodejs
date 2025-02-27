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
* @interface PersonNameCountAndEmailInfoWithIdsAllOf
*/
export interface PersonNameCountAndEmailInfoWithIdsAllOf {
    /**
    * The ID of the owner related to the person
    * @type {number}
    */
    'owner_id'?: number;
    /**
    * The ID of the organization related to the person
    * @type {number}
    */
    'org_id'?: number;
    /**
    * The ID of the person with what the main person was merged
    * @type {number}
    */
    'merge_what_id'?: number;
}

