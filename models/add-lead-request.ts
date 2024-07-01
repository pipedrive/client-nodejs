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
import { GetLeadsResponse200DataInnerValue } from './get-leads-response200-data-inner-value';

/**
 *
 * @export
 * @interface AddLeadRequest
 */
export interface AddLeadRequest {
    /**
     * The name of the lead
     * @type {string}
     * @memberof AddLeadRequest
     */
    'title': string;
    /**
     * The ID of the user which will be the owner of the created lead. If not provided, the user making the request will be used.
     * @type {number}
     * @memberof AddLeadRequest
     */
    'owner_id'?: number;
    /**
     * The IDs of the lead labels which will be associated with the lead
     * @type {Array<string>}
     * @memberof AddLeadRequest
     */
    'label_ids'?: Array<string>;
    /**
     * The ID of a person which this lead will be linked to. If the person does not exist yet, it needs to be created first. This property is required unless `organization_id` is specified.
     * @type {number}
     * @memberof AddLeadRequest
     */
    'person_id'?: number;
    /**
     * The ID of an organization which this lead will be linked to. If the organization does not exist yet, it needs to be created first. This property is required unless `person_id` is specified.
     * @type {number}
     * @memberof AddLeadRequest
     */
    'organization_id'?: number;
    /**
     *
     * @type {GetLeadsResponse200DataInnerValue}
     * @memberof AddLeadRequest
     */
    'value'?: GetLeadsResponse200DataInnerValue | null;
    /**
     * The date of when the deal which will be created from the lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD.
     * @type {string}
     * @memberof AddLeadRequest
     */
    'expected_close_date'?: string;
    /**
     *
     * @type {string}
     * @memberof AddLeadRequest
     */
    'visible_to'?: AddLeadRequestVisibleToConst;
    /**
     * A flag indicating whether the lead was seen by someone in the Pipedrive UI
     * @type {boolean}
     * @memberof AddLeadRequest
     */
    'was_seen'?: boolean;
    /**
     * The optional ID to further distinguish the origin of the lead - e.g. Which API integration created this lead. If omitted, `origin_id` will be set to null.
     * @type {string}
     * @memberof AddLeadRequest
     */
    'origin_id'?: string | null;
    /**
     * The ID of Marketing channel this lead was created from. Provided value must be one of the channels configured for your company. You can fetch allowed values with <a href=\"https://developers.pipedrive.com/docs/api/v1/DealFields#getDealField\" target=\"_blank\" rel=\"noopener noreferrer\">GET /v1/dealFields</a>. If omitted, channel will be set to null.
     * @type {number}
     * @memberof AddLeadRequest
     */
    'channel'?: number | null;
    /**
     * The optional ID to further distinguish the Marketing channel. If omitted, `channel_id` will be set to null.
     * @type {string}
     * @memberof AddLeadRequest
     */
    'channel_id'?: string | null;
}

export const AddLeadRequestVisibleToConst = {
    _1: '1',
    _3: '3',
    _5: '5',
    _7: '7'
} as const;

export type AddLeadRequestVisibleToConst = typeof AddLeadRequestVisibleToConst[keyof typeof AddLeadRequestVisibleToConst];


