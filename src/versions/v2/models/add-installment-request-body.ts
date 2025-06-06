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
* @interface AddInstallmentRequestBody
*/
export interface AddInstallmentRequestBody {
    /**
    * The name of the installment.
    * @type {string}
    */
    'description': string;
    /**
    * The installment amount. Must be a positive number (excluding 0).
    * @type {number}
    */
    'amount': number;
    /**
    * The date which the installment will be charged. Must be in the format YYYY-MM-DD.
    * @type {string}
    */
    'billing_date': string;
}

