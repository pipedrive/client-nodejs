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
import { AddDealFollowerResponseData } from './add-deal-follower-response-data';

/**
 * 
 * @export
 * @interface AddDealFollowerResponse
 */
export interface AddDealFollowerResponse {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof AddDealFollowerResponse
     */
    'success'?: boolean;
    /**
     * 
     * @type {AddDealFollowerResponseData}
     * @memberof AddDealFollowerResponse
     */
    'data'?: AddDealFollowerResponseData;
}
