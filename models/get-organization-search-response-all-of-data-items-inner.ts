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
import { GetOrganizationSearchResponseAllOfDataItemsInnerItem } from './get-organization-search-response-all-of-data-items-inner-item';

/**
 * 
 * @export
 * @interface GetOrganizationSearchResponseAllOfDataItemsInner
 */
export interface GetOrganizationSearchResponseAllOfDataItemsInner {
    /**
     * Search result relevancy
     * @type {number}
     * @memberof GetOrganizationSearchResponseAllOfDataItemsInner
     */
    'result_score'?: number;
    /**
     * 
     * @type {GetOrganizationSearchResponseAllOfDataItemsInnerItem}
     * @memberof GetOrganizationSearchResponseAllOfDataItemsInner
     */
    'item'?: GetOrganizationSearchResponseAllOfDataItemsInnerItem;
}

