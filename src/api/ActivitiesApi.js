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
import ActivityPostObject from '../model/ActivityPostObject';
import ActivityPutObject from '../model/ActivityPutObject';
import AddActivityResponse from '../model/AddActivityResponse';
import DeleteActivitiesResponse from '../model/DeleteActivitiesResponse';
import DeleteActivityResponse from '../model/DeleteActivityResponse';
import FailResponse from '../model/FailResponse';
import GetActivitiesCollectionResponse from '../model/GetActivitiesCollectionResponse';
import GetActivitiesResponse from '../model/GetActivitiesResponse';
import GetActivityResponse from '../model/GetActivityResponse';
import NumberBoolean from '../model/NumberBoolean';
import UpdateActivityResponse from '../model/UpdateActivityResponse';

/**
* Activities service.
* @module api/ActivitiesApi
* @version 1.0.0
*/
export default class ActivitiesApi {

    /**
    * Constructs a new ActivitiesApi. 
    * @alias module:api/ActivitiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }



    /**
     * Add an activity
     * Adds a new activity. Includes `more_activities_scheduled_in_context` property in response's `additional_data` which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data). For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-an-activity\" target=\"_blank\" rel=\"noopener noreferrer\">adding an activity</a>. <br /> <br /> ***Starting from 30.09.2024, activity attendees will receive updates only if the activity owner has an active calendar sync***
     * @param {Object} opts Optional parameters
     * @param {module:model/ActivityPostObject} opts.activityPostObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddActivityResponse} and HTTP response
     */
    addActivityWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['activityPostObject'];


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
      let returnType = AddActivityResponse;
      return this.apiClient.callApi(
        '/activities', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add an activity
     * Adds a new activity. Includes `more_activities_scheduled_in_context` property in response's `additional_data` which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data). For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-an-activity\" target=\"_blank\" rel=\"noopener noreferrer\">adding an activity</a>. <br /> <br /> ***Starting from 30.09.2024, activity attendees will receive updates only if the activity owner has an active calendar sync***
     * @param {Object} opts Optional parameters
     * @param {module:model/ActivityPostObject} opts.activityPostObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddActivityResponse}
     */
    addActivity(opts) {
      return this.addActivityWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete multiple activities in bulk
     * Marks multiple activities as deleted. After 30 days, the activities will be permanently deleted.
     * @param {String} ids The comma-separated IDs of activities that will be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteActivitiesResponse} and HTTP response
     */
    deleteActivitiesWithHttpInfo(ids) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling deleteActivities");
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
      let returnType = DeleteActivitiesResponse;
      return this.apiClient.callApi(
        '/activities', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete multiple activities in bulk
     * Marks multiple activities as deleted. After 30 days, the activities will be permanently deleted.
     * @param {String} ids The comma-separated IDs of activities that will be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteActivitiesResponse}
     */
    deleteActivities(ids) {
      return this.deleteActivitiesWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete an activity
     * Marks an activity as deleted. After 30 days, the activity will be permanently deleted.
     * @param {Number} id The ID of the activity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteActivityResponse} and HTTP response
     */
    deleteActivityWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteActivity");
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
      let returnType = DeleteActivityResponse;
      return this.apiClient.callApi(
        '/activities/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an activity
     * Marks an activity as deleted. After 30 days, the activity will be permanently deleted.
     * @param {Number} id The ID of the activity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteActivityResponse}
     */
    deleteActivity(id) {
      return this.deleteActivityWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all activities assigned to a particular user
     * Returns all activities assigned to a particular user.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId The ID of the user whose activities will be fetched. If omitted, the user associated with the API token will be used. If 0, activities for all company users will be fetched based on the permission sets.
     * @param {Number} opts.filterId The ID of the filter to use (will narrow down results if used together with `user_id` parameter)
     * @param {String} opts.type The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the `key_string` parameter of ActivityTypes.
     * @param {Number} opts.limit For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
     * @param {Number} opts.start For pagination, the position that represents the first result for the page
     * @param {Date} opts.startDate Use the activity due date where you wish to begin fetching activities from. Insert due date in YYYY-MM-DD format.
     * @param {Date} opts.endDate Use the activity due date where you wish to stop fetching activities from. Insert due date in YYYY-MM-DD format.
     * @param {module:model/NumberBoolean} opts.done Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both done and not done activities.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetActivitiesResponse} and HTTP response
     */
    getActivitiesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;









