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
import { GetFiltersResponseAllOfDataInner } from './get-filters-response-all-of-data-inner';

/**
* 
* @export
* @interface RecentsDataInnerAnyOf4
*/
export interface RecentsDataInnerAnyOf4 {
    /**
    * 
    * @type {string}
    */
    'item'?: RecentsDataInnerAnyOf4ItemConst;
    /**
    * 
    * @type {number}
    */
    'id'?: number;
    /**
    * 
    * @type {GetFiltersResponseAllOfDataInner}
    */
    'data'?: GetFiltersResponseAllOfDataInner;
}

                export const RecentsDataInnerAnyOf4ItemConst = {
                        filter: 'filter'
                } as const;

                export type RecentsDataInnerAnyOf4ItemConst = typeof RecentsDataInnerAnyOf4ItemConst[keyof typeof RecentsDataInnerAnyOf4ItemConst];


