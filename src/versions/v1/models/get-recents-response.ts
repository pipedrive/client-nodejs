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
import { GetRecentsResponseAdditionalData } from './get-recents-response-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { RecentsDataInner } from './recents-data-inner';

/**
* 
* @export
* @interface GetRecentsResponse
*/
export interface GetRecentsResponse {
    /**
    * If the response is successful or not
    * @type {boolean}
    */
    'success'?: boolean;
    /**
    * 
    * @type {Array<RecentsDataInner>}
    */
    'data'?: Array<RecentsDataInner>;
    /**
    * 
    * @type {GetRecentsResponseAdditionalData}
    */
    'additional_data'?: GetRecentsResponseAdditionalData;
}

