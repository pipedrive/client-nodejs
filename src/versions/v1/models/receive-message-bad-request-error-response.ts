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
import { ReceiveMessageBadRequestErrorResponseAdditionalData } from './receive-message-bad-request-error-response-additional-data';

/**
* 
* @export
* @interface ReceiveMessageBadRequestErrorResponse
*/
export interface ReceiveMessageBadRequestErrorResponse {
    /**
    * 
    * @type {boolean}
    */
    'success'?: boolean;
    /**
    * The error description
    * @type {string}
    */
    'error'?: string;
    /**
    * 
    * @type {string}
    */
    'error_info'?: string;
    /**
    * 
    * @type {ReceiveMessageBadRequestErrorResponseAdditionalData}
    */
    'additional_data'?: ReceiveMessageBadRequestErrorResponseAdditionalData;
}

