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
import { GetActivitiesResponse200AdditionalData } from './get-activities-response200-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { GetAssociatedFollowersResponse2001DataInner } from './get-associated-followers-response2001-data-inner';

/**
 * 
 * @export
 * @interface GetAssociatedFollowersResponse2001
 */
export interface GetAssociatedFollowersResponse2001 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof GetAssociatedFollowersResponse2001
     */
    'success'?: boolean;
    /**
     * The array of followers
     * @type {Array<GetAssociatedFollowersResponse2001DataInner>}
     * @memberof GetAssociatedFollowersResponse2001
     */
    'data'?: Array<GetAssociatedFollowersResponse2001DataInner>;
    /**
     * 
     * @type {GetActivitiesResponse200AdditionalData}
     * @memberof GetAssociatedFollowersResponse2001
     */
    'additional_data'?: GetActivitiesResponse200AdditionalData;
}
