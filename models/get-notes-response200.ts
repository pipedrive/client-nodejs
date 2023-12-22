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
import { GetNotesResponse200AdditionalData } from './get-notes-response200-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { GetNotesResponse200DataInner } from './get-notes-response200-data-inner';

/**
 * 
 * @export
 * @interface GetNotesResponse200
 */
export interface GetNotesResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof GetNotesResponse200
     */
    'success'?: boolean;
    /**
     * The array of notes
     * @type {Array<GetNotesResponse200DataInner>}
     * @memberof GetNotesResponse200
     */
    'data'?: Array<GetNotesResponse200DataInner>;
    /**
     * 
     * @type {GetNotesResponse200AdditionalData}
     * @memberof GetNotesResponse200
     */
    'additional_data'?: GetNotesResponse200AdditionalData;
}
