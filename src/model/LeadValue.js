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
 * The LeadValue model module.
 * @module model/LeadValue
 * @version 1.0.0
 */
class LeadValue {
    /**
     * Constructs a new <code>LeadValue</code>.
     * The potential value of the lead
     * @alias module:model/LeadValue
     * @param amount {Number} 
     * @param currency {String} 
     */
    constructor(amount, currency) { 
        
        LeadValue.initialize(this, amount, currency);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, currency) { 
        obj['amount'] = amount;
        obj['currency'] = currency;
    }

    /**
     * Constructs a <code>LeadValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeadValue} obj Optional instance to populate.
     * @return {module:model/LeadValue} The populated <code>LeadValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeadValue();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');

                delete data['amount'];
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');

                delete data['currency'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {Number} amount
 */
LeadValue.prototype['amount'] = undefined;

/**
 * @member {String} currency
 */
LeadValue.prototype['currency'] = undefined;






export default LeadValue;

