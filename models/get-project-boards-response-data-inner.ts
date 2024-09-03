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
 * @interface GetProjectBoardsResponseDataInner
 */
export interface GetProjectBoardsResponseDataInner {
    /**
     * The ID of the project board
     * @type {number}
     * @memberof GetProjectBoardsResponseDataInner
     */
    'id'?: number;
    /**
     * Name of a project board
     * @type {string}
     * @memberof GetProjectBoardsResponseDataInner
     */
    'name'?: string;
    /**
     * The order of a board
     * @type {number}
     * @memberof GetProjectBoardsResponseDataInner
     */
    'order_nr'?: number;
    /**
     * The creation date and time of the board in UTC. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof GetProjectBoardsResponseDataInner
     */
    'add_time'?: string;
    /**
     * The update date and time of the board in UTC. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof GetProjectBoardsResponseDataInner
     */
    'update_time'?: string;
}
