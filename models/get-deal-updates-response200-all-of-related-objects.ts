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
import { AddActivityResponse200RelatedObjectsPerson } from './add-activity-response200-related-objects-person';
// May contain unused imports in some cases
// @ts-ignore
import { GetActivitiesResponse200RelatedObjectsDeal } from './get-activities-response200-related-objects-deal';
// May contain unused imports in some cases
// @ts-ignore
import { GetActivitiesResponse200RelatedObjectsOrganization } from './get-activities-response200-related-objects-organization';
// May contain unused imports in some cases
// @ts-ignore
import { GetActivitiesResponse200RelatedObjectsUser } from './get-activities-response200-related-objects-user';

/**
 * 
 * @export
 * @interface GetDealUpdatesResponse200AllOfRelatedObjects
 */
export interface GetDealUpdatesResponse200AllOfRelatedObjects {
    /**
     * 
     * @type {GetActivitiesResponse200RelatedObjectsDeal}
     * @memberof GetDealUpdatesResponse200AllOfRelatedObjects
     */
    'deal'?: GetActivitiesResponse200RelatedObjectsDeal;
    /**
     * 
     * @type {GetActivitiesResponse200RelatedObjectsOrganization}
     * @memberof GetDealUpdatesResponse200AllOfRelatedObjects
     */
    'organization'?: GetActivitiesResponse200RelatedObjectsOrganization;
    /**
     * 
     * @type {GetActivitiesResponse200RelatedObjectsUser}
     * @memberof GetDealUpdatesResponse200AllOfRelatedObjects
     */
    'user'?: GetActivitiesResponse200RelatedObjectsUser;
    /**
     * 
     * @type {AddActivityResponse200RelatedObjectsPerson}
     * @memberof GetDealUpdatesResponse200AllOfRelatedObjects
     */
    'person'?: AddActivityResponse200RelatedObjectsPerson;
}

