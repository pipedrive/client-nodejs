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



/**
* 
* @export
* @interface DealProductRequestBody1
*/
export interface DealProductRequestBody1 {
    /**
    * The ID of the product
    * @type {number}
    */
    'product_id'?: number;
    /**
    * The price value of the product
    * @type {number}
    */
    'item_price'?: number;
    /**
    * The quantity of the product
    * @type {number}
    */
    'quantity'?: number;
    /**
    * The product tax
    * @type {number}
    */
    'tax'?: number;
    /**
    * The comments of the product
    * @type {string}
    */
    'comments'?: string;
    /**
    * The value of the discount. The `discount_type` field can be used to specify whether the value is an amount or a percentage
    * @type {number}
    */
    'discount'?: number;
    /**
    * Whether this product is enabled for the deal  Not possible to disable the product if the deal has installments associated and the product is the last one enabled  Not possible to enable the product if the deal has installments associated and the product is recurring 
    * @type {boolean}
    */
    'is_enabled'?: boolean;
    /**
    * The tax option to be applied to the products. When using `inclusive`, the tax percentage will already be included in the price. When using `exclusive`, the tax will not be included in the price. When using `none`, no tax will be added. Use the `tax` field for defining the tax percentage amount. By default, the user setting value for tax options will be used. Changing this in one product affects the rest of the products attached to the deal
    * @type {string}
    */
    'tax_method'?: DealProductRequestBody1TaxMethodConst;
    /**
    * The value of the discount. The `discount_type` field can be used to specify whether the value is an amount or a percentage
    * @type {string}
    */
    'discount_type'?: DealProductRequestBody1DiscountTypeConst;
    /**
    * The ID of the product variation
    * @type {number}
    */
    'product_variation_id'?: number | null;
}

                export const DealProductRequestBody1TaxMethodConst = {
                        exclusive: 'exclusive',
                        inclusive: 'inclusive',
                        none: 'none'
                } as const;

                export type DealProductRequestBody1TaxMethodConst = typeof DealProductRequestBody1TaxMethodConst[keyof typeof DealProductRequestBody1TaxMethodConst];
                export const DealProductRequestBody1DiscountTypeConst = {
                        percentage: 'percentage',
                        amount: 'amount'
                } as const;

                export type DealProductRequestBody1DiscountTypeConst = typeof DealProductRequestBody1DiscountTypeConst[keyof typeof DealProductRequestBody1DiscountTypeConst];


