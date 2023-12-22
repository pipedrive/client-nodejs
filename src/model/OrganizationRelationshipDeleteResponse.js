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
import BaseResponse from './BaseResponse';
import OrganizationRelationshipDeleteResponseAllOf from './OrganizationRelationshipDeleteResponseAllOf';
import OrganizationRelationshipDeleteResponseAllOfData from './OrganizationRelationshipDeleteResponseAllOfData';

/**
 * The OrganizationRelationshipDeleteResponse model module.
 * @module model/OrganizationRelationshipDeleteResponse
 * @version 1.0.0
 */
class OrganizationRelationshipDeleteResponse {
    /**
     * Constructs a new <code>OrganizationRelationshipDeleteResponse</code>.
     * @alias module:model/OrganizationRelationshipDeleteResponse
     * @implements module:model/BaseResponse
     * @implements module:model/OrganizationRelationshipDeleteResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);OrganizationRelationshipDeleteResponseAllOf.initialize(this);
        OrganizationRelationshipDeleteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationRelationshipDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationRelationshipDeleteResponse} obj Optional instance to populate.
     * @return {module:model/OrganizationRelationshipDeleteResponse} The populated <code>OrganizationRelationshipDeleteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationRelationshipDeleteResponse();
            BaseResponse.constructFromObject(data, obj);
            OrganizationRelationshipDeleteResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = OrganizationRelationshipDeleteResponseAllOfData.constructFromObject(data['data']);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * If the response is successful or not
 * @member {Boolean} success
 */
OrganizationRelationshipDeleteResponse.prototype['success'] = undefined;

/**
 * @member {module:model/OrganizationRelationshipDeleteResponseAllOfData} data
 */
OrganizationRelationshipDeleteResponse.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement OrganizationRelationshipDeleteResponseAllOf interface:
/**
 * @member {module:model/OrganizationRelationshipDeleteResponseAllOfData} data
 */
OrganizationRelationshipDeleteResponseAllOf.prototype['data'] = undefined;




export default OrganizationRelationshipDeleteResponse;
