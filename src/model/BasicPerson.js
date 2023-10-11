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
import BasePersonItemPhone from './BasePersonItemPhone';
import BasicPersonEmail from './BasicPersonEmail';
import MarketingStatus from './MarketingStatus';
import VisibleTo from './VisibleTo';

/**
 * The BasicPerson model module.
 * @module model/BasicPerson
 * @version 1.0.0
 */
class BasicPerson {
    /**
     * Constructs a new <code>BasicPerson</code>.
     * @alias module:model/BasicPerson
     */
    constructor() { 
        
        BasicPerson.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicPerson</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicPerson} obj Optional instance to populate.
     * @return {module:model/BasicPerson} The populated <code>BasicPerson</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicPerson();

            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], [BasicPersonEmail]);

                delete data['email'];
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], [BasePersonItemPhone]);

                delete data['phone'];
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'Number');

                delete data['label'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], VisibleTo);

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('marketing_status')) {
                obj['marketing_status'] = ApiClient.convertToType(data['marketing_status'], MarketingStatus);

                delete data['marketing_status'];
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
 * The ID of the user who will be marked as the owner of this person. When omitted, the authorized user ID will be used.
 * @member {Number} owner_id
 */
BasicPerson.prototype['owner_id'] = undefined;

/**
 * The ID of the organization this person will belong to
 * @member {Number} org_id
 */
BasicPerson.prototype['org_id'] = undefined;

/**
 * An email address as a string or an array of email objects related to the person. The structure of the array is as follows: `[{ \"value\": \"mail@example.com\", \"primary\": \"true\", \"label\": \"main\" }]`. Please note that only `value` is required.
 * @member {Array.<module:model/BasicPersonEmail>} email
 */
BasicPerson.prototype['email'] = undefined;

/**
 * A phone number supplied as a string or an array of phone objects related to the person. The structure of the array is as follows: `[{ \"value\": \"12345\", \"primary\": \"true\", \"label\": \"mobile\" }]`. Please note that only `value` is required.
 * @member {Array.<module:model/BasePersonItemPhone>} phone
 */
BasicPerson.prototype['phone'] = undefined;

/**
 * The ID of the label.
 * @member {Number} label
 */
BasicPerson.prototype['label'] = undefined;

/**
 * The visibility of the person. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user. Read more about visibility groups <a href=\"https://support.pipedrive.com/en/article/visibility-groups\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.<h4>Essential / Advanced plan</h4><table><tr><th style=\"width:40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers</td><tr><td>`3`</td><td>Entire company</td></tr></table><h4>Professional / Enterprise plan</h4><table><tr><th style=\"width:40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner only</td><tr><td>`3`</td><td>Owner's visibility group</td></tr><tr><td>`5`</td><td>Owner's visibility group and sub-groups</td></tr><tr><td>`7`</td><td>Entire company</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
BasicPerson.prototype['visible_to'] = undefined;

/**
 * If the person does not have a valid email address, then the marketing status is **not set** and `no_consent` is returned for the `marketing_status` value when the new person is created. If the change is forbidden, the status will remain unchanged for every call that tries to modify the marketing status. Please be aware that it is only allowed **once** to change the marketing status from an old status to a new one.<table><tr><th>Value</th><th>Description</th></tr><tr><td>`no_consent`</td><td>The customer has not given consent to receive any marketing communications</td></tr><tr><td>`unsubscribed`</td><td>The customers have unsubscribed from ALL marketing communications</td></tr><tr><td>`subscribed`</td><td>The customers are subscribed and are counted towards marketing caps</td></tr><tr><td>`archived`</td><td>The customers with `subscribed` status can be moved to `archived` to save consent, but they are not paid for</td></tr></table>
 * @member {module:model/MarketingStatus} marketing_status
 */
BasicPerson.prototype['marketing_status'] = undefined;

/**
 * The optional creation date & time of the person in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
BasicPerson.prototype['add_time'] = undefined;






export default BasicPerson;

