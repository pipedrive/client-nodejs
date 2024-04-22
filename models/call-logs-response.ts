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
import { CallLogsResponseAdditionalData } from './call-logs-response-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { ResponseCallLogObject } from './response-call-log-object';

/**
 * 
 * @export
 * @interface CallLogsResponse
 */
export interface CallLogsResponse {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof CallLogsResponse
     */
    'success'?: boolean;
    /**
     * 
     * @type {Array<ResponseCallLogObject>}
     * @memberof CallLogsResponse
     */
    'data'?: Array<ResponseCallLogObject>;
    /**
     * 
     * @type {CallLogsResponseAdditionalData}
     * @memberof CallLogsResponse
     */
    'additional_data'?: CallLogsResponseAdditionalData;
}

