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
 * @interface GetProjectPhasesResponse200DataInner
 */
export interface GetProjectPhasesResponse200DataInner {
    /**
     * The ID of the project phase
     * @type {number}
     * @memberof GetProjectPhasesResponse200DataInner
     */
    'id'?: number;
    /**
     * Name of a project phase
     * @type {string}
     * @memberof GetProjectPhasesResponse200DataInner
     */
    'name'?: string;
    /**
     * The ID of the project board this phase is linked to
     * @type {number}
     * @memberof GetProjectPhasesResponse200DataInner
     */
    'board_id'?: number;
    /**
     * The order of a phase
     * @type {number}
     * @memberof GetProjectPhasesResponse200DataInner
     */
    'order_nr'?: number;
    /**
     * The creation date and time of the board in UTC. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof GetProjectPhasesResponse200DataInner
     */
    'add_time'?: string;
    /**
     * The update date and time of the board in UTC. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof GetProjectPhasesResponse200DataInner
     */
    'update_time'?: string;
}

