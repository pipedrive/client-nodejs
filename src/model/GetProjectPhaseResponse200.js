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
import ProjectPhaseObject from './ProjectPhaseObject';

/**
 * The GetProjectPhaseResponse200 model module.
 * @module model/GetProjectPhaseResponse200
 * @version 1.0.0
 */
class GetProjectPhaseResponse200 {
    /**
     * Constructs a new <code>GetProjectPhaseResponse200</code>.
     * @alias module:model/GetProjectPhaseResponse200
     */
    constructor() { 
        
        GetProjectPhaseResponse200.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProjectPhaseResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProjectPhaseResponse200} obj Optional instance to populate.
     * @return {module:model/GetProjectPhaseResponse200} The populated <code>GetProjectPhaseResponse200</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProjectPhaseResponse200();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ProjectPhaseObject.constructFromObject(data['data']);

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
GetProjectPhaseResponse200.prototype['success'] = undefined;

/**
 * @member {module:model/ProjectPhaseObject} data
 */
GetProjectPhaseResponse200.prototype['data'] = undefined;

/**
 * @member {Object} additional_data
 */
GetProjectPhaseResponse200.prototype['additional_data'] = undefined;






export default GetProjectPhaseResponse200;

