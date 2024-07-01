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
 * @interface ProductRequest
 */
export interface ProductRequest {
    /**
     * The product code
     * @type {string}
     * @memberof ProductRequest
     */
    'code'?: string;
    /**
     * The unit in which this product is sold
     * @type {string}
     * @memberof ProductRequest
     */
    'unit'?: string;
    /**
     * The tax percentage
     * @type {number}
     * @memberof ProductRequest
     */
    'tax'?: number;
    /**
     * Whether this product will be made active or not
     * @type {boolean}
     * @memberof ProductRequest
     */
    'active_flag'?: boolean;
    /**
     * Whether this product can be selected in deals or not
     * @type {boolean}
     * @memberof ProductRequest
     */
    'selectable'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ProductRequest
     */
    'visible_to'?: ProductRequestVisibleToConst;
    /**
     * The ID of the user who will be marked as the owner of this product. When omitted, the authorized user ID will be used
     * @type {number}
     * @memberof ProductRequest
     */
    'owner_id'?: number;
    /**
     * An array of objects, each containing: `currency` (string), `price` (number), `cost` (number, optional), `overhead_cost` (number, optional). Note that there can only be one price per product per currency. When `prices` is omitted altogether, a default price of 0 and a default currency based on the company\'s currency will be assigned.
     * @type {Array<object>}
     * @memberof ProductRequest
     */
    'prices'?: Array<object>;
}

export const ProductRequestVisibleToConst = {
    _1: '1',
    _3: '3',
    _5: '5',
    _7: '7'
} as const;

export type ProductRequestVisibleToConst = typeof ProductRequestVisibleToConst[keyof typeof ProductRequestVisibleToConst];


