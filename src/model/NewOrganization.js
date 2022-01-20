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
import BasicOrganization from './BasicOrganization';
import NewOrganizationAllOf from './NewOrganizationAllOf';
import VisibleTo from './VisibleTo';

/**
 * The NewOrganization model module.
 * @module model/NewOrganization
 * @version 1.0.0
 */
class NewOrganization {
    /**
     * Constructs a new <code>NewOrganization</code>.
     * @alias module:model/NewOrganization
     * @implements module:model/BasicOrganization
     * @implements module:model/NewOrganizationAllOf
     * @param name {String} The name of the organization
     */
    constructor(name) { 
        BasicOrganization.initialize(this);NewOrganizationAllOf.initialize(this);
        NewOrganization.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>NewOrganization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewOrganization} obj Optional instance to populate.
     * @return {module:model/NewOrganization} The populated <code>NewOrganization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewOrganization();
            BasicOrganization.constructFromObject(data, obj);
            NewOrganizationAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], VisibleTo);

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The name of the organization
 * @member {String} name
 */
NewOrganization.prototype['name'] = undefined;

/**
 * The ID of the user who will be marked as the owner of this organization. When omitted, the authorized user ID will be used.
 * @member {Number} owner_id
 */
NewOrganization.prototype['owner_id'] = undefined;

/**
 * The visibility of the organization. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user.<table><tr><th>Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers (private)</td></tr><tr><td>`3`</td><td>Entire company (shared)</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
NewOrganization.prototype['visible_to'] = undefined;

/**
 * The optional creation date & time of the organization in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
NewOrganization.prototype['add_time'] = undefined;


// Implement BasicOrganization interface:
/**
 * The name of the organization
 * @member {String} name
 */
BasicOrganization.prototype['name'] = undefined;
/**
 * The ID of the user who will be marked as the owner of this organization. When omitted, the authorized user ID will be used.
 * @member {Number} owner_id
 */
BasicOrganization.prototype['owner_id'] = undefined;
/**
 * The visibility of the organization. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user.<table><tr><th>Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers (private)</td></tr><tr><td>`3`</td><td>Entire company (shared)</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
BasicOrganization.prototype['visible_to'] = undefined;
// Implement NewOrganizationAllOf interface:
/**
 * The optional creation date & time of the organization in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
NewOrganizationAllOf.prototype['add_time'] = undefined;




export default NewOrganization;

