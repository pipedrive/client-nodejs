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
import { BasicPersonRequestEmailInner } from './basic-person-request-email-inner';
// May contain unused imports in some cases
// @ts-ignore
import { PersonAllOfPhoneInner } from './person-all-of-phone-inner';

/**
* 
* @export
* @interface PersonsCollectionResponseObject
*/
export interface PersonsCollectionResponseObject {
    /**
    * The ID of the person
    * @type {number}
    */
    'id': number;
    /**
    * Whether the person is active or not
    * @type {boolean}
    */
    'active_flag': boolean;
    /**
    * The ID of the owner related to the person
    * @type {number}
    */
    'owner_id': number;
    /**
    * The ID of the organization related to the person
    * @type {number}
    */
    'org_id': number;
    /**
    * The name of the person
    * @type {string}
    */
    'name': string;
    /**
    * An email address as a string or an array of email objects related to the person. The structure of the array is as follows: `[{ \"value\": \"mail@example.com\", \"primary\": \"true\", \"label\": \"main\" }]`. Please note that only `value` is required.
    * @type {Array<BasicPersonRequestEmailInner>}
    */
    'email': Array<BasicPersonRequestEmailInner>;
    /**
    * A phone number supplied as a string or an array of phone objects related to the person. The structure of the array is as follows: `[{ \"value\": \"12345\", \"primary\": \"true\", \"label\": \"mobile\" }]`. Please note that only `value` is required.
    * @type {Array<PersonAllOfPhoneInner>}
    */
    'phone': Array<PersonAllOfPhoneInner>;
    /**
    * The last updated date and time of the person. Format: YYYY-MM-DD HH:MM:SS
    * @type {string}
    */
    'update_time': string;
    /**
    * The date and time this person was deleted. Format: YYYY-MM-DD HH:MM:SS
    * @type {string}
    */
    'delete_time': string | null;
    /**
    * The date and time when the person was added/created. Format: YYYY-MM-DD HH:MM:SS
    * @type {string}
    */
    'add_time': string;
    /**
    * The visibility group ID of who can see the person
    * @type {string}
    */
    'visible_to': string;
    /**
    * The ID of the picture associated with the item
    * @type {number}
    */
    'picture_id': number | null;
    /**
    * The label assigned to the person. When the `label` field is updated, the `label_ids` field value will be overwritten by the `label` field value.
    * @type {number}
    */
    'label': number | null;
    /**
    * The IDs of labels assigned to the person. When the `label_ids` field is updated, the `label` field value will be set to the first value of the `label_ids` field.
    * @type {Array<number>}
    */
    'label_ids': Array<number>;
    /**
    * The BCC email associated with the person
    * @type {string}
    */
    'cc_email': string;
}

