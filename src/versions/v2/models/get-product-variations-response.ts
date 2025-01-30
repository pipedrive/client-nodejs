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


// May contain unused imports in some cases
// @ts-ignore
import { GetDealsProductsResponseAdditionalData } from './get-deals-products-response-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { GetProductVariationsResponseDataInner } from './get-product-variations-response-data-inner';

/**
* 
* @export
* @interface GetProductVariationsResponse
*/
export interface GetProductVariationsResponse {
    /**
    * If the response is successful or not
    * @type {boolean}
    */
    'success'?: boolean;
    /**
    * Array containing data for all products
    * @type {Array<GetProductVariationsResponseDataInner>}
    */
    'data'?: Array<GetProductVariationsResponseDataInner>;
    /**
    * 
    * @type {GetDealsProductsResponseAdditionalData}
    */
    'additional_data'?: GetDealsProductsResponseAdditionalData;
}

