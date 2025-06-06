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
import { Deal } from './deal';
// May contain unused imports in some cases
// @ts-ignore
import { GetDealsResponseRelatedObjects } from './get-deals-response-related-objects';
// May contain unused imports in some cases
// @ts-ignore
import { GetFieldsResponseAllOfAdditionalData } from './get-fields-response-all-of-additional-data';

/**
* 
* @export
* @interface GetDealsResponse
*/
export interface GetDealsResponse {
    /**
    * If the response is successful or not
    * @type {boolean}
    */
    'success'?: boolean;
    /**
    * The array of deals
    * @type {Array<Deal>}
    */
    'data'?: Array<Deal>;
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

