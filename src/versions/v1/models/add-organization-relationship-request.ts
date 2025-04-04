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
* @interface AddOrganizationRelationshipRequest
*/
export interface AddOrganizationRelationshipRequest {
    /**
    * The type of organization relationship
    * @type {string}
    */
    'type': AddOrganizationRelationshipRequestTypeConst;
    /**
    * The owner of the relationship. If type is `parent`, then the owner is the parent and the linked organization is the daughter.
    * @type {number}
    */
    'rel_owner_org_id': number;
    /**
    * The linked organization in the relationship. If type is `parent`, then the linked organization is the daughter.
    * @type {number}
    */
    'rel_linked_org_id': number;
    /**
    * The ID of the base organization for the returned calculated values
    * @type {number}
    */
    'org_id'?: number;
}

                export const AddOrganizationRelationshipRequestTypeConst = {
                        parent: 'parent',
                        related: 'related'
                } as const;

                export type AddOrganizationRelationshipRequestTypeConst = typeof AddOrganizationRelationshipRequestTypeConst[keyof typeof AddOrganizationRelationshipRequestTypeConst];


