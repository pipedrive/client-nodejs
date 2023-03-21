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
import AddOrUpdateRoleSettingRequest from '../model/AddOrUpdateRoleSettingRequest';
import AddRole from '../model/AddRole';
import AddRoleAssignmentRequest from '../model/AddRoleAssignmentRequest';
import BaseRole from '../model/BaseRole';
import DeleteRole from '../model/DeleteRole';
import DeleteRoleAssignment from '../model/DeleteRoleAssignment';
import DeleteRoleAssignmentRequest from '../model/DeleteRoleAssignmentRequest';
import GetRole from '../model/GetRole';
import GetRoleAssignments from '../model/GetRoleAssignments';
import GetRolePipelines from '../model/GetRolePipelines';
import GetRoleSettings from '../model/GetRoleSettings';
import GetRoles from '../model/GetRoles';
import PostRoleAssignment from '../model/PostRoleAssignment';
import PostRoleSettings from '../model/PostRoleSettings';
import PostRoles from '../model/PostRoles';
import PutRole from '../model/PutRole';
import PutRolePipelinesBody from '../model/PutRolePipelinesBody';

/**
* Roles service.
* @module api/RolesApi
* @version 1.0.0
*/
export default class RolesApi {

    /**
    * Constructs a new RolesApi. 
    * @alias module:api/RolesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }



    /**
     * Add or update role setting
     * Adds or updates the visibility setting for a role.
     * @param {Number} id The ID of the role
     * @param {Object} opts Optional parameters
     * @param {module:model/AddOrUpdateRoleSettingRequest} opts.addOrUpdateRoleSettingRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostRoleSettings} and HTTP response
     */
    addOrUpdateRoleSettingWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['addOrUpdateRoleSettingRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addOrUpdateRoleSetting");
      }

      if (opts['setting_key'] === undefined || opts['setting_key'] === null) {
        throw new Error("Missing the required parameter 'setting_key' when calling addOrUpdateRoleSetting");
      }
      if (opts['value'] === undefined || opts['value'] === null) {
        throw new Error("Missing the required parameter 'value' when calling addOrUpdateRoleSetting");
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
      let returnType = PostRoleSettings;
      return this.apiClient.callApi(
        '/roles/{id}/settings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add or update role setting
     * Adds or updates the visibility setting for a role.
     * @param {Number} id The ID of the role
     * @param {Object} opts Optional parameters
     * @param {module:model/AddOrUpdateRoleSettingRequest} opts.addOrUpdateRoleSettingRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostRoleSettings}
     */
    addOrUpdateRoleSetting(id, opts) {
      return this.addOrUpdateRoleSettingWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Add a role
     * Adds a new role.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddRole} opts.addRole 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostRoles} and HTTP response
     */
    addRoleWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['addRole'];

