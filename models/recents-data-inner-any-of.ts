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
import { Activity } from './activity';

/**
 * 
 * @export
 * @interface RecentsDataInnerAnyOf
 */
export interface RecentsDataInnerAnyOf {
    /**
     * 
     * @type {string}
     * @memberof RecentsDataInnerAnyOf
     */
    'item'?: RecentsDataInnerAnyOfItemConst;
    /**
     * 
     * @type {number}
     * @memberof RecentsDataInnerAnyOf
     */
    'id'?: number;
    /**
     * 
     * @type {Activity}
     * @memberof RecentsDataInnerAnyOf
     */
    'data'?: Activity;
}

export const RecentsDataInnerAnyOfItemConst = {
    activity: 'activity'
} as const;

export type RecentsDataInnerAnyOfItemConst = typeof RecentsDataInnerAnyOfItemConst[keyof typeof RecentsDataInnerAnyOfItemConst];


