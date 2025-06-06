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
* @interface BaseProductAllOf
*/
export interface BaseProductAllOf {
    /**
    * The ID of the product
    * @type {number}
    */
    'id'?: number;
    /**
    * The name of the product
    * @type {string}
    */
    'name'?: string;
    /**
    * The product code
    * @type {string}
    */
    'code'?: string;
    /**
    * The unit in which this product is sold
    * @type {string}
    */
    'unit'?: string;
    /**
    * The tax percentage
    * @type {number}
    */
    'tax'?: number;
    /**
    * Whether this product will be made marked as deleted or not
    * @type {boolean}
    */
    'is_deleted'?: boolean;
    /**
    * Whether this product can be added to a deal or not
    * @type {boolean}
    */
    'is_linkable'?: boolean;
    /**
    * 
    * @type {number}
    */
    'visible_to'?: BaseProductAllOfVisibleToConst;
    /**
    * Information about the Pipedrive user who owns the product
    * @type {number}
    */
    'owner_id'?: number;
    /**
    * An object where each key represents a custom field. All custom fields are referenced as randomly generated 40-character hashes
    * @type {{ [key: string]: any | undefined; }}
    */
    'custom_fields'?: { [key: string]: any | undefined; };
}

                export const BaseProductAllOfVisibleToConst = {
                        NUMBER_1: 1,
                        NUMBER_3: 3,
                        NUMBER_5: 5,
                        NUMBER_7: 7
                } as const;

                export type BaseProductAllOfVisibleToConst = typeof BaseProductAllOfVisibleToConst[keyof typeof BaseProductAllOfVisibleToConst];