      if (opts['name'] === undefined || opts['name'] === null) {
        throw new Error("Missing the required parameter 'name' when calling addRole");
      }

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
      let returnType = PostRoles;
      return this.apiClient.callApi(
        '/roles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a role
     * Adds a new role.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddRole} opts.addRole 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostRoles}
     */
    addRole(opts) {
      return this.addRoleWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Add role assignment
     * Assigns a user to a role.
     * @param {Number} id The ID of the role
     * @param {Object} opts Optional parameters
     * @param {module:model/AddRoleAssignmentRequest} opts.addRoleAssignmentRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostRoleAssignment} and HTTP response
     */
    addRoleAssignmentWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['addRoleAssignmentRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addRoleAssignment");
      }

      if (opts['user_id'] === undefined || opts['user_id'] === null) {
        throw new Error("Missing the required parameter 'user_id' when calling addRoleAssignment");
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
      let returnType = PostRoleAssignment;
      return this.apiClient.callApi(
        '/roles/{id}/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add role assignment
     * Assigns a user to a role.
     * @param {Number} id The ID of the role
     * @param {Object} opts Optional parameters
     * @param {module:model/AddRoleAssignmentRequest} opts.addRoleAssignmentRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostRoleAssignment}
     */
    addRoleAssignment(id, opts) {
      return this.addRoleAssignmentWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a role
     * Marks a role as deleted.
     * @param {Number} id The ID of the role
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteRole} and HTTP response
     */
    deleteRoleWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteRole");
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
      let returnType = DeleteRole;
      return this.apiClient.callApi(
        '/roles/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a role
     * Marks a role as deleted.
     * @param {Number} id The ID of the role
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteRole}
     */
    deleteRole(id) {
      return this.deleteRoleWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a role assignment
     * Removes the assigned user from a role and adds to the default role.
     * @param {Number} id The ID of the role
     * @param {Object} opts Optional parameters
     * @param {module:model/DeleteRoleAssignmentRequest} opts.deleteRoleAssignmentRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteRoleAssignment} and HTTP response
     */
    deleteRoleAssignmentWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['deleteRoleAssignmentRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteRoleAssignment");
      }

      if (opts['user_id'] === undefined || opts['user_id'] === null) {
        throw new Error("Missing the required parameter 'user_id' when calling deleteRoleAssignment");
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
      let returnType = DeleteRoleAssignment;
      return this.apiClient.callApi(
        '/roles/{id}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a role assignment
     * Removes the assigned user from a role and adds to the default role.
     * @param {Number} id The ID of the role
     * @param {Object} opts Optional parameters
     * @param {module:model/DeleteRoleAssignmentRequest} opts.deleteRoleAssignmentRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteRoleAssignment}
     */
    deleteRoleAssignment(id, opts) {
      return this.deleteRoleAssignmentWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one role
     * Returns the details of a specific role.
     * @param {Number} id The ID of the role
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetRole} and HTTP response
     */
    getRoleWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRole");
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
      let returnType = GetRole;
      return this.apiClient.callApi(
        '/roles/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one role
     * Returns the details of a specific role.
     * @param {Number} id The ID of the role
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetRole}
     */
    getRole(id) {
      return this.getRoleWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * List role assignments
     * Returns all users assigned to a role.
     * @param {Number} id The ID of the role
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetRoleAssignments} and HTTP response
     */
    getRoleAssignmentsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRoleAssignments");
      }



      let pathParams = {
        'id': id,
      };
      let queryParams = {
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
      let returnType = GetRoleAssignments;
      return this.apiClient.callApi(
        '/roles/{id}/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List role assignments
     * Returns all users assigned to a role.
     * @param {Number} id The ID of the role
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetRoleAssignments}
     */
    getRoleAssignments(id, opts) {
      return this.getRoleAssignmentsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * List pipeline visibility for a role
     * Returns the list of either visible or hidden pipeline IDs for a specific role. For more information on pipeline visibility, please refer to the <a href=\"https://support.pipedrive.com/en/article/visibility-groups\" target=\"_blank\" rel=\"noopener noreferrer\">Visibility groups article</a>.
     * @param {Number} id The ID of the role
     * @param {Object} opts Optional parameters
     * @param {module:model/Boolean} opts.visible Whether to return the visible or hidden pipelines for the role (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetRolePipelines} and HTTP response
     */
    getRolePipelinesWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRolePipelines");
      }


      let pathParams = {
        'id': id,
      };
      let queryParams = {
        'visible': opts['visible'] === undefined ? opts['visible'] : opts['visible'],
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
      let returnType = GetRolePipelines;
      return this.apiClient.callApi(
        '/roles/{id}/pipelines', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List pipeline visibility for a role
     * Returns the list of either visible or hidden pipeline IDs for a specific role. For more information on pipeline visibility, please refer to the <a href=\"https://support.pipedrive.com/en/article/visibility-groups\" target=\"_blank\" rel=\"noopener noreferrer\">Visibility groups article</a>.
     * @param {Number} id The ID of the role
     * @param {Object} opts Optional parameters
     * @param {module:model/Boolean} opts.visible Whether to return the visible or hidden pipelines for the role (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetRolePipelines}
     */
    getRolePipelines(id, opts) {
      return this.getRolePipelinesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * List role settings
     * Returns the visibility settings of a specific role.
     * @param {Number} id The ID of the role
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetRoleSettings} and HTTP response
     */
    getRoleSettingsWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRoleSettings");
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
      let returnType = GetRoleSettings;
      return this.apiClient.callApi(
        '/roles/{id}/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List role settings
     * Returns the visibility settings of a specific role.
     * @param {Number} id The ID of the role
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetRoleSettings}
     */
    getRoleSettings(id) {
      return this.getRoleSettingsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all roles
     * Returns all the roles within the company.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetRoles} and HTTP response
     */
    getRolesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;



      let pathParams = {
      };
      let queryParams = {
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
      let returnType = GetRoles;
      return this.apiClient.callApi(
        '/roles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all roles
     * Returns all the roles within the company.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetRoles}
     */
    getRoles(opts) {
      return this.getRolesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update role details
     * Updates the parent role and/or the name of a specific role.
     * @param {Number} id The ID of the role
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseRole} opts.baseRole 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PutRole} and HTTP response
     */
    updateRoleWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['baseRole'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateRole");
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
      let returnType = PutRole;
      return this.apiClient.callApi(
        '/roles/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update role details
     * Updates the parent role and/or the name of a specific role.
     * @param {Number} id The ID of the role
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseRole} opts.baseRole 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PutRole}
     */
    updateRole(id, opts) {
      return this.updateRoleWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update pipeline visibility for a role
     * Updates the specified pipelines to be visible and/or hidden for a specific role. For more information on pipeline visibility, please refer to the <a href=\"https://support.pipedrive.com/en/article/visibility-groups\" target=\"_blank\" rel=\"noopener noreferrer\">Visibility groups article</a>.
     * @param {Number} id The ID of the role
     * @param {Object} opts Optional parameters
     * @param {module:model/PutRolePipelinesBody} opts.putRolePipelinesBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetRolePipelines} and HTTP response
     */
    updateRolePipelinesWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['putRolePipelinesBody'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateRolePipelines");
      }

      if (opts['visible_pipeline_ids'] === undefined || opts['visible_pipeline_ids'] === null) {
        throw new Error("Missing the required parameter 'visible_pipeline_ids' when calling updateRolePipelines");
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
      let returnType = GetRolePipelines;
      return this.apiClient.callApi(
        '/roles/{id}/pipelines', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update pipeline visibility for a role
     * Updates the specified pipelines to be visible and/or hidden for a specific role. For more information on pipeline visibility, please refer to the <a href=\"https://support.pipedrive.com/en/article/visibility-groups\" target=\"_blank\" rel=\"noopener noreferrer\">Visibility groups article</a>.
     * @param {Number} id The ID of the role
     * @param {Object} opts Optional parameters
     * @param {module:model/PutRolePipelinesBody} opts.putRolePipelinesBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetRolePipelines}
     */
    updateRolePipelines(id, opts) {
      return this.updateRolePipelinesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
