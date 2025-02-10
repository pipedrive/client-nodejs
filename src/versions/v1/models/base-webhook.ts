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
* @interface BaseWebhook
*/
export interface BaseWebhook {
    /**
    * The ID of the Webhook
    * @type {number}
    */
    'id'?: number;
    /**
    * The ID of the company related to the Webhook
    * @type {number}
    */
    'company_id'?: number;
    /**
    * The ID of the user who owns the Webhook
    * @type {number}
    */
    'owner_id'?: number;
    /**
    * The ID of the user related to the Webhook
    * @type {number}
    */
    'user_id'?: number;
    /**
    * The Webhook action
    * @type {string}
    */
    'event_action'?: string;
    /**
    * The Webhook object
    * @type {string}
    */
    'event_object'?: string;
    /**
    * The subscription URL of the Webhook
    * @type {string}
    */
    'subscription_url'?: string;
    /**
    * 
    * @type {number}
    */
    'is_active'?: BaseWebhookIsActiveConst;
    /**
    * The date when the Webhook was added
    * @type {string}
    */
    'add_time'?: string;
    /**
    * The date when the Webhook was removed (if removed)
    * @type {string}
    */
    'remove_time'?: string | null;
    /**
    * The type of the Webhook
    * @type {string}
    */
    'type'?: BaseWebhookTypeConst;
    /**
    * The username of the `subscription_url` of the Webhook
    * @type {string}
    */
    'http_auth_user'?: string | null;
    /**
    * The password of the `subscription_url` of the Webhook
    * @type {string}
    */
    'http_auth_password'?: string | null;
    /**
    * Any additional data related to the Webhook
    * @type {object}
    */
    'additional_data'?: object;
    /**
    * The removal reason of the Webhook (if removed)
    * @type {string}
    */
    'remove_reason'?: string | null;
    /**
    * The last delivery time of the Webhook
    * @type {string}
    */
    'last_delivery_time'?: string | null;
    /**
    * The last delivery HTTP status of the Webhook
    * @type {number}
    */
    'last_http_status'?: number | null;
    /**
    * The ID of the admin of the Webhook
    * @type {number}
    */
    'admin_id'?: number;
}

                export const BaseWebhookIsActiveConst = {
                        NUMBER_0: 0,
                        NUMBER_1: 1
                } as const;

                export type BaseWebhookIsActiveConst = typeof BaseWebhookIsActiveConst[keyof typeof BaseWebhookIsActiveConst];
                export const BaseWebhookTypeConst = {
                        general: 'general',
                        application: 'application',
                        automation: 'automation'
                } as const;

                export type BaseWebhookTypeConst = typeof BaseWebhookTypeConst[keyof typeof BaseWebhookTypeConst];


