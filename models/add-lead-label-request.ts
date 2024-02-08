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
 * @interface AddLeadLabelRequest
 */
export interface AddLeadLabelRequest {
    /**
     * The name of the lead label
     * @type {string}
     * @memberof AddLeadLabelRequest
     */
    'name': string;
    /**
     * The color of the label. Only a subset of colors can be used.
     * @type {string}
     * @memberof AddLeadLabelRequest
     */
    'color': AddLeadLabelRequestColorConst;
}

export const AddLeadLabelRequestColorConst = {
    green: 'green',
    blue: 'blue',
    red: 'red',
    yellow: 'yellow',
    purple: 'purple',
    gray: 'gray'
} as const;

export type AddLeadLabelRequestColorConst = typeof AddLeadLabelRequestColorConst[keyof typeof AddLeadLabelRequestColorConst];


