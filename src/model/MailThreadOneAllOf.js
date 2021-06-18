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
import BaseMailThread from './BaseMailThread';

/**
 * The MailThreadOneAllOf model module.
 * @module model/MailThreadOneAllOf
 * @version 1.0.0
 */
class MailThreadOneAllOf {
    /**
     * Constructs a new <code>MailThreadOneAllOf</code>.
     * @alias module:model/MailThreadOneAllOf
     */
    constructor() { 
        
        MailThreadOneAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MailThreadOneAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MailThreadOneAllOf} obj Optional instance to populate.
     * @return {module:model/MailThreadOneAllOf} The populated <code>MailThreadOneAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MailThreadOneAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], BaseMailThread);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The mail thread object
 * @member {module:model/BaseMailThread} data
 */
MailThreadOneAllOf.prototype['data'] = undefined;






export default MailThreadOneAllOf;
