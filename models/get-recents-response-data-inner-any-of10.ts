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
import { GetAssociatedDealsResponseAllOfRelatedObjectsStage } from './get-associated-deals-response-all-of-related-objects-stage';

/**
 * 
 * @export
 * @interface GetRecentsResponseDataInnerAnyOf10
 */
export interface GetRecentsResponseDataInnerAnyOf10 {
    /**
     * 
     * @type {string}
     * @memberof GetRecentsResponseDataInnerAnyOf10
     */
    'item'?: GetRecentsResponseDataInnerAnyOf10ItemConst;
    /**
     * 
     * @type {number}
     * @memberof GetRecentsResponseDataInnerAnyOf10
     */
    'id'?: number;
    /**
     * 
     * @type {GetAssociatedDealsResponseAllOfRelatedObjectsStage}
     * @memberof GetRecentsResponseDataInnerAnyOf10
     */
    'data'?: GetAssociatedDealsResponseAllOfRelatedObjectsStage;
}

export const GetRecentsResponseDataInnerAnyOf10ItemConst = {
    stage: 'stage'
} as const;

export type GetRecentsResponseDataInnerAnyOf10ItemConst = typeof GetRecentsResponseDataInnerAnyOf10ItemConst[keyof typeof GetRecentsResponseDataInnerAnyOf10ItemConst];


