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
 * The PersonNameCountAndEmailInfoWithIdsAllOf model module.
 * @module model/PersonNameCountAndEmailInfoWithIdsAllOf
 * @version 1.0.0
 */
class PersonNameCountAndEmailInfoWithIdsAllOf {
    /**
     * Constructs a new <code>PersonNameCountAndEmailInfoWithIdsAllOf</code>.
     * @alias module:model/PersonNameCountAndEmailInfoWithIdsAllOf
     */
    constructor() { 
        
        PersonNameCountAndEmailInfoWithIdsAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonNameCountAndEmailInfoWithIdsAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonNameCountAndEmailInfoWithIdsAllOf} obj Optional instance to populate.
     * @return {module:model/PersonNameCountAndEmailInfoWithIdsAllOf} The populated <code>PersonNameCountAndEmailInfoWithIdsAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonNameCountAndEmailInfoWithIdsAllOf();

            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }
            if (data.hasOwnProperty('merge_what_id')) {
                obj['merge_what_id'] = ApiClient.convertToType(data['merge_what_id'], 'Number');

                delete data['merge_what_id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the owner related to the person
 * @member {Number} owner_id
 */
PersonNameCountAndEmailInfoWithIdsAllOf.prototype['owner_id'] = undefined;

/**
 * The ID of the organization related to the person
 * @member {Number} org_id
 */
PersonNameCountAndEmailInfoWithIdsAllOf.prototype['org_id'] = undefined;

/**
 * The ID of the person with what the main person was merged
 * @member {Number} merge_what_id
 */
PersonNameCountAndEmailInfoWithIdsAllOf.prototype['merge_what_id'] = undefined;






export default PersonNameCountAndEmailInfoWithIdsAllOf;

