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
import { GetProjectBoardsResponse200DataInner } from './get-project-boards-response200-data-inner';

/**
 * 
 * @export
 * @interface GetProjectBoardResponse200
 */
export interface GetProjectBoardResponse200 {
    /**
     * 
     * @type {boolean}
     * @memberof GetProjectBoardResponse200
     */
    'success'?: boolean;
    /**
     * 
     * @type {GetProjectBoardsResponse200DataInner}
     * @memberof GetProjectBoardResponse200
     */
    'data'?: GetProjectBoardsResponse200DataInner;
    /**
     * 
     * @type {object}
     * @memberof GetProjectBoardResponse200
     */
    'additional_data'?: object | null;
}

