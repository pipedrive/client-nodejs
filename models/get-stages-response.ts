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
import { GetStagesResponseDataInner } from './get-stages-response-data-inner';

/**
 * 
 * @export
 * @interface GetStagesResponse
 */
export interface GetStagesResponse {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof GetStagesResponse
     */
    'success'?: boolean;
    /**
     * The array of stages
     * @type {Array<GetStagesResponseDataInner>}
     * @memberof GetStagesResponse
     */
    'data'?: Array<GetStagesResponseDataInner>;
}

