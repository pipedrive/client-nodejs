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
* @interface AddProductRequestAllOf1
*/
export interface AddProductRequestAllOf1 {
    /**
    * Only available in Advanced and above plans  How often a customer is billed for access to a service or product 
    * @type {string}
    */
    'billing_frequency'?: AddProductRequestAllOf1BillingFrequencyConst;
}

                export const AddProductRequestAllOf1BillingFrequencyConst = {
                        one_time: 'one-time',
                        annually: 'annually',
                        semi_annually: 'semi-annually',
                        quarterly: 'quarterly',
                        monthly: 'monthly',
                        weekly: 'weekly'
                } as const;

                export type AddProductRequestAllOf1BillingFrequencyConst = typeof AddProductRequestAllOf1BillingFrequencyConst[keyof typeof AddProductRequestAllOf1BillingFrequencyConst];


