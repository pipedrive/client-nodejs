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
import { GetLeadLabelsResponseDataInner } from './get-lead-labels-response-data-inner';

/**
 * 
 * @export
 * @interface GetLeadLabelsResponse
 */
export interface GetLeadLabelsResponse {
    /**
     * 
     * @type {boolean}
     * @memberof GetLeadLabelsResponse
     */
    'success'?: boolean;
    /**
     * 
     * @type {Array<GetLeadLabelsResponseDataInner>}
     * @memberof GetLeadLabelsResponse
     */
    'data'?: Array<GetLeadLabelsResponseDataInner>;
}

