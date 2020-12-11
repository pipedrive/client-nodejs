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
import CallLogObject from './CallLogObject';

/**
 * The ResponseCallLogObject model module.
 * @module model/ResponseCallLogObject
 * @version 1.0.0
 */
class ResponseCallLogObject {
    /**
     * Constructs a new <code>ResponseCallLogObject</code>.
     * @alias module:model/ResponseCallLogObject
     * @extends module:model/CallLogObject
     * @implements module:model/CallLogObject
     * @param outcome {module:model/ResponseCallLogObject.OutcomeEnum} Describes the outcome of the call
     * @param toPhoneNumber {String} The number called
     * @param startTime {Date} The date and time of the start of the call in UTC. Format: YYYY-MM-DD HH:MM:SS.
     * @param endTime {Date} The date and time of the end of the call in UTC. Format: YYYY-MM-DD HH:MM:SS.
     */
    constructor(outcome, toPhoneNumber, startTime, endTime) { 
        CallLogObject.initialize(this, outcome, toPhoneNumber, startTime, endTime);
        ResponseCallLogObject.initialize(this, outcome, toPhoneNumber, startTime, endTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, outcome, toPhoneNumber, startTime, endTime) { 
    }

    /**
     * Constructs a <code>ResponseCallLogObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseCallLogObject} obj Optional instance to populate.
     * @return {module:model/ResponseCallLogObject} The populated <code>ResponseCallLogObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseCallLogObject();
            CallLogObject.constructFromObject(data, obj);
            CallLogObject.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');

                delete data['id'];
            }
            if (data.hasOwnProperty('has_recording')) {
                obj['has_recording'] = ApiClient.convertToType(data['has_recording'], 'Boolean');

                delete data['has_recording'];
            }
            if (data.hasOwnProperty('company_id')) {
                obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');

                delete data['company_id'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The call log ID, generated when the call log was created
 * @member {String} id
 */
ResponseCallLogObject.prototype['id'] = undefined;

/**
 * If the call log has an audio recording attached, the value should be true
 * @member {Boolean} has_recording
 */
ResponseCallLogObject.prototype['has_recording'] = undefined;

/**
 * The Company ID of the owner of the call log
 * @member {Number} company_id
 */
ResponseCallLogObject.prototype['company_id'] = undefined;


// Implement CallLogObject interface:
/**
 * The ID of the owner of the call log
 * @member {Number} user_id
 */
CallLogObject.prototype['user_id'] = undefined;
/**
 * If specified, this activity will be converted into a call log, with the information provided. When this field is used, you don't need to specify deal_id, person_id or org_id, as they will be ignored in favor of the values already available in the activity.
 * @member {Number} activity_id
 */
CallLogObject.prototype['activity_id'] = undefined;
/**
 * Name of the activity this call is attached to
 * @member {String} subject
 */
CallLogObject.prototype['subject'] = undefined;
/**
 * Call duration in seconds
 * @member {String} duration
 */
CallLogObject.prototype['duration'] = undefined;
/**
 * Describes the outcome of the call
 * @member {module:model/CallLogObject.OutcomeEnum} outcome
 */
CallLogObject.prototype['outcome'] = undefined;
/**
 * The number that made the call
 * @member {String} from_phone_number
 */
CallLogObject.prototype['from_phone_number'] = undefined;
/**
 * The number called
 * @member {String} to_phone_number
 */
CallLogObject.prototype['to_phone_number'] = undefined;
/**
 * The date and time of the start of the call in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {Date} start_time
 */
CallLogObject.prototype['start_time'] = undefined;
/**
 * The date and time of the end of the call in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {Date} end_time
 */
CallLogObject.prototype['end_time'] = undefined;
/**
 * The ID of the Person this call is associated with
 * @member {Number} person_id
 */
CallLogObject.prototype['person_id'] = undefined;
/**
 * The ID of the Organization this call is associated with
 * @member {Number} org_id
 */
CallLogObject.prototype['org_id'] = undefined;
/**
 * The ID of the Deal this call is associated with
 * @member {Number} deal_id
 */
CallLogObject.prototype['deal_id'] = undefined;




export default ResponseCallLogObject;
