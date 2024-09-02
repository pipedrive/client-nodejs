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
import { AddActivityResponseAdditionalData } from './add-activity-response-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { AddActivityResponseRelatedObjects } from './add-activity-response-related-objects';

/**
 * 
 * @export
 * @interface AddActivityResponse
 */
export interface AddActivityResponse {
    /**
     * 
     * @type {boolean}
     * @memberof AddActivityResponse
     */
    'success'?: boolean;
    /**
     * 
     * @type {ActivityResponseObject}
     * @memberof AddActivityResponse
     */
    'data'?: ActivityResponseObject;
    /**
     * 
     * @type {AddActivityResponseAdditionalData}
     * @memberof AddActivityResponse
     */
    'additional_data'?: AddActivityResponseAdditionalData;
    /**
     * 
     * @type {AddActivityResponseRelatedObjects}
     * @memberof AddActivityResponse
     */
    'related_objects'?: AddActivityResponseRelatedObjects;
}

