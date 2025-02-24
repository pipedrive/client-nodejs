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
import { GetProductsResponseAllOfAdditionalData } from './get-products-response-all-of-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { GetProductsResponseAllOfRelatedObjects } from './get-products-response-all-of-related-objects';
// May contain unused imports in some cases
// @ts-ignore
import { ProductListItem } from './product-list-item';

/**
* 
* @export
* @interface GetProductsResponseAllOf
*/
export interface GetProductsResponseAllOf {
    /**
    * The array of products
    * @type {Array<ProductListItem>}
    */
    'data': Array<ProductListItem>;
    /**
    * 
    * @type {GetProductsResponseAllOfAdditionalData}
    */
    'additional_data': GetProductsResponseAllOfAdditionalData;
    /**
    * 
    * @type {GetProductsResponseAllOfRelatedObjects}
    */
    'related_objects': GetProductsResponseAllOfRelatedObjects;
}

