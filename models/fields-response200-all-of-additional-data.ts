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
 * The additional data of the list
 * @export
 * @interface FieldsResponse200AllOfAdditionalData
 */
export interface FieldsResponse200AllOfAdditionalData {
    /**
     * Pagination start
     * @type {number}
     * @memberof FieldsResponse200AllOfAdditionalData
     */
    'start'?: number;
    /**
     * Items shown per page
     * @type {number}
     * @memberof FieldsResponse200AllOfAdditionalData
     */
    'limit'?: number;
    /**
     * If there are more list items in the collection than displayed or not
     * @type {boolean}
     * @memberof FieldsResponse200AllOfAdditionalData
     */
    'more_items_in_collection'?: boolean;
}
