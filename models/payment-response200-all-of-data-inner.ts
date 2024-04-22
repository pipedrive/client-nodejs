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
 * @interface PaymentResponse200AllOfDataInner
 */
export interface PaymentResponse200AllOfDataInner {
    /**
     * The ID of the payment
     * @type {number}
     * @memberof PaymentResponse200AllOfDataInner
     */
    'id'?: number;
    /**
     * The ID of the subscription this payment is associated with
     * @type {number}
     * @memberof PaymentResponse200AllOfDataInner
     */
    'subscription_id'?: number;
    /**
     * The ID of the deal this payment is associated with
     * @type {number}
     * @memberof PaymentResponse200AllOfDataInner
     */
    'deal_id'?: number;
    /**
     * The payment status
     * @type {boolean}
     * @memberof PaymentResponse200AllOfDataInner
     */
    'is_active'?: boolean;
    /**
     * The payment amount
     * @type {number}
     * @memberof PaymentResponse200AllOfDataInner
     */
    'amount'?: number;
    /**
     * The currency of the payment
     * @type {string}
     * @memberof PaymentResponse200AllOfDataInner
     */
    'currency'?: string;
    /**
     * The difference between the amount of the current payment and the previous payment. The value can be either positive or negative.
     * @type {number}
     * @memberof PaymentResponse200AllOfDataInner
     */
    'change_amount'?: number;
    /**
     * The date when payment occurs
     * @type {string}
     * @memberof PaymentResponse200AllOfDataInner
     */
    'due_at'?: string;
    /**
     * Represents the movement of revenue in comparison with the previous payment. Possible values are: `New` - first payment of the subscription. `Recurring` - no movement. `Expansion` - current payment amount > previous payment amount. `Contraction` - current payment amount < previous payment amount. `Churn` - last payment of the subscription.
     * @type {string}
     * @memberof PaymentResponse200AllOfDataInner
     */
    'revenue_movement_type'?: PaymentResponse200AllOfDataInnerRevenueMovementTypeConst;
    /**
     * The type of the payment. Possible values are: `Recurring` - payments occur over fixed intervals of time, `Additional` - extra payment not the recurring payment of the recurring subscription, `Installment` - payment of the installment subscription.
     * @type {string}
     * @memberof PaymentResponse200AllOfDataInner
     */
    'payment_type'?: PaymentResponse200AllOfDataInnerPaymentTypeConst;
    /**
     * The description of the payment
     * @type {string}
     * @memberof PaymentResponse200AllOfDataInner
     */
    'description'?: string;
    /**
     * The creation time of the payment
     * @type {string}
     * @memberof PaymentResponse200AllOfDataInner
     */
    'add_time'?: string;
    /**
     * The update time of the payment
     * @type {string}
     * @memberof PaymentResponse200AllOfDataInner
     */
    'update_time'?: string;
}

export const PaymentResponse200AllOfDataInnerRevenueMovementTypeConst = {
    new: 'new',
    recurring: 'recurring',
    expansion: 'expansion',
    contraction: 'contraction',
    none: 'none',
    churn: 'churn'
} as const;

export type PaymentResponse200AllOfDataInnerRevenueMovementTypeConst = typeof PaymentResponse200AllOfDataInnerRevenueMovementTypeConst[keyof typeof PaymentResponse200AllOfDataInnerRevenueMovementTypeConst];
export const PaymentResponse200AllOfDataInnerPaymentTypeConst = {
    recurring: 'recurring',
    additional: 'additional',
    installment: 'installment'
} as const;

export type PaymentResponse200AllOfDataInnerPaymentTypeConst = typeof PaymentResponse200AllOfDataInnerPaymentTypeConst[keyof typeof PaymentResponse200AllOfDataInnerPaymentTypeConst];


