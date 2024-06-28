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
 * @interface GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner
 */
export interface GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner {
    /**
     * The type of the phone number
     * @type {string}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner
     */
    'label'?: string;
    /**
     * The phone number of the person associated with the item
     * @type {string}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner
     */
    'value'?: string;
    /**
     * Whether this is the primary phone number or not
     * @type {boolean}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner
     */
    'primary'?: boolean;
}
