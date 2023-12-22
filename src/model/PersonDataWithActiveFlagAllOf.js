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
 * The PersonDataWithActiveFlagAllOf model module.
 * @module model/PersonDataWithActiveFlagAllOf
 * @version 1.0.0
 */
class PersonDataWithActiveFlagAllOf {
    /**
     * Constructs a new <code>PersonDataWithActiveFlagAllOf</code>.
     * @alias module:model/PersonDataWithActiveFlagAllOf
     */
    constructor() { 
        
        PersonDataWithActiveFlagAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonDataWithActiveFlagAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonDataWithActiveFlagAllOf} obj Optional instance to populate.
     * @return {module:model/PersonDataWithActiveFlagAllOf} The populated <code>PersonDataWithActiveFlagAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonDataWithActiveFlagAllOf();

            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * Whether the associated person is active or not
 * @member {Boolean} active_flag
 */
PersonDataWithActiveFlagAllOf.prototype['active_flag'] = undefined;






export default PersonDataWithActiveFlagAllOf;
