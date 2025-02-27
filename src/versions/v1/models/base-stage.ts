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
* @interface BaseStage
*/
export interface BaseStage {
    /**
    * The ID of the stage
    * @type {number}
    */
    'id'?: number;
    /**
    * Defines the order of the stage
    * @type {number}
    */
    'order_nr'?: number;
    /**
    * The name of the stage
    * @type {string}
    */
    'name'?: string;
    /**
    * Whether the stage is active or deleted
    * @type {boolean}
    */
    'active_flag'?: boolean;
    /**
    * The success probability percentage of the deal. Used/shown when the deal weighted values are used.
    * @type {number}
    */
    'deal_probability'?: number;
    /**
    * The ID of the pipeline to add the stage to
    * @type {number}
    */
    'pipeline_id'?: number;
    /**
    * Whether deals in this stage can become rotten
    * @type {boolean}
    */
    'rotten_flag'?: boolean;
    /**
    * The number of days the deals not updated in this stage would become rotten. Applies only if the `rotten_flag` is set.
    * @type {number}
    */
    'rotten_days'?: number;
    /**
    * The stage creation time. Format: YYYY-MM-DD HH:MM:SS.
    * @type {string}
    */
    'add_time'?: string;
    /**
    * The stage update time. Format: YYYY-MM-DD HH:MM:SS.
    * @type {string}
    */
    'update_time'?: string;
}

