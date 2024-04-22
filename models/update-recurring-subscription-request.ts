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
 * @interface UpdateRecurringSubscriptionRequest
 */
export interface UpdateRecurringSubscriptionRequest {
    /**
     * All payments after that date will be affected. Format: YYYY-MM-DD
     * @type {string}
     * @memberof UpdateRecurringSubscriptionRequest
     */
    'effective_date': string;
    /**
     * The description of the recurring subscription
     * @type {string}
     * @memberof UpdateRecurringSubscriptionRequest
     */
    'description'?: string;
    /**
     * The amount of each payment
     * @type {number}
     * @memberof UpdateRecurringSubscriptionRequest
     */
    'cycle_amount'?: number;
    /**
     * Array of additional payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).
     * @type {Array<object>}
     * @memberof UpdateRecurringSubscriptionRequest
     */
    'payments'?: Array<object>;
    /**
     * Indicates that the deal value must be set to recurring subscription\'s MRR value
     * @type {boolean}
     * @memberof UpdateRecurringSubscriptionRequest
     */
    'update_deal_value'?: boolean;
}

