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
import { GetActivitiesResponseRelatedObjects } from './get-activities-response-related-objects';
// May contain unused imports in some cases
// @ts-ignore
import { GetProductResponse } from './get-product-response';
// May contain unused imports in some cases
// @ts-ignore
import { GetProductsResponse1AdditionalData } from './get-products-response1-additional-data';

/**
* 
* @export
* @interface GetProductsResponse1
*/
export interface GetProductsResponse1 {
    /**
    * If the response is successful or not
    * @type {boolean}
    */
    'success': boolean;
    /**
    * Array containing data for all products
    * @type {Array<GetProductResponse>}
    */
    'data': Array<GetProductResponse>;
    /**
    * 
    * @type {GetProductsResponse1AdditionalData}
    */
    'additional_data': GetProductsResponse1AdditionalData;
    /**
    * 
    * @type {GetActivitiesResponseRelatedObjects}
    */
    'related_objects': GetActivitiesResponseRelatedObjects;
}

