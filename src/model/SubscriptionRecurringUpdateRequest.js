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
 * The SubscriptionRecurringUpdateRequest model module.
 * @module model/SubscriptionRecurringUpdateRequest
 * @version 1.0.0
 */
class SubscriptionRecurringUpdateRequest {
    /**
     * Constructs a new <code>SubscriptionRecurringUpdateRequest</code>.
     * @alias module:model/SubscriptionRecurringUpdateRequest
     * @param effectiveDate {Date} All payments after that date will be affected. Format: YYYY-MM-DD
     */
    constructor(effectiveDate) { 
        
        SubscriptionRecurringUpdateRequest.initialize(this, effectiveDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, effectiveDate) { 
        obj['effective_date'] = effectiveDate;
    }

    /**
     * Constructs a <code>SubscriptionRecurringUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubscriptionRecurringUpdateRequest} obj Optional instance to populate.
     * @return {module:model/SubscriptionRecurringUpdateRequest} The populated <code>SubscriptionRecurringUpdateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionRecurringUpdateRequest();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');

                delete data['description'];
            }
            if (data.hasOwnProperty('cycle_amount')) {
                obj['cycle_amount'] = ApiClient.convertToType(data['cycle_amount'], 'Number');

                delete data['cycle_amount'];
            }
            if (data.hasOwnProperty('payments')) {
                obj['payments'] = ApiClient.convertToType(data['payments'], [Object]);

                delete data['payments'];
            }
            if (data.hasOwnProperty('update_deal_value')) {
                obj['update_deal_value'] = ApiClient.convertToType(data['update_deal_value'], 'Boolean');

                delete data['update_deal_value'];
            }
            if (data.hasOwnProperty('effective_date')) {
                obj['effective_date'] = ApiClient.convertToType(data['effective_date'], 'Date');

                delete data['effective_date'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The description of the recurring subscription
 * @member {String} description
 */
SubscriptionRecurringUpdateRequest.prototype['description'] = undefined;

/**
 * The amount of each payment
 * @member {Number} cycle_amount
 */
SubscriptionRecurringUpdateRequest.prototype['cycle_amount'] = undefined;

/**
 * Array of additional payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).
 * @member {Array.<Object>} payments
 */
SubscriptionRecurringUpdateRequest.prototype['payments'] = undefined;

/**
 * Indicates that the deal value must be set to recurring subscription's MRR value
 * @member {Boolean} update_deal_value
 */
SubscriptionRecurringUpdateRequest.prototype['update_deal_value'] = undefined;

/**
 * All payments after that date will be affected. Format: YYYY-MM-DD
 * @member {Date} effective_date
 */
SubscriptionRecurringUpdateRequest.prototype['effective_date'] = undefined;






export default SubscriptionRecurringUpdateRequest;

