/* tslint:disable */
/* eslint-disable */
/**
 * Pipedrive API v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
* 
* @export
* @interface GetDealsProductsResponseDataInnerAllOf2
*/
export interface GetDealsProductsResponseDataInnerAllOf2 {
    /**
    * Only available in Advanced and above plans  The number of times the billing frequency repeats for a product in a deal  When `billing_frequency` is set to `one-time`, this field must be `null`  When `billing_frequency` is set to `weekly`, this field cannot be `null`  For all the other values of `billing_frequency`, `null` represents a product billed indefinitely  Must be a positive integer less or equal to 208 
    * @type {number}
    */
    'billing_frequency_cycles'?: number | null;
}

