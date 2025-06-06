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
* @interface ProjectAllOf1
*/
export interface ProjectAllOf1 {
    /**
    * The description of the project
    * @type {string}
    */
    'description'?: string;
    /**
    * The status of the project
    * @type {string}
    */
    'status'?: string;
    /**
    * The ID of a project owner
    * @type {number}
    */
    'owner_id'?: number;
    /**
    * The start date of the project. Format: YYYY-MM-DD.
    * @type {string}
    */
    'start_date'?: string;
    /**
    * The end date of the project. Format: YYYY-MM-DD.
    * @type {string}
    */
    'end_date'?: string;
    /**
    * An array of IDs of the deals this project is associated with
    * @type {Array<number>}
    */
    'deal_ids'?: Array<number>;
    /**
    * The ID of the organization this project is associated with
    * @type {number}
    */
    'org_id'?: number;
    /**
    * The ID of the person this project is associated with
    * @type {number}
    */
    'person_id'?: number;
    /**
    * An array of IDs of the labels this project has
    * @type {Array<number>}
    */
    'labels'?: Array<number>;
}

