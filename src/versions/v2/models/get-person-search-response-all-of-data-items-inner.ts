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
import { GetPersonSearchResponseAllOfDataItemsInnerItem } from './get-person-search-response-all-of-data-items-inner-item';

/**
* 
* @export
* @interface GetPersonSearchResponseAllOfDataItemsInner
*/
export interface GetPersonSearchResponseAllOfDataItemsInner {
    /**
    * Search result relevancy
    * @type {number}
    */
    'result_score'?: number;
    /**
    * 
    * @type {GetPersonSearchResponseAllOfDataItemsInnerItem}
    */
    'item'?: GetPersonSearchResponseAllOfDataItemsInnerItem;
}

