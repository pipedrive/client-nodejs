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
import { GetNotesResponseDataInner } from './get-notes-response-data-inner';

/**
 * 
 * @export
 * @interface GetRecentsResponseDataInnerAnyOf5
 */
export interface GetRecentsResponseDataInnerAnyOf5 {
    /**
     * 
     * @type {string}
     * @memberof GetRecentsResponseDataInnerAnyOf5
     */
    'item'?: GetRecentsResponseDataInnerAnyOf5ItemConst;
    /**
     * 
     * @type {number}
     * @memberof GetRecentsResponseDataInnerAnyOf5
     */
    'id'?: number;
    /**
     * 
     * @type {GetNotesResponseDataInner}
     * @memberof GetRecentsResponseDataInnerAnyOf5
     */
    'data'?: GetNotesResponseDataInner;
}

export const GetRecentsResponseDataInnerAnyOf5ItemConst = {
    note: 'note'
} as const;

export type GetRecentsResponseDataInnerAnyOf5ItemConst = typeof GetRecentsResponseDataInnerAnyOf5ItemConst[keyof typeof GetRecentsResponseDataInnerAnyOf5ItemConst];

