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
import { UserAccess } from './user-access';

/**
 * 
 * @export
 * @interface BaseUser
 */
export interface BaseUser {
    /**
     * The user ID
     * @type {number}
     * @memberof BaseUser
     */
    'id'?: number;
    /**
     * The user name
     * @type {string}
     * @memberof BaseUser
     */
    'name'?: string;
    /**
     * The user default currency
     * @type {string}
     * @memberof BaseUser
     */
    'default_currency'?: string;
    /**
     * The user locale
     * @type {string}
     * @memberof BaseUser
     */
    'locale'?: string;
    /**
     * The user language ID
     * @type {number}
     * @memberof BaseUser
     */
    'lang'?: number;
    /**
     * The user email
     * @type {string}
     * @memberof BaseUser
     */
    'email'?: string;
    /**
     * The user phone
     * @type {string}
     * @memberof BaseUser
     */
    'phone'?: string | null;
    /**
     * Boolean that indicates whether the user is activated
     * @type {boolean}
     * @memberof BaseUser
     */
    'activated'?: boolean;
    /**
     * The last login date and time of the user. Format: YYYY-MM-DD HH:MM:SS
     * @type {string}
     * @memberof BaseUser
     */
    'last_login'?: string;
    /**
     * The creation date and time of the user. Format: YYYY-MM-DD HH:MM:SS
     * @type {string}
     * @memberof BaseUser
     */
    'created'?: string;
    /**
     * The last modification date and time of the user. Format: YYYY-MM-DD HH:MM:SS
     * @type {string}
     * @memberof BaseUser
     */
    'modified'?: string | null;
    /**
     * Boolean that indicates whether the user has created a company
     * @type {boolean}
     * @memberof BaseUser
     */
    'has_created_company'?: boolean;
    /**
     * 
     * @type {Array<UserAccess>}
     * @memberof BaseUser
     */
    'access'?: Array<UserAccess>;
    /**
     * Boolean that indicates whether the user is activated
     * @type {boolean}
     * @memberof BaseUser
     */
    'active_flag'?: boolean;
    /**
     * The user timezone name
     * @type {string}
     * @memberof BaseUser
     */
    'timezone_name'?: string;
    /**
     * The user timezone offset
     * @type {string}
     * @memberof BaseUser
     */
    'timezone_offset'?: string;
    /**
     * The ID of the user role
     * @type {number}
     * @memberof BaseUser
     */
    'role_id'?: number;
    /**
     * The user icon URL
     * @type {string}
     * @memberof BaseUser
     */
    'icon_url'?: string | null;
    /**
     * Boolean that indicates if the requested user is the same which is logged in (in this case, always true)
     * @type {boolean}
     * @memberof BaseUser
     */
    'is_you'?: boolean;
    /**
     * Boolean that indicates whether the user is deleted from the company
     * @type {boolean}
     * @memberof BaseUser
     */
    'is_deleted'?: boolean;
}