      let pathParams = {
      };
      let queryParams = {
        'user_id': opts['user_id'] === undefined ? opts['userId'] : opts['user_id'],
        'filter_id': opts['filter_id'] === undefined ? opts['filterId'] : opts['filter_id'],
        'type': opts['type'] === undefined ? opts['type'] : opts['type'],
        'limit': opts['limit'] === undefined ? opts['limit'] : opts['limit'],
        'start': opts['start'] === undefined ? opts['start'] : opts['start'],
        'start_date': opts['start_date'] === undefined ? opts['startDate'] : opts['start_date'],
        'end_date': opts['end_date'] === undefined ? opts['endDate'] : opts['end_date'],
        'done': opts['done'] === undefined ? opts['done'] : opts['done'],
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
      let returnType = GetActivitiesResponse;
      return this.apiClient.callApi(
        '/activities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all activities assigned to a particular user
     * Returns all activities assigned to a particular user.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId The ID of the user whose activities will be fetched. If omitted, the user associated with the API token will be used. If 0, activities for all company users will be fetched based on the permission sets.
     * @param {Number} opts.filterId The ID of the filter to use (will narrow down results if used together with `user_id` parameter)
     * @param {String} opts.type The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the `key_string` parameter of ActivityTypes.
     * @param {Number} opts.limit For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
     * @param {Number} opts.start For pagination, the position that represents the first result for the page
     * @param {Date} opts.startDate Use the activity due date where you wish to begin fetching activities from. Insert due date in YYYY-MM-DD format.
     * @param {Date} opts.endDate Use the activity due date where you wish to stop fetching activities from. Insert due date in YYYY-MM-DD format.
     * @param {module:model/NumberBoolean} opts.done Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both done and not done activities.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetActivitiesResponse}
     */
    getActivities(opts) {
      return this.getActivitiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all activities (BETA)
     * Returns all activities. This is a cursor-paginated endpoint that is currently in BETA. For more information, please refer to our documentation on <a href=\"https://pipedrive.readme.io/docs/core-api-concepts-pagination\" target=\"_blank\" rel=\"noopener noreferrer\">pagination</a>. Please note that only global admins (those with global permissions) can access these endpoints. Users with regular permissions will receive a 403 response. Read more about global permissions <a href=\"https://support.pipedrive.com/en/article/global-user-management\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor For pagination, the marker (an opaque string value) representing the first item on the next page
     * @param {Number} opts.limit For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed.
     * @param {String} opts.since The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.
     * @param {String} opts.until The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.
     * @param {Number} opts.userId The ID of the user whose activities will be fetched. If omitted, all activities are returned.
     * @param {Boolean} opts.done Whether the activity is done or not. `false` = Not done, `true` = Done. If omitted, returns both done and not done activities.
     * @param {String} opts.type The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the `key_string` parameter of ActivityTypes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetActivitiesCollectionResponse} and HTTP response
     */
    getActivitiesCollectionWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;








      let pathParams = {
      };
      let queryParams = {
        'cursor': opts['cursor'] === undefined ? opts['cursor'] : opts['cursor'],
        'limit': opts['limit'] === undefined ? opts['limit'] : opts['limit'],
        'since': opts['since'] === undefined ? opts['since'] : opts['since'],
        'until': opts['until'] === undefined ? opts['until'] : opts['until'],
        'user_id': opts['user_id'] === undefined ? opts['userId'] : opts['user_id'],
        'done': opts['done'] === undefined ? opts['done'] : opts['done'],
        'type': opts['type'] === undefined ? opts['type'] : opts['type'],
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
      let returnType = GetActivitiesCollectionResponse;
      return this.apiClient.callApi(
        '/activities/collection', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all activities (BETA)
     * Returns all activities. This is a cursor-paginated endpoint that is currently in BETA. For more information, please refer to our documentation on <a href=\"https://pipedrive.readme.io/docs/core-api-concepts-pagination\" target=\"_blank\" rel=\"noopener noreferrer\">pagination</a>. Please note that only global admins (those with global permissions) can access these endpoints. Users with regular permissions will receive a 403 response. Read more about global permissions <a href=\"https://support.pipedrive.com/en/article/global-user-management\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor For pagination, the marker (an opaque string value) representing the first item on the next page
     * @param {Number} opts.limit For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed.
     * @param {String} opts.since The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.
     * @param {String} opts.until The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.
     * @param {Number} opts.userId The ID of the user whose activities will be fetched. If omitted, all activities are returned.
     * @param {Boolean} opts.done Whether the activity is done or not. `false` = Not done, `true` = Done. If omitted, returns both done and not done activities.
     * @param {String} opts.type The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the `key_string` parameter of ActivityTypes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetActivitiesCollectionResponse}
     */
    getActivitiesCollection(opts) {
      return this.getActivitiesCollectionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get details of an activity
     * Returns the details of a specific activity.
     * @param {Number} id The ID of the activity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetActivityResponse} and HTTP response
     */
    getActivityWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getActivity");
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
      let returnType = GetActivityResponse;
      return this.apiClient.callApi(
        '/activities/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get details of an activity
     * Returns the details of a specific activity.
     * @param {Number} id The ID of the activity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetActivityResponse}
     */
    getActivity(id) {
      return this.getActivityWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update an activity
     * Updates an activity. Includes `more_activities_scheduled_in_context` property in response's `additional_data` which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data). <br /> <br /> ***Starting from 30.09.2024, activity attendees will receive updates only if the activity owner has an active calendar sync***
     * @param {Number} id The ID of the activity
     * @param {Object} opts Optional parameters
     * @param {module:model/ActivityPutObject} opts.activityPutObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateActivityResponse} and HTTP response
     */
    updateActivityWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['activityPutObject'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateActivity");
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
      let returnType = UpdateActivityResponse;
      return this.apiClient.callApi(
        '/activities/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an activity
     * Updates an activity. Includes `more_activities_scheduled_in_context` property in response's `additional_data` which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data). <br /> <br /> ***Starting from 30.09.2024, activity attendees will receive updates only if the activity owner has an active calendar sync***
     * @param {Number} id The ID of the activity
     * @param {Object} opts Optional parameters
     * @param {module:model/ActivityPutObject} opts.activityPutObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateActivityResponse}
     */
    updateActivity(id, opts) {
      return this.updateActivityWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
