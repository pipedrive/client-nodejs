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
import BillingFrequency from './BillingFrequency';
import DealProductRequestBody from './DealProductRequestBody';
import NewDealProductAllOf from './NewDealProductAllOf';
import NewDealProductAllOf1 from './NewDealProductAllOf1';
import NewDealProductAllOf2 from './NewDealProductAllOf2';

/**
 * The UpdateDealProduct model module.
 * @module model/UpdateDealProduct
 * @version 1.0.0
 */
class UpdateDealProduct {
    /**
     * Constructs a new <code>UpdateDealProduct</code>.
     * @alias module:model/UpdateDealProduct
     * @implements module:model/DealProductRequestBody
     * @implements module:model/NewDealProductAllOf
     * @implements module:model/NewDealProductAllOf1
     * @implements module:model/NewDealProductAllOf2
     */
    constructor() { 
        DealProductRequestBody.initialize(this);NewDealProductAllOf.initialize(this);NewDealProductAllOf1.initialize(this);NewDealProductAllOf2.initialize(this);
        UpdateDealProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateDealProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateDealProduct} obj Optional instance to populate.
     * @return {module:model/UpdateDealProduct} The populated <code>UpdateDealProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateDealProduct();
            DealProductRequestBody.constructFromObject(data, obj);
            NewDealProductAllOf.constructFromObject(data, obj);
            NewDealProductAllOf1.constructFromObject(data, obj);
            NewDealProductAllOf2.constructFromObject(data, obj);

            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');

