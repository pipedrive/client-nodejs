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
 * @interface AddDealProductRequestAllOf
 */
export interface AddDealProductRequestAllOf {
    /**
     * Only available in Advanced and above plans  How often a customer is billed for access to a service or product  A deal can have up to 20 products attached with `billing_frequency` different than `one-time` 
     * @type {string}
     * @memberof AddDealProductRequestAllOf
     */
    'billing_frequency'?: AddDealProductRequestAllOfBillingFrequencyConst;
}

export const AddDealProductRequestAllOfBillingFrequencyConst = {
    one_time: 'one-time',
    annually: 'annually',
    semi_annually: 'semi-annually',
    quarterly: 'quarterly',
    monthly: 'monthly',
    weekly: 'weekly'
} as const;

export type AddDealProductRequestAllOfBillingFrequencyConst = typeof AddDealProductRequestAllOfBillingFrequencyConst[keyof typeof AddDealProductRequestAllOfBillingFrequencyConst];


