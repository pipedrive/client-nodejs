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
import { LeadSearchItemItemOrganization } from './lead-search-item-item-organization';
// May contain unused imports in some cases
// @ts-ignore
import { LeadSearchItemItemOwner } from './lead-search-item-item-owner';
// May contain unused imports in some cases
// @ts-ignore
import { LeadSearchItemItemPerson } from './lead-search-item-item-person';

/**
* 
* @export
* @interface LeadSearchItemItem
*/
export interface LeadSearchItemItem {
    /**
    * The ID of the lead
    * @type {string}
    */
    'id'?: string;
    /**
    * The type of the item
    * @type {string}
    */
    'type'?: string;
    /**
    * The title of the lead
    * @type {string}
    */
    'title'?: string;
    /**
    * 
    * @type {LeadSearchItemItemOwner}
    */
    'owner'?: LeadSearchItemItemOwner;
    /**
    * 
    * @type {LeadSearchItemItemPerson}
    */
    'person'?: LeadSearchItemItemPerson;
    /**
    * 
    * @type {LeadSearchItemItemOrganization}
    */
    'organization'?: LeadSearchItemItemOrganization;
    /**
    * 
    * @type {Array<string>}
    */
    'phones'?: Array<string>;
    /**
    * 
    * @type {Array<string>}
    */
    'emails'?: Array<string>;
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
    /**
    * The value of the lead
    * @type {number}
    */
    'value'?: number;
    /**
    * The currency of the lead
    * @type {string}
    */
    'currency'?: string;
    /**
    * The visibility of the lead
    * @type {number}
    */
    'visible_to'?: number;
    /**
    * A flag indicating whether the lead is archived or not
    * @type {boolean}
    */
    'is_archived'?: boolean;
}

