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
import { GetRecentsResponse200DataInnerAnyOf9Data } from './get-recents-response200-data-inner-any-of9-data';

/**
 * 
 * @export
 * @interface GetRecentsResponse200DataInnerAnyOf9
 */
export interface GetRecentsResponse200DataInnerAnyOf9 {
    /**
     * 
     * @type {string}
     * @memberof GetRecentsResponse200DataInnerAnyOf9
     */
    'item'?: GetRecentsResponse200DataInnerAnyOf9ItemConst;
    /**
     * 
     * @type {number}
     * @memberof GetRecentsResponse200DataInnerAnyOf9
     */
    'id'?: number;
    /**
     * 
     * @type {GetRecentsResponse200DataInnerAnyOf9Data}
     * @memberof GetRecentsResponse200DataInnerAnyOf9
     */
    'data'?: GetRecentsResponse200DataInnerAnyOf9Data;
}

export const GetRecentsResponse200DataInnerAnyOf9ItemConst = {
    product: 'product'
} as const;

export type GetRecentsResponse200DataInnerAnyOf9ItemConst = typeof GetRecentsResponse200DataInnerAnyOf9ItemConst[keyof typeof GetRecentsResponse200DataInnerAnyOf9ItemConst];

