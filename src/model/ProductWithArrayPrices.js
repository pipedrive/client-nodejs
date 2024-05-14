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
import ArrayPrices from './ArrayPrices';
import BaseProduct from './BaseProduct';
import VisibleTo from './VisibleTo';

/**
 * The ProductWithArrayPrices model module.
 * @module model/ProductWithArrayPrices
 * @version 1.0.0
 */
class ProductWithArrayPrices {
    /**
     * Constructs a new <code>ProductWithArrayPrices</code>.
     * @alias module:model/ProductWithArrayPrices
     * @implements module:model/BaseProduct
     * @implements module:model/ArrayPrices
     */
    constructor() { 
        BaseProduct.initialize(this);ArrayPrices.initialize(this);
        ProductWithArrayPrices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductWithArrayPrices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductWithArrayPrices} obj Optional instance to populate.
     * @return {module:model/ProductWithArrayPrices} The populated <code>ProductWithArrayPrices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductWithArrayPrices();
            BaseProduct.constructFromObject(data, obj);
            ArrayPrices.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');

                delete data['code'];
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');

                delete data['unit'];
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');

                delete data['tax'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('selectable')) {
                obj['selectable'] = ApiClient.convertToType(data['selectable'], 'Boolean');

                delete data['selectable'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], VisibleTo);

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], Object);

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('billing_frequency')) {
                obj['billing_frequency'] = ApiClient.convertToType(data['billing_frequency'], 'String');

                delete data['billing_frequency'];
            }
            if (data.hasOwnProperty('billing_frequency_cycles')) {
                obj['billing_frequency_cycles'] = ApiClient.convertToType(data['billing_frequency_cycles'], 'Number');

                delete data['billing_frequency_cycles'];
            }
            if (data.hasOwnProperty('prices')) {
                obj['prices'] = ApiClient.convertToType(data['prices'], [Object]);

                delete data['prices'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the product
 * @member {Number} id
 */
ProductWithArrayPrices.prototype['id'] = undefined;

/**
 * The name of the product
 * @member {String} name
 */
ProductWithArrayPrices.prototype['name'] = undefined;

/**
 * The product code
 * @member {String} code
 */
ProductWithArrayPrices.prototype['code'] = undefined;

/**
 * The unit in which this product is sold
 * @member {String} unit
 */
ProductWithArrayPrices.prototype['unit'] = undefined;

/**
 * The tax percentage
 * @member {Number} tax
 * @default 0
 */
ProductWithArrayPrices.prototype['tax'] = 0;

/**
 * Whether this product is active or not
 * @member {Boolean} active_flag
 * @default true
 */
ProductWithArrayPrices.prototype['active_flag'] = true;

/**
 * Whether this product is selected in deals or not
 * @member {Boolean} selectable
 * @default true
 */
ProductWithArrayPrices.prototype['selectable'] = true;

/**
 * Visibility of the product
 * @member {module:model/VisibleTo} visible_to
 */
ProductWithArrayPrices.prototype['visible_to'] = undefined;

/**
 * Information about the Pipedrive user who owns the product
 * @member {Object} owner_id
 */
ProductWithArrayPrices.prototype['owner_id'] = undefined;

/**
 * Only available in Advanced and above plans  How often a customer is billed for access to a service or product 
 * @member {module:model/ProductWithArrayPrices.BillingFrequencyEnum} billing_frequency
 * @default 'one-time'
 */
ProductWithArrayPrices.prototype['billing_frequency'] = 'one-time';

/**
 * Only available in Advanced and above plans  The number of times the billing frequency repeats for a product in a deal  When `billing_frequency` is set to `one-time`, this field is always `null`  For all the other values of `billing_frequency`, `null` represents a product billed indefinitely  Must be a positive integer less or equal to 312 
 * @member {Number} billing_frequency_cycles
 */
ProductWithArrayPrices.prototype['billing_frequency_cycles'] = undefined;

/**
 * Array of objects, each containing: currency (string), price (number), cost (number, optional), overhead_cost (number, optional)
 * @member {Array.<Object>} prices
 */
ProductWithArrayPrices.prototype['prices'] = undefined;


// Implement BaseProduct interface:
/**
 * The ID of the product
 * @member {Number} id
 */
BaseProduct.prototype['id'] = undefined;
/**
 * The name of the product
 * @member {String} name
 */
BaseProduct.prototype['name'] = undefined;
/**
 * The product code
 * @member {String} code
 */
BaseProduct.prototype['code'] = undefined;
/**
 * The unit in which this product is sold
 * @member {String} unit
 */
BaseProduct.prototype['unit'] = undefined;
/**
 * The tax percentage
 * @member {Number} tax
 * @default 0
 */
BaseProduct.prototype['tax'] = 0;
/**
 * Whether this product is active or not
 * @member {Boolean} active_flag
 * @default true
 */
BaseProduct.prototype['active_flag'] = true;
/**
 * Whether this product is selected in deals or not
 * @member {Boolean} selectable
 * @default true
 */
BaseProduct.prototype['selectable'] = true;
/**
 * Visibility of the product
 * @member {module:model/VisibleTo} visible_to
 */
BaseProduct.prototype['visible_to'] = undefined;
/**
 * Information about the Pipedrive user who owns the product
 * @member {Object} owner_id
 */
BaseProduct.prototype['owner_id'] = undefined;
/**
 * Only available in Advanced and above plans  How often a customer is billed for access to a service or product 
 * @member {module:model/BaseProduct.BillingFrequencyEnum} billing_frequency
 * @default 'one-time'
 */
BaseProduct.prototype['billing_frequency'] = 'one-time';
/**
 * Only available in Advanced and above plans  The number of times the billing frequency repeats for a product in a deal  When `billing_frequency` is set to `one-time`, this field is always `null`  For all the other values of `billing_frequency`, `null` represents a product billed indefinitely  Must be a positive integer less or equal to 312 
 * @member {Number} billing_frequency_cycles
 */
BaseProduct.prototype['billing_frequency_cycles'] = undefined;
// Implement ArrayPrices interface:
/**
 * Array of objects, each containing: currency (string), price (number), cost (number, optional), overhead_cost (number, optional)
 * @member {Array.<Object>} prices
 */
ArrayPrices.prototype['prices'] = undefined;



/**
 * Allowed values for the <code>billing_frequency</code> property.
 * @enum {String}
 * @readonly
 */
ProductWithArrayPrices['BillingFrequencyEnum'] = {

    /**
     * value: "one-time"
     * @const
     */
    "one-time": "one-time",

    /**
     * value: "annually"
     * @const
     */
    "annually": "annually",

    /**
     * value: "semi-annually"
     * @const
     */
    "semi-annually": "semi-annually",

    /**
     * value: "quarterly"
     * @const
     */
    "quarterly": "quarterly",

    /**
     * value: "monthly"
     * @const
     */
    "monthly": "monthly",

    /**
     * value: "weekly"
     * @const
     */
    "weekly": "weekly"
};



export default ProductWithArrayPrices;

