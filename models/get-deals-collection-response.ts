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
import { DealCollectionResponseObject } from './deal-collection-response-object';
// May contain unused imports in some cases
// @ts-ignore
import { GetActivitiesCollectionResponseAdditionalData } from './get-activities-collection-response-additional-data';

/**
 * 
 * @export
 * @interface GetDealsCollectionResponse
 */
export interface GetDealsCollectionResponse {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof GetDealsCollectionResponse
     */
    'success'?: boolean;
    /**
     * 
     * @type {Array<DealCollectionResponseObject>}
     * @memberof GetDealsCollectionResponse
     */
    'data'?: Array<DealCollectionResponseObject>;
    /**
     * 
     * @type {GetActivitiesCollectionResponseAdditionalData}
     * @memberof GetDealsCollectionResponse
     */
    'additional_data'?: GetActivitiesCollectionResponseAdditionalData;
}

