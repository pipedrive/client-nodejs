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
 * @interface CancelRecurringSubscriptionRequest
 */
export interface CancelRecurringSubscriptionRequest {
    /**
     * The subscription termination date. All payments after the specified date will be deleted. The end_date of the subscription will be set to the due date of the payment to follow the specified date. Default value is the current date.
     * @type {string}
     * @memberof CancelRecurringSubscriptionRequest
     */
    'end_date'?: string;
}

