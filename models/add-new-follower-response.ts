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
import { AddNewFollowerResponseData } from './add-new-follower-response-data';

/**
 * 
 * @export
 * @interface AddNewFollowerResponse
 */
export interface AddNewFollowerResponse {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof AddNewFollowerResponse
     */
    'success'?: boolean;
    /**
     * 
     * @type {AddNewFollowerResponseData}
     * @memberof AddNewFollowerResponse
     */
    'data'?: AddNewFollowerResponseData;
}

