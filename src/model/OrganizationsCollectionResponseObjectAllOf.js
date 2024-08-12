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

/**
 * The OrganizationsCollectionResponseObjectAllOf model module.
 * @module model/OrganizationsCollectionResponseObjectAllOf
 * @version 1.0.0
 */
class OrganizationsCollectionResponseObjectAllOf {
    /**
     * Constructs a new <code>OrganizationsCollectionResponseObjectAllOf</code>.
     * @alias module:model/OrganizationsCollectionResponseObjectAllOf
     */
    constructor() { 
        
        OrganizationsCollectionResponseObjectAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationsCollectionResponseObjectAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationsCollectionResponseObjectAllOf} obj Optional instance to populate.
     * @return {module:model/OrganizationsCollectionResponseObjectAllOf} The populated <code>OrganizationsCollectionResponseObjectAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationsCollectionResponseObjectAllOf();

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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
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
 * The ID of the organization
 * @member {Number} id
 */
OrganizationsCollectionResponseObjectAllOf.prototype['id'] = undefined;

/**
 * Whether the organization is active or not
 * @member {Boolean} active_flag
 */
OrganizationsCollectionResponseObjectAllOf.prototype['active_flag'] = undefined;

/**
 * The ID of the owner
 * @member {Number} owner_id
 */
OrganizationsCollectionResponseObjectAllOf.prototype['owner_id'] = undefined;

/**
 * The name of the organization
 * @member {String} name
 */
OrganizationsCollectionResponseObjectAllOf.prototype['name'] = undefined;

/**
 * The last updated date and time of the organization. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} update_time
 */
OrganizationsCollectionResponseObjectAllOf.prototype['update_time'] = undefined;

/**
 * The date and time this organization was deleted. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} delete_time
 */
OrganizationsCollectionResponseObjectAllOf.prototype['delete_time'] = undefined;

/**
 * The date and time when the organization was added/created. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
OrganizationsCollectionResponseObjectAllOf.prototype['add_time'] = undefined;

/**
 * The visibility group ID of who can see the organization
 * @member {String} visible_to
 */
OrganizationsCollectionResponseObjectAllOf.prototype['visible_to'] = undefined;

/**
 * The label assigned to the organization. When the `label` field is updated, the `label_ids` field value will be overwritten by the `label` field value.
 * @member {Number} label
 */
OrganizationsCollectionResponseObjectAllOf.prototype['label'] = undefined;

/**
 * The IDs of labels assigned to the organization. When the `label_ids` field is updated, the `label` field value will be set to the first value of the `label_ids` field.
 * @member {Array.<Number>} label_ids
 */
OrganizationsCollectionResponseObjectAllOf.prototype['label_ids'] = undefined;

/**
 * The BCC email associated with the organization
 * @member {String} cc_email
 */
OrganizationsCollectionResponseObjectAllOf.prototype['cc_email'] = undefined;






export default OrganizationsCollectionResponseObjectAllOf;

