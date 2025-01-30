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
* @interface CallLogBadRequestResponse
*/
export interface CallLogBadRequestResponse {
    /**
    * 
    * @type {boolean}
    */
    'success'?: boolean;
    /**
    * The description of the error
    * @type {string}
    */
    'error'?: string;
    /**
    * A message describing how to solve the problem
    * @type {string}
    */
    'error_info'?: string;
    /**
    * 
    * @type {object}
    */
    'data'?: object | null;
    /**
    * 
    * @type {object}
    */
    'additional_data'?: object | null;
}

