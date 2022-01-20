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
 * The GlobalMessageUserData model module.
 * @module model/GlobalMessageUserData
 * @version 1.0.0
 */
class GlobalMessageUserData {
    /**
     * Constructs a new <code>GlobalMessageUserData</code>.
     * The global message type info
     * @alias module:model/GlobalMessageUserData
     */
    constructor() { 
        
        GlobalMessageUserData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GlobalMessageUserData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GlobalMessageUserData} obj Optional instance to populate.
     * @return {module:model/GlobalMessageUserData} The populated <code>GlobalMessageUserData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GlobalMessageUserData();

            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = ApiClient.convertToType(data['message_type'], 'String');

                delete data['message_type'];
            }
            if (data.hasOwnProperty('dismissible_flag')) {
                obj['dismissible_flag'] = ApiClient.convertToType(data['dismissible_flag'], 'Boolean');

                delete data['dismissible_flag'];
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');

                delete data['priority'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The global message type for validation checks
 * @member {String} message_type
 */
GlobalMessageUserData.prototype['message_type'] = undefined;

/**
 * Whether a user can dismiss the global message or not
 * @member {Boolean} dismissible_flag
 */
GlobalMessageUserData.prototype['dismissible_flag'] = undefined;

/**
 * Sorts messages by priority DESC (from 0 to 10)
 * @member {Number} priority
 */
GlobalMessageUserData.prototype['priority'] = undefined;






export default GlobalMessageUserData;

