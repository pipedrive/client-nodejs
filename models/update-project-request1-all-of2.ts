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
 * @interface UpdateProjectRequest1AllOf2
 */
export interface UpdateProjectRequest1AllOf2 {
    /**
     * The creator of a task
     * @type {number}
     * @memberof UpdateProjectRequest1AllOf2
     */
    'creator_id'?: number;
    /**
     * The creation date and time of the task in UTC. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof UpdateProjectRequest1AllOf2
     */
    'add_time'?: string;
    /**
     * The update date and time of the task in UTC. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof UpdateProjectRequest1AllOf2
     */
    'update_time'?: string;
    /**
     * The marked as done date and time of the task in UTC. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof UpdateProjectRequest1AllOf2
     */
    'marked_as_done_time'?: string;
}
