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
 * @interface Stage
 */
export interface Stage {
    /**
     * The name of the stage
     * @type {string}
     * @memberof Stage
     */
    'name'?: string;
    /**
     * The ID of the pipeline to add stage to
     * @type {number}
     * @memberof Stage
     */
    'pipeline_id'?: number;
    /**
     * The success probability percentage of the deal. Used/shown when deal weighted values are used.
     * @type {number}
     * @memberof Stage
     */
    'deal_probability'?: number;
    /**
     * Whether deals in this stage can become rotten
     * @type {boolean}
     * @memberof Stage
     */
    'rotten_flag'?: boolean;
    /**
     * The number of days the deals not updated in this stage would become rotten. Applies only if the `rotten_flag` is set.
     * @type {number}
     * @memberof Stage
     */
    'rotten_days'?: number;
}

