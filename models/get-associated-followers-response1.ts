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
import { GetActivitiesResponseAdditionalData } from './get-activities-response-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { GetAssociatedFollowersResponse1DataInner } from './get-associated-followers-response1-data-inner';

/**
 * 
 * @export
 * @interface GetAssociatedFollowersResponse1
 */
export interface GetAssociatedFollowersResponse1 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof GetAssociatedFollowersResponse1
     */
    'success': boolean;
    /**
     * The array of followers
     * @type {Array<GetAssociatedFollowersResponse1DataInner>}
     * @memberof GetAssociatedFollowersResponse1
     */
    'data': Array<GetAssociatedFollowersResponse1DataInner>;
    /**
     * 
     * @type {GetActivitiesResponseAdditionalData}
     * @memberof GetAssociatedFollowersResponse1
     */
    'additional_data': GetActivitiesResponseAdditionalData;
}

