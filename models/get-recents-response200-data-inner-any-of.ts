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
import { ActivityResponseObject } from './activity-response-object';

/**
 * 
 * @export
 * @interface GetRecentsResponse200DataInnerAnyOf
 */
export interface GetRecentsResponse200DataInnerAnyOf {
    /**
     * 
     * @type {string}
     * @memberof GetRecentsResponse200DataInnerAnyOf
     */
    'item'?: GetRecentsResponse200DataInnerAnyOfItemConst;
    /**
     * 
     * @type {number}
     * @memberof GetRecentsResponse200DataInnerAnyOf
     */
    'id'?: number;
    /**
     * 
     * @type {ActivityResponseObject}
     * @memberof GetRecentsResponse200DataInnerAnyOf
     */
    'data'?: ActivityResponseObject;
}

export const GetRecentsResponse200DataInnerAnyOfItemConst = {
    activity: 'activity'
} as const;

export type GetRecentsResponse200DataInnerAnyOfItemConst = typeof GetRecentsResponse200DataInnerAnyOfItemConst[keyof typeof GetRecentsResponse200DataInnerAnyOfItemConst];


