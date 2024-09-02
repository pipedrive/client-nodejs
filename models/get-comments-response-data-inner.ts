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
 * @interface GetCommentsResponseDataInner
 */
export interface GetCommentsResponseDataInner {
    /**
     * The ID of the note
     * @type {string}
     * @memberof GetCommentsResponseDataInner
     */
    'uuid'?: string;
    /**
     * Whether the note is active or deleted
     * @type {boolean}
     * @memberof GetCommentsResponseDataInner
     */
    'active_flag'?: boolean;
    /**
     * The creation date and time of the note
     * @type {string}
     * @memberof GetCommentsResponseDataInner
     */
    'add_time'?: string;
    /**
     * The creation date and time of the note
     * @type {string}
     * @memberof GetCommentsResponseDataInner
     */
    'update_time'?: string;
    /**
     * The content of the note in HTML format. Subject to sanitization on the back-end.
     * @type {string}
     * @memberof GetCommentsResponseDataInner
     */
    'content'?: string;
    /**
     * The ID of the object that the comment is attached to, will be the id of the note
     * @type {string}
     * @memberof GetCommentsResponseDataInner
     */
    'object_id'?: string;
    /**
     * The type of object that the comment is attached to, will be \"note\"
     * @type {string}
     * @memberof GetCommentsResponseDataInner
     */
    'object_type'?: string;
    /**
     * The ID of the user who created the comment
     * @type {number}
     * @memberof GetCommentsResponseDataInner
     */
    'user_id'?: number;
    /**
     * The ID of the user who last updated the comment
     * @type {number}
     * @memberof GetCommentsResponseDataInner
     */
    'updater_id'?: number;
    /**
     * The ID of the company
     * @type {number}
     * @memberof GetCommentsResponseDataInner
     */
    'company_id'?: number;
}

