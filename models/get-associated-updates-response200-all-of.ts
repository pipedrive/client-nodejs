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
import { FieldsResponse200AllOfAdditionalData } from './fields-response200-all-of-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { GetAssociatedUpdatesResponse200AllOfDataInner } from './get-associated-updates-response200-all-of-data-inner';
// May contain unused imports in some cases
// @ts-ignore
import { GetAssociatedUpdatesResponse200AllOfRelatedObjects } from './get-associated-updates-response200-all-of-related-objects';

/**
 * 
 * @export
 * @interface GetAssociatedUpdatesResponse200AllOf
 */
export interface GetAssociatedUpdatesResponse200AllOf {
    /**
     * 
     * @type {Array<GetAssociatedUpdatesResponse200AllOfDataInner>}
     * @memberof GetAssociatedUpdatesResponse200AllOf
     */
    'data'?: Array<GetAssociatedUpdatesResponse200AllOfDataInner>;
    /**
     * 
     * @type {FieldsResponse200AllOfAdditionalData}
     * @memberof GetAssociatedUpdatesResponse200AllOf
     */
    'additional_data'?: FieldsResponse200AllOfAdditionalData;
    /**
     * 
     * @type {GetAssociatedUpdatesResponse200AllOfRelatedObjects}
     * @memberof GetAssociatedUpdatesResponse200AllOf
     */
    'related_objects'?: GetAssociatedUpdatesResponse200AllOfRelatedObjects;
}

