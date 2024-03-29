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
import NumberBoolean from './NumberBoolean';
import TaskMandatoryObjectFragment from './TaskMandatoryObjectFragment';
import TaskObjectFragment from './TaskObjectFragment';

/**
 * The TaskPutObject model module.
 * @module model/TaskPutObject
 * @version 1.0.0
 */
class TaskPutObject {
    /**
     * Constructs a new <code>TaskPutObject</code>.
     * @alias module:model/TaskPutObject
     * @implements module:model/TaskMandatoryObjectFragment
     * @implements module:model/TaskObjectFragment
     */
    constructor() { 
        TaskMandatoryObjectFragment.initialize(this);TaskObjectFragment.initialize(this);
        TaskPutObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskPutObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskPutObject} obj Optional instance to populate.
     * @return {module:model/TaskPutObject} The populated <code>TaskPutObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskPutObject();
            TaskMandatoryObjectFragment.constructFromObject(data, obj);
            TaskObjectFragment.constructFromObject(data, obj);

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'Number');

                delete data['project_id'];
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');

                delete data['description'];
            }
            if (data.hasOwnProperty('parent_task_id')) {
                obj['parent_task_id'] = ApiClient.convertToType(data['parent_task_id'], 'Number');

                delete data['parent_task_id'];
            }
            if (data.hasOwnProperty('assignee_id')) {
                obj['assignee_id'] = ApiClient.convertToType(data['assignee_id'], 'Number');

                delete data['assignee_id'];
            }
            if (data.hasOwnProperty('done')) {
                obj['done'] = ApiClient.convertToType(data['done'], NumberBoolean);

                delete data['done'];
            }
            if (data.hasOwnProperty('due_date')) {
                obj['due_date'] = ApiClient.convertToType(data['due_date'], 'Date');

                delete data['due_date'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The title of the task
 * @member {String} title
 */
TaskPutObject.prototype['title'] = undefined;

/**
 * The ID of the project this task is associated with
 * @member {Number} project_id
 */
TaskPutObject.prototype['project_id'] = undefined;

/**
 * The description of the task
 * @member {String} description
 */
TaskPutObject.prototype['description'] = undefined;

/**
 * The ID of a parent task. Can not be ID of a task which is already a subtask.
 * @member {Number} parent_task_id
 */
TaskPutObject.prototype['parent_task_id'] = undefined;

/**
 * The ID of the user who will be the assignee of the task
 * @member {Number} assignee_id
 */
TaskPutObject.prototype['assignee_id'] = undefined;

/**
 * Whether the task is done or not. 0 = Not done, 1 = Done.
 * @member {module:model/NumberBoolean} done
 */
TaskPutObject.prototype['done'] = undefined;

/**
 * The due date of the task. Format: YYYY-MM-DD.
 * @member {Date} due_date
 */
TaskPutObject.prototype['due_date'] = undefined;


// Implement TaskMandatoryObjectFragment interface:
/**
 * The title of the task
 * @member {String} title
 */
TaskMandatoryObjectFragment.prototype['title'] = undefined;
/**
 * The ID of the project this task is associated with
 * @member {Number} project_id
 */
TaskMandatoryObjectFragment.prototype['project_id'] = undefined;
// Implement TaskObjectFragment interface:
/**
 * The description of the task
 * @member {String} description
 */
TaskObjectFragment.prototype['description'] = undefined;
/**
 * The ID of a parent task. Can not be ID of a task which is already a subtask.
 * @member {Number} parent_task_id
 */
TaskObjectFragment.prototype['parent_task_id'] = undefined;
/**
 * The ID of the user who will be the assignee of the task
 * @member {Number} assignee_id
 */
TaskObjectFragment.prototype['assignee_id'] = undefined;
/**
 * Whether the task is done or not. 0 = Not done, 1 = Done.
 * @member {module:model/NumberBoolean} done
 */
TaskObjectFragment.prototype['done'] = undefined;
/**
 * The due date of the task. Format: YYYY-MM-DD.
 * @member {Date} due_date
 */
TaskObjectFragment.prototype['due_date'] = undefined;




export default TaskPutObject;

