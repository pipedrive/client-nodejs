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
import { AddChannel403ResponseAdditionalData } from './add-channel403-response-additional-data';

/**
 * 
 * @export
 * @interface AddChannel403Response
 */
export interface AddChannel403Response {
    /**
     * 
     * @type {boolean}
     * @memberof AddChannel403Response
     */
    'success'?: boolean;
    /**
     * The error description
     * @type {string}
     * @memberof AddChannel403Response
     */
    'error'?: string;
    /**
     * 
     * @type {string}
     * @memberof AddChannel403Response
     */
    'error_info'?: string;
    /**
     * 
     * @type {AddChannel403ResponseAdditionalData}
     * @memberof AddChannel403Response
     */
    'additional_data'?: AddChannel403ResponseAdditionalData;
}

