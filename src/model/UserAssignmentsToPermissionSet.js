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
import BaseResponse from './BaseResponse';
import UserAssignmentToPermissionSet from './UserAssignmentToPermissionSet';
import UserAssignmentsToPermissionSetAllOf from './UserAssignmentsToPermissionSetAllOf';

/**
 * The UserAssignmentsToPermissionSet model module.
 * @module model/UserAssignmentsToPermissionSet
 * @version 1.0.0
 */
class UserAssignmentsToPermissionSet {
    /**
     * Constructs a new <code>UserAssignmentsToPermissionSet</code>.
     * @alias module:model/UserAssignmentsToPermissionSet
     * @implements module:model/BaseResponse
     * @implements module:model/UserAssignmentsToPermissionSetAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);UserAssignmentsToPermissionSetAllOf.initialize(this);
        UserAssignmentsToPermissionSet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserAssignmentsToPermissionSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserAssignmentsToPermissionSet} obj Optional instance to populate.
     * @return {module:model/UserAssignmentsToPermissionSet} The populated <code>UserAssignmentsToPermissionSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserAssignmentsToPermissionSet();
            BaseResponse.constructFromObject(data, obj);
            UserAssignmentsToPermissionSetAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [UserAssignmentToPermissionSet]);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * If the response is successful or not
 * @member {Boolean} success
 */
UserAssignmentsToPermissionSet.prototype['success'] = undefined;

/**
 * An array of the assignments of the user
 * @member {Array.<module:model/UserAssignmentToPermissionSet>} data
 */
UserAssignmentsToPermissionSet.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement UserAssignmentsToPermissionSetAllOf interface:
/**
 * An array of the assignments of the user
 * @member {Array.<module:model/UserAssignmentToPermissionSet>} data
 */
UserAssignmentsToPermissionSetAllOf.prototype['data'] = undefined;




export default UserAssignmentsToPermissionSet;

