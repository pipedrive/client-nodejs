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
 * @interface StageWithPipelineInfo
 */
export interface StageWithPipelineInfo {
    /**
     * The name of the pipeline
     * @type {string}
     * @memberof StageWithPipelineInfo
     */
    'pipeline_name'?: string;
    /**
     * The pipeline deal probability. When `true`, overrides the stage probability.
     * @type {boolean}
     * @memberof StageWithPipelineInfo
     */
    'pipeline_deal_probability'?: boolean;
}

