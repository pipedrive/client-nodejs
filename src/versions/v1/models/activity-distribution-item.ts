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
import { ActivityTypeCount } from './activity-type-count';

/**
* The ID of the user
* @export
* @interface ActivityDistributionItem
*/
export interface ActivityDistributionItem {
    /**
    * 
    * @type {ActivityTypeCount}
    */
    'activities'?: ActivityTypeCount;
    /**
    * The name of the user
    * @type {string}
    */
    'name'?: string;
    /**
    * The overall count of activities for the user
    * @type {number}
    */
    'activity_count'?: number;
    /**
    * The percentage of activities belongs to the user
    * @type {number}
    */
    'share'?: number;
}

