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
* @interface PermissionSet
*/
export interface PermissionSet {
    /**
    * The ID of user permission set
    * @type {string}
    */
    'id'?: string;
    /**
    * The name of the permission set
    * @type {string}
    */
    'name'?: string;
    /**
    * The description of the permission set
    * @type {string}
    */
    'description'?: string;
    /**
    * The app that permission set belongs to
    * @type {string}
    */
    'app'?: PermissionSetAppConst;
    /**
    * The type of permission set
    * @type {string}
    */
    'type'?: PermissionSetTypeConst;
    /**
    * The number of users assigned to this permission set
    * @type {number}
    */
    'assignment_count'?: number;
}

                export const PermissionSetAppConst = {
                        sales: 'sales',
                        projects: 'projects',
                        campaigns: 'campaigns',
                        global: 'global',
                        account_settings: 'account_settings'
                } as const;

                export type PermissionSetAppConst = typeof PermissionSetAppConst[keyof typeof PermissionSetAppConst];
                export const PermissionSetTypeConst = {
                        admin: 'admin',
                        manager: 'manager',
                        regular: 'regular',
                        custom: 'custom'
                } as const;

                export type PermissionSetTypeConst = typeof PermissionSetTypeConst[keyof typeof PermissionSetTypeConst];


