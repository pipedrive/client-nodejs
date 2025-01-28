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
import { GetPipelineDealsMovementsStatisticsResponseAllOfDataNewDealsFormattedValues } from './get-pipeline-deals-movements-statistics-response-all-of-data-new-deals-formatted-values';
// May contain unused imports in some cases
// @ts-ignore
import { GetPipelineDealsMovementsStatisticsResponseAllOfDataNewDealsValues } from './get-pipeline-deals-movements-statistics-response-all-of-data-new-deals-values';

/**
 * Deals summary
 * @export
 * @interface GetPipelineDealsMovementsStatisticsResponseAllOfDataNewDeals
 */
export interface GetPipelineDealsMovementsStatisticsResponseAllOfDataNewDeals {
    /**
     * The count of the deals
     * @type {number}
     * @memberof GetPipelineDealsMovementsStatisticsResponseAllOfDataNewDeals
     */
    'count'?: number;
    /**
     * The IDs of the deals that have been moved
     * @type {Array<number>}
     * @memberof GetPipelineDealsMovementsStatisticsResponseAllOfDataNewDeals
     */
    'deals_ids'?: Array<number>;
    /**
     * 
     * @type {GetPipelineDealsMovementsStatisticsResponseAllOfDataNewDealsValues}
     * @memberof GetPipelineDealsMovementsStatisticsResponseAllOfDataNewDeals
     */
    'values'?: GetPipelineDealsMovementsStatisticsResponseAllOfDataNewDealsValues;
    /**
     * 
     * @type {GetPipelineDealsMovementsStatisticsResponseAllOfDataNewDealsFormattedValues}
     * @memberof GetPipelineDealsMovementsStatisticsResponseAllOfDataNewDeals
     */
    'formatted_values'?: GetPipelineDealsMovementsStatisticsResponseAllOfDataNewDealsFormattedValues;
}

