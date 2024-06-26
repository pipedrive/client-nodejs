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
import BasicDealProduct from './BasicDealProduct';
import BillingFrequency from './BillingFrequency';
import ProductAttachementFields from './ProductAttachementFields';

/**
 * The ProductAttachmentDetails model module.
 * @module model/ProductAttachmentDetails
 * @version 1.0.0
 */
class ProductAttachmentDetails {
    /**
     * Constructs a new <code>ProductAttachmentDetails</code>.
     * @alias module:model/ProductAttachmentDetails
     * @implements module:model/BasicDealProduct
     * @implements module:model/ProductAttachementFields
     */
    constructor() { 
        BasicDealProduct.initialize(this);ProductAttachementFields.initialize(this);
        ProductAttachmentDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductAttachmentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductAttachmentDetails} obj Optional instance to populate.
     * @return {module:model/ProductAttachmentDetails} The populated <code>ProductAttachmentDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductAttachmentDetails();
            BasicDealProduct.constructFromObject(data, obj);
            ProductAttachementFields.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('company_id')) {
                obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');

                delete data['company_id'];
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');

                delete data['deal_id'];
            }
            if (data.hasOwnProperty('sum')) {
                obj['sum'] = ApiClient.convertToType(data['sum'], 'Number');

                delete data['sum'];
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');

                delete data['currency'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('last_edit')) {
                obj['last_edit'] = ApiClient.convertToType(data['last_edit'], 'String');

                delete data['last_edit'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
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
 * @member {Number} product_id
 */
ProductAttachmentDetails.prototype['product_id'] = undefined;

/**
 * The price at which this product will be added to the deal
 * @member {Number} item_price
 */
ProductAttachmentDetails.prototype['item_price'] = undefined;

/**
 * Quantity – e.g. how many items of this product will be added to the deal
 * @member {Number} quantity
 */
ProductAttachmentDetails.prototype['quantity'] = undefined;

/**
 * The value of the discount. The `discount_type` field can be used to specify whether the value is an amount or a percentage
 * @member {Number} discount
 * @default 0
 */
ProductAttachmentDetails.prototype['discount'] = 0;

/**
 * The type of the discount's value
 * @member {module:model/ProductAttachmentDetails.DiscountTypeEnum} discount_type
 * @default 'percentage'
 */
ProductAttachmentDetails.prototype['discount_type'] = 'percentage';

/**
 * The ID of the product variation to use. When omitted, no variation will be used
 * @member {Number} product_variation_id
 */
ProductAttachmentDetails.prototype['product_variation_id'] = undefined;

/**
 * A textual comment associated with this product-deal attachment
 * @member {String} comments
 */
ProductAttachmentDetails.prototype['comments'] = undefined;

/**
 * The product tax
 * @member {Number} tax
 */
ProductAttachmentDetails.prototype['tax'] = undefined;

/**
 * The tax option to be applied to the products. When using `inclusive`, the tax percentage will already be included in the price. When using `exclusive`, the tax will not be included in the price. When using `none`, no tax will be added. Use the `tax` field for defining the tax percentage amount. By default, the user setting value for tax options will be used. Changing this in one product affects the rest of the products attached to the deal
 * @member {module:model/ProductAttachmentDetails.TaxMethodEnum} tax_method
 */
ProductAttachmentDetails.prototype['tax_method'] = undefined;

/**
 * Whether the product is enabled for a deal or not. This makes it possible to add products to a deal with a specific price and discount criteria, but keep them disabled, which refrains them from being included in the deal value calculation. When omitted, the product will be marked as enabled by default
 * @member {Boolean} enabled_flag
 * @default true
 */
ProductAttachmentDetails.prototype['enabled_flag'] = true;

/**
 * @member {module:model/BillingFrequency} billing_frequency
 */
ProductAttachmentDetails.prototype['billing_frequency'] = undefined;

/**
 * Only available in Advanced and above plans  The number of times the billing frequency repeats for a product in a deal  When `billing_frequency` is set to `one-time`, this field must be `null`  For all the other values of `billing_frequency`, `null` represents a product billed indefinitely  Must be a positive integer less or equal to 312 
 * @member {Number} billing_frequency_cycles
 */
ProductAttachmentDetails.prototype['billing_frequency_cycles'] = undefined;

/**
 * Only available in Advanced and above plans  The billing start date. Must be between 15 years in the past and 15 years in the future 
 * @member {String} billing_start_date
 */
ProductAttachmentDetails.prototype['billing_start_date'] = undefined;

/**
 * The ID of the deal-product (the ID of the product attached to the deal)
 * @member {Number} id
 */
ProductAttachmentDetails.prototype['id'] = undefined;

/**
 * The ID of the company
 * @member {Number} company_id
 */
ProductAttachmentDetails.prototype['company_id'] = undefined;

/**
 * The ID of the deal
 * @member {Number} deal_id
 */
ProductAttachmentDetails.prototype['deal_id'] = undefined;

/**
 * The sum of all the products attached to the deal
 * @member {Number} sum
 */
ProductAttachmentDetails.prototype['sum'] = undefined;

/**
 * The currency associated with the deal product
 * @member {String} currency
 */
ProductAttachmentDetails.prototype['currency'] = undefined;

/**
 * The date and time when the product was added to the deal
 * @member {String} add_time
 */
ProductAttachmentDetails.prototype['add_time'] = undefined;

/**
 * The date and time when the deal product was last edited
 * @member {String} last_edit
 */
ProductAttachmentDetails.prototype['last_edit'] = undefined;

/**
 * Whether the product is active or not
 * @member {Boolean} active_flag
 */
ProductAttachmentDetails.prototype['active_flag'] = undefined;

/**
 * The product name
 * @member {String} name
 */
ProductAttachmentDetails.prototype['name'] = undefined;


// Implement BasicDealProduct interface:
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
 * The value of the discount. The `discount_type` field can be used to specify whether the value is an amount or a percentage
 * @member {Number} discount
 * @default 0
 */
BasicDealProduct.prototype['discount'] = 0;
/**
 * The type of the discount's value
 * @member {module:model/BasicDealProduct.DiscountTypeEnum} discount_type
 * @default 'percentage'
 */
BasicDealProduct.prototype['discount_type'] = 'percentage';
/**
 * The ID of the product variation to use. When omitted, no variation will be used
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
 * The tax option to be applied to the products. When using `inclusive`, the tax percentage will already be included in the price. When using `exclusive`, the tax will not be included in the price. When using `none`, no tax will be added. Use the `tax` field for defining the tax percentage amount. By default, the user setting value for tax options will be used. Changing this in one product affects the rest of the products attached to the deal
 * @member {module:model/BasicDealProduct.TaxMethodEnum} tax_method
 */
BasicDealProduct.prototype['tax_method'] = undefined;
/**
 * Whether the product is enabled for a deal or not. This makes it possible to add products to a deal with a specific price and discount criteria, but keep them disabled, which refrains them from being included in the deal value calculation. When omitted, the product will be marked as enabled by default
 * @member {Boolean} enabled_flag
 * @default true
 */
BasicDealProduct.prototype['enabled_flag'] = true;
/**
 * @member {module:model/BillingFrequency} billing_frequency
 */
BasicDealProduct.prototype['billing_frequency'] = undefined;
/**
 * Only available in Advanced and above plans  The number of times the billing frequency repeats for a product in a deal  When `billing_frequency` is set to `one-time`, this field must be `null`  For all the other values of `billing_frequency`, `null` represents a product billed indefinitely  Must be a positive integer less or equal to 312 
 * @member {Number} billing_frequency_cycles
 */
BasicDealProduct.prototype['billing_frequency_cycles'] = undefined;
/**
 * Only available in Advanced and above plans  The billing start date. Must be between 15 years in the past and 15 years in the future 
 * @member {String} billing_start_date
 */
BasicDealProduct.prototype['billing_start_date'] = undefined;
// Implement ProductAttachementFields interface:
/**
 * The ID of the deal-product (the ID of the product attached to the deal)
 * @member {Number} id
 */
ProductAttachementFields.prototype['id'] = undefined;
/**
 * The ID of the company
 * @member {Number} company_id
 */
ProductAttachementFields.prototype['company_id'] = undefined;
/**
 * The ID of the deal
 * @member {Number} deal_id
 */
ProductAttachementFields.prototype['deal_id'] = undefined;
/**
 * The ID of the product
 * @member {Number} product_id
 */
ProductAttachementFields.prototype['product_id'] = undefined;
/**
 * The sum of all the products attached to the deal
 * @member {Number} sum
 */
ProductAttachementFields.prototype['sum'] = undefined;
/**
 * The currency associated with the deal product
 * @member {String} currency
 */
ProductAttachementFields.prototype['currency'] = undefined;
/**
 * The date and time when the product was added to the deal
 * @member {String} add_time
 */
ProductAttachementFields.prototype['add_time'] = undefined;
/**
 * The date and time when the deal product was last edited
 * @member {String} last_edit
 */
ProductAttachementFields.prototype['last_edit'] = undefined;
/**
 * Whether the product is active or not
 * @member {Boolean} active_flag
 */
ProductAttachementFields.prototype['active_flag'] = undefined;
/**
 * The product tax
 * @member {Number} tax
 */
ProductAttachementFields.prototype['tax'] = undefined;
/**
 * The product name
 * @member {String} name
 */
ProductAttachementFields.prototype['name'] = undefined;



/**
 * Allowed values for the <code>discount_type</code> property.
 * @enum {String}
 * @readonly
 */
ProductAttachmentDetails['DiscountTypeEnum'] = {

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
ProductAttachmentDetails['TaxMethodEnum'] = {

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



export default ProductAttachmentDetails;

