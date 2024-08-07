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
 *
 */

import ApiClient from '../ApiClient';
import BasePersonItemPhone from './BasePersonItemPhone';
import BasicPersonEmail from './BasicPersonEmail';

/**
 * The PersonsCollectionResponseObject model module.
 * @module model/PersonsCollectionResponseObject
 * @version 1.0.0
 */
class PersonsCollectionResponseObject {
    /**
     * Constructs a new <code>PersonsCollectionResponseObject</code>.
     * @alias module:model/PersonsCollectionResponseObject
     */
    constructor() { 
        
        PersonsCollectionResponseObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonsCollectionResponseObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonsCollectionResponseObject} obj Optional instance to populate.
     * @return {module:model/PersonsCollectionResponseObject} The populated <code>PersonsCollectionResponseObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonsCollectionResponseObject();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], [BasicPersonEmail]);

                delete data['email'];
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], [BasePersonItemPhone]);

                delete data['phone'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('delete_time')) {
                obj['delete_time'] = ApiClient.convertToType(data['delete_time'], 'String');

                delete data['delete_time'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], 'String');

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('picture_id')) {
                obj['picture_id'] = ApiClient.convertToType(data['picture_id'], 'Number');

                delete data['picture_id'];
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'Number');

                delete data['label'];
            }
            if (data.hasOwnProperty('label_ids')) {
                obj['label_ids'] = ApiClient.convertToType(data['label_ids'], ['Number']);

                delete data['label_ids'];
            }
            if (data.hasOwnProperty('cc_email')) {
                obj['cc_email'] = ApiClient.convertToType(data['cc_email'], 'String');

                delete data['cc_email'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the person
 * @member {Number} id
 */
PersonsCollectionResponseObject.prototype['id'] = undefined;

/**
 * Whether the person is active or not
 * @member {Boolean} active_flag
 */
PersonsCollectionResponseObject.prototype['active_flag'] = undefined;

/**
 * The ID of the owner related to the person
 * @member {Number} owner_id
 */
PersonsCollectionResponseObject.prototype['owner_id'] = undefined;

/**
 * The ID of the organization related to the person
 * @member {Number} org_id
 */
PersonsCollectionResponseObject.prototype['org_id'] = undefined;

/**
 * The name of the person
 * @member {String} name
 */
PersonsCollectionResponseObject.prototype['name'] = undefined;

/**
 * An email address as a string or an array of email objects related to the person. The structure of the array is as follows: `[{ \"value\": \"mail@example.com\", \"primary\": \"true\", \"label\": \"main\" }]`. Please note that only `value` is required.
 * @member {Array.<module:model/BasicPersonEmail>} email
 */
PersonsCollectionResponseObject.prototype['email'] = undefined;

/**
 * A phone number supplied as a string or an array of phone objects related to the person. The structure of the array is as follows: `[{ \"value\": \"12345\", \"primary\": \"true\", \"label\": \"mobile\" }]`. Please note that only `value` is required.
 * @member {Array.<module:model/BasePersonItemPhone>} phone
 */
PersonsCollectionResponseObject.prototype['phone'] = undefined;

/**
 * The last updated date and time of the person. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} update_time
 */
PersonsCollectionResponseObject.prototype['update_time'] = undefined;

/**
 * The date and time this person was deleted. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} delete_time
 */
PersonsCollectionResponseObject.prototype['delete_time'] = undefined;

/**
 * The date and time when the person was added/created. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
PersonsCollectionResponseObject.prototype['add_time'] = undefined;

/**
 * The visibility group ID of who can see the person
 * @member {String} visible_to
 */
PersonsCollectionResponseObject.prototype['visible_to'] = undefined;

/**
 * The ID of the picture associated with the item
 * @member {Number} picture_id
 */
PersonsCollectionResponseObject.prototype['picture_id'] = undefined;

/**
 * The label assigned to the person. When the label field is updated, the label_ids field value will be overwritten by the label field value.
 * @member {Number} label
 */
PersonsCollectionResponseObject.prototype['label'] = undefined;

/**
 * The IDs of labels assigned to the person. When the label_ids field is updated, the label field value will be set to the first value of the label_ids field.
 * @member {Array.<Number>} label_ids
 */
PersonsCollectionResponseObject.prototype['label_ids'] = undefined;

/**
 * The BCC email associated with the person
 * @member {String} cc_email
 */
PersonsCollectionResponseObject.prototype['cc_email'] = undefined;






export default PersonsCollectionResponseObject;
