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
import { PictureDataPictures } from './picture-data-pictures';

/**
* 
* @export
* @interface PictureData
*/
export interface PictureData {
    /**
    * The type of item the picture is related to
    * @type {string}
    */
    'item_type'?: string;
    /**
    * The ID of related item
    * @type {number}
    */
    'item_id'?: number;
    /**
    * Whether the associated picture is active or not
    * @type {boolean}
    */
    'active_flag'?: boolean;
    /**
    * The add time of the picture
    * @type {string}
    */
    'add_time'?: string;
    /**
    * The update time of the picture
    * @type {string}
    */
    'update_time'?: string;
    /**
    * The ID of the user who added the picture
    * @type {number}
    */
    'added_by_user_id'?: number;
    /**
    * 
    * @type {PictureDataPictures}
    */
    'pictures'?: PictureDataPictures;
}

