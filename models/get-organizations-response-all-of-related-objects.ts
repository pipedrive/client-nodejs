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
import { GetActivitiesResponseRelatedObjectsOrganization } from './get-activities-response-related-objects-organization';
// May contain unused imports in some cases
// @ts-ignore
import { GetActivitiesResponseRelatedObjectsUser } from './get-activities-response-related-objects-user';
// May contain unused imports in some cases
// @ts-ignore
import { GetOrganizationsResponseAllOfRelatedObjectsPicture } from './get-organizations-response-all-of-related-objects-picture';

/**
 * 
 * @export
 * @interface GetOrganizationsResponseAllOfRelatedObjects
 */
export interface GetOrganizationsResponseAllOfRelatedObjects {
    /**
     * 
     * @type {GetActivitiesResponseRelatedObjectsOrganization}
     * @memberof GetOrganizationsResponseAllOfRelatedObjects
     */
    'organization'?: GetActivitiesResponseRelatedObjectsOrganization;
    /**
     * 
     * @type {GetActivitiesResponseRelatedObjectsUser}
     * @memberof GetOrganizationsResponseAllOfRelatedObjects
     */
    'user'?: GetActivitiesResponseRelatedObjectsUser;
    /**
     * 
     * @type {GetOrganizationsResponseAllOfRelatedObjectsPicture}
     * @memberof GetOrganizationsResponseAllOfRelatedObjects
     */
    'picture'?: GetOrganizationsResponseAllOfRelatedObjectsPicture;
}

