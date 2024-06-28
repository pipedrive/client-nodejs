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
import { GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner } from './get-activities-response200-related-objects-person-personidall-of-email-inner';
// May contain unused imports in some cases
// @ts-ignore
import { GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner } from './get-activities-response200-related-objects-person-personidall-of-phone-inner';

/**
 * 
 * @export
 * @interface GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOf
 */
export interface GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOf {
    /**
     * The ID of the person associated with the item
     * @type {number}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOf
     */
    'id'?: number;
    /**
     * The name of the person associated with the item
     * @type {string}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOf
     */
    'name'?: string;
    /**
     * The emails of the person associated with the item
     * @type {Array<GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner>}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOf
     */
    'email'?: Array<GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner>;
    /**
     * The phone numbers of the person associated with the item
     * @type {Array<GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner>}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOf
     */
    'phone'?: Array<GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner>;
    /**
     * The ID of the owner of the person that is associated with the item
     * @type {number}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOf
     */
    'owner_id'?: number;
}
