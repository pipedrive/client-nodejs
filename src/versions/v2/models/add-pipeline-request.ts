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
* @interface AddPipelineRequest
*/
export interface AddPipelineRequest {
    /**
    * The name of the pipeline
    * @type {string}
    */
    'name': string;
    /**
    * Whether deal probability is disabled or enabled for this pipeline
    * @type {boolean}
    */
    'is_deal_probability_enabled'?: boolean;
}

