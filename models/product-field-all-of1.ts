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
 * @interface ProductFieldAllOf1
 */
export interface ProductFieldAllOf1 {
    /**
     * The ID of the product field
     * @type {number}
     * @memberof ProductFieldAllOf1
     */
    'id'?: number;
    /**
     * The key of the product field
     * @type {string}
     * @memberof ProductFieldAllOf1
     */
    'key'?: string;
    /**
     * The position (index) of the product field in the detail view
     * @type {number}
     * @memberof ProductFieldAllOf1
     */
    'order_nr'?: number;
    /**
     * The product field creation time. Format: YYYY-MM-DD HH:MM:SS
     * @type {string}
     * @memberof ProductFieldAllOf1
     */
    'add_time'?: string;
    /**
     * The product field last update time. Format: YYYY-MM-DD HH:MM:SS
     * @type {string}
     * @memberof ProductFieldAllOf1
     */
    'update_time'?: string;
    /**
     * The ID of the last user to update the product field
     * @type {number}
     * @memberof ProductFieldAllOf1
     */
    'last_updated_by_user_id'?: number;
    /**
     * The ID of the user who created the product field
     * @type {number}
     * @memberof ProductFieldAllOf1
     */
    'created_by_user_id'?: number;
    /**
     * Whether or not the product field is currently active
     * @type {boolean}
     * @memberof ProductFieldAllOf1
     */
    'active_flag'?: boolean;
    /**
     * Whether or not the product field name and metadata is editable
     * @type {boolean}
     * @memberof ProductFieldAllOf1
     */
    'edit_flag'?: boolean;
    /**
     * Whether or not the product field is visible in the Add Product Modal
     * @type {boolean}
     * @memberof ProductFieldAllOf1
     */
    'add_visible_flag'?: boolean;
    /**
     * Whether or not the product field is marked as important
     * @type {boolean}
     * @memberof ProductFieldAllOf1
     */
    'important_flag'?: boolean;
    /**
     * Whether or not the product field data can be edited
     * @type {boolean}
     * @memberof ProductFieldAllOf1
     */
    'bulk_edit_allowed'?: boolean;
    /**
     * Whether or not the product field is searchable
     * @type {boolean}
     * @memberof ProductFieldAllOf1
     */
    'searchable_flag'?: boolean;
    /**
     * Whether or not the product field value can be used when filtering searches
     * @type {boolean}
     * @memberof ProductFieldAllOf1
     */
    'filtering_allowed'?: boolean;
    /**
     * Whether or not the product field is sortable
     * @type {boolean}
     * @memberof ProductFieldAllOf1
     */
    'sortable_flag'?: boolean;
    /**
     * Whether or not the product field is mandatory when creating products
     * @type {boolean}
     * @memberof ProductFieldAllOf1
     */
    'mandatory_flag'?: boolean;
}
