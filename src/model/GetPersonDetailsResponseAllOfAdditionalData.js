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
 * The GetPersonDetailsResponseAllOfAdditionalData model module.
 * @module model/GetPersonDetailsResponseAllOfAdditionalData
 * @version 1.0.0
 */
class GetPersonDetailsResponseAllOfAdditionalData {
    /**
     * Constructs a new <code>GetPersonDetailsResponseAllOfAdditionalData</code>.
     * @alias module:model/GetPersonDetailsResponseAllOfAdditionalData
     */
    constructor() { 
        
        GetPersonDetailsResponseAllOfAdditionalData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPersonDetailsResponseAllOfAdditionalData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPersonDetailsResponseAllOfAdditionalData} obj Optional instance to populate.
     * @return {module:model/GetPersonDetailsResponseAllOfAdditionalData} The populated <code>GetPersonDetailsResponseAllOfAdditionalData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPersonDetailsResponseAllOfAdditionalData();

            if (data.hasOwnProperty('dropbox_email')) {
                obj['dropbox_email'] = ApiClient.convertToType(data['dropbox_email'], 'String');

                delete data['dropbox_email'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * Dropbox email for the person
 * @member {String} dropbox_email
 */
GetPersonDetailsResponseAllOfAdditionalData.prototype['dropbox_email'] = undefined;






export default GetPersonDetailsResponseAllOfAdditionalData;

