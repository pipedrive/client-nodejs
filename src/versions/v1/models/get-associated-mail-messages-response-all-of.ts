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
import { GetAssociatedMailMessagesResponseAllOfDataInner } from './get-associated-mail-messages-response-all-of-data-inner';
// May contain unused imports in some cases
// @ts-ignore
import { GetFieldsResponseAllOfAdditionalData } from './get-fields-response-all-of-additional-data';

/**
* 
* @export
* @interface GetAssociatedMailMessagesResponseAllOf
*/
export interface GetAssociatedMailMessagesResponseAllOf {
    /**
    * The array of mail messages
    * @type {Array<GetAssociatedMailMessagesResponseAllOfDataInner>}
    */
    'data': Array<GetAssociatedMailMessagesResponseAllOfDataInner>;
    /**
    * 
    * @type {GetFieldsResponseAllOfAdditionalData}
    */
    'additional_data': GetFieldsResponseAllOfAdditionalData;
}

