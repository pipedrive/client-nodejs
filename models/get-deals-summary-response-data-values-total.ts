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
 * The total values of the deals grouped by deal currency
 * @export
 * @interface GetDealsSummaryResponseDataValuesTotal
 */
export interface GetDealsSummaryResponseDataValuesTotal {
    /**
     * The total value of deals in the deal currency group
     * @type {number}
     * @memberof GetDealsSummaryResponseDataValuesTotal
     */
    'value'?: number;
    /**
     * The number of deals in the deal currency group
     * @type {number}
     * @memberof GetDealsSummaryResponseDataValuesTotal
     */
    'count'?: number;
    /**
     * The total value of deals converted into the company default currency
     * @type {number}
     * @memberof GetDealsSummaryResponseDataValuesTotal
     */
    'value_converted'?: number;
    /**
     * The total value of deals formatted with deal currency. E.g. €50
     * @type {string}
     * @memberof GetDealsSummaryResponseDataValuesTotal
     */
    'value_formatted'?: string;
    /**
     * The value_converted formatted with deal currency. E.g. US$50.10
     * @type {string}
     * @memberof GetDealsSummaryResponseDataValuesTotal
     */
    'value_converted_formatted'?: string;
}

