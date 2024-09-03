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



/**
 * 
 * @export
 * @interface GetRecentsResponseDataInnerAnyOf9Data
 */
export interface GetRecentsResponseDataInnerAnyOf9Data {
    /**
     * The ID of the product
     * @type {number}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'id'?: number;
    /**
     * The name of the product
     * @type {string}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'name'?: string;
    /**
     * The product code
     * @type {string}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'code'?: string;
    /**
     * The description of the product
     * @type {string}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'description'?: string;
    /**
     * The unit in which this product is sold
     * @type {string}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'unit'?: string;
    /**
     * The tax percentage
     * @type {number}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'tax'?: number;
    /**
     * The category of the product
     * @type {string}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'category'?: string;
    /**
     * Whether this product will be made active or not
     * @type {boolean}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'active_flag'?: boolean;
    /**
     * Whether this product can be selected in deals or not
     * @type {boolean}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'selectable'?: boolean;
    /**
     * The first letter of the product name
     * @type {string}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'first_char'?: string;
    /**
     * The visibility of the product. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user.
     * @type {number}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'visible_to'?: number;
    /**
     * The ID of the user who will be marked as the owner of this product. When omitted, authorized user ID will be used.
     * @type {number}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'owner_id'?: number;
    /**
     * The count of files
     * @type {number}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'files_count'?: number;
    /**
     * The date and time when the product was added to the deal
     * @type {string}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'add_time'?: string;
    /**
     * The date and time when the product was updated to the deal
     * @type {string}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'update_time'?: string;
    /**
     * Array of objects, each containing: `currency` (string), `price` (number), `cost` (number, optional), `overhead_cost` (number, optional). Note that there can only be one price per product per currency. When `prices` is omitted altogether, a default price of 0 and a default currency based on the company\'s currency will be assigned.
     * @type {Array<object>}
     * @memberof GetRecentsResponseDataInnerAnyOf9Data
     */
    'prices'?: Array<object>;
}
