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
 * The NewDealParameters model module.
 * @module model/NewDealParameters
 * @version 1.0.0
 */
class NewDealParameters {
    /**
     * Constructs a new <code>NewDealParameters</code>.
     * @alias module:model/NewDealParameters
     */
    constructor() { 
        
        NewDealParameters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewDealParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewDealParameters} obj Optional instance to populate.
     * @return {module:model/NewDealParameters} The populated <code>NewDealParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewDealParameters();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');

                delete data['value'];
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], ['Number']);

                delete data['label'];
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');

                delete data['currency'];
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
            if (data.hasOwnProperty('pipeline_id')) {
                obj['pipeline_id'] = ApiClient.convertToType(data['pipeline_id'], 'Number');

                delete data['pipeline_id'];
            }
            if (data.hasOwnProperty('stage_id')) {
                obj['stage_id'] = ApiClient.convertToType(data['stage_id'], 'Number');

                delete data['stage_id'];
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');

                delete data['status'];
            }
            if (data.hasOwnProperty('origin_id')) {
                obj['origin_id'] = ApiClient.convertToType(data['origin_id'], 'String');

                delete data['origin_id'];
            }
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = ApiClient.convertToType(data['channel'], 'Number');

                delete data['channel'];
            }
            if (data.hasOwnProperty('channel_id')) {
                obj['channel_id'] = ApiClient.convertToType(data['channel_id'], 'String');

                delete data['channel_id'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The value of the deal. If omitted, value will be set to 0.
 * @member {String} value
 */
NewDealParameters.prototype['value'] = undefined;

/**
 * The array of the labels IDs.
 * @member {Array.<Number>} label
 */
NewDealParameters.prototype['label'] = undefined;

/**
 * The currency of the deal. Accepts a 3-character currency code. If omitted, currency will be set to the default currency of the authorized user.
 * @member {String} currency
 */
NewDealParameters.prototype['currency'] = undefined;

/**
 * The ID of the user which will be the owner of the created deal. If not provided, the user making the request will be used.
 * @member {Number} user_id
 */
NewDealParameters.prototype['user_id'] = undefined;

/**
 * The ID of a person which this deal will be linked to. If the person does not exist yet, it needs to be created first. This property is required unless `org_id` is specified.
 * @member {Number} person_id
 */
NewDealParameters.prototype['person_id'] = undefined;

/**
 * The ID of an organization which this deal will be linked to. If the organization does not exist yet, it needs to be created first. This property is required unless `person_id` is specified.
 * @member {Number} org_id
 */
NewDealParameters.prototype['org_id'] = undefined;

/**
 * The ID of the pipeline this deal will be added to. By default, the deal will be added to the first stage of the specified pipeline. Please note that `pipeline_id` and `stage_id` should not be used together as `pipeline_id` will be ignored.
 * @member {Number} pipeline_id
 */
NewDealParameters.prototype['pipeline_id'] = undefined;

/**
 * The ID of the stage this deal will be added to. Please note that a pipeline will be assigned automatically based on the `stage_id`. If omitted, the deal will be placed in the first stage of the default pipeline.
 * @member {Number} stage_id
 */
NewDealParameters.prototype['stage_id'] = undefined;

/**
 * open = Open, won = Won, lost = Lost, deleted = Deleted. If omitted, status will be set to open.
 * @member {module:model/NewDealParameters.StatusEnum} status
 */
NewDealParameters.prototype['status'] = undefined;

/**
 * The optional ID to further distinguish the origin of the deal - e.g. Which API integration created this deal. If omitted, `origin_id` will be set to null.
 * @member {String} origin_id
 */
NewDealParameters.prototype['origin_id'] = undefined;

/**
 * The ID of Marketing channel this deal was created from. Provided value must be one of the channels configured for your company. You can fetch allowed values with <a href=\"https://developers.pipedrive.com/docs/api/v1/DealFields#getDealField\" target=\"_blank\" rel=\"noopener noreferrer\">GET /v1/dealFields</a>. If omitted, channel will be set to null.
 * @member {Number} channel
 */
NewDealParameters.prototype['channel'] = undefined;

/**
 * The optional ID to further distinguish the Marketing channel. If omitted, `channel_id` will be set to null.
 * @member {String} channel_id
 */
NewDealParameters.prototype['channel_id'] = undefined;

/**
 * The optional creation date & time of the deal in UTC. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
NewDealParameters.prototype['add_time'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
NewDealParameters['StatusEnum'] = {

    /**
     * value: "open"
     * @const
     */
    "open": "open",

    /**
     * value: "won"
     * @const
     */
    "won": "won",

    /**
     * value: "lost"
     * @const
     */
    "lost": "lost",

    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted"
};



export default NewDealParameters;

