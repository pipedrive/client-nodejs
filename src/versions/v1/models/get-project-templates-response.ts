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
import { TemplateResponseObject } from './template-response-object';

/**
* 
* @export
* @interface GetProjectTemplatesResponse
*/
export interface GetProjectTemplatesResponse {
    /**
    * 
    * @type {boolean}
    */
    'success'?: boolean;
    /**
    * 
    * @type {Array<TemplateResponseObject>}
    */
    'data'?: Array<TemplateResponseObject>;
    /**
    * 
    * @type {GetActivitiesCollectionResponseAdditionalData}
    */
    'additional_data'?: GetActivitiesCollectionResponseAdditionalData;
}

