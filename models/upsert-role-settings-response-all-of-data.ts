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
 * The response data
 * @export
 * @interface UpsertRoleSettingsResponseAllOfData
 */
export interface UpsertRoleSettingsResponseAllOfData {
    /**
     * The ID of the role
     * @type {number}
     * @memberof UpsertRoleSettingsResponseAllOfData
     */
    'id'?: number;
    /**
     * The setting
     * @type {number}
     * @memberof UpsertRoleSettingsResponseAllOfData
     */
    'deal_default_visibility'?: UpsertRoleSettingsResponseAllOfDataDealDefaultVisibilityConst;
}

export const UpsertRoleSettingsResponseAllOfDataDealDefaultVisibilityConst = {
    NUMBER_1: 1,
    NUMBER_3: 3,
    NUMBER_5: 5,
    NUMBER_7: 7
} as const;

export type UpsertRoleSettingsResponseAllOfDataDealDefaultVisibilityConst = typeof UpsertRoleSettingsResponseAllOfDataDealDefaultVisibilityConst[keyof typeof UpsertRoleSettingsResponseAllOfDataDealDefaultVisibilityConst];


