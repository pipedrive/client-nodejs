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
* @interface CreateFieldRequestAllOf
*/
export interface CreateFieldRequestAllOf {
    /**
    * The name of the field
    * @type {string}
    */
    'name': string;
    /**
    * When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. Example: `[{\"label\":\"New Item\"}]`
    * @type {Array<object>}
    */
    'options'?: Array<object>;
    /**
    * Whether the field is available in the \'add new\' modal or not (both in the web and mobile app)
    * @type {boolean}
    */
    'add_visible_flag'?: boolean;
}

