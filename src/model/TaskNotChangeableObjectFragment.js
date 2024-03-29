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
 * The TaskNotChangeableObjectFragment model module.
 * @module model/TaskNotChangeableObjectFragment
 * @version 1.0.0
 */
class TaskNotChangeableObjectFragment {
    /**
     * Constructs a new <code>TaskNotChangeableObjectFragment</code>.
     * @alias module:model/TaskNotChangeableObjectFragment
     */
    constructor() { 
        
        TaskNotChangeableObjectFragment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskNotChangeableObjectFragment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskNotChangeableObjectFragment} obj Optional instance to populate.
     * @return {module:model/TaskNotChangeableObjectFragment} The populated <code>TaskNotChangeableObjectFragment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskNotChangeableObjectFragment();

            if (data.hasOwnProperty('creator_id')) {
                obj['creator_id'] = ApiClient.convertToType(data['creator_id'], 'Number');

                delete data['creator_id'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('marked_as_done_time')) {
                obj['marked_as_done_time'] = ApiClient.convertToType(data['marked_as_done_time'], 'String');

                delete data['marked_as_done_time'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The creator of a task
 * @member {Number} creator_id
 */
TaskNotChangeableObjectFragment.prototype['creator_id'] = undefined;

/**
 * The creation date and time of the task in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} add_time
 */
TaskNotChangeableObjectFragment.prototype['add_time'] = undefined;

/**
 * The update date and time of the task in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} update_time
 */
TaskNotChangeableObjectFragment.prototype['update_time'] = undefined;

/**
 * The marked as done date and time of the task in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} marked_as_done_time
 */
TaskNotChangeableObjectFragment.prototype['marked_as_done_time'] = undefined;






export default TaskNotChangeableObjectFragment;

