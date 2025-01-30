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
* @interface UpdateLeadLabelRequest
*/
export interface UpdateLeadLabelRequest {
    /**
    * The name of the lead label
    * @type {string}
    */
    'name'?: string;
    /**
    * The color of the label. Only a subset of colors can be used.
    * @type {string}
    */
    'color'?: UpdateLeadLabelRequestColorConst;
}

                export const UpdateLeadLabelRequestColorConst = {
                        green: 'green',
                        blue: 'blue',
                        red: 'red',
                        yellow: 'yellow',
                        purple: 'purple',
                        gray: 'gray'
                } as const;

                export type UpdateLeadLabelRequestColorConst = typeof UpdateLeadLabelRequestColorConst[keyof typeof UpdateLeadLabelRequestColorConst];


