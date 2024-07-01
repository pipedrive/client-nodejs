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
 * @interface CreateFieldRequestAllOf1
 */
export interface CreateFieldRequestAllOf1 {
    /**
     * The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`address`</td><td>Address field</td></tr><tr><td>`date`</td><td>Date (format YYYY-MM-DD)</td></tr><tr><td>`daterange`</td><td>Date-range field (has a start date and end date value, both YYYY-MM-DD)</td></tr><tr><td>`double`</td><td>Numeric value</td></tr><tr><td>`enum`</td><td>Options field with a single possible chosen option</td></tr><tr></tr><tr><td>`monetary`</td><td>Monetary field (has a numeric value and a currency value)</td></tr><tr><td>`org`</td><td>Organization field (contains an organization ID which is stored on the same account)</td></tr><tr><td>`people`</td><td>Person field (contains a person ID which is stored on the same account)</td></tr><tr><td>`phone`</td><td>Phone field (up to 255 numbers and/or characters)</td></tr><tr><td>`set`</td><td>Options field with a possibility of having multiple chosen options</td></tr><tr><td>`text`</td><td>Long text (up to 65k characters)</td></tr><tr><td>`time`</td><td>Time field (format HH:MM:SS)</td></tr><tr><td>`timerange`</td><td>Time-range field (has a start time and end time value, both HH:MM:SS)</td></tr><tr><td>`user`</td><td>User field (contains a user ID of another Pipedrive user)</td></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td></tr><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td></tr><tr><td>`visible_to`</td><td>System field that keeps item\'s visibility setting</td></tr></table>
     * @type {string}
     * @memberof CreateFieldRequestAllOf1
     */
    'field_type': CreateFieldRequestAllOf1FieldTypeConst;
}

export const CreateFieldRequestAllOf1FieldTypeConst = {
    address: 'address',
    date: 'date',
    daterange: 'daterange',
    double: 'double',
    enum: 'enum',
    monetary: 'monetary',
    org: 'org',
    people: 'people',
    phone: 'phone',
    set: 'set',
    text: 'text',
    time: 'time',
    timerange: 'timerange',
    user: 'user',
    varchar: 'varchar',
    varchar_auto: 'varchar_auto',
    visible_to: 'visible_to'
} as const;

export type CreateFieldRequestAllOf1FieldTypeConst = typeof CreateFieldRequestAllOf1FieldTypeConst[keyof typeof CreateFieldRequestAllOf1FieldTypeConst];


