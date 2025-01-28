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
* @interface AddStageRequest
*/
export interface AddStageRequest {
    /**
    * The name of the stage
    * @type {string}
    */
    'name': string;
    /**
    * The ID of the pipeline to add stage to
    * @type {number}
    */
    'pipeline_id': number;
    /**
    * The success probability percentage of the deal. Used/shown when deal weighted values are used.
    * @type {number}
    */
    'deal_probability'?: number;
    /**
    * Whether deals in this stage can become rotten
    * @type {boolean}
    */
    'is_deal_rot_enabled'?: boolean;
    /**
    * The number of days the deals not updated in this stage would become rotten. Applies only if the `is_deal_rot_enabled` is set.
    * @type {number}
    */
    'days_to_rotten'?: number;
}

