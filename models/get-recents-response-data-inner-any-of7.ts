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
import { BaseOrganizationItem } from './base-organization-item';

/**
 * 
 * @export
 * @interface GetRecentsResponseDataInnerAnyOf7
 */
export interface GetRecentsResponseDataInnerAnyOf7 {
    /**
     * 
     * @type {string}
     * @memberof GetRecentsResponseDataInnerAnyOf7
     */
    'item'?: GetRecentsResponseDataInnerAnyOf7ItemConst;
    /**
     * 
     * @type {number}
     * @memberof GetRecentsResponseDataInnerAnyOf7
     */
    'id'?: number;
    /**
     * 
     * @type {BaseOrganizationItem}
     * @memberof GetRecentsResponseDataInnerAnyOf7
     */
    'data'?: BaseOrganizationItem;
}

export const GetRecentsResponseDataInnerAnyOf7ItemConst = {
    organization: 'organization'
} as const;

export type GetRecentsResponseDataInnerAnyOf7ItemConst = typeof GetRecentsResponseDataInnerAnyOf7ItemConst[keyof typeof GetRecentsResponseDataInnerAnyOf7ItemConst];


