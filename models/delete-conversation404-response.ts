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
import { DeleteConversation404ResponseAdditionalData } from './delete-conversation404-response-additional-data';

/**
 * 
 * @export
 * @interface DeleteConversation404Response
 */
export interface DeleteConversation404Response {
    /**
     * 
     * @type {boolean}
     * @memberof DeleteConversation404Response
     */
    'success'?: boolean;
    /**
     * The error description
     * @type {string}
     * @memberof DeleteConversation404Response
     */
    'error'?: string;
    /**
     * 
     * @type {string}
     * @memberof DeleteConversation404Response
     */
    'error_info'?: string;
    /**
     * 
     * @type {DeleteConversation404ResponseAdditionalData}
     * @memberof DeleteConversation404Response
     */
    'additional_data'?: DeleteConversation404ResponseAdditionalData;
}

