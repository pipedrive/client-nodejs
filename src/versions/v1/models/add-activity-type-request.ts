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
* @interface AddActivityTypeRequest
*/
export interface AddActivityTypeRequest {
    /**
    * The name of the activity type
    * @type {string}
    */
    'name': string;
    /**
    * Icon graphic to use for representing this activity type
    * @type {string}
    */
    'icon_key': AddActivityTypeRequestIconKeyConst;
    /**
    * A designated color for the activity type in 6-character HEX format (e.g. `FFFFFF` for white, `000000` for black)
    * @type {string}
    */
    'color'?: string;
}

                export const AddActivityTypeRequestIconKeyConst = {
                        task: 'task',
                        email: 'email',
                        meeting: 'meeting',
                        deadline: 'deadline',
                        call: 'call',
                        lunch: 'lunch',
                        calendar: 'calendar',
                        downarrow: 'downarrow',
                        document: 'document',
                        smartphone: 'smartphone',
                        camera: 'camera',
                        scissors: 'scissors',
                        cogs: 'cogs',
                        bubble: 'bubble',
                        uparrow: 'uparrow',
                        checkbox: 'checkbox',
                        signpost: 'signpost',
                        shuffle: 'shuffle',
                        addressbook: 'addressbook',
                        linegraph: 'linegraph',
                        picture: 'picture',
                        car: 'car',
                        world: 'world',
                        search: 'search',
                        clip: 'clip',
                        sound: 'sound',
                        brush: 'brush',
                        key: 'key',
                        padlock: 'padlock',
                        pricetag: 'pricetag',
                        suitcase: 'suitcase',
                        finish: 'finish',
                        plane: 'plane',
                        loop: 'loop',
                        wifi: 'wifi',
                        truck: 'truck',
                        cart: 'cart',
                        bulb: 'bulb',
                        bell: 'bell',
                        presentation: 'presentation'
                } as const;

                export type AddActivityTypeRequestIconKeyConst = typeof AddActivityTypeRequestIconKeyConst[keyof typeof AddActivityTypeRequestIconKeyConst];


