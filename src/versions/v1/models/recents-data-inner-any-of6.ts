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
import { MergePersonItem } from './merge-person-item';

/**
* 
* @export
* @interface RecentsDataInnerAnyOf6
*/
export interface RecentsDataInnerAnyOf6 {
    /**
    * 
    * @type {string}
    */
    'item'?: RecentsDataInnerAnyOf6ItemConst;
    /**
    * 
    * @type {number}
    */
    'id'?: number;
    /**
    * 
    * @type {MergePersonItem}
    */
    'data'?: MergePersonItem;
}

                export const RecentsDataInnerAnyOf6ItemConst = {
                        person: 'person'
                } as const;

                export type RecentsDataInnerAnyOf6ItemConst = typeof RecentsDataInnerAnyOf6ItemConst[keyof typeof RecentsDataInnerAnyOf6ItemConst];


