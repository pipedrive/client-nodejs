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
* The currency summary. This parameter is dynamic and changes according to `currency_id` value.
* @export
* @interface PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDCURRENCYID
*/
export interface PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDCURRENCYID {
    /**
    * Deals count per currency
    * @type {number}
    */
    'count'?: number;
    /**
    * Deals value per currency
    * @type {number}
    */
    'value'?: number;
    /**
    * Deals value formatted per currency
    * @type {string}
    */
    'value_formatted'?: string;
    /**
    * Deals weighted value per currency
    * @type {number}
    */
    'weighted_value'?: number;
    /**
    * Deals weighted value formatted per currency
    * @type {string}
    */
    'weighted_value_formatted'?: string;
}

