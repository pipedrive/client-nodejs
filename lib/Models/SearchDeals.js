'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GetDealsByName
 */
class SearchDeals extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.success = this.constructor.getValue(obj.success);
        this.data = this.constructor.getValue(obj.data);
        this.additional_data = this.constructor.getValue(obj.additional_data);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'success', realName: 'success' },
            { name: 'data', realName: 'data', array: false, type: 'Data32' },
            { name: 'additional_data', realName: 'additional_data', type: 'AdditionalData5' },
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

module.exports = SearchDeals;
