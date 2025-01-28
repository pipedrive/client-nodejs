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
import { GetOrganizationsResponseAllOfRelatedObjects } from './get-organizations-response-all-of-related-objects';
// May contain unused imports in some cases
// @ts-ignore
import { Person } from './person';

/**
* 
* @export
* @interface GetPersonsResponse1AllOf
*/
export interface GetPersonsResponse1AllOf {
    /**
    * The array of persons
    * @type {Array<Person>}
    */
    'data': Array<Person>;
    /**
    * 
    * @type {GetActivitiesResponseAdditionalData}
    */
    'additional_data': GetActivitiesResponseAdditionalData;
    /**
    * 
    * @type {GetOrganizationsResponseAllOfRelatedObjects}
    */
    'related_objects': GetOrganizationsResponseAllOfRelatedObjects;
}

