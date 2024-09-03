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
import { ActivityResponseObject } from './activity-response-object';
// May contain unused imports in some cases
// @ts-ignore
import { GetActivitiesResponseAdditionalData } from './get-activities-response-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { GetActivitiesResponseRelatedObjects } from './get-activities-response-related-objects';

/**
 * 
 * @export
 * @interface GetActivitiesResponse
 */
export interface GetActivitiesResponse {
    /**
     * 
     * @type {boolean}
     * @memberof GetActivitiesResponse
     */
    'success'?: boolean;
    /**
     * 
     * @type {Array<ActivityResponseObject>}
     * @memberof GetActivitiesResponse
     */
    'data'?: Array<ActivityResponseObject>;
    /**
     * 
     * @type {GetActivitiesResponseAdditionalData}
     * @memberof GetActivitiesResponse
     */
    'additional_data'?: GetActivitiesResponseAdditionalData;
    /**
     * 
     * @type {GetActivitiesResponseRelatedObjects}
     * @memberof GetActivitiesResponse
     */
    'related_objects'?: GetActivitiesResponseRelatedObjects;
}
