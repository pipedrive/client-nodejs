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
 * @interface GetProjectPhasesResponseDataInner
 */
export interface GetProjectPhasesResponseDataInner {
    /**
     * The ID of the project phase
     * @type {number}
     * @memberof GetProjectPhasesResponseDataInner
     */
    'id'?: number;
    /**
     * Name of a project phase
     * @type {string}
     * @memberof GetProjectPhasesResponseDataInner
     */
    'name'?: string;
    /**
     * The ID of the project board this phase is linked to
     * @type {number}
     * @memberof GetProjectPhasesResponseDataInner
     */
    'board_id'?: number;
    /**
     * The order of a phase
     * @type {number}
     * @memberof GetProjectPhasesResponseDataInner
     */
    'order_nr'?: number;
    /**
     * The creation date and time of the board in UTC. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof GetProjectPhasesResponseDataInner
     */
    'add_time'?: string;
    /**
     * The update date and time of the board in UTC. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof GetProjectPhasesResponseDataInner
     */
    'update_time'?: string;
}
