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
import AdditionalPersonInfo from './AdditionalPersonInfo';
import BasePersonItem from './BasePersonItem';
import BasePersonItemEmail from './BasePersonItemEmail';
import BasePersonItemPhone from './BasePersonItemPhone';
import Owner from './Owner';
import PictureDataWithID from './PictureDataWithID';
import RelationshipOrganizationInfoItemWithActiveFlag from './RelationshipOrganizationInfoItemWithActiveFlag';

/**
 * The PersonItem model module.
 * @module model/PersonItem
 * @version 1.0.0
 */
class PersonItem {
    /**
     * Constructs a new <code>PersonItem</code>.
     * @alias module:model/PersonItem
     * @implements module:model/BasePersonItem
     * @implements module:model/AdditionalPersonInfo
     */
    constructor() { 
        BasePersonItem.initialize(this);AdditionalPersonInfo.initialize(this);
        PersonItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonItem} obj Optional instance to populate.
     * @return {module:model/PersonItem} The populated <code>PersonItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonItem();
            BasePersonItem.constructFromObject(data, obj);
            AdditionalPersonInfo.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('company_id')) {
                obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');

                delete data['company_id'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], [BasePersonItemPhone]);

                delete data['phone'];
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], [BasePersonItemEmail]);

                delete data['email'];
            }
            if (data.hasOwnProperty('first_char')) {
                obj['first_char'] = ApiClient.convertToType(data['first_char'], 'String');

                delete data['first_char'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], 'String');

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('picture_id')) {
                obj['picture_id'] = PictureDataWithID.constructFromObject(data['picture_id']);

                delete data['picture_id'];
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'Number');

                delete data['label'];
            }
            if (data.hasOwnProperty('org_name')) {
                obj['org_name'] = ApiClient.convertToType(data['org_name'], 'String');

                delete data['org_name'];
            }
            if (data.hasOwnProperty('owner_name')) {
                obj['owner_name'] = ApiClient.convertToType(data['owner_name'], 'String');

                delete data['owner_name'];
            }
            if (data.hasOwnProperty('cc_email')) {
                obj['cc_email'] = ApiClient.convertToType(data['cc_email'], 'String');

                delete data['cc_email'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = Owner.constructFromObject(data['owner_id']);

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = RelationshipOrganizationInfoItemWithActiveFlag.constructFromObject(data['org_id']);

                delete data['org_id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');

                delete data['first_name'];
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');

                delete data['last_name'];
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
            if (data.hasOwnProperty('last_incoming_mail_time')) {
                obj['last_incoming_mail_time'] = ApiClient.convertToType(data['last_incoming_mail_time'], 'String');

                delete data['last_incoming_mail_time'];
            }
            if (data.hasOwnProperty('last_outgoing_mail_time')) {
                obj['last_outgoing_mail_time'] = ApiClient.convertToType(data['last_outgoing_mail_time'], 'String');

                delete data['last_outgoing_mail_time'];
            }
            if (data.hasOwnProperty('open_deals_count')) {
                obj['open_deals_count'] = ApiClient.convertToType(data['open_deals_count'], 'Number');

                delete data['open_deals_count'];
            }
            if (data.hasOwnProperty('related_open_deals_count')) {
                obj['related_open_deals_count'] = ApiClient.convertToType(data['related_open_deals_count'], 'Number');

                delete data['related_open_deals_count'];
            }
            if (data.hasOwnProperty('closed_deals_count')) {
                obj['closed_deals_count'] = ApiClient.convertToType(data['closed_deals_count'], 'Number');

                delete data['closed_deals_count'];
            }
            if (data.hasOwnProperty('related_closed_deals_count')) {
                obj['related_closed_deals_count'] = ApiClient.convertToType(data['related_closed_deals_count'], 'Number');

                delete data['related_closed_deals_count'];
            }
            if (data.hasOwnProperty('won_deals_count')) {
                obj['won_deals_count'] = ApiClient.convertToType(data['won_deals_count'], 'Number');

                delete data['won_deals_count'];
            }
            if (data.hasOwnProperty('related_won_deals_count')) {
                obj['related_won_deals_count'] = ApiClient.convertToType(data['related_won_deals_count'], 'Number');

                delete data['related_won_deals_count'];
            }
            if (data.hasOwnProperty('lost_deals_count')) {
                obj['lost_deals_count'] = ApiClient.convertToType(data['lost_deals_count'], 'Number');

                delete data['lost_deals_count'];
            }
            if (data.hasOwnProperty('related_lost_deals_count')) {
                obj['related_lost_deals_count'] = ApiClient.convertToType(data['related_lost_deals_count'], 'Number');

                delete data['related_lost_deals_count'];
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

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the person
 * @member {Number} id
 */
PersonItem.prototype['id'] = undefined;

/**
 * The ID of the company related to the person
 * @member {Number} company_id
 */
PersonItem.prototype['company_id'] = undefined;

/**
 * Whether the person is active or not
 * @member {Boolean} active_flag
 */
PersonItem.prototype['active_flag'] = undefined;

/**
 * List of phone data related to the person
 * @member {Array.<module:model/BasePersonItemPhone>} phone
 */
PersonItem.prototype['phone'] = undefined;

/**
 * List of email data related to the person
 * @member {Array.<module:model/BasePersonItemEmail>} email
 */
PersonItem.prototype['email'] = undefined;

/**
 * The first letter of the name of the person
 * @member {String} first_char
 */
PersonItem.prototype['first_char'] = undefined;

/**
 * The date and time when the person was added/created. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
PersonItem.prototype['add_time'] = undefined;

/**
 * The last updated date and time of the person. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} update_time
 */
PersonItem.prototype['update_time'] = undefined;

/**
 * The visibility group ID of who can see the person
 * @member {String} visible_to
 */
PersonItem.prototype['visible_to'] = undefined;

/**
 * @member {module:model/PictureDataWithID} picture_id
 */
PersonItem.prototype['picture_id'] = undefined;

/**
 * The label assigned to the person
 * @member {Number} label
 */
PersonItem.prototype['label'] = undefined;

/**
 * The name of the organization associated with the person
 * @member {String} org_name
 */
PersonItem.prototype['org_name'] = undefined;

/**
 * The name of the owner associated with the person
 * @member {String} owner_name
 */
PersonItem.prototype['owner_name'] = undefined;

/**
 * The BCC email associated with the person
 * @member {String} cc_email
 */
PersonItem.prototype['cc_email'] = undefined;

/**
 * @member {module:model/Owner} owner_id
 */
PersonItem.prototype['owner_id'] = undefined;

/**
 * @member {module:model/RelationshipOrganizationInfoItemWithActiveFlag} org_id
 */
PersonItem.prototype['org_id'] = undefined;

/**
 * The name of the person
 * @member {String} name
 */
PersonItem.prototype['name'] = undefined;

/**
 * The first name of the person
 * @member {String} first_name
 */
PersonItem.prototype['first_name'] = undefined;

/**
 * The last name of the person
 * @member {String} last_name
 */
PersonItem.prototype['last_name'] = undefined;

/**
 * The count of email messages related to the person
 * @member {Number} email_messages_count
 */
PersonItem.prototype['email_messages_count'] = undefined;

/**
 * The count of activities related to the person
 * @member {Number} activities_count
 */
PersonItem.prototype['activities_count'] = undefined;

/**
 * The count of done activities related to the person
 * @member {Number} done_activities_count
 */
PersonItem.prototype['done_activities_count'] = undefined;

/**
 * The count of undone activities related to the person
 * @member {Number} undone_activities_count
 */
PersonItem.prototype['undone_activities_count'] = undefined;

/**
 * The count of files related to the person
 * @member {Number} files_count
 */
PersonItem.prototype['files_count'] = undefined;

/**
 * The count of notes related to the person
 * @member {Number} notes_count
 */
PersonItem.prototype['notes_count'] = undefined;

/**
 * The count of followers related to the person
 * @member {Number} followers_count
 */
PersonItem.prototype['followers_count'] = undefined;

/**
 * The date and time of the last incoming email associated with the person
 * @member {String} last_incoming_mail_time
 */
PersonItem.prototype['last_incoming_mail_time'] = undefined;

/**
 * The date and time of the last outgoing email associated with the person
 * @member {String} last_outgoing_mail_time
 */
PersonItem.prototype['last_outgoing_mail_time'] = undefined;

/**
 * The count of open deals related with the item
 * @member {Number} open_deals_count
 */
PersonItem.prototype['open_deals_count'] = undefined;

/**
 * The count of related open deals related with the item
 * @member {Number} related_open_deals_count
 */
PersonItem.prototype['related_open_deals_count'] = undefined;

/**
 * The count of closed deals related with the item
 * @member {Number} closed_deals_count
 */
PersonItem.prototype['closed_deals_count'] = undefined;

/**
 * The count of related closed deals related with the item
 * @member {Number} related_closed_deals_count
 */
PersonItem.prototype['related_closed_deals_count'] = undefined;

/**
 * The count of won deals related with the item
 * @member {Number} won_deals_count
 */
PersonItem.prototype['won_deals_count'] = undefined;

/**
 * The count of related won deals related with the item
 * @member {Number} related_won_deals_count
 */
PersonItem.prototype['related_won_deals_count'] = undefined;

/**
 * The count of lost deals related with the item
 * @member {Number} lost_deals_count
 */
PersonItem.prototype['lost_deals_count'] = undefined;

/**
 * The count of related lost deals related with the item
 * @member {Number} related_lost_deals_count
 */
PersonItem.prototype['related_lost_deals_count'] = undefined;

/**
 * The date of the next activity associated with the deal
 * @member {String} next_activity_date
 */
PersonItem.prototype['next_activity_date'] = undefined;

/**
 * The time of the next activity associated with the deal
 * @member {String} next_activity_time
 */
PersonItem.prototype['next_activity_time'] = undefined;

/**
 * The ID of the next activity associated with the deal
 * @member {Number} next_activity_id
 */
PersonItem.prototype['next_activity_id'] = undefined;

/**
 * The ID of the last activity associated with the deal
 * @member {Number} last_activity_id
 */
PersonItem.prototype['last_activity_id'] = undefined;

/**
 * The date of the last activity associated with the deal
 * @member {String} last_activity_date
 */
PersonItem.prototype['last_activity_date'] = undefined;


// Implement BasePersonItem interface:
/**
 * The ID of the person
 * @member {Number} id
 */
BasePersonItem.prototype['id'] = undefined;
/**
 * The ID of the company related to the person
 * @member {Number} company_id
 */
BasePersonItem.prototype['company_id'] = undefined;
/**
 * Whether the person is active or not
 * @member {Boolean} active_flag
 */
BasePersonItem.prototype['active_flag'] = undefined;
/**
 * List of phone data related to the person
 * @member {Array.<module:model/BasePersonItemPhone>} phone
 */
BasePersonItem.prototype['phone'] = undefined;
/**
 * List of email data related to the person
 * @member {Array.<module:model/BasePersonItemEmail>} email
 */
BasePersonItem.prototype['email'] = undefined;
/**
 * The first letter of the name of the person
 * @member {String} first_char
 */
BasePersonItem.prototype['first_char'] = undefined;
/**
 * The date and time when the person was added/created. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
BasePersonItem.prototype['add_time'] = undefined;
/**
 * The last updated date and time of the person. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} update_time
 */
BasePersonItem.prototype['update_time'] = undefined;
/**
 * The visibility group ID of who can see the person
 * @member {String} visible_to
 */
BasePersonItem.prototype['visible_to'] = undefined;
/**
 * @member {module:model/PictureDataWithID} picture_id
 */
BasePersonItem.prototype['picture_id'] = undefined;
/**
 * The label assigned to the person
 * @member {Number} label
 */
BasePersonItem.prototype['label'] = undefined;
/**
 * The name of the organization associated with the person
 * @member {String} org_name
 */
BasePersonItem.prototype['org_name'] = undefined;
/**
 * The name of the owner associated with the person
 * @member {String} owner_name
 */
BasePersonItem.prototype['owner_name'] = undefined;
/**
 * The BCC email associated with the person
 * @member {String} cc_email
 */
BasePersonItem.prototype['cc_email'] = undefined;
// Implement AdditionalPersonInfo interface:
/**
 * @member {module:model/Owner} owner_id
 */
AdditionalPersonInfo.prototype['owner_id'] = undefined;
/**
 * @member {module:model/RelationshipOrganizationInfoItemWithActiveFlag} org_id
 */
AdditionalPersonInfo.prototype['org_id'] = undefined;
/**
 * The name of the person
 * @member {String} name
 */
AdditionalPersonInfo.prototype['name'] = undefined;
/**
 * The first name of the person
 * @member {String} first_name
 */
AdditionalPersonInfo.prototype['first_name'] = undefined;
/**
 * The last name of the person
 * @member {String} last_name
 */
AdditionalPersonInfo.prototype['last_name'] = undefined;
/**
 * The count of email messages related to the person
 * @member {Number} email_messages_count
 */
AdditionalPersonInfo.prototype['email_messages_count'] = undefined;
/**
 * The count of activities related to the person
 * @member {Number} activities_count
 */
AdditionalPersonInfo.prototype['activities_count'] = undefined;
/**
 * The count of done activities related to the person
 * @member {Number} done_activities_count
 */
AdditionalPersonInfo.prototype['done_activities_count'] = undefined;
/**
 * The count of undone activities related to the person
 * @member {Number} undone_activities_count
 */
AdditionalPersonInfo.prototype['undone_activities_count'] = undefined;
/**
 * The count of files related to the person
 * @member {Number} files_count
 */
AdditionalPersonInfo.prototype['files_count'] = undefined;
/**
 * The count of notes related to the person
 * @member {Number} notes_count
 */
AdditionalPersonInfo.prototype['notes_count'] = undefined;
/**
 * The count of followers related to the person
 * @member {Number} followers_count
 */
AdditionalPersonInfo.prototype['followers_count'] = undefined;
/**
 * The date and time of the last incoming email associated with the person
 * @member {String} last_incoming_mail_time
 */
AdditionalPersonInfo.prototype['last_incoming_mail_time'] = undefined;
/**
 * The date and time of the last outgoing email associated with the person
 * @member {String} last_outgoing_mail_time
 */
AdditionalPersonInfo.prototype['last_outgoing_mail_time'] = undefined;
/**
 * The count of open deals related with the item
 * @member {Number} open_deals_count
 */
AdditionalPersonInfo.prototype['open_deals_count'] = undefined;
/**
 * The count of related open deals related with the item
 * @member {Number} related_open_deals_count
 */
AdditionalPersonInfo.prototype['related_open_deals_count'] = undefined;
/**
 * The count of closed deals related with the item
 * @member {Number} closed_deals_count
 */
AdditionalPersonInfo.prototype['closed_deals_count'] = undefined;
/**
 * The count of related closed deals related with the item
 * @member {Number} related_closed_deals_count
 */
AdditionalPersonInfo.prototype['related_closed_deals_count'] = undefined;
/**
 * The count of won deals related with the item
 * @member {Number} won_deals_count
 */
AdditionalPersonInfo.prototype['won_deals_count'] = undefined;
/**
 * The count of related won deals related with the item
 * @member {Number} related_won_deals_count
 */
AdditionalPersonInfo.prototype['related_won_deals_count'] = undefined;
/**
 * The count of lost deals related with the item
 * @member {Number} lost_deals_count
 */
AdditionalPersonInfo.prototype['lost_deals_count'] = undefined;
/**
 * The count of related lost deals related with the item
 * @member {Number} related_lost_deals_count
 */
AdditionalPersonInfo.prototype['related_lost_deals_count'] = undefined;
/**
 * The date of the next activity associated with the deal
 * @member {String} next_activity_date
 */
AdditionalPersonInfo.prototype['next_activity_date'] = undefined;
/**
 * The time of the next activity associated with the deal
 * @member {String} next_activity_time
 */
AdditionalPersonInfo.prototype['next_activity_time'] = undefined;
/**
 * The ID of the next activity associated with the deal
 * @member {Number} next_activity_id
 */
AdditionalPersonInfo.prototype['next_activity_id'] = undefined;
/**
 * The ID of the last activity associated with the deal
 * @member {Number} last_activity_id
 */
AdditionalPersonInfo.prototype['last_activity_id'] = undefined;
/**
 * The date of the last activity associated with the deal
 * @member {String} last_activity_date
 */
AdditionalPersonInfo.prototype['last_activity_date'] = undefined;




export default PersonItem;

