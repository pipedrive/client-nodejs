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
 * @interface GetPermissionSetsResponse200AllOfDataInner
 */
export interface GetPermissionSetsResponse200AllOfDataInner {
    /**
     * The ID of user permission set
     * @type {string}
     * @memberof GetPermissionSetsResponse200AllOfDataInner
     */
    'id'?: string;
    /**
     * The name of the permission set
     * @type {string}
     * @memberof GetPermissionSetsResponse200AllOfDataInner
     */
    'name'?: string;
    /**
     * The description of the permission set
     * @type {string}
     * @memberof GetPermissionSetsResponse200AllOfDataInner
     */
    'description'?: string;
    /**
     * The app that permission set belongs to
     * @type {string}
     * @memberof GetPermissionSetsResponse200AllOfDataInner
     */
    'app'?: GetPermissionSetsResponse200AllOfDataInnerAppConst;
    /**
     * The type of permission set
     * @type {string}
     * @memberof GetPermissionSetsResponse200AllOfDataInner
     */
    'type'?: GetPermissionSetsResponse200AllOfDataInnerTypeConst;
    /**
     * The number of users assigned to this permission set
     * @type {number}
     * @memberof GetPermissionSetsResponse200AllOfDataInner
     */
    'assignment_count'?: number;
}

export const GetPermissionSetsResponse200AllOfDataInnerAppConst = {
    sales: 'sales',
    projects: 'projects',
    campaigns: 'campaigns',
    global: 'global',
    account_settings: 'account_settings'
} as const;

export type GetPermissionSetsResponse200AllOfDataInnerAppConst = typeof GetPermissionSetsResponse200AllOfDataInnerAppConst[keyof typeof GetPermissionSetsResponse200AllOfDataInnerAppConst];
export const GetPermissionSetsResponse200AllOfDataInnerTypeConst = {
    admin: 'admin',
    manager: 'manager',
    regular: 'regular',
    custom: 'custom'
} as const;

export type GetPermissionSetsResponse200AllOfDataInnerTypeConst = typeof GetPermissionSetsResponse200AllOfDataInnerTypeConst[keyof typeof GetPermissionSetsResponse200AllOfDataInnerTypeConst];


