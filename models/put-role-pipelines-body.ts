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
 * @interface PutRolePipelinesBody
 */
export interface PutRolePipelinesBody {
    /**
     * The pipeline IDs to make the pipelines visible (add) and/or hidden (remove) for the specified role. It requires the following JSON structure: `{ \"add\": \"[1]\", \"remove\": \"[3, 4]\" }`.
     * @type {object}
     * @memberof PutRolePipelinesBody
     */
    'visible_pipeline_ids': object;
}

