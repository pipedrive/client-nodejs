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


// May contain unused imports in some cases
// @ts-ignore
import { GetPipelineDealsMovementsStatisticsResponseAllOfDataAverageAgeInDaysByStagesInner } from './get-pipeline-deals-movements-statistics-response-all-of-data-average-age-in-days-by-stages-inner';

/**
* The moved deals average age in days
* @export
* @interface GetPipelineDealsMovementsStatisticsResponseAllOfDataAverageAgeInDays
*/
export interface GetPipelineDealsMovementsStatisticsResponseAllOfDataAverageAgeInDays {
    /**
    * The moved deals average age across all stages
    * @type {number}
    */
    'across_all_stages'?: number;
    /**
    * The moved deals average age by stages
    * @type {Array<GetPipelineDealsMovementsStatisticsResponseAllOfDataAverageAgeInDaysByStagesInner>}
    */
    'by_stages'?: Array<GetPipelineDealsMovementsStatisticsResponseAllOfDataAverageAgeInDaysByStagesInner>;
}

