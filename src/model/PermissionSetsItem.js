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
 * The PermissionSetsItem model module.
 * @module model/PermissionSetsItem
 * @version 1.0.0
 */
class PermissionSetsItem {
    /**
     * Constructs a new <code>PermissionSetsItem</code>.
     * @alias module:model/PermissionSetsItem
     */
    constructor() { 
        
        PermissionSetsItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionSetsItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionSetsItem} obj Optional instance to populate.
     * @return {module:model/PermissionSetsItem} The populated <code>PermissionSetsItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionSetsItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');

                delete data['description'];
            }
            if (data.hasOwnProperty('app')) {
                obj['app'] = ApiClient.convertToType(data['app'], 'String');

                delete data['app'];
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');

                delete data['type'];
            }
            if (data.hasOwnProperty('assignment_count')) {
                obj['assignment_count'] = ApiClient.convertToType(data['assignment_count'], 'Number');

                delete data['assignment_count'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of user permission set
 * @member {String} id
 */
PermissionSetsItem.prototype['id'] = undefined;

/**
 * The name of the permission set
 * @member {String} name
 */
PermissionSetsItem.prototype['name'] = undefined;

/**
 * The description of the permission set
 * @member {String} description
 */
PermissionSetsItem.prototype['description'] = undefined;

/**
 * The app that permission set belongs to
 * @member {module:model/PermissionSetsItem.AppEnum} app
 */
PermissionSetsItem.prototype['app'] = undefined;

/**
 * The type of permission set
 * @member {module:model/PermissionSetsItem.TypeEnum} type
 */
PermissionSetsItem.prototype['type'] = undefined;

/**
 * The number of users assigned to this permission set
 * @member {Number} assignment_count
 */
PermissionSetsItem.prototype['assignment_count'] = undefined;





/**
 * Allowed values for the <code>app</code> property.
 * @enum {String}
 * @readonly
 */
PermissionSetsItem['AppEnum'] = {

    /**
     * value: "sales"
     * @const
     */
    "sales": "sales",

    /**
     * value: "projects"
     * @const
     */
    "projects": "projects",

    /**
     * value: "campaigns"
     * @const
     */
    "campaigns": "campaigns",

    /**
     * value: "global"
     * @const
     */
    "global": "global",

    /**
     * value: "account_settings"
     * @const
     */
    "account_settings": "account_settings"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
PermissionSetsItem['TypeEnum'] = {

    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",

    /**
     * value: "manager"
     * @const
     */
    "manager": "manager",

    /**
     * value: "regular"
     * @const
     */
    "regular": "regular",

    /**
     * value: "custom"
     * @const
     */
    "custom": "custom"
};



export default PermissionSetsItem;

