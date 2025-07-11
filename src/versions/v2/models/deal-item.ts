/* tslint:disable */
/* eslint-disable */
/**
 * Pipedrive API v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { DealItemCustomFieldsValue } from './deal-item-custom-fields-value';

/**
* 
* @export
* @interface DealItem
*/
export interface DealItem {
    /**
    * The ID of the deal
    * @type {number}
    */
    'id'?: number;
    /**
    * The title of the deal
    * @type {string}
    */
    'title'?: string;
    /**
    * The ID of the user who owns the deal
    * @type {number}
    */
    'owner_id'?: number;
    /**
    * The ID of the person linked to the deal
    * @type {number}
    */
    'person_id'?: number;
    /**
    * The ID of the organization linked to the deal
    * @type {number}
    */
    'org_id'?: number;
    /**
    * The ID of the pipeline associated with the deal
    * @type {number}
    */
    'pipeline_id'?: number;
    /**
    * The ID of the deal stage
    * @type {number}
    */
    'stage_id'?: number;
    /**
    * The value of the deal
    * @type {number}
    */
    'value'?: number;
    /**
    * The currency associated with the deal
    * @type {string}
    */
    'currency'?: string;
    /**
    * The creation date and time of the deal
    * @type {string}
    */
    'add_time'?: string;
    /**
    * The last updated date and time of the deal
    * @type {string}
    */
    'update_time'?: string;
    /**
    * The last updated date and time of the deal stage
    * @type {string}
    */
    'stage_change_time'?: string;
    /**
    * Whether the deal is deleted or not
    * @type {boolean}
    */
    'is_deleted'?: boolean;
    /**
    * Whether the deal is archived or not
    * @type {boolean}
    */
    'is_archived'?: boolean;
    /**
    * The status of the deal
    * @type {string}
    */
    'status'?: string;
    /**
    * The success probability percentage of the deal
    * @type {number}
    */
    'probability'?: number | null;
    /**
    * The reason for losing the deal
    * @type {string}
    */
    'lost_reason'?: string | null;
    /**
    * The visibility of the deal
    * @type {number}
    */
    'visible_to'?: number;
    /**
    * The date and time of closing the deal
    * @type {string}
    */
    'close_time'?: string | null;
    /**
    * The date and time of changing the deal status as won
    * @type {string}
    */
    'won_time'?: string;
    /**
    * The date and time of changing the deal status as lost
    * @type {string}
    */
    'lost_time'?: string;
    /**
    * The expected close date of the deal
    * @type {string}
    */
    'expected_close_date'?: string;
    /**
    * The IDs of labels assigned to the deal
    * @type {Array<number>}
    */
    'label_ids'?: Array<number>;
    /**
    * The way this Deal was created. `origin` field is set by Pipedrive when Deal is created and cannot be changed.
    * @type {string}
    */
    'origin'?: string;
    /**
    * The optional ID to further distinguish the origin of the deal - e.g. Which API integration created this Deal.
    * @type {string}
    */
    'origin_id'?: string | null;
    /**
    * The ID of your Marketing channel this Deal was created from. Recognized Marketing channels can be configured in your <a href=\"https://app.pipedrive.com/settings/fields\" target=\"_blank\" rel=\"noopener noreferrer\">Company settings</a>.
    * @type {number}
    */
    'channel'?: number | null;
    /**
    * The optional ID to further distinguish the Marketing channel.
    * @type {string}
    */
    'channel_id'?: string | null;
    /**
    * Only available in Advanced and above plans  The Annual Recurring Revenue of the deal  Null if there are no products attached to the deal 
    * @type {number}
    */
    'arr'?: number | null;
    /**
    * Only available in Advanced and above plans  The Monthly Recurring Revenue of the deal  Null if there are no products attached to the deal 
    * @type {number}
    */
    'mrr'?: number | null;
    /**
    * Only available in Advanced and above plans  The Annual Contract Value of the deal  Null if there are no products attached to the deal 
    * @type {number}
    */
    'acv'?: number | null;
    /**
    * A map of custom fields with hash-based keys
    * @type {{ [key: string]: DealItemCustomFieldsValue | undefined; }}
    */
    'custom_fields'?: { [key: string]: DealItemCustomFieldsValue | undefined; };
}

