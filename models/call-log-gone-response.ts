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
 * @interface CallLogGoneResponse
 */
export interface CallLogGoneResponse {
    /**
     * 
     * @type {boolean}
     * @memberof CallLogGoneResponse
     */
    'success'?: boolean;
    /**
     * The description of the error
     * @type {string}
     * @memberof CallLogGoneResponse
     */
    'error'?: string;
    /**
     * A message describing how to solve the problem
     * @type {string}
     * @memberof CallLogGoneResponse
     */
    'error_info'?: string;
    /**
     * 
     * @type {object}
     * @memberof CallLogGoneResponse
     */
    'data'?: object | null;
    /**
     * 
     * @type {object}
     * @memberof CallLogGoneResponse
     */
    'additional_data'?: object | null;
}
