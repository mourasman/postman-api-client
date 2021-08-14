"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateWorkspaceRequest = _interopRequireDefault(require("../model/CreateWorkspaceRequest"));

var _SpecifiedworkspaceEntitiesdonotexist = _interopRequireDefault(require("../model/SpecifiedworkspaceEntitiesdonotexist"));

var _SuccessfulResponse = _interopRequireDefault(require("../model/SuccessfulResponse6"));

var _SuccessfulResponse2 = _interopRequireDefault(require("../model/SuccessfulResponse8"));

var _UpdateWorkspaceRequest = _interopRequireDefault(require("../model/UpdateWorkspaceRequest"));

var _ValidResponse = _interopRequireDefault(require("../model/ValidResponse4"));

var _ValidResponse2 = _interopRequireDefault(require("../model/ValidResponse5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Workspaces service.
* @module api/WorkspacesApi
* @version 1.0.0
*/
var WorkspacesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WorkspacesApi. 
  * @alias module:api/WorkspacesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WorkspacesApi(apiClient) {
    _classCallCheck(this, WorkspacesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the allworkspaces operation.
   * @callback module:api/WorkspacesApi~allworkspacesCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ValidResponse4} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * All workspaces
   * The `/workspaces` endpoint returns a list of all [workspaces](https://www.getpostman.com/docs/v6/postman/workspaces/intro_to_workspaces) that is accessible by you. The list includes your own workspaces and the workspaces that you have access to.  The response contains an array of collection information containing the `name`, `id`, and `type` of each workspace.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
   * @param {String} xApiKey 
   * @param {module:api/WorkspacesApi~allworkspacesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ValidResponse4}
   */


  _createClass(WorkspacesApi, [{
    key: "allworkspaces",
    value: function allworkspaces(xApiKey, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling allworkspaces");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ValidResponse["default"];
      return this.apiClient.callApi('/workspaces', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createWorkspace operation.
     * @callback module:api/WorkspacesApi~createWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessfulResponse6} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Workspace
     * This endpoint allows you to create a workspace and populate it with entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.  On successful creation of the workspace, the response returns the workspcae `name` and `id`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {module:model/CreateWorkspaceRequest} createWorkspaceRequest 
     * @param {module:api/WorkspacesApi~createWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessfulResponse6}
     */

  }, {
    key: "createWorkspace",
    value: function createWorkspace(xApiKey, createWorkspaceRequest, callback) {
      var postBody = createWorkspaceRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createWorkspace");
      } // verify the required parameter 'createWorkspaceRequest' is set


      if (createWorkspaceRequest === undefined || createWorkspaceRequest === null) {
        throw new Error("Missing the required parameter 'createWorkspaceRequest' when calling createWorkspace");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SuccessfulResponse["default"];
      return this.apiClient.callApi('/workspaces', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteWorkspace operation.
     * @callback module:api/WorkspacesApi~deleteWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessfulResponse8} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Workspace
     * This endpoint allows you to delete an existing workspace.  On successful deletion of the workspace, the response returns the `id`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} workspaceId 
     * @param {module:api/WorkspacesApi~deleteWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessfulResponse8}
     */

  }, {
    key: "deleteWorkspace",
    value: function deleteWorkspace(workspaceId, callback) {
      var postBody = null; // verify the required parameter 'workspaceId' is set

      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling deleteWorkspace");
      }

      var pathParams = {
        'workspace_id': workspaceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SuccessfulResponse2["default"];
      return this.apiClient.callApi('/workspaces/{workspace_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the singleworkspace operation.
     * @callback module:api/WorkspacesApi~singleworkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidResponse5} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Single workspace
     * Access the contents of a workspace that is accessible to you using its id (`id`). Includes the collections, environments, mocks and monitors of that workspace.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} workspaceId 
     * @param {module:api/WorkspacesApi~singleworkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidResponse5}
     */

  }, {
    key: "singleworkspace",
    value: function singleworkspace(xApiKey, workspaceId, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling singleworkspace");
      } // verify the required parameter 'workspaceId' is set


      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling singleworkspace");
      }

      var pathParams = {
        'workspace_id': workspaceId
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ValidResponse2["default"];
      return this.apiClient.callApi('/workspaces/{workspace_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateWorkspace operation.
     * @callback module:api/WorkspacesApi~updateWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessfulResponse6} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Workspace
     * This endpoint allows you to update a workspace and update it's association to entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.  On successful updation of the workspace, the response returns the workspcae `name` and `id`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.  **Note** : The endpoint expects you to send the desired state of the workspace in terms of the associated entities so be careful when trying to update these entities.  For eg. if your workspace has collections A and B, and in the update call, you send C's uid in the collections array, then A and B would be removed from the workspace and C would be added.
     * @param {String} xApiKey 
     * @param {String} workspaceId 
     * @param {module:model/UpdateWorkspaceRequest} updateWorkspaceRequest 
     * @param {module:api/WorkspacesApi~updateWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessfulResponse6}
     */

  }, {
    key: "updateWorkspace",
    value: function updateWorkspace(xApiKey, workspaceId, updateWorkspaceRequest, callback) {
      var postBody = updateWorkspaceRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling updateWorkspace");
      } // verify the required parameter 'workspaceId' is set


      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling updateWorkspace");
      } // verify the required parameter 'updateWorkspaceRequest' is set


      if (updateWorkspaceRequest === undefined || updateWorkspaceRequest === null) {
        throw new Error("Missing the required parameter 'updateWorkspaceRequest' when calling updateWorkspace");
      }

      var pathParams = {
        'workspace_id': workspaceId
      };
      var queryParams = {};
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SuccessfulResponse["default"];
      return this.apiClient.callApi('/workspaces/{workspace_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WorkspacesApi;
}();

exports["default"] = WorkspacesApi;