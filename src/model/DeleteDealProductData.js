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
 * The DeleteDealProductData model module.
 * @module model/DeleteDealProductData
 * @version 1.0.0
 */
class DeleteDealProductData {
    /**
     * Constructs a new <code>DeleteDealProductData</code>.
     * @alias module:model/DeleteDealProductData
     */
    constructor() { 
        
        DeleteDealProductData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteDealProductData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteDealProductData} obj Optional instance to populate.
     * @return {module:model/DeleteDealProductData} The populated <code>DeleteDealProductData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteDealProductData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('product_attachment_id')) {
                obj['product_attachment_id'] = ApiClient.convertToType(data['product_attachment_id'], 'Number');

                delete data['product_attachment_id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of an attached product that was deleted from the deal
 * @member {Number} id
 */
DeleteDealProductData.prototype['id'] = undefined;

/**
 * The ID of an attached product that was deleted from the deal
 * @member {Number} product_attachment_id
 */
DeleteDealProductData.prototype['product_attachment_id'] = undefined;






export default DeleteDealProductData;

