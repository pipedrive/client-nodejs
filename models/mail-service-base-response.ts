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
 * @interface MailServiceBaseResponse
 */
export interface MailServiceBaseResponse {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof MailServiceBaseResponse
     */
    'success'?: boolean;
    /**
     * The email service specific status code and it is returned through the response body.
     * @type {number}
     * @memberof MailServiceBaseResponse
     */
    'statusCode'?: number;
    /**
     * The status text of the response.
     * @type {string}
     * @memberof MailServiceBaseResponse
     */
    'statusText'?: string;
    /**
     * The service name of the response.
     * @type {string}
     * @memberof MailServiceBaseResponse
     */
    'service'?: string;
}

