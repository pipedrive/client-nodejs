/* tslint:disable */
/* eslint-disable */
/**
 * Pipedrive API v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { GetActivitiesResponseAllOfAdditionalData } from './get-activities-response-all-of-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { StageItem } from './stage-item';

/**
* 
* @export
* @interface GetStagesResponse
*/
export interface GetStagesResponse {
    /**
    * If the response is successful or not
    * @type {boolean}
    */
    'success'?: boolean;
    /**
    * The array of stages
    * @type {Array<StageItem>}
    */
    'data'?: Array<StageItem>;
    /**
    * 
    * @type {GetActivitiesResponseAllOfAdditionalData}
    */
    'additional_data'?: GetActivitiesResponseAllOfAdditionalData;
}

