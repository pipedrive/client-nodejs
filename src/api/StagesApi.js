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
import DeleteStageResponse200 from '../model/DeleteStageResponse200';
import DeleteStagesResponse200 from '../model/DeleteStagesResponse200';
import GetAddUpdateStage from '../model/GetAddUpdateStage';
import GetOneStage from '../model/GetOneStage';
import GetStageDeals from '../model/GetStageDeals';
import GetStages from '../model/GetStages';
import NumberBoolean from '../model/NumberBoolean';
import Stage from '../model/Stage';
import UpdateStageRequest from '../model/UpdateStageRequest';

/**
* Stages service.
* @module api/StagesApi
* @version 1.0.0
*/
export default class StagesApi {

    /**
    * Constructs a new StagesApi. 
    * @alias module:api/StagesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }



    /**
     * Add a new stage
     * Adds a new stage, returns the ID upon success.
     * @param {Object} opts Optional parameters
     * @param {module:model/Stage} opts.stage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAddUpdateStage} and HTTP response
     */
    addStageWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['stage'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
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
      let returnType = GetAddUpdateStage;
      return this.apiClient.callApi(
        '/stages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a new stage
     * Adds a new stage, returns the ID upon success.
     * @param {Object} opts Optional parameters
     * @param {module:model/Stage} opts.stage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAddUpdateStage}
     */
    addStage(opts) {
      return this.addStageWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a stage
     * Marks a stage as deleted.
     * @param {Number} id The ID of the stage
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteStageResponse200} and HTTP response
     */
    deleteStageWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteStage");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
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
      let returnType = DeleteStageResponse200;
      return this.apiClient.callApi(
        '/stages/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a stage
     * Marks a stage as deleted.
     * @param {Number} id The ID of the stage
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteStageResponse200}
     */
    deleteStage(id) {
      return this.deleteStageWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete multiple stages in bulk
     * Marks multiple stages as deleted.
     * @param {String} ids The comma-separated stage IDs to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteStagesResponse200} and HTTP response
     */
    deleteStagesWithHttpInfo(ids) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling deleteStages");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': ids,
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
      let returnType = DeleteStagesResponse200;
      return this.apiClient.callApi(
        '/stages', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete multiple stages in bulk
     * Marks multiple stages as deleted.
     * @param {String} ids The comma-separated stage IDs to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteStagesResponse200}
     */
    deleteStages(ids) {
      return this.deleteStagesWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one stage
     * Returns data about a specific stage.
     * @param {Number} id The ID of the stage
     * @param {Object} opts Optional parameters
     * @param {module:model/NumberBoolean} opts.everyone If `everyone=1` is provided, deals summary will return deals owned by every user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetOneStage} and HTTP response
     */
    getStageWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getStage");
      }


      let pathParams = {
        'id': id,
      };
      let queryParams = {
        'everyone': opts['everyone'] === undefined ? opts['everyone'] : opts['everyone'],
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
      let returnType = GetOneStage;
      return this.apiClient.callApi(
        '/stages/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one stage
     * Returns data about a specific stage.
     * @param {Number} id The ID of the stage
     * @param {Object} opts Optional parameters
     * @param {module:model/NumberBoolean} opts.everyone If `everyone=1` is provided, deals summary will return deals owned by every user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetOneStage}
     */
    getStage(id, opts) {
      return this.getStageWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get deals in a stage
     * Lists deals in a specific stage. If no parameters are provided open deals owned by the authorized user will be returned.
     * @param {Number} id The ID of the stage
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterId If supplied, only deals matching the given filter will be returned
     * @param {Number} opts.userId If supplied, `filter_id` will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned.
     * @param {module:model/NumberBoolean} opts.everyone If supplied, `filter_id` and `user_id` will not be considered – instead, deals owned by everyone will be returned
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStageDeals} and HTTP response
     */
    getStageDealsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getStageDeals");
      }






      let pathParams = {
        'id': id,
      };
      let queryParams = {
        'filter_id': opts['filter_id'] === undefined ? opts['filterId'] : opts['filter_id'],
        'user_id': opts['user_id'] === undefined ? opts['userId'] : opts['user_id'],
        'everyone': opts['everyone'] === undefined ? opts['everyone'] : opts['everyone'],
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
      let returnType = GetStageDeals;
      return this.apiClient.callApi(
        '/stages/{id}/deals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get deals in a stage
     * Lists deals in a specific stage. If no parameters are provided open deals owned by the authorized user will be returned.
     * @param {Number} id The ID of the stage
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterId If supplied, only deals matching the given filter will be returned
     * @param {Number} opts.userId If supplied, `filter_id` will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned.
     * @param {module:model/NumberBoolean} opts.everyone If supplied, `filter_id` and `user_id` will not be considered – instead, deals owned by everyone will be returned
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStageDeals}
     */
    getStageDeals(id, opts) {
      return this.getStageDealsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all stages
     * Returns data about all stages.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pipelineId The ID of the pipeline to fetch stages for. If omitted, stages for all pipelines will be fetched.
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStages} and HTTP response
     */
    getStagesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;




      let pathParams = {
      };
      let queryParams = {
        'pipeline_id': opts['pipeline_id'] === undefined ? opts['pipelineId'] : opts['pipeline_id'],
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
      let returnType = GetStages;
      return this.apiClient.callApi(
        '/stages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all stages
     * Returns data about all stages.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pipelineId The ID of the pipeline to fetch stages for. If omitted, stages for all pipelines will be fetched.
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStages}
     */
    getStages(opts) {
      return this.getStagesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update stage details
     * Updates the properties of a stage.
     * @param {Number} id The ID of the stage
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateStageRequest} opts.updateStageRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAddUpdateStage} and HTTP response
     */
    updateStageWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['updateStageRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateStage");
      }


      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
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
      let returnType = GetAddUpdateStage;
      return this.apiClient.callApi(
        '/stages/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update stage details
     * Updates the properties of a stage.
     * @param {Number} id The ID of the stage
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateStageRequest} opts.updateStageRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAddUpdateStage}
     */
    updateStage(id, opts) {
      return this.updateStageWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
