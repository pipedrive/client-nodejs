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
 * The DeleteActivityResponseData model module.
 * @module model/DeleteActivityResponseData
 * @version 1.0.0
 */
class DeleteActivityResponseData {
    /**
     * Constructs a new <code>DeleteActivityResponseData</code>.
     * @alias module:model/DeleteActivityResponseData
     */
    constructor() { 
        
        DeleteActivityResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteActivityResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteActivityResponseData} obj Optional instance to populate.
     * @return {module:model/DeleteActivityResponseData} The populated <code>DeleteActivityResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteActivityResponseData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the activity that was deleted
 * @member {Number} id
 */
DeleteActivityResponseData.prototype['id'] = undefined;






export default DeleteActivityResponseData;

