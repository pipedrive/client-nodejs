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
 * @interface UpdateDealParameters
 */
export interface UpdateDealParameters {
    /**
     * The value of the deal.
     * @type {string}
     * @memberof UpdateDealParameters
     */
    'value'?: string;
    /**
     * Array of the deal labels IDs.
     * @type {Array<number>}
     * @memberof UpdateDealParameters
     */
    'label'?: Array<number>;
    /**
     * The currency of the deal. Accepts a 3-character currency code.
     * @type {string}
     * @memberof UpdateDealParameters
     */
    'currency'?: string;
    /**
     * The ID of the user which will be the new owner of the deal.
     * @type {number}
     * @memberof UpdateDealParameters
     */
    'user_id'?: number;
    /**
     * The ID of a person which this deal will be linked to. If the person does not exist yet, it needs to be created first.
     * @type {number}
     * @memberof UpdateDealParameters
     */
    'person_id'?: number;
    /**
     * The ID of an organization which this deal will be linked to. If the organization does not exist yet, it needs to be created first.
     * @type {number}
     * @memberof UpdateDealParameters
     */
    'org_id'?: number;
    /**
     * The ID of the pipeline this deal will be added to. By default, the deal will be added to the first stage of the specified pipeline. Please note that `pipeline_id` and `stage_id` should not be used together as `pipeline_id` will be ignored.
     * @type {number}
     * @memberof UpdateDealParameters
     */
    'pipeline_id'?: number;
    /**
     * The ID of the stage this deal will be added to. Please note that a pipeline will be assigned automatically based on the `stage_id`.
     * @type {number}
     * @memberof UpdateDealParameters
     */
    'stage_id'?: number;
    /**
     * open = Open, won = Won, lost = Lost, deleted = Deleted.
     * @type {string}
     * @memberof UpdateDealParameters
     */
    'status'?: UpdateDealParametersStatusConst;
    /**
     * The ID of Marketing channel this deal was created from. Provided value must be one of the channels configured for your company which you can fetch with <a href=\"https://developers.pipedrive.com/docs/api/v1/DealFields#getDealField\" target=\"_blank\" rel=\"noopener noreferrer\">GET /v1/dealFields</a>.
     * @type {number}
     * @memberof UpdateDealParameters
     */
    'channel'?: number | null;
    /**
     * The optional ID to further distinguish the Marketing channel.
     * @type {string}
     * @memberof UpdateDealParameters
     */
    'channel_id'?: string | null;
}

export const UpdateDealParametersStatusConst = {
    open: 'open',
    won: 'won',
    lost: 'lost',
    deleted: 'deleted'
} as const;

export type UpdateDealParametersStatusConst = typeof UpdateDealParametersStatusConst[keyof typeof UpdateDealParametersStatusConst];

