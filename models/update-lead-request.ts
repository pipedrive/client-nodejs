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
 * @interface UpdateLeadRequest
 */
export interface UpdateLeadRequest {
    /**
     * The name of the lead
     * @type {string}
     * @memberof UpdateLeadRequest
     */
    'title'?: string | null;
    /**
     * The ID of the user which will be the owner of the created lead. If not provided, the user making the request will be used.
     * @type {number}
     * @memberof UpdateLeadRequest
     */
    'owner_id'?: number;
    /**
     * The IDs of the lead labels which will be associated with the lead
     * @type {Array<string>}
     * @memberof UpdateLeadRequest
     */
    'label_ids'?: Array<string>;
    /**
     * The ID of a person which this lead will be linked to. If the person does not exist yet, it needs to be created first. A lead always has to be linked to a person or organization or both.
     * @type {number}
     * @memberof UpdateLeadRequest
     */
    'person_id'?: number | null;
    /**
     * The ID of an organization which this lead will be linked to. If the organization does not exist yet, it needs to be created first. A lead always has to be linked to a person or organization or both.
     * @type {number}
     * @memberof UpdateLeadRequest
     */
    'organization_id'?: number | null;
    /**
     * A flag indicating whether the lead is archived or not
     * @type {boolean}
     * @memberof UpdateLeadRequest
     */
    'is_archived'?: boolean;
    /**
     *
     * @type {GetLeadsResponse200DataInnerValue}
     * @memberof UpdateLeadRequest
     */
    'value'?: GetLeadsResponse200DataInnerValue | null;
    /**
     * The date of when the deal which will be created from the lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD.
     * @type {string}
     * @memberof UpdateLeadRequest
     */
    'expected_close_date'?: string | null;
    /**
     *
     * @type {string}
     * @memberof UpdateLeadRequest
     */
    'visible_to'?: UpdateLeadRequestVisibleToConst;
    /**
     * A flag indicating whether the lead was seen by someone in the Pipedrive UI
     * @type {boolean}
     * @memberof UpdateLeadRequest
     */
    'was_seen'?: boolean;
    /**
     * The ID of Marketing channel this lead was created from. Provided value must be one of the channels configured for your company which you can fetch with <a href=\"https://developers.pipedrive.com/docs/api/v1/DealFields#getDealField\" target=\"_blank\" rel=\"noopener noreferrer\">GET /v1/dealFields</a>.
     * @type {number}
     * @memberof UpdateLeadRequest
     */
    'channel'?: number | null;
    /**
     * The optional ID to further distinguish the Marketing channel.
     * @type {string}
     * @memberof UpdateLeadRequest
     */
    'channel_id'?: string | null;
}

export const UpdateLeadRequestVisibleToConst = {
    _1: '1',
    _3: '3',
    _5: '5',
    _7: '7'
} as const;

export type UpdateLeadRequestVisibleToConst = typeof UpdateLeadRequestVisibleToConst[keyof typeof UpdateLeadRequestVisibleToConst];


