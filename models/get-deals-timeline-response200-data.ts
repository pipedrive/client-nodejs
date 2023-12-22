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
import { DealStrict } from './deal-strict';
// May contain unused imports in some cases
// @ts-ignore
import { GetDealsTimelineResponse200DataTotals } from './get-deals-timeline-response200-data-totals';

/**
 * Open and won deals grouped into periods by defined interval, amount and date-type dealField (`field_key`)
 * @export
 * @interface GetDealsTimelineResponse200Data
 */
export interface GetDealsTimelineResponse200Data {
    /**
     * The start date and time of the period
     * @type {string}
     * @memberof GetDealsTimelineResponse200Data
     */
    'period_start'?: string;
    /**
     * The end date and time of the period
     * @type {string}
     * @memberof GetDealsTimelineResponse200Data
     */
    'period_end'?: string;
    /**
     * 
     * @type {Array<DealStrict>}
     * @memberof GetDealsTimelineResponse200Data
     */
    'deals'?: Array<DealStrict>;
    /**
     * 
     * @type {GetDealsTimelineResponse200DataTotals}
     * @memberof GetDealsTimelineResponse200Data
     */
    'totals'?: GetDealsTimelineResponse200DataTotals;
}
