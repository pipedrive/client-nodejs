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
import ActivityCollectionResponseObject from './ActivityCollectionResponseObject';
import AdditionalDataWithCursorPagination from './AdditionalDataWithCursorPagination';

/**
 * The GetActivitiesCollectionResponse model module.
 * @module model/GetActivitiesCollectionResponse
 * @version 1.0.0
 */
class GetActivitiesCollectionResponse {
    /**
     * Constructs a new <code>GetActivitiesCollectionResponse</code>.
     * @alias module:model/GetActivitiesCollectionResponse
     */
    constructor() { 
        
        GetActivitiesCollectionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetActivitiesCollectionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetActivitiesCollectionResponse} obj Optional instance to populate.
     * @return {module:model/GetActivitiesCollectionResponse} The populated <code>GetActivitiesCollectionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetActivitiesCollectionResponse();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ActivityCollectionResponseObject]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = AdditionalDataWithCursorPagination.constructFromObject(data['additional_data']);

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
GetActivitiesCollectionResponse.prototype['success'] = undefined;

/**
 * @member {Array.<module:model/ActivityCollectionResponseObject>} data
 */
GetActivitiesCollectionResponse.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalDataWithCursorPagination} additional_data
 */
GetActivitiesCollectionResponse.prototype['additional_data'] = undefined;






export default GetActivitiesCollectionResponse;

