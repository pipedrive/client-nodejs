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
 * Updated stage object
 * @export
 * @interface UpsertStageResponseData
 */
export interface UpsertStageResponseData {
    /**
     * The ID of the stage
     * @type {number}
     * @memberof UpsertStageResponseData
     */
    'id'?: number;
    /**
     * Defines the order of the stage
     * @type {number}
     * @memberof UpsertStageResponseData
     */
    'order_nr'?: number;
    /**
     * The name of the stage
     * @type {string}
     * @memberof UpsertStageResponseData
     */
    'name'?: string;
    /**
     * Whether the stage is active or deleted
     * @type {boolean}
     * @memberof UpsertStageResponseData
     */
    'active_flag'?: boolean;
    /**
     * The success probability percentage of the deal. Used/shown when the deal weighted values are used.
     * @type {number}
     * @memberof UpsertStageResponseData
     */
    'deal_probability'?: number;
    /**
     * The ID of the pipeline to add the stage to
     * @type {number}
     * @memberof UpsertStageResponseData
     */
    'pipeline_id'?: number;
    /**
     * Whether deals in this stage can become rotten
     * @type {boolean}
     * @memberof UpsertStageResponseData
     */
    'rotten_flag'?: boolean;
    /**
     * The number of days the deals not updated in this stage would become rotten. Applies only if the `rotten_flag` is set.
     * @type {number}
     * @memberof UpsertStageResponseData
     */
    'rotten_days'?: number;
    /**
     * The stage creation time. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof UpsertStageResponseData
     */
    'add_time'?: string;
    /**
     * The stage update time. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof UpsertStageResponseData
     */
    'update_time'?: string;
}

