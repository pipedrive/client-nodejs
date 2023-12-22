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
import ActivityRecordAdditionalData from './ActivityRecordAdditionalData';
import ActivityResponseObject from './ActivityResponseObject';
import AddActivityResponse200RelatedObjects from './AddActivityResponse200RelatedObjects';

/**
 * The AddActivityResponse200 model module.
 * @module model/AddActivityResponse200
 * @version 1.0.0
 */
class AddActivityResponse200 {
    /**
     * Constructs a new <code>AddActivityResponse200</code>.
     * @alias module:model/AddActivityResponse200
     */
    constructor() { 
        
        AddActivityResponse200.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddActivityResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddActivityResponse200} obj Optional instance to populate.
     * @return {module:model/AddActivityResponse200} The populated <code>AddActivityResponse200</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddActivityResponse200();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ActivityResponseObject.constructFromObject(data['data']);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ActivityRecordAdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = AddActivityResponse200RelatedObjects.constructFromObject(data['related_objects']);

                delete data['related_objects'];
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
AddActivityResponse200.prototype['success'] = undefined;

/**
 * @member {module:model/ActivityResponseObject} data
 */
AddActivityResponse200.prototype['data'] = undefined;

/**
 * @member {module:model/ActivityRecordAdditionalData} additional_data
 */
AddActivityResponse200.prototype['additional_data'] = undefined;

/**
 * @member {module:model/AddActivityResponse200RelatedObjects} related_objects
 */
AddActivityResponse200.prototype['related_objects'] = undefined;






export default AddActivityResponse200;
