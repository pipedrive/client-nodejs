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
import { ActivityCollectionResponseObject } from './activity-collection-response-object';
// May contain unused imports in some cases
// @ts-ignore
import { GetActivitiesCollectionResponse200AdditionalData } from './get-activities-collection-response200-additional-data';

/**
 * 
 * @export
 * @interface GetActivitiesCollectionResponse200
 */
export interface GetActivitiesCollectionResponse200 {
    /**
     * 
     * @type {boolean}
     * @memberof GetActivitiesCollectionResponse200
     */
    'success'?: boolean;
    /**
     * 
     * @type {Array<ActivityCollectionResponseObject>}
     * @memberof GetActivitiesCollectionResponse200
     */
    'data'?: Array<ActivityCollectionResponseObject>;
    /**
     * 
     * @type {GetActivitiesCollectionResponse200AdditionalData}
     * @memberof GetActivitiesCollectionResponse200
     */
    'additional_data'?: GetActivitiesCollectionResponse200AdditionalData;
}

