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
import { DeleteOrganizationFollowerResponseData } from './delete-organization-follower-response-data';

/**
 * 
 * @export
 * @interface DeleteOrganizationFollowerResponse
 */
export interface DeleteOrganizationFollowerResponse {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof DeleteOrganizationFollowerResponse
     */
    'success': boolean;
    /**
     * 
     * @type {DeleteOrganizationFollowerResponseData}
     * @memberof DeleteOrganizationFollowerResponse
     */
    'data': DeleteOrganizationFollowerResponseData;
}

