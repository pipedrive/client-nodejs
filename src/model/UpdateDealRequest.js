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
import BasicDeal from './BasicDeal';
import DealTitleParameter from './DealTitleParameter';
import UpdateDealParameters from './UpdateDealParameters';
import VisibleTo from './VisibleTo';

/**
 * The UpdateDealRequest model module.
 * @module model/UpdateDealRequest
 * @version 1.0.0
 */
class UpdateDealRequest {
    /**
     * Constructs a new <code>UpdateDealRequest</code>.
     * @alias module:model/UpdateDealRequest
     * @implements module:model/DealTitleParameter
     * @implements module:model/UpdateDealParameters
     * @implements module:model/BasicDeal
     */
    constructor() { 
        DealTitleParameter.initialize(this);UpdateDealParameters.initialize(this);BasicDeal.initialize(this);
        UpdateDealRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateDealRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateDealRequest} obj Optional instance to populate.
     * @return {module:model/UpdateDealRequest} The populated <code>UpdateDealRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateDealRequest();
            DealTitleParameter.constructFromObject(data, obj);
            UpdateDealParameters.constructFromObject(data, obj);
            BasicDeal.constructFromObject(data, obj);

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');

                delete data['value'];
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
            if (data.hasOwnProperty('expected_close_date')) {
                obj['expected_close_date'] = ApiClient.convertToType(data['expected_close_date'], 'Date');

                delete data['expected_close_date'];
            }
            if (data.hasOwnProperty('probability')) {
                obj['probability'] = ApiClient.convertToType(data['probability'], 'Number');

                delete data['probability'];
            }
            if (data.hasOwnProperty('lost_reason')) {
                obj['lost_reason'] = ApiClient.convertToType(data['lost_reason'], 'String');

                delete data['lost_reason'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], VisibleTo);

