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
import { BaseUser } from './base-user';

/**
 * 
 * @export
 * @interface RecentsDataInnerAnyOf10
 */
export interface RecentsDataInnerAnyOf10 {
    /**
     * 
     * @type {string}
     * @memberof RecentsDataInnerAnyOf10
     */
    'item'?: RecentsDataInnerAnyOf10ItemConst;
    /**
     * 
     * @type {number}
     * @memberof RecentsDataInnerAnyOf10
     */
    'id'?: number;
    /**
     * 
     * @type {BaseUser}
     * @memberof RecentsDataInnerAnyOf10
     */
    'data'?: BaseUser;
}

export const RecentsDataInnerAnyOf10ItemConst = {
    user: 'user'
} as const;

export type RecentsDataInnerAnyOf10ItemConst = typeof RecentsDataInnerAnyOf10ItemConst[keyof typeof RecentsDataInnerAnyOf10ItemConst];


