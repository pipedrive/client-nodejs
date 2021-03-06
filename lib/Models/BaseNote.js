/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of BaseNote
 */
class BaseNote extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.active_flag = this.constructor.getValue(obj.active_flag);
        this.add_time = this.constructor.getValue(obj.add_time);
        this.content = this.constructor.getValue(obj.content);
        this.deal = this.constructor.getValue(obj.deal);
        this.deal_id = this.constructor.getValue(obj.deal_id);
        this.last_update_user_id = this.constructor.getValue(obj.last_update_user_id);
        this.org_id = this.constructor.getValue(obj.org_id);
        this.organization = this.constructor.getValue(obj.organization);
        this.person = this.constructor.getValue(obj.person);
        this.person_id = this.constructor.getValue(obj.person_id);
        this.pinned_to_deal_flag = this.constructor.getValue(obj.pinned_to_deal_flag);
        this.pinned_to_organization_flag =
          this.constructor.getValue(obj.pinned_to_organization_flag);
        this.pinned_to_person_flag = this.constructor.getValue(obj.pinned_to_person_flag);
        this.update_time = this.constructor.getValue(obj.update_time);
        this.user = this.constructor.getValue(obj.user);
        this.user_id = this.constructor.getValue(obj.user_id);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'active_flag', realName: 'active_flag' },
            { name: 'add_time', realName: 'add_time' },
            { name: 'content', realName: 'content' },
            { name: 'deal', realName: 'deal', type: 'BaseNoteDealTitle' },
            { name: 'deal_id', realName: 'deal_id' },
            { name: 'last_update_user_id', realName: 'last_update_user_id' },
            { name: 'org_id', realName: 'org_id' },
            { name: 'organization', realName: 'organization', type: 'Organization1' },
            { name: 'person', realName: 'person', type: 'Person1' },
            { name: 'person_id', realName: 'person_id' },
            { name: 'pinned_to_deal_flag', realName: 'pinned_to_deal_flag' },
            { name: 'pinned_to_organization_flag', realName: 'pinned_to_organization_flag' },
            { name: 'pinned_to_person_flag', realName: 'pinned_to_person_flag' },
            { name: 'update_time', realName: 'update_time' },
            { name: 'user', realName: 'user', type: 'NoteCreatorUser' },
            { name: 'user_id', realName: 'user_id' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = BaseNote;
