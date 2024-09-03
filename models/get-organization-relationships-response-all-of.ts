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
import { GetFieldsResponseAllOfAdditionalData } from './get-fields-response-all-of-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { GetOrganizationRelationshipsResponseAllOfRelatedObjects } from './get-organization-relationships-response-all-of-related-objects';
// May contain unused imports in some cases
// @ts-ignore
import { OrganizationRelationshipDetails } from './organization-relationship-details';

/**
 * 
 * @export
 * @interface GetOrganizationRelationshipsResponseAllOf
 */
export interface GetOrganizationRelationshipsResponseAllOf {
    /**
     * The array of organization relationships
     * @type {Array<OrganizationRelationshipDetails>}
     * @memberof GetOrganizationRelationshipsResponseAllOf
     */
    'data'?: Array<OrganizationRelationshipDetails>;
    /**
     * 
     * @type {GetFieldsResponseAllOfAdditionalData}
     * @memberof GetOrganizationRelationshipsResponseAllOf
     */
    'additional_data'?: GetFieldsResponseAllOfAdditionalData;
    /**
     * 
     * @type {GetOrganizationRelationshipsResponseAllOfRelatedObjects}
     * @memberof GetOrganizationRelationshipsResponseAllOf
     */
    'related_objects'?: GetOrganizationRelationshipsResponseAllOfRelatedObjects;
}
