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
import AllOrganizationsGetResponseAllOfRelatedObjects from './AllOrganizationsGetResponseAllOfRelatedObjects';
import ItemSearchAdditionalData from './ItemSearchAdditionalData';
import PersonItem from './PersonItem';

/**
 * The GetAllPersonsResponseAllOf model module.
 * @module model/GetAllPersonsResponseAllOf
 * @version 1.0.0
 */
class GetAllPersonsResponseAllOf {
    /**
     * Constructs a new <code>GetAllPersonsResponseAllOf</code>.
     * @alias module:model/GetAllPersonsResponseAllOf
     */
    constructor() { 
        
        GetAllPersonsResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAllPersonsResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAllPersonsResponseAllOf} obj Optional instance to populate.
     * @return {module:model/GetAllPersonsResponseAllOf} The populated <code>GetAllPersonsResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAllPersonsResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PersonItem]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ItemSearchAdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = AllOrganizationsGetResponseAllOfRelatedObjects.constructFromObject(data['related_objects']);

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
 * The array of persons
 * @member {Array.<module:model/PersonItem>} data
 */
GetAllPersonsResponseAllOf.prototype['data'] = undefined;

/**
 * @member {module:model/ItemSearchAdditionalData} additional_data
 */
GetAllPersonsResponseAllOf.prototype['additional_data'] = undefined;

/**
 * @member {module:model/AllOrganizationsGetResponseAllOfRelatedObjects} related_objects
 */
GetAllPersonsResponseAllOf.prototype['related_objects'] = undefined;






export default GetAllPersonsResponseAllOf;

