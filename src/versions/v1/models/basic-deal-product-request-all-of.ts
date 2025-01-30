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
* @interface BasicDealProductRequestAllOf
*/
export interface BasicDealProductRequestAllOf {
    /**
    * The ID of the product to use
    * @type {number}
    */
    'product_id'?: number;
    /**
    * The price at which this product will be added to the deal
    * @type {number}
    */
    'item_price'?: number;
    /**
    * Quantity – e.g. how many items of this product will be added to the deal
    * @type {number}
    */
    'quantity'?: number;
    /**
    * The value of the discount. The `discount_type` field can be used to specify whether the value is an amount or a percentage
    * @type {number}
    */
    'discount'?: number;
    /**
    * The type of the discount\'s value
    * @type {string}
    */
    'discount_type'?: BasicDealProductRequestAllOfDiscountTypeConst;
    /**
    * The ID of the product variation to use. When omitted, no variation will be used
    * @type {number}
    */
    'product_variation_id'?: number | null;
    /**
    * A textual comment associated with this product-deal attachment
    * @type {string}
    */
    'comments'?: string;
    /**
    * The tax percentage
    * @type {number}
    */
    'tax'?: number;
    /**
    * The tax option to be applied to the products. When using `inclusive`, the tax percentage will already be included in the price. When using `exclusive`, the tax will not be included in the price. When using `none`, no tax will be added. Use the `tax` field for defining the tax percentage amount. By default, the user setting value for tax options will be used. Changing this in one product affects the rest of the products attached to the deal
    * @type {string}
    */
    'tax_method'?: BasicDealProductRequestAllOfTaxMethodConst;
    /**
    * Whether the product is enabled for a deal or not. This makes it possible to add products to a deal with a specific price and discount criteria, but keep them disabled, which refrains them from being included in the deal value calculation. When omitted, the product will be marked as enabled by default
    * @type {boolean}
    */
    'enabled_flag'?: boolean;
}

                export const BasicDealProductRequestAllOfDiscountTypeConst = {
                        percentage: 'percentage',
                        amount: 'amount'
                } as const;

                export type BasicDealProductRequestAllOfDiscountTypeConst = typeof BasicDealProductRequestAllOfDiscountTypeConst[keyof typeof BasicDealProductRequestAllOfDiscountTypeConst];
                export const BasicDealProductRequestAllOfTaxMethodConst = {
                        exclusive: 'exclusive',
                        inclusive: 'inclusive',
                        none: 'none'
                } as const;

                export type BasicDealProductRequestAllOfTaxMethodConst = typeof BasicDealProductRequestAllOfTaxMethodConst[keyof typeof BasicDealProductRequestAllOfTaxMethodConst];


