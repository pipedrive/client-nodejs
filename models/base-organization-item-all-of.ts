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
import { BaseOrganizationItemAllOfPictureId } from './base-organization-item-all-of-picture-id';
// May contain unused imports in some cases
// @ts-ignore
import { Owner } from './owner';

/**
 * 
 * @export
 * @interface BaseOrganizationItemAllOf
 */
export interface BaseOrganizationItemAllOf {
    /**
     * The ID of the organization
     * @type {number}
     * @memberof BaseOrganizationItemAllOf
     */
    'id'?: number;
    /**
     * The ID of the company related to the organization
     * @type {number}
     * @memberof BaseOrganizationItemAllOf
     */
    'company_id'?: number;
    /**
     * 
     * @type {Owner}
     * @memberof BaseOrganizationItemAllOf
     */
    'owner_id'?: Owner;
    /**
     * The name of the organization
     * @type {string}
     * @memberof BaseOrganizationItemAllOf
     */
    'name'?: string;
    /**
     * Whether the organization is active or not
     * @type {boolean}
     * @memberof BaseOrganizationItemAllOf
     */
    'active_flag'?: boolean;
    /**
     * 
     * @type {BaseOrganizationItemAllOfPictureId}
     * @memberof BaseOrganizationItemAllOf
     */
    'picture_id'?: BaseOrganizationItemAllOfPictureId;
    /**
     * The country code of the organization
     * @type {string}
     * @memberof BaseOrganizationItemAllOf
     */
    'country_code'?: string | null;
    /**
     * The first character of the organization name
     * @type {string}
     * @memberof BaseOrganizationItemAllOf
     */
    'first_char'?: string;
    /**
     * The creation date and time of the organization
     * @type {string}
     * @memberof BaseOrganizationItemAllOf
     */
    'add_time'?: string;
    /**
     * The last updated date and time of the organization
     * @type {string}
     * @memberof BaseOrganizationItemAllOf
     */
    'update_time'?: string;
    /**
     * The visibility group ID of who can see the organization
     * @type {string}
     * @memberof BaseOrganizationItemAllOf
     */
    'visible_to'?: string;
    /**
     * The label assigned to the organization. When the `label` field is updated, the `label_ids` field value will be overwritten by the `label` field value.
     * @type {number}
     * @memberof BaseOrganizationItemAllOf
     */
    'label'?: number;
    /**
     * The IDs of labels assigned to the organization. When the `label_ids` field is updated, the `label` field value will be set to the first value of the `label_ids` field.
     * @type {Array<number>}
     * @memberof BaseOrganizationItemAllOf
     */
    'label_ids'?: Array<number>;
    /**
     * The name of the organization owner
     * @type {string}
     * @memberof BaseOrganizationItemAllOf
     */
    'owner_name'?: string;
    /**
     * The BCC email associated with the organization
     * @type {string}
     * @memberof BaseOrganizationItemAllOf
     */
    'cc_email'?: string;
}

