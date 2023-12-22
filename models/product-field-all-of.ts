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
 * @interface ProductFieldAllOf
 */
export interface ProductFieldAllOf {
    /**
     * The name of the field
     * @type {string}
     * @memberof ProductFieldAllOf
     */
    'name': string;
    /**
     * The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (up to 65k characters)</td><tr><td>`double`</td><td>Numeric value</td><tr><td>`monetary`</td><td>Monetary field (has a numeric value and a currency value)</td><tr><td>`date`</td><td>Date (format YYYY-MM-DD)</td><tr><td>`set`</td><td>Options field with a possibility of having multiple chosen options</td><tr><td>`enum`</td><td>Options field with a single possible chosen option</td><tr><td>`user`</td><td>User field (contains a user ID of another Pipedrive user)</td><tr><td>`org`</td><td>Organization field (contains an organization ID which is stored on the same account)</td><tr><td>`people`</td><td>Person field (contains a product ID which is stored on the same account)</td><tr><td>`phone`</td><td>Phone field (up to 255 numbers and/or characters)</td><tr><td>`time`</td><td>Time field (format HH:MM:SS)</td><tr><td>`timerange`</td><td>Time-range field (has a start time and end time value, both HH:MM:SS)</td><tr><td>`daterange`</td><td>Date-range field (has a start date and end date value, both YYYY-MM-DD)</td><tr><td>`address`</td><td>Address field (autocompleted by Google Maps)</dd></table>
     * @type {string}
     * @memberof ProductFieldAllOf
     */
    'field_type': ProductFieldAllOfFieldTypeConst;
    /**
     * When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{\"label\":\"red\"}, {\"label\":\"blue\"}, {\"label\":\"lilac\"}]`
     * @type {Array<object>}
     * @memberof ProductFieldAllOf
     */
    'options'?: Array<object>;
}

export const ProductFieldAllOfFieldTypeConst = {
    varchar: 'varchar',
    varchar_auto: 'varchar_auto',
    text: 'text',
    double: 'double',
    monetary: 'monetary',
    date: 'date',
    set: 'set',
    enum: 'enum',
    user: 'user',
    org: 'org',
    people: 'people',
    phone: 'phone',
    time: 'time',
    timerange: 'timerange',
    daterange: 'daterange',
    address: 'address'
} as const;

export type ProductFieldAllOfFieldTypeConst = typeof ProductFieldAllOfFieldTypeConst[keyof typeof ProductFieldAllOfFieldTypeConst];

