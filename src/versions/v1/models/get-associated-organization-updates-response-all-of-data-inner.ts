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
* @interface GetAssociatedOrganizationUpdatesResponseAllOfDataInner
*/
export interface GetAssociatedOrganizationUpdatesResponseAllOfDataInner {
    /**
    * The type of the person update. (Possible object types - organizationChange, dealChange, file, activity)
    * @type {string}
    */
    'object'?: string;
    /**
    * The creation date and time of the update
    * @type {string}
    */
    'timestamp'?: string;
    /**
    * The data related to the update
    * @type {object}
    */
    'data'?: object;
}

