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
 * @interface SubRoleAllOf
 */
export interface SubRoleAllOf {
    /**
     * The ID of the role
     * @type {number}
     * @memberof SubRoleAllOf
     */
    'id'?: number;
    /**
     * Whether the role is active or not
     * @type {boolean}
     * @memberof SubRoleAllOf
     */
    'active_flag'?: boolean;
    /**
     * The number of users assigned to this role
     * @type {string}
     * @memberof SubRoleAllOf
     */
    'assignment_count'?: string;
    /**
     * The number of sub-roles
     * @type {string}
     * @memberof SubRoleAllOf
     */
    'sub_role_count'?: string;
}

