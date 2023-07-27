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
import DealProductUnitDuration from './DealProductUnitDuration';

/**
 * The BasicDealProduct model module.
 * @module model/BasicDealProduct
 * @version 1.0.0
 */
class BasicDealProduct {
    /**
     * Constructs a new <code>BasicDealProduct</code>.
     * @alias module:model/BasicDealProduct
     * @param productId {Number} The ID of the product to use
     * @param itemPrice {Number} The price at which this product will be added to the deal
     * @param quantity {Number} Quantity – e.g. how many items of this product will be added to the deal
     */
    constructor(productId, itemPrice, quantity) { 
        
        BasicDealProduct.initialize(this, productId, itemPrice, quantity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, productId, itemPrice, quantity) { 
        obj['product_id'] = productId;
        obj['item_price'] = itemPrice;
        obj['quantity'] = quantity;
    }

    /**
     * Constructs a <code>BasicDealProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicDealProduct} obj Optional instance to populate.
     * @return {module:model/BasicDealProduct} The populated <code>BasicDealProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicDealProduct();

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
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');

                delete data['duration'];
            }
            if (data.hasOwnProperty('duration_unit')) {
                obj['duration_unit'] = ApiClient.convertToType(data['duration_unit'], DealProductUnitDuration);

                delete data['duration_unit'];
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
BasicDealProduct.prototype['product_id'] = undefined;

/**
 * The price at which this product will be added to the deal
 * @member {Number} item_price
 */
BasicDealProduct.prototype['item_price'] = undefined;

/**
 * Quantity – e.g. how many items of this product will be added to the deal
 * @member {Number} quantity
 */
BasicDealProduct.prototype['quantity'] = undefined;

/**
 * The value of the discount. The `discount_type` field can be used to specify whether the value is an amount or a percentage.
 * @member {Number} discount
 * @default 0
 */
BasicDealProduct.prototype['discount'] = 0;

/**
 * The type of the discount's value.
 * @member {module:model/BasicDealProduct.DiscountTypeEnum} discount_type
 * @default 'percentage'
 */
BasicDealProduct.prototype['discount_type'] = 'percentage';

/**
 * The duration of the product. If omitted, will be set to 1.
 * @member {Number} duration
 * @default 1
 */
BasicDealProduct.prototype['duration'] = 1;

/**
 * The unit duration of the product
 * @member {module:model/DealProductUnitDuration} duration_unit
 */
BasicDealProduct.prototype['duration_unit'] = undefined;

/**
 * The ID of the product variation to use. When omitted, no variation will be used.
 * @member {Number} product_variation_id
 */
BasicDealProduct.prototype['product_variation_id'] = undefined;

/**
 * A textual comment associated with this product-deal attachment
 * @member {String} comments
 */
BasicDealProduct.prototype['comments'] = undefined;

/**
 * The tax percentage
 * @member {Number} tax
 * @default 0
 */
BasicDealProduct.prototype['tax'] = 0;

/**
 * The tax option to be applied to the products. When using `inclusive`, the tax percentage will already be included in the price. When using `exclusive`, the tax will not be included in the price. When using `none`, no tax will be added. Use the `tax` field for defining the tax percentage amount. By default, the user setting value for tax options will be used. Changing this in one product affects the rest of the products attached to the deal.
 * @member {module:model/BasicDealProduct.TaxMethodEnum} tax_method
 */
BasicDealProduct.prototype['tax_method'] = undefined;

/**
 * Whether the product is enabled for a deal or not. This makes it possible to add products to a deal with a specific price and discount criteria, but keep them disabled, which refrains them from being included in the deal value calculation. When omitted, the product will be marked as enabled by default.
 * @member {Boolean} enabled_flag
 * @default true
 */
BasicDealProduct.prototype['enabled_flag'] = true;





/**
 * Allowed values for the <code>discount_type</code> property.
 * @enum {String}
 * @readonly
 */
BasicDealProduct['DiscountTypeEnum'] = {

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
BasicDealProduct['TaxMethodEnum'] = {

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



export default BasicDealProduct;

