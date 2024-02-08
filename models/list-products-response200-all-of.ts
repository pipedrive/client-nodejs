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
import { ListProductsResponse200AllOfAdditionalData } from './list-products-response200-all-of-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { ListProductsResponse200AllOfDataInner } from './list-products-response200-all-of-data-inner';
// May contain unused imports in some cases
// @ts-ignore
import { ListProductsResponse200AllOfRelatedObjects } from './list-products-response200-all-of-related-objects';

/**
 * 
 * @export
 * @interface ListProductsResponse200AllOf
 */
export interface ListProductsResponse200AllOf {
    /**
     * The array of products
     * @type {Array<ListProductsResponse200AllOfDataInner>}
     * @memberof ListProductsResponse200AllOf
     */
    'data'?: Array<ListProductsResponse200AllOfDataInner>;
    /**
     * 
     * @type {ListProductsResponse200AllOfAdditionalData}
     * @memberof ListProductsResponse200AllOf
     */
    'additional_data'?: ListProductsResponse200AllOfAdditionalData;
    /**
     * 
     * @type {ListProductsResponse200AllOfRelatedObjects}
     * @memberof ListProductsResponse200AllOf
     */
    'related_objects'?: ListProductsResponse200AllOfRelatedObjects;
}

