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
 * The total weighted values of the deals grouped by deal currency. The weighted value is calculated as probability times deal value.
 * @export
 * @interface GetDealsSummaryResponseDataWeightedValuesTotal
 */
export interface GetDealsSummaryResponseDataWeightedValuesTotal {
    /**
     * The total weighted value of the deals in the deal currency group
     * @type {number}
     * @memberof GetDealsSummaryResponseDataWeightedValuesTotal
     */
    'value'?: number;
    /**
     * The number of deals in the deal currency group
     * @type {number}
     * @memberof GetDealsSummaryResponseDataWeightedValuesTotal
     */
    'count'?: number;
    /**
     * The total weighted value of the deals formatted with deal currency. E.g. €50
     * @type {string}
     * @memberof GetDealsSummaryResponseDataWeightedValuesTotal
     */
    'value_formatted'?: string;
}