                delete data['visible_to'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The title of the deal
 * @member {String} title
 */
UpdateDealRequest.prototype['title'] = undefined;

/**
 * The value of the deal.
 * @member {String} value
 */
UpdateDealRequest.prototype['value'] = undefined;

/**
 * The currency of the deal. Accepts a 3-character currency code.
 * @member {String} currency
 */
UpdateDealRequest.prototype['currency'] = undefined;

/**
 * The ID of the user which will be the new owner of the deal.
 * @member {Number} user_id
 */
UpdateDealRequest.prototype['user_id'] = undefined;

/**
 * The ID of a person which this deal will be linked to. If the person does not exist yet, it needs to be created first.
 * @member {Number} person_id
 */
UpdateDealRequest.prototype['person_id'] = undefined;

/**
 * The ID of an organization which this deal will be linked to. If the organization does not exist yet, it needs to be created first.
 * @member {Number} org_id
 */
UpdateDealRequest.prototype['org_id'] = undefined;

/**
 * The ID of the pipeline this deal will be added to. By default, the deal will be added to the first stage of the specified pipeline. Please note that `pipeline_id` and `stage_id` should not be used together as `pipeline_id` will be ignored.
 * @member {Number} pipeline_id
 */
UpdateDealRequest.prototype['pipeline_id'] = undefined;

/**
 * The ID of the stage this deal will be added to. Please note that a pipeline will be assigned automatically based on the `stage_id`.
 * @member {Number} stage_id
 */
UpdateDealRequest.prototype['stage_id'] = undefined;

/**
 * open = Open, won = Won, lost = Lost, deleted = Deleted.
 * @member {module:model/UpdateDealRequest.StatusEnum} status
 */
UpdateDealRequest.prototype['status'] = undefined;

/**
 * The expected close date of the deal. In ISO 8601 format: YYYY-MM-DD.
 * @member {Date} expected_close_date
 */
UpdateDealRequest.prototype['expected_close_date'] = undefined;

/**
 * The success probability percentage of the deal. Used/shown only when `deal_probability` for the pipeline of the deal is enabled.
 * @member {Number} probability
 */
UpdateDealRequest.prototype['probability'] = undefined;

/**
 * The optional message about why the deal was lost (to be used when status = lost)
 * @member {String} lost_reason
 */
UpdateDealRequest.prototype['lost_reason'] = undefined;

/**
 * The visibility of the deal. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user. Read more about visibility groups <a href=\"https://support.pipedrive.com/en/article/visibility-groups\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.<h4>Essential / Advanced plan</h4><table><tr><th style=\"width:40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers</td><tr><td>`3`</td><td>Entire company</td></tr></table><h4>Professional / Enterprise plan</h4><table><tr><th style=\"width:40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner only</td><tr><td>`3`</td><td>Owner's visibility group</td></tr><tr><td>`5`</td><td>Owner's visibility group and sub-groups</td></tr><tr><td>`7`</td><td>Entire company</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
UpdateDealRequest.prototype['visible_to'] = undefined;


// Implement DealTitleParameter interface:
/**
 * The title of the deal
 * @member {String} title
 */
DealTitleParameter.prototype['title'] = undefined;
// Implement UpdateDealParameters interface:
/**
 * The value of the deal.
 * @member {String} value
 */
UpdateDealParameters.prototype['value'] = undefined;
/**
 * The currency of the deal. Accepts a 3-character currency code.
 * @member {String} currency
 */
UpdateDealParameters.prototype['currency'] = undefined;
/**
 * The ID of the user which will be the new owner of the deal.
 * @member {Number} user_id
 */
UpdateDealParameters.prototype['user_id'] = undefined;
/**
 * The ID of a person which this deal will be linked to. If the person does not exist yet, it needs to be created first.
 * @member {Number} person_id
 */
UpdateDealParameters.prototype['person_id'] = undefined;
/**
 * The ID of an organization which this deal will be linked to. If the organization does not exist yet, it needs to be created first.
 * @member {Number} org_id
 */
UpdateDealParameters.prototype['org_id'] = undefined;
/**
 * The ID of the pipeline this deal will be added to. By default, the deal will be added to the first stage of the specified pipeline. Please note that `pipeline_id` and `stage_id` should not be used together as `pipeline_id` will be ignored.
 * @member {Number} pipeline_id
 */
UpdateDealParameters.prototype['pipeline_id'] = undefined;
/**
 * The ID of the stage this deal will be added to. Please note that a pipeline will be assigned automatically based on the `stage_id`.
 * @member {Number} stage_id
 */
UpdateDealParameters.prototype['stage_id'] = undefined;
/**
 * open = Open, won = Won, lost = Lost, deleted = Deleted.
 * @member {module:model/UpdateDealParameters.StatusEnum} status
 */
UpdateDealParameters.prototype['status'] = undefined;
// Implement BasicDeal interface:
/**
 * The expected close date of the deal. In ISO 8601 format: YYYY-MM-DD.
 * @member {Date} expected_close_date
 */
BasicDeal.prototype['expected_close_date'] = undefined;
/**
 * The success probability percentage of the deal. Used/shown only when `deal_probability` for the pipeline of the deal is enabled.
 * @member {Number} probability
 */
BasicDeal.prototype['probability'] = undefined;
/**
 * The optional message about why the deal was lost (to be used when status = lost)
 * @member {String} lost_reason
 */
BasicDeal.prototype['lost_reason'] = undefined;
/**
 * The visibility of the deal. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user. Read more about visibility groups <a href=\"https://support.pipedrive.com/en/article/visibility-groups\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.<h4>Essential / Advanced plan</h4><table><tr><th style=\"width:40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers</td><tr><td>`3`</td><td>Entire company</td></tr></table><h4>Professional / Enterprise plan</h4><table><tr><th style=\"width:40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner only</td><tr><td>`3`</td><td>Owner's visibility group</td></tr><tr><td>`5`</td><td>Owner's visibility group and sub-groups</td></tr><tr><td>`7`</td><td>Entire company</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
BasicDeal.prototype['visible_to'] = undefined;



/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
UpdateDealRequest['StatusEnum'] = {

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



export default UpdateDealRequest;

