/* tslint:disable */
/* eslint-disable */
/**
 * Pipedrive API v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
* 
* @export
* @interface AddOrganizationRequest
*/
export interface AddOrganizationRequest {
    /**
    * The name of the organization
    * @type {string}
    */
    'name'?: string;
    /**
    * The ID of the user who owns the organization
    * @type {number}
    */
    'owner_id'?: number;
    /**
    * The creation date and time of the organization
    * @type {string}
    */
    'add_time'?: string;
    /**
    * The last updated date and time of the organization
    * @type {string}
    */
    'update_time'?: string;
    /**
    * The visibility of the organization
    * @type {number}
    */
    'visible_to'?: number;
    /**
    * The IDs of labels assigned to the organization
    * @type {Array<number>}
    */
    'label_ids'?: Array<number>;
}

