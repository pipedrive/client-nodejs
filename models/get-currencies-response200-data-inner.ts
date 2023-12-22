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
 * @interface GetCurrenciesResponse200DataInner
 */
export interface GetCurrenciesResponse200DataInner {
    /**
     * The ID of the currency
     * @type {number}
     * @memberof GetCurrenciesResponse200DataInner
     */
    'id'?: number;
    /**
     * The code of the currency
     * @type {string}
     * @memberof GetCurrenciesResponse200DataInner
     */
    'code'?: string;
    /**
     * The name of the currency
     * @type {string}
     * @memberof GetCurrenciesResponse200DataInner
     */
    'name'?: string;
    /**
     * The amount of decimal points of the currency
     * @type {number}
     * @memberof GetCurrenciesResponse200DataInner
     */
    'decimal_points'?: number;
    /**
     * The symbol of the currency
     * @type {string}
     * @memberof GetCurrenciesResponse200DataInner
     */
    'symbol'?: string;
    /**
     * Whether the currency is active or not
     * @type {boolean}
     * @memberof GetCurrenciesResponse200DataInner
     */
    'active_flag'?: boolean;
    /**
     * Whether the currency is a custom one or not
     * @type {boolean}
     * @memberof GetCurrenciesResponse200DataInner
     */
    'is_custom_flag'?: boolean;
}
