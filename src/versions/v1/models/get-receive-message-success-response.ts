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
import { ReceiveMessageRequest } from './receive-message-request';

/**
* 
* @export
* @interface GetReceiveMessageSuccessResponse
*/
export interface GetReceiveMessageSuccessResponse {
    /**
    * If the request was successful or not
    * @type {boolean}
    */
    'success'?: boolean;
    /**
    * 
    * @type {ReceiveMessageRequest}
    */
    'data'?: ReceiveMessageRequest;
}

