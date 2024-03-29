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
import ProjectPlanItemObject from './ProjectPlanItemObject';

/**
 * The UpdatedActivityPlanItem200 model module.
 * @module model/UpdatedActivityPlanItem200
 * @version 1.0.0
 */
class UpdatedActivityPlanItem200 {
    /**
     * Constructs a new <code>UpdatedActivityPlanItem200</code>.
     * @alias module:model/UpdatedActivityPlanItem200
     */
    constructor() { 
        
        UpdatedActivityPlanItem200.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatedActivityPlanItem200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatedActivityPlanItem200} obj Optional instance to populate.
     * @return {module:model/UpdatedActivityPlanItem200} The populated <code>UpdatedActivityPlanItem200</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatedActivityPlanItem200();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ProjectPlanItemObject.constructFromObject(data['data']);

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
UpdatedActivityPlanItem200.prototype['success'] = undefined;

/**
 * @member {module:model/ProjectPlanItemObject} data
 */
UpdatedActivityPlanItem200.prototype['data'] = undefined;

/**
 * @member {Object} additional_data
 */
UpdatedActivityPlanItem200.prototype['additional_data'] = undefined;






export default UpdatedActivityPlanItem200;

