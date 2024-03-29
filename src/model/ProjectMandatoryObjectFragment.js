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
 * The ProjectMandatoryObjectFragment model module.
 * @module model/ProjectMandatoryObjectFragment
 * @version 1.0.0
 */
class ProjectMandatoryObjectFragment {
    /**
     * Constructs a new <code>ProjectMandatoryObjectFragment</code>.
     * @alias module:model/ProjectMandatoryObjectFragment
     */
    constructor() { 
        
        ProjectMandatoryObjectFragment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectMandatoryObjectFragment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectMandatoryObjectFragment} obj Optional instance to populate.
     * @return {module:model/ProjectMandatoryObjectFragment} The populated <code>ProjectMandatoryObjectFragment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectMandatoryObjectFragment();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }
            if (data.hasOwnProperty('board_id')) {
                obj['board_id'] = ApiClient.convertToType(data['board_id'], 'Number');

                delete data['board_id'];
            }
            if (data.hasOwnProperty('phase_id')) {
                obj['phase_id'] = ApiClient.convertToType(data['phase_id'], 'Number');

                delete data['phase_id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The title of the project
 * @member {String} title
 */
ProjectMandatoryObjectFragment.prototype['title'] = undefined;

/**
 * The ID of the board this project is associated with
 * @member {Number} board_id
 */
ProjectMandatoryObjectFragment.prototype['board_id'] = undefined;

/**
 * The ID of the phase this project is associated with
 * @member {Number} phase_id
 */
ProjectMandatoryObjectFragment.prototype['phase_id'] = undefined;






export default ProjectMandatoryObjectFragment;

