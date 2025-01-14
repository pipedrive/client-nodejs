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
 * The AddProductRequestBodyAllOf1 model module.
 * @module model/AddProductRequestBodyAllOf1
 * @version 1.0.0
 */
class AddProductRequestBodyAllOf1 {
    /**
     * Constructs a new <code>AddProductRequestBodyAllOf1</code>.
     * @alias module:model/AddProductRequestBodyAllOf1
     */
    constructor() { 
        
        AddProductRequestBodyAllOf1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddProductRequestBodyAllOf1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddProductRequestBodyAllOf1} obj Optional instance to populate.
     * @return {module:model/AddProductRequestBodyAllOf1} The populated <code>AddProductRequestBodyAllOf1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddProductRequestBodyAllOf1();

            if (data.hasOwnProperty('billing_frequency_cycles')) {
                obj['billing_frequency_cycles'] = ApiClient.convertToType(data['billing_frequency_cycles'], 'Number');

                delete data['billing_frequency_cycles'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * Only available in Advanced and above plans  The number of times the billing frequency repeats for a product in a deal  When `billing_frequency` is set to `one-time`, this field must be `null`  For all the other values of `billing_frequency`, `null` represents a product billed indefinitely  Must be a positive integer less or equal to 208 
 * @member {Number} billing_frequency_cycles
 */
AddProductRequestBodyAllOf1.prototype['billing_frequency_cycles'] = undefined;






export default AddProductRequestBodyAllOf1;

