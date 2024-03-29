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
 * The ProjectBoardObject model module.
 * @module model/ProjectBoardObject
 * @version 1.0.0
 */
class ProjectBoardObject {
    /**
     * Constructs a new <code>ProjectBoardObject</code>.
     * @alias module:model/ProjectBoardObject
     */
    constructor() { 
        
        ProjectBoardObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectBoardObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectBoardObject} obj Optional instance to populate.
     * @return {module:model/ProjectBoardObject} The populated <code>ProjectBoardObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectBoardObject();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('order_nr')) {
                obj['order_nr'] = ApiClient.convertToType(data['order_nr'], 'Number');

                delete data['order_nr'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the project board
 * @member {Number} id
 */
ProjectBoardObject.prototype['id'] = undefined;

/**
 * Name of a project board
 * @member {String} name
 */
ProjectBoardObject.prototype['name'] = undefined;

/**
 * The order of a board
 * @member {Number} order_nr
 */
ProjectBoardObject.prototype['order_nr'] = undefined;

/**
 * The creation date and time of the board in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} add_time
 */
ProjectBoardObject.prototype['add_time'] = undefined;

/**
 * The update date and time of the board in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} update_time
 */
ProjectBoardObject.prototype['update_time'] = undefined;






export default ProjectBoardObject;

