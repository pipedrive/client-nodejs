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
 * The CallLogBadRequestResponse model module.
 * @module model/CallLogBadRequestResponse
 * @version 1.0.0
 */
class CallLogBadRequestResponse {
    /**
     * Constructs a new <code>CallLogBadRequestResponse</code>.
     * @alias module:model/CallLogBadRequestResponse
     */
    constructor() { 
        
        CallLogBadRequestResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CallLogBadRequestResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CallLogBadRequestResponse} obj Optional instance to populate.
     * @return {module:model/CallLogBadRequestResponse} The populated <code>CallLogBadRequestResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CallLogBadRequestResponse();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');

                delete data['error'];
            }
            if (data.hasOwnProperty('error_info')) {
                obj['error_info'] = ApiClient.convertToType(data['error_info'], 'String');

                delete data['error_info'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ApiClient.convertToType(data['additional_data'], Object);

                delete data['additional_data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {Boolean} success
 */
CallLogBadRequestResponse.prototype['success'] = undefined;

/**
 * The description of the error
 * @member {String} error
 */
CallLogBadRequestResponse.prototype['error'] = undefined;

/**
 * A message describing how to solve the problem
 * @member {String} error_info
 */
CallLogBadRequestResponse.prototype['error_info'] = undefined;

/**
 * @member {Object} data
 */
CallLogBadRequestResponse.prototype['data'] = undefined;

/**
 * @member {Object} additional_data
 */
CallLogBadRequestResponse.prototype['additional_data'] = undefined;






export default CallLogBadRequestResponse;

