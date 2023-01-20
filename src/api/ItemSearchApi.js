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


import ApiClient from "../ApiClient";
import ItemSearchFieldResponse from '../model/ItemSearchFieldResponse';
import ItemSearchResponse from '../model/ItemSearchResponse';

/**
* ItemSearch service.
* @module api/ItemSearchApi
* @version 1.0.0
*/
export default class ItemSearchApi {

    /**
    * Constructs a new ItemSearchApi. 
    * @alias module:api/ItemSearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }



    /**
     * Perform a search from multiple item types
     * Performs a search from your choice of item types and fields.
     * @param {String} term The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.itemTypes A comma-separated string array. The type of items to perform the search from. Defaults to all.
     * @param {module:model/String} opts.fields A comma-separated string array. The fields to perform the search from. Defaults to all. Relevant for each item type are:<br> <table> <tr><th><b>Item type</b></th><th><b>Field</b></th></tr> <tr><td>Deal</td><td>`custom_fields`, `notes`, `title`</td></tr> <tr><td>Person</td><td>`custom_fields`, `email`, `name`, `notes`, `phone`</td></tr> <tr><td>Organization</td><td>`address`, `custom_fields`, `name`, `notes`</td></tr> <tr><td>Product</td><td>`code`, `custom_fields`, `name`</td></tr> <tr><td>Lead</td><td>`custom_fields`, `notes`, `email`, `organization_name`, `person_name`, `phone`, `title`</td></tr> <tr><td>File</td><td>`name`</td></tr> <tr><td>Mail attachment</td><td>`name`</td></tr> <tr><td>Project</td><td> `custom_fields`, `notes`, `title`, `description` </td></tr> </table> <br> When searching for leads, the email, organization_name, person_name, and phone fields will return results only for leads not linked to contacts. For searching leads by person or organization values, please use `search_for_related_items`.
     * @param {module:model/Boolean} opts.searchForRelatedItems When enabled, the response will include up to 100 newest related leads and 100 newest related deals for each found person and organization and up to 100 newest related persons for each found organization.
     * @param {module:model/Boolean} opts.exactMatch When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
     * @param {module:model/String} opts.includeFields A comma-separated string array. Supports including optional fields in the results which are not provided by default.
     * @param {Number} opts.start Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter. (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemSearchResponse} and HTTP response
     */
    searchItemWithHttpInfo(term, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'term' is set
      if (term === undefined || term === null) {
        throw new Error("Missing the required parameter 'term' when calling searchItem");
      }








      let pathParams = {
      };
      let queryParams = {
        'term': term,
        'item_types': opts['item_types'] === undefined ? opts['itemTypes'] : opts['item_types'],
        'fields': opts['fields'] === undefined ? opts['fields'] : opts['fields'],
        'search_for_related_items': opts['search_for_related_items'] === undefined ? opts['searchForRelatedItems'] : opts['search_for_related_items'],
        'exact_match': opts['exact_match'] === undefined ? opts['exactMatch'] : opts['exact_match'],
        'include_fields': opts['include_fields'] === undefined ? opts['includeFields'] : opts['include_fields'],
        'start': opts['start'] === undefined ? opts['start'] : opts['start'],
        'limit': opts['limit'] === undefined ? opts['limit'] : opts['limit'],
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = ItemSearchResponse;
      return this.apiClient.callApi(
        '/itemSearch', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Perform a search from multiple item types
     * Performs a search from your choice of item types and fields.
     * @param {String} term The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.itemTypes A comma-separated string array. The type of items to perform the search from. Defaults to all.
     * @param {module:model/String} opts.fields A comma-separated string array. The fields to perform the search from. Defaults to all. Relevant for each item type are:<br> <table> <tr><th><b>Item type</b></th><th><b>Field</b></th></tr> <tr><td>Deal</td><td>`custom_fields`, `notes`, `title`</td></tr> <tr><td>Person</td><td>`custom_fields`, `email`, `name`, `notes`, `phone`</td></tr> <tr><td>Organization</td><td>`address`, `custom_fields`, `name`, `notes`</td></tr> <tr><td>Product</td><td>`code`, `custom_fields`, `name`</td></tr> <tr><td>Lead</td><td>`custom_fields`, `notes`, `email`, `organization_name`, `person_name`, `phone`, `title`</td></tr> <tr><td>File</td><td>`name`</td></tr> <tr><td>Mail attachment</td><td>`name`</td></tr> <tr><td>Project</td><td> `custom_fields`, `notes`, `title`, `description` </td></tr> </table> <br> When searching for leads, the email, organization_name, person_name, and phone fields will return results only for leads not linked to contacts. For searching leads by person or organization values, please use `search_for_related_items`.
     * @param {module:model/Boolean} opts.searchForRelatedItems When enabled, the response will include up to 100 newest related leads and 100 newest related deals for each found person and organization and up to 100 newest related persons for each found organization.
     * @param {module:model/Boolean} opts.exactMatch When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
     * @param {module:model/String} opts.includeFields A comma-separated string array. Supports including optional fields in the results which are not provided by default.
     * @param {Number} opts.start Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter. (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemSearchResponse}
     */
    searchItem(term, opts) {
      return this.searchItemWithHttpInfo(term, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Perform a search using a specific field from an item type
     * Performs a search from the values of a specific field. Results can either be the distinct values of the field (useful for searching autocomplete field values), or the IDs of actual items (deals, leads, persons, organizations or products).
     * @param {String} term The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
     * @param {module:model/String} fieldType The type of the field to perform the search from
     * @param {String} fieldKey The key of the field to search from. The field key can be obtained by fetching the list of the fields using any of the fields' API GET methods (dealFields, personFields, etc.).
     * @param {Object} opts Optional parameters
     * @param {module:model/Boolean} opts.exactMatch When enabled, only full exact matches against the given term are returned. The search <b>is</b> case sensitive. (default to false)
     * @param {module:model/Boolean} opts.returnItemIds Whether to return the IDs of the matching items or not. When not set or set to `0` or `false`, only distinct values of the searched field are returned. When set to `1` or `true`, the ID of each found item is returned.
     * @param {Number} opts.start Pagination start
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemSearchFieldResponse} and HTTP response
     */
    searchItemByFieldWithHttpInfo(term, fieldType, fieldKey, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'term' is set
      if (term === undefined || term === null) {
        throw new Error("Missing the required parameter 'term' when calling searchItemByField");
      }

      // verify the required parameter 'fieldType' is set
      if (fieldType === undefined || fieldType === null) {
        throw new Error("Missing the required parameter 'fieldType' when calling searchItemByField");
      }

      // verify the required parameter 'fieldKey' is set
      if (fieldKey === undefined || fieldKey === null) {
        throw new Error("Missing the required parameter 'fieldKey' when calling searchItemByField");
      }





      let pathParams = {
      };
      let queryParams = {
        'term': term,
        'field_type': fieldType,
        'exact_match': opts['exact_match'] === undefined ? opts['exactMatch'] : opts['exact_match'],
        'field_key': fieldKey,
        'return_item_ids': opts['return_item_ids'] === undefined ? opts['returnItemIds'] : opts['return_item_ids'],
        'start': opts['start'] === undefined ? opts['start'] : opts['start'],
        'limit': opts['limit'] === undefined ? opts['limit'] : opts['limit'],
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = ItemSearchFieldResponse;
      return this.apiClient.callApi(
        '/itemSearch/field', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Perform a search using a specific field from an item type
     * Performs a search from the values of a specific field. Results can either be the distinct values of the field (useful for searching autocomplete field values), or the IDs of actual items (deals, leads, persons, organizations or products).
     * @param {String} term The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
     * @param {module:model/String} fieldType The type of the field to perform the search from
     * @param {String} fieldKey The key of the field to search from. The field key can be obtained by fetching the list of the fields using any of the fields' API GET methods (dealFields, personFields, etc.).
     * @param {Object} opts Optional parameters
     * @param {module:model/Boolean} opts.exactMatch When enabled, only full exact matches against the given term are returned. The search <b>is</b> case sensitive. (default to false)
     * @param {module:model/Boolean} opts.returnItemIds Whether to return the IDs of the matching items or not. When not set or set to `0` or `false`, only distinct values of the searched field are returned. When set to `1` or `true`, the ID of each found item is returned.
     * @param {Number} opts.start Pagination start
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemSearchFieldResponse}
     */
    searchItemByField(term, fieldType, fieldKey, opts) {
      return this.searchItemByFieldWithHttpInfo(term, fieldType, fieldKey, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
