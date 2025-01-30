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


// May contain unused imports in some cases
// @ts-ignore
import { GetCurrentUserResponseAllOfDataAllOfLanguage } from './get-current-user-response-all-of-data-all-of-language';

/**
* 
* @export
* @interface GetCurrentUserResponseAllOfDataAllOf
*/
export interface GetCurrentUserResponseAllOfDataAllOf {
    /**
    * The user company ID
    * @type {number}
    */
    'company_id'?: number;
    /**
    * The user company name
    * @type {string}
    */
    'company_name'?: string;
    /**
    * The user company domain
    * @type {string}
    */
    'company_domain'?: string;
    /**
    * The user company country
    * @type {string}
    */
    'company_country'?: string;
    /**
    * The user company industry
    * @type {string}
    */
    'company_industry'?: string;
    /**
    * 
    * @type {GetCurrentUserResponseAllOfDataAllOfLanguage}
    */
    'language'?: GetCurrentUserResponseAllOfDataAllOfLanguage;
}

