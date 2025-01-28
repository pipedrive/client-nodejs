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
import { GetDealsResponseRelatedObjects } from './get-deals-response-related-objects';
// May contain unused imports in some cases
// @ts-ignore
import { GetFieldsResponseAllOfAdditionalData } from './get-fields-response-all-of-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { Person } from './person';

/**
* 
* @export
* @interface GetDealParticipantsResponse
*/
export interface GetDealParticipantsResponse {
    /**
    * If the request was successful or not
    * @type {boolean}
    */
    'success'?: boolean;
    /**
    * The array of participants
    * @type {Array<Person>}
    */
    'data'?: Array<Person>;
    /**
    * 
    * @type {GetFieldsResponseAllOfAdditionalData}
    */
    'additional_data'?: GetFieldsResponseAllOfAdditionalData;
    /**
    * 
    * @type {GetDealsResponseRelatedObjects}
    */
    'related_objects'?: GetDealsResponseRelatedObjects;
}

