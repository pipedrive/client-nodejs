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
* @interface GetAdditionalDiscountsResponseDataInner
*/
export interface GetAdditionalDiscountsResponseDataInner {
    /**
    * The ID of the additional discount
    * @type {string}
    */
    'id'?: string;
    /**
    * Determines whether the discount is applied as a percentage or a fixed amount.
    * @type {string}
    */
    'type'?: GetAdditionalDiscountsResponseDataInnerTypeConst;
    /**
    * The discount amount.
    * @type {number}
    */
    'amount'?: number;
    /**
    * The name of the discount.
    * @type {string}
    */
    'description'?: string;
    /**
    * The ID of the deal the discount was added to.
    * @type {number}
    */
    'deal_id'?: number;
    /**
    * The date and time of when the discount was created in the ISO 8601 format.
    * @type {string}
    */
    'created_at'?: string;
    /**
    * The ID of the user that created the discount.
    * @type {number}
    */
    'created_by'?: number;
    /**
    * The date and time of when the discount was created in the ISO 8601 format.
    * @type {string}
    */
    'updated_at'?: string;
    /**
    * The ID of the user that last updated the discount.
    * @type {number}
    */
    'updated_by'?: number;
}

                export const GetAdditionalDiscountsResponseDataInnerTypeConst = {
                        percentage: 'percentage',
                        amount: 'amount'
                } as const;

                export type GetAdditionalDiscountsResponseDataInnerTypeConst = typeof GetAdditionalDiscountsResponseDataInnerTypeConst[keyof typeof GetAdditionalDiscountsResponseDataInnerTypeConst];


