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
import { GetDealSearchResponseAllOfDataItemsInnerItemOrganization } from './get-deal-search-response-all-of-data-items-inner-item-organization';
// May contain unused imports in some cases
// @ts-ignore
import { GetDealSearchResponseAllOfDataItemsInnerItemOwner } from './get-deal-search-response-all-of-data-items-inner-item-owner';
// May contain unused imports in some cases
// @ts-ignore
import { GetDealSearchResponseAllOfDataItemsInnerItemPerson } from './get-deal-search-response-all-of-data-items-inner-item-person';
// May contain unused imports in some cases
// @ts-ignore
import { GetDealSearchResponseAllOfDataItemsInnerItemStage } from './get-deal-search-response-all-of-data-items-inner-item-stage';

/**
* 
* @export
* @interface GetDealSearchResponseAllOfDataItemsInnerItem
*/
export interface GetDealSearchResponseAllOfDataItemsInnerItem {
    /**
    * The ID of the deal
    * @type {number}
    */
    'id'?: number;
    /**
    * The type of the item
    * @type {string}
    */
    'type'?: string;
    /**
    * The title of the deal
    * @type {string}
    */
    'title'?: string;
    /**
    * The value of the deal
    * @type {number}
    */
    'value'?: number;
    /**
    * The currency of the deal
    * @type {string}
    */
    'currency'?: string;
    /**
    * The status of the deal
    * @type {string}
    */
    'status'?: string;
    /**
    * The visibility of the deal
    * @type {number}
    */
    'visible_to'?: number;
    /**
    * 
    * @type {GetDealSearchResponseAllOfDataItemsInnerItemOwner}
    */
    'owner'?: GetDealSearchResponseAllOfDataItemsInnerItemOwner;
    /**
    * 
    * @type {GetDealSearchResponseAllOfDataItemsInnerItemStage}
    */
    'stage'?: GetDealSearchResponseAllOfDataItemsInnerItemStage;
    /**
    * 
    * @type {GetDealSearchResponseAllOfDataItemsInnerItemPerson}
    */
    'person'?: GetDealSearchResponseAllOfDataItemsInnerItemPerson | null;
    /**
    * 
    * @type {GetDealSearchResponseAllOfDataItemsInnerItemOrganization}
    */
    'organization'?: GetDealSearchResponseAllOfDataItemsInnerItemOrganization | null;
    /**
    * Custom fields
    * @type {Array<string>}
    */
    'custom_fields'?: Array<string>;
    /**
    * An array of notes
    * @type {Array<string>}
    */
    'notes'?: Array<string>;
}

