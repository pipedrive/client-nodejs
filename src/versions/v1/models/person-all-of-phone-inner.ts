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
* @interface PersonAllOfPhoneInner
*/
export interface PersonAllOfPhoneInner {
    /**
    * The phone number
    * @type {string}
    */
    'value'?: string;
    /**
    * Boolean that indicates if phone number is primary for the person or not
    * @type {boolean}
    */
    'primary'?: boolean;
    /**
    * The label that indicates the type of the phone number. (Possible values - work, home, mobile or other)
    * @type {string}
    */
    'label'?: string;
}

