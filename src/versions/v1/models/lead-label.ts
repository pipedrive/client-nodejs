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
* @interface LeadLabel
*/
export interface LeadLabel {
    /**
    * The unique ID of the lead label
    * @type {string}
    */
    'id': string;
    /**
    * The name of the lead label
    * @type {string}
    */
    'name': string;
    /**
    * The color of the label. Only a subset of colors can be used.
    * @type {string}
    */
    'color': LeadLabelColorConst;
    /**
    * The date and time of when the lead label was created. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
    * @type {string}
    */
    'add_time': string;
    /**
    * The date and time of when the lead label was last updated. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
    * @type {string}
    */
    'update_time': string;
}

                export const LeadLabelColorConst = {
                        blue: 'blue',
                        brown: 'brown',
                        dark_gray: 'dark-gray',
                        gray: 'gray',
                        green: 'green',
                        orange: 'orange',
                        pink: 'pink',
                        purple: 'purple',
                        red: 'red',
                        yellow: 'yellow'
                } as const;

                export type LeadLabelColorConst = typeof LeadLabelColorConst[keyof typeof LeadLabelColorConst];


