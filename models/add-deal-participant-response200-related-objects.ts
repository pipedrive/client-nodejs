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
import { GetActivitiesResponse200RelatedObjectsUser } from './get-activities-response200-related-objects-user';

/**
 * 
 * @export
 * @interface AddDealParticipantResponse200RelatedObjects
 */
export interface AddDealParticipantResponse200RelatedObjects {
    /**
     * 
     * @type {GetActivitiesResponse200RelatedObjectsUser}
     * @memberof AddDealParticipantResponse200RelatedObjects
     */
    'user'?: GetActivitiesResponse200RelatedObjectsUser;
    /**
     * 
     * @type {AddActivityResponse200RelatedObjectsPerson}
     * @memberof AddDealParticipantResponse200RelatedObjects
     */
    'person'?: AddActivityResponse200RelatedObjectsPerson;
}

