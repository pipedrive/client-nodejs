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
import AllOrganizationRelationshipsGetResponseAllOfRelatedObjects from './AllOrganizationRelationshipsGetResponseAllOfRelatedObjects';
import BaseResponse from './BaseResponse';
import OrganizationRelationshipGetResponseAllOf from './OrganizationRelationshipGetResponseAllOf';
import OrganizationRelationshipWithCalculatedFields from './OrganizationRelationshipWithCalculatedFields';

/**
 * The OrganizationRelationshipGetResponse model module.
 * @module model/OrganizationRelationshipGetResponse
 * @version 1.0.0
 */
class OrganizationRelationshipGetResponse {
    /**
     * Constructs a new <code>OrganizationRelationshipGetResponse</code>.
     * @alias module:model/OrganizationRelationshipGetResponse
     * @implements module:model/BaseResponse
     * @implements module:model/OrganizationRelationshipGetResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);OrganizationRelationshipGetResponseAllOf.initialize(this);
        OrganizationRelationshipGetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationRelationshipGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationRelationshipGetResponse} obj Optional instance to populate.
     * @return {module:model/OrganizationRelationshipGetResponse} The populated <code>OrganizationRelationshipGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationRelationshipGetResponse();
            BaseResponse.constructFromObject(data, obj);
            OrganizationRelationshipGetResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = OrganizationRelationshipWithCalculatedFields.constructFromObject(data['data']);

                delete data['data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = AllOrganizationRelationshipsGetResponseAllOfRelatedObjects.constructFromObject(data['related_objects']);

                delete data['related_objects'];
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
OrganizationRelationshipGetResponse.prototype['success'] = undefined;

/**
 * @member {module:model/OrganizationRelationshipWithCalculatedFields} data
 */
OrganizationRelationshipGetResponse.prototype['data'] = undefined;

/**
 * @member {module:model/AllOrganizationRelationshipsGetResponseAllOfRelatedObjects} related_objects
 */
OrganizationRelationshipGetResponse.prototype['related_objects'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement OrganizationRelationshipGetResponseAllOf interface:
/**
 * @member {module:model/OrganizationRelationshipWithCalculatedFields} data
 */
OrganizationRelationshipGetResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/AllOrganizationRelationshipsGetResponseAllOfRelatedObjects} related_objects
 */
OrganizationRelationshipGetResponseAllOf.prototype['related_objects'] = undefined;




export default OrganizationRelationshipGetResponse;
