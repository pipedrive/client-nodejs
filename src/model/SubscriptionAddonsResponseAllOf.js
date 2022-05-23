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
 * The SubscriptionAddonsResponseAllOf model module.
 * @module model/SubscriptionAddonsResponseAllOf
 * @version 1.0.0
 */
class SubscriptionAddonsResponseAllOf {
    /**
     * Constructs a new <code>SubscriptionAddonsResponseAllOf</code>.
     * @alias module:model/SubscriptionAddonsResponseAllOf
     */
    constructor() { 
        
        SubscriptionAddonsResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubscriptionAddonsResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubscriptionAddonsResponseAllOf} obj Optional instance to populate.
     * @return {module:model/SubscriptionAddonsResponseAllOf} The populated <code>SubscriptionAddonsResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionAddonsResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Object]);

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
 * An array of add-ons that the company has.
 * @member {Array.<Object>} data
 */
SubscriptionAddonsResponseAllOf.prototype['data'] = undefined;






export default SubscriptionAddonsResponseAllOf;
