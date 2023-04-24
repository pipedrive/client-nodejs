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
 * The ProductBaseDeal model module.
 * @module model/ProductBaseDeal
 * @version 1.0.0
 */
class ProductBaseDeal {
    /**
     * Constructs a new <code>ProductBaseDeal</code>.
     * @alias module:model/ProductBaseDeal
     */
    constructor() { 
        
        ProductBaseDeal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductBaseDeal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductBaseDeal} obj Optional instance to populate.
     * @return {module:model/ProductBaseDeal} The populated <code>ProductBaseDeal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductBaseDeal();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('company_id')) {
                obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');

                delete data['company_id'];
            }
            if (data.hasOwnProperty('creator_user_id')) {
                obj['creator_user_id'] = ApiClient.convertToType(data['creator_user_id'], 'Number');

                delete data['creator_user_id'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }
            if (data.hasOwnProperty('stage_id')) {
                obj['stage_id'] = ApiClient.convertToType(data['stage_id'], 'Number');

                delete data['stage_id'];
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');

                delete data['value'];
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');

                delete data['currency'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('first_add_time')) {
                obj['first_add_time'] = ApiClient.convertToType(data['first_add_time'], 'String');

                delete data['first_add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('stage_change_time')) {
                obj['stage_change_time'] = ApiClient.convertToType(data['stage_change_time'], 'String');

                delete data['stage_change_time'];
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');

                delete data['active'];
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');

                delete data['deleted'];
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');

                delete data['status'];
            }
            if (data.hasOwnProperty('probability')) {
                obj['probability'] = ApiClient.convertToType(data['probability'], 'Number');

                delete data['probability'];
            }
            if (data.hasOwnProperty('next_activity_date')) {
                obj['next_activity_date'] = ApiClient.convertToType(data['next_activity_date'], 'String');

                delete data['next_activity_date'];
            }
            if (data.hasOwnProperty('next_activity_time')) {
                obj['next_activity_time'] = ApiClient.convertToType(data['next_activity_time'], 'String');

                delete data['next_activity_time'];
            }
            if (data.hasOwnProperty('next_activity_id')) {
                obj['next_activity_id'] = ApiClient.convertToType(data['next_activity_id'], 'Number');

                delete data['next_activity_id'];
            }
            if (data.hasOwnProperty('last_activity_id')) {
                obj['last_activity_id'] = ApiClient.convertToType(data['last_activity_id'], 'Number');

                delete data['last_activity_id'];
            }
            if (data.hasOwnProperty('last_activity_date')) {
                obj['last_activity_date'] = ApiClient.convertToType(data['last_activity_date'], 'String');

                delete data['last_activity_date'];
            }
            if (data.hasOwnProperty('lost_reason')) {
                obj['lost_reason'] = ApiClient.convertToType(data['lost_reason'], 'String');

                delete data['lost_reason'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], 'String');

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('close_time')) {
                obj['close_time'] = ApiClient.convertToType(data['close_time'], 'String');

                delete data['close_time'];
            }
            if (data.hasOwnProperty('pipeline_id')) {
                obj['pipeline_id'] = ApiClient.convertToType(data['pipeline_id'], 'Number');

                delete data['pipeline_id'];
            }
            if (data.hasOwnProperty('won_time')) {
                obj['won_time'] = ApiClient.convertToType(data['won_time'], 'String');

                delete data['won_time'];
            }
            if (data.hasOwnProperty('first_won_time')) {
                obj['first_won_time'] = ApiClient.convertToType(data['first_won_time'], 'String');

                delete data['first_won_time'];
            }
            if (data.hasOwnProperty('lost_time')) {
                obj['lost_time'] = ApiClient.convertToType(data['lost_time'], 'String');

                delete data['lost_time'];
            }
            if (data.hasOwnProperty('products_count')) {
                obj['products_count'] = ApiClient.convertToType(data['products_count'], 'Number');

                delete data['products_count'];
            }
            if (data.hasOwnProperty('files_count')) {
                obj['files_count'] = ApiClient.convertToType(data['files_count'], 'Number');

                delete data['files_count'];
            }
            if (data.hasOwnProperty('notes_count')) {
                obj['notes_count'] = ApiClient.convertToType(data['notes_count'], 'Number');

                delete data['notes_count'];
            }
            if (data.hasOwnProperty('followers_count')) {
                obj['followers_count'] = ApiClient.convertToType(data['followers_count'], 'Number');

                delete data['followers_count'];
            }
            if (data.hasOwnProperty('email_messages_count')) {
                obj['email_messages_count'] = ApiClient.convertToType(data['email_messages_count'], 'Number');

                delete data['email_messages_count'];
            }
            if (data.hasOwnProperty('activities_count')) {
                obj['activities_count'] = ApiClient.convertToType(data['activities_count'], 'Number');

                delete data['activities_count'];
            }
            if (data.hasOwnProperty('done_activities_count')) {
                obj['done_activities_count'] = ApiClient.convertToType(data['done_activities_count'], 'Number');

                delete data['done_activities_count'];
            }
            if (data.hasOwnProperty('undone_activities_count')) {
                obj['undone_activities_count'] = ApiClient.convertToType(data['undone_activities_count'], 'Number');

                delete data['undone_activities_count'];
            }
            if (data.hasOwnProperty('participants_count')) {
                obj['participants_count'] = ApiClient.convertToType(data['participants_count'], 'Number');

                delete data['participants_count'];
            }
            if (data.hasOwnProperty('expected_close_date')) {
                obj['expected_close_date'] = ApiClient.convertToType(data['expected_close_date'], 'Date');

                delete data['expected_close_date'];
            }
            if (data.hasOwnProperty('last_incoming_mail_time')) {
                obj['last_incoming_mail_time'] = ApiClient.convertToType(data['last_incoming_mail_time'], 'String');

                delete data['last_incoming_mail_time'];
            }
            if (data.hasOwnProperty('last_outgoing_mail_time')) {
                obj['last_outgoing_mail_time'] = ApiClient.convertToType(data['last_outgoing_mail_time'], 'String');

                delete data['last_outgoing_mail_time'];
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');

                delete data['label'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the deal
 * @member {Number} id
 */
ProductBaseDeal.prototype['id'] = undefined;

/**
 * The ID of the company
 * @member {Number} company_id
 */
ProductBaseDeal.prototype['company_id'] = undefined;

/**
 * The ID of the deal creator
 * @member {Number} creator_user_id
 */
ProductBaseDeal.prototype['creator_user_id'] = undefined;

/**
 * The ID of the user
 * @member {Number} user_id
 */
ProductBaseDeal.prototype['user_id'] = undefined;

/**
 * The ID of the person associated with the deal
 * @member {Number} person_id
 */
ProductBaseDeal.prototype['person_id'] = undefined;

/**
 * The ID of the organization associated with the deal
 * @member {Number} org_id
 */
ProductBaseDeal.prototype['org_id'] = undefined;

/**
 * The ID of the deal stage
 * @member {Number} stage_id
 */
ProductBaseDeal.prototype['stage_id'] = undefined;

/**
 * The title of the deal
 * @member {String} title
 */
ProductBaseDeal.prototype['title'] = undefined;

/**
 * The value of the deal
 * @member {Number} value
 */
ProductBaseDeal.prototype['value'] = undefined;

/**
 * The currency associated with the deal
 * @member {String} currency
 */
ProductBaseDeal.prototype['currency'] = undefined;

/**
 * The creation date and time of the deal
 * @member {String} add_time
 */
ProductBaseDeal.prototype['add_time'] = undefined;

/**
 * The first creation date and time of the deal
 * @member {String} first_add_time
 */
ProductBaseDeal.prototype['first_add_time'] = undefined;

/**
 * The last updated date and time of the deal
 * @member {String} update_time
 */
ProductBaseDeal.prototype['update_time'] = undefined;

/**
 * The last updated date and time of the deal stage
 * @member {String} stage_change_time
 */
ProductBaseDeal.prototype['stage_change_time'] = undefined;

/**
 * Whether the deal is active or not
 * @member {Boolean} active
 */
ProductBaseDeal.prototype['active'] = undefined;

/**
 * Whether the deal is deleted or not
 * @member {Boolean} deleted
 */
ProductBaseDeal.prototype['deleted'] = undefined;

/**
 * The status of the deal
 * @member {String} status
 */
ProductBaseDeal.prototype['status'] = undefined;

/**
 * The success probability percentage of the deal
 * @member {Number} probability
 */
ProductBaseDeal.prototype['probability'] = undefined;

/**
 * The date of the next activity associated with the deal
 * @member {String} next_activity_date
 */
ProductBaseDeal.prototype['next_activity_date'] = undefined;

/**
 * The time of the next activity associated with the deal
 * @member {String} next_activity_time
 */
ProductBaseDeal.prototype['next_activity_time'] = undefined;

/**
 * The ID of the next activity associated with the deal
 * @member {Number} next_activity_id
 */
ProductBaseDeal.prototype['next_activity_id'] = undefined;

/**
 * The ID of the last activity associated with the deal
 * @member {Number} last_activity_id
 */
ProductBaseDeal.prototype['last_activity_id'] = undefined;

/**
 * The date of the last activity associated with the deal
 * @member {String} last_activity_date
 */
ProductBaseDeal.prototype['last_activity_date'] = undefined;

/**
 * The reason for losing the deal
 * @member {String} lost_reason
 */
ProductBaseDeal.prototype['lost_reason'] = undefined;

/**
 * The visibility of the deal
 * @member {String} visible_to
 */
ProductBaseDeal.prototype['visible_to'] = undefined;

/**
 * The date and time of closing the deal
 * @member {String} close_time
 */
ProductBaseDeal.prototype['close_time'] = undefined;

/**
 * The ID of the pipeline associated with the deal
 * @member {Number} pipeline_id
 */
ProductBaseDeal.prototype['pipeline_id'] = undefined;

/**
 * The date and time of changing the deal status as won
 * @member {String} won_time
 */
ProductBaseDeal.prototype['won_time'] = undefined;

/**
 * The date and time of the first time changing the deal status as won
 * @member {String} first_won_time
 */
ProductBaseDeal.prototype['first_won_time'] = undefined;

/**
 * The date and time of changing the deal status as lost
 * @member {String} lost_time
 */
ProductBaseDeal.prototype['lost_time'] = undefined;

/**
 * The number of products associated with the deal
 * @member {Number} products_count
 */
ProductBaseDeal.prototype['products_count'] = undefined;

/**
 * The number of files associated with the deal
 * @member {Number} files_count
 */
ProductBaseDeal.prototype['files_count'] = undefined;

/**
 * The number of notes associated with the deal
 * @member {Number} notes_count
 */
ProductBaseDeal.prototype['notes_count'] = undefined;

/**
 * The number of followers associated with the deal
 * @member {Number} followers_count
 */
ProductBaseDeal.prototype['followers_count'] = undefined;

/**
 * The number of emails associated with the deal
 * @member {Number} email_messages_count
 */
ProductBaseDeal.prototype['email_messages_count'] = undefined;

/**
 * The number of activities associated with the deal
 * @member {Number} activities_count
 */
ProductBaseDeal.prototype['activities_count'] = undefined;

/**
 * The number of completed activities associated with the deal
 * @member {Number} done_activities_count
 */
ProductBaseDeal.prototype['done_activities_count'] = undefined;

/**
 * The number of incomplete activities associated with the deal
 * @member {Number} undone_activities_count
 */
ProductBaseDeal.prototype['undone_activities_count'] = undefined;

/**
 * The number of participants associated with the deal
 * @member {Number} participants_count
 */
ProductBaseDeal.prototype['participants_count'] = undefined;

/**
 * The expected close date of the deal
 * @member {Date} expected_close_date
 */
ProductBaseDeal.prototype['expected_close_date'] = undefined;

/**
 * The date and time of the last incoming email associated with the deal
 * @member {String} last_incoming_mail_time
 */
ProductBaseDeal.prototype['last_incoming_mail_time'] = undefined;

/**
 * The date and time of the last outgoing email associated with the deal
 * @member {String} last_outgoing_mail_time
 */
ProductBaseDeal.prototype['last_outgoing_mail_time'] = undefined;

/**
 * The label or multiple labels assigned to the deal
 * @member {String} label
 */
ProductBaseDeal.prototype['label'] = undefined;






export default ProductBaseDeal;

