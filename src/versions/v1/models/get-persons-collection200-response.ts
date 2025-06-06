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
import { GetActivitiesCollectionResponseAdditionalData } from './get-activities-collection-response-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { PersonsCollectionResponseObject } from './persons-collection-response-object';

/**
* 
* @export
* @interface GetPersonsCollection200Response
*/
export interface GetPersonsCollection200Response {
    /**
    * 
    * @type {boolean}
    */
    'success'?: boolean;
    /**
    * 
    * @type {Array<PersonsCollectionResponseObject>}
    */
    'data'?: Array<PersonsCollectionResponseObject>;
    /**
    * 
    * @type {GetActivitiesCollectionResponseAdditionalData}
    */
    'additional_data'?: GetActivitiesCollectionResponseAdditionalData;
}

