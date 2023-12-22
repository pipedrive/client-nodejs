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
 * @interface AddOrUpdateRoleSettingResponse200AllOfData
 */
export interface AddOrUpdateRoleSettingResponse200AllOfData {
    /**
     * The ID of the role
     * @type {number}
     * @memberof AddOrUpdateRoleSettingResponse200AllOfData
     */
    'id'?: number;
    /**
     * The setting
     * @type {number}
     * @memberof AddOrUpdateRoleSettingResponse200AllOfData
     */
    'deal_default_visibility'?: AddOrUpdateRoleSettingResponse200AllOfDataDealDefaultVisibilityConst;
}

export const AddOrUpdateRoleSettingResponse200AllOfDataDealDefaultVisibilityConst = {
    NUMBER_1: 1,
    NUMBER_3: 3,
    NUMBER_5: 5,
    NUMBER_7: 7
} as const;

export type AddOrUpdateRoleSettingResponse200AllOfDataDealDefaultVisibilityConst = typeof AddOrUpdateRoleSettingResponse200AllOfDataDealDefaultVisibilityConst[keyof typeof AddOrUpdateRoleSettingResponse200AllOfDataDealDefaultVisibilityConst];


