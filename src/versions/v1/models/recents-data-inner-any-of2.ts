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
import { DealStrict } from './deal-strict';

/**
* 
* @export
* @interface RecentsDataInnerAnyOf2
*/
export interface RecentsDataInnerAnyOf2 {
    /**
    * 
    * @type {string}
    */
    'item'?: RecentsDataInnerAnyOf2ItemConst;
    /**
    * 
    * @type {number}
    */
    'id'?: number;
    /**
    * 
    * @type {DealStrict}
    */
    'data'?: DealStrict;
}

                export const RecentsDataInnerAnyOf2ItemConst = {
                        deal: 'deal'
                } as const;

                export type RecentsDataInnerAnyOf2ItemConst = typeof RecentsDataInnerAnyOf2ItemConst[keyof typeof RecentsDataInnerAnyOf2ItemConst];


