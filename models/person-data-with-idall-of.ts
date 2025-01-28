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
import { PersonDataWithIDAllOfEmailInner } from './person-data-with-idall-of-email-inner';
// May contain unused imports in some cases
// @ts-ignore
import { PhoneData } from './phone-data';

/**
 * 
 * @export
 * @interface PersonDataWithIDAllOf
 */
export interface PersonDataWithIDAllOf {
    /**
     * The ID of the person associated with the item
     * @type {number}
     * @memberof PersonDataWithIDAllOf
     */
    'id'?: number;
    /**
     * The name of the person associated with the item
     * @type {string}
     * @memberof PersonDataWithIDAllOf
     */
    'name'?: string;
    /**
     * The emails of the person associated with the item
     * @type {Array<PersonDataWithIDAllOfEmailInner>}
     * @memberof PersonDataWithIDAllOf
     */
    'email'?: Array<PersonDataWithIDAllOfEmailInner>;
    /**
     * The phone numbers of the person associated with the item
     * @type {Array<PhoneData>}
     * @memberof PersonDataWithIDAllOf
     */
    'phone'?: Array<PhoneData>;
    /**
     * The ID of the owner of the person that is associated with the item
     * @type {number}
     * @memberof PersonDataWithIDAllOf
     */
    'owner_id'?: number;
}