                delete data['product_id'];
            }
            if (data.hasOwnProperty('item_price')) {
                obj['item_price'] = ApiClient.convertToType(data['item_price'], 'Number');

                delete data['item_price'];
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');

                delete data['quantity'];
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');

                delete data['discount'];
            }
            if (data.hasOwnProperty('discount_type')) {
                obj['discount_type'] = ApiClient.convertToType(data['discount_type'], 'String');

                delete data['discount_type'];
            }
            if (data.hasOwnProperty('product_variation_id')) {
                obj['product_variation_id'] = ApiClient.convertToType(data['product_variation_id'], 'Number');

                delete data['product_variation_id'];
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');

                delete data['comments'];
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');

                delete data['tax'];
            }
            if (data.hasOwnProperty('tax_method')) {
                obj['tax_method'] = ApiClient.convertToType(data['tax_method'], 'String');

                delete data['tax_method'];
            }
            if (data.hasOwnProperty('enabled_flag')) {
                obj['enabled_flag'] = ApiClient.convertToType(data['enabled_flag'], 'Boolean');

                delete data['enabled_flag'];
            }
            if (data.hasOwnProperty('billing_frequency')) {
                obj['billing_frequency'] = BillingFrequency.constructFromObject(data['billing_frequency']);

                delete data['billing_frequency'];
            }
            if (data.hasOwnProperty('billing_frequency_cycles')) {
                obj['billing_frequency_cycles'] = ApiClient.convertToType(data['billing_frequency_cycles'], 'Number');

                delete data['billing_frequency_cycles'];
            }
            if (data.hasOwnProperty('billing_start_date')) {
                obj['billing_start_date'] = ApiClient.convertToType(data['billing_start_date'], 'String');

                delete data['billing_start_date'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the product to use
 * @member {Number} product_id
 */
UpdateDealProduct.prototype['product_id'] = undefined;

/**
 * The price at which this product will be added to the deal
 * @member {Number} item_price
 */
UpdateDealProduct.prototype['item_price'] = undefined;

/**
 * How many items of this product will be added to the deal
 * @member {Number} quantity
 */
UpdateDealProduct.prototype['quantity'] = undefined;

/**
 * The value of the discount. The `discount_type` field can be used to specify whether the value is an amount or a percentage
 * @member {Number} discount
 * @default 0
 */
UpdateDealProduct.prototype['discount'] = 0;

/**
 * The type of the discount's value
 * @member {module:model/UpdateDealProduct.DiscountTypeEnum} discount_type
 * @default 'percentage'
 */
UpdateDealProduct.prototype['discount_type'] = 'percentage';

/**
 * The ID of the product variation to use. When omitted, no variation will be used
 * @member {Number} product_variation_id
 */
UpdateDealProduct.prototype['product_variation_id'] = undefined;

/**
 * A textual comment associated with this product-deal attachment
 * @member {String} comments
 */
UpdateDealProduct.prototype['comments'] = undefined;

/**
 * The tax percentage
 * @member {Number} tax
 * @default 0
 */
UpdateDealProduct.prototype['tax'] = 0;

/**
 * The tax option to be applied to the products. When using `inclusive`, the tax percentage will already be included in the price. When using `exclusive`, the tax will not be included in the price. When using `none`, no tax will be added. Use the `tax` field for defining the tax percentage amount
 * @member {module:model/UpdateDealProduct.TaxMethodEnum} tax_method
 */
UpdateDealProduct.prototype['tax_method'] = undefined;

/**
 * Whether the product is enabled for a deal or not  This makes it possible to add products to a deal with a specific price and discount criteria, but keep them disabled, which refrains them from being included in the deal value calculation. When omitted, the product will be marked as enabled by default  Not possible to disable the product if the deal has installments associated and the product is the last one enabled  Not possible to enable the product if the deal has installments associated and the product is recurring 
 * @member {Boolean} enabled_flag
 * @default true
 */
UpdateDealProduct.prototype['enabled_flag'] = true;

/**
 * @member {module:model/BillingFrequency} billing_frequency
 */
UpdateDealProduct.prototype['billing_frequency'] = undefined;

/**
 * Only available in Advanced and above plans  The number of times the billing frequency repeats for a product in a deal  When `billing_frequency` is set to `one-time`, this field must be `null`  For all the other values of `billing_frequency`, `null` represents a product billed indefinitely  Must be a positive integer less or equal to 312 
 * @member {Number} billing_frequency_cycles
 */
UpdateDealProduct.prototype['billing_frequency_cycles'] = undefined;

/**
 * Only available in Advanced and above plans  The billing start date. Must be between 15 years in the past and 15 years in the future 
 * @member {String} billing_start_date
 */
UpdateDealProduct.prototype['billing_start_date'] = undefined;


// Implement DealProductRequestBody interface:
/**
 * The ID of the product to use
 * @member {Number} product_id
 */
DealProductRequestBody.prototype['product_id'] = undefined;
/**
 * The price at which this product will be added to the deal
 * @member {Number} item_price
 */
DealProductRequestBody.prototype['item_price'] = undefined;
/**
 * How many items of this product will be added to the deal
 * @member {Number} quantity
 */
DealProductRequestBody.prototype['quantity'] = undefined;
/**
 * The value of the discount. The `discount_type` field can be used to specify whether the value is an amount or a percentage
 * @member {Number} discount
 * @default 0
 */
DealProductRequestBody.prototype['discount'] = 0;
/**
 * The type of the discount's value
 * @member {module:model/DealProductRequestBody.DiscountTypeEnum} discount_type
 * @default 'percentage'
 */
DealProductRequestBody.prototype['discount_type'] = 'percentage';
/**
 * The ID of the product variation to use. When omitted, no variation will be used
 * @member {Number} product_variation_id
 */
DealProductRequestBody.prototype['product_variation_id'] = undefined;
/**
 * A textual comment associated with this product-deal attachment
 * @member {String} comments
 */
DealProductRequestBody.prototype['comments'] = undefined;
/**
 * The tax percentage
 * @member {Number} tax
 * @default 0
 */
DealProductRequestBody.prototype['tax'] = 0;
/**
 * The tax option to be applied to the products. When using `inclusive`, the tax percentage will already be included in the price. When using `exclusive`, the tax will not be included in the price. When using `none`, no tax will be added. Use the `tax` field for defining the tax percentage amount
 * @member {module:model/DealProductRequestBody.TaxMethodEnum} tax_method
 */
DealProductRequestBody.prototype['tax_method'] = undefined;
/**
 * Whether the product is enabled for a deal or not  This makes it possible to add products to a deal with a specific price and discount criteria, but keep them disabled, which refrains them from being included in the deal value calculation. When omitted, the product will be marked as enabled by default  Not possible to disable the product if the deal has installments associated and the product is the last one enabled  Not possible to enable the product if the deal has installments associated and the product is recurring 
 * @member {Boolean} enabled_flag
 * @default true
 */
DealProductRequestBody.prototype['enabled_flag'] = true;
// Implement NewDealProductAllOf interface:
/**
 * @member {module:model/BillingFrequency} billing_frequency
 */
NewDealProductAllOf.prototype['billing_frequency'] = undefined;
// Implement NewDealProductAllOf1 interface:
/**
 * Only available in Advanced and above plans  The number of times the billing frequency repeats for a product in a deal  When `billing_frequency` is set to `one-time`, this field must be `null`  For all the other values of `billing_frequency`, `null` represents a product billed indefinitely  Must be a positive integer less or equal to 312 
 * @member {Number} billing_frequency_cycles
 */
NewDealProductAllOf1.prototype['billing_frequency_cycles'] = undefined;
// Implement NewDealProductAllOf2 interface:
/**
 * Only available in Advanced and above plans  The billing start date. Must be between 15 years in the past and 15 years in the future 
 * @member {String} billing_start_date
 */
NewDealProductAllOf2.prototype['billing_start_date'] = undefined;



/**
 * Allowed values for the <code>discount_type</code> property.
 * @enum {String}
 * @readonly
 */
UpdateDealProduct['DiscountTypeEnum'] = {

    /**
     * value: "percentage"
     * @const
     */
    "percentage": "percentage",

    /**
     * value: "amount"
     * @const
     */
    "amount": "amount"
};


/**
 * Allowed values for the <code>tax_method</code> property.
 * @enum {String}
 * @readonly
 */
UpdateDealProduct['TaxMethodEnum'] = {

    /**
     * value: "exclusive"
     * @const
     */
    "exclusive": "exclusive",

    /**
     * value: "inclusive"
     * @const
     */
    "inclusive": "inclusive",

    /**
     * value: "none"
     * @const
     */
    "none": "none"
};



export default UpdateDealProduct;

