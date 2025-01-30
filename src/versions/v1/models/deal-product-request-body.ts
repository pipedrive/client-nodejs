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
* @interface DealProductRequestBody
*/
export interface DealProductRequestBody {
    /**
    * The ID of the product to use
    * @type {number}
    */
    'product_id': number;
    /**
    * The price at which this product will be added to the deal
    * @type {number}
    */
    'item_price': number;
    /**
    * How many items of this product will be added to the deal
    * @type {number}
    */
    'quantity': number;
    /**
    * The value of the discount. The `discount_type` field can be used to specify whether the value is an amount or a percentage
    * @type {number}
    */
    'discount'?: number;
    /**
    * The type of the discount\'s value
    * @type {string}
    */
    'discount_type'?: DealProductRequestBodyDiscountTypeConst;
    /**
    * The ID of the product variation to use. When omitted, no variation will be used
    * @type {number}
    */
    'product_variation_id'?: number;
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
    * The tax option to be applied to the products. When using `inclusive`, the tax percentage will already be included in the price. When using `exclusive`, the tax will not be included in the price. When using `none`, no tax will be added. Use the `tax` field for defining the tax percentage amount
    * @type {string}
    */
    'tax_method'?: DealProductRequestBodyTaxMethodConst;
    /**
    * Whether the product is enabled for a deal or not  This makes it possible to add products to a deal with a specific price and discount criteria, but keep them disabled, which refrains them from being included in the deal value calculation. When omitted, the product will be marked as enabled by default  Not possible to disable the product if the deal has installments associated and the product is the last one enabled  Not possible to enable the product if the deal has installments associated and the product is recurring 
    * @type {boolean}
    */
    'enabled_flag'?: boolean;
}

                export const DealProductRequestBodyDiscountTypeConst = {
                        percentage: 'percentage',
                        amount: 'amount'
                } as const;

                export type DealProductRequestBodyDiscountTypeConst = typeof DealProductRequestBodyDiscountTypeConst[keyof typeof DealProductRequestBodyDiscountTypeConst];
                export const DealProductRequestBodyTaxMethodConst = {
                        exclusive: 'exclusive',
                        inclusive: 'inclusive',
                        none: 'none'
                } as const;

                export type DealProductRequestBodyTaxMethodConst = typeof DealProductRequestBodyTaxMethodConst[keyof typeof DealProductRequestBodyTaxMethodConst];


