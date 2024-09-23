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
import FindGoalResponse from './FindGoalResponse';

/**
 * The GetGoalsResponse model module.
 * @module model/GetGoalsResponse
 * @version 1.0.0
 */
class GetGoalsResponse {
    /**
     * Constructs a new <code>GetGoalsResponse</code>.
     * @alias module:model/GetGoalsResponse
     */
    constructor() { 
        
        GetGoalsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGoalsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGoalsResponse} obj Optional instance to populate.
     * @return {module:model/GetGoalsResponse} The populated <code>GetGoalsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGoalsResponse();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = FindGoalResponse.constructFromObject(data['data']);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * If the request was successful or not
 * @member {Boolean} success
 */
GetGoalsResponse.prototype['success'] = undefined;

/**
 * @member {module:model/FindGoalResponse} data
 */
GetGoalsResponse.prototype['data'] = undefined;






export default GetGoalsResponse;
