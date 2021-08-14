"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateEnvironmentRequest = _interopRequireDefault(require("../model/CreateEnvironmentRequest"));

var _CreateEnvironmentinaWorkspace = _interopRequireDefault(require("../model/CreateEnvironmentinaWorkspace"));

var _EnvironmentDeleted = _interopRequireDefault(require("../model/EnvironmentDeleted"));

var _SpecifiedworkspaceEntitiesdonotexist = _interopRequireDefault(require("../model/SpecifiedworkspaceEntitiesdonotexist"));

var _SuccessfulResponse = _interopRequireDefault(require("../model/SuccessfulResponse"));

var _UpdateEnvironmentRequest = _interopRequireDefault(require("../model/UpdateEnvironmentRequest"));

var _ValidResponse = _interopRequireDefault(require("../model/ValidResponse2"));

var _ValidResponse2 = _interopRequireDefault(require("../model/ValidResponse3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Environments service.
* @module api/EnvironmentsApi
* @version 1.0.0
*/
var EnvironmentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EnvironmentsApi. 
  * @alias module:api/EnvironmentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EnvironmentsApi(apiClient) {
    _classCallCheck(this, EnvironmentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the allEnvironments operation.
   * @callback module:api/EnvironmentsApi~allEnvironmentsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ValidResponse2} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * All Environments
   * The `/environments` endpoint returns a list of all [environments](https://www.getpostman.com/docs/environments) that belong to you..  The response contains an array of environments' information containing the `name`, `id`, `owner` and `uid` of each environment.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
   * @param {String} xApiKey 
   * @param {module:api/EnvironmentsApi~allEnvironmentsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ValidResponse2}
   */


  _createClass(EnvironmentsApi, [{
    key: "allEnvironments",
    value: function allEnvironments(xApiKey, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling allEnvironments");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _ValidResponse["default"];
      return this.apiClient.callApi('/environments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createEnvironment operation.
     * @callback module:api/EnvironmentsApi~createEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateEnvironmentinaWorkspace} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Environment
     * A sample body is added to the request that conforms to the following JSON schema:  ```json {   \"type\": \"object\",   \"properties\": {     \"environment\": {       \"type\": \"object\",       \"properties\": {         \"name\": {               \"type\": \"string\",               \"maxLength\": 254,               \"minLength\": 1             },         \"values\": {           \"type\": \"array\",           \"maxItems\": 100,           \"additionalItems\": false,           \"items\": {               \"type\": \"object\",               \"properties\": {                 \"key\": {                   \"type\": \"string\",                   \"maxLength\": 254                   \"minLength\": 1                 },                 \"value\": { \"type\": \"string\" },                 \"enabled\": { \"type\": \"boolean\" }               },               \"required\": [\"key\", \"value\"]             }         }       },       \"required\": [\"name\"]     }   },   \"required\": [\"environment\"] } ```  On successful creation of the environment, the API returns the environment name and `id`.  You can also specify the context of a workspace to create an environment in directly by passing the `workspace` as a query param.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {module:model/CreateEnvironmentRequest} createEnvironmentRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.workspace 
     * @param {module:api/EnvironmentsApi~createEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateEnvironmentinaWorkspace}
     */

  }, {
    key: "createEnvironment",
    value: function createEnvironment(xApiKey, createEnvironmentRequest, opts, callback) {
      opts = opts || {};
      var postBody = createEnvironmentRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createEnvironment");
      } // verify the required parameter 'createEnvironmentRequest' is set


      if (createEnvironmentRequest === undefined || createEnvironmentRequest === null) {
        throw new Error("Missing the required parameter 'createEnvironmentRequest' when calling createEnvironment");
      }

      var pathParams = {};
      var queryParams = {
        'workspace': opts['workspace']
      };
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateEnvironmentinaWorkspace["default"];
      return this.apiClient.callApi('/environments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteEnvironment operation.
     * @callback module:api/EnvironmentsApi~deleteEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentDeleted} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Environment
     * This endpoint allows you to delete a single environment based on an environment's unique `uid`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} environmentUid 
     * @param {module:api/EnvironmentsApi~deleteEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentDeleted}
     */

  }, {
    key: "deleteEnvironment",
    value: function deleteEnvironment(xApiKey, environmentUid, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling deleteEnvironment");
      } // verify the required parameter 'environmentUid' is set


      if (environmentUid === undefined || environmentUid === null) {
        throw new Error("Missing the required parameter 'environmentUid' when calling deleteEnvironment");
      }

      var pathParams = {
        'environment_uid': environmentUid
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8', 'application/json'];
      var returnType = _EnvironmentDeleted["default"];
      return this.apiClient.callApi('/environments/{environment_uid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the singleEnvironment operation.
     * @callback module:api/EnvironmentsApi~singleEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidResponse3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Single Environment
     * Access the contents of an environment that is accessible to you using its unique id (`uid`).  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} environmentUid 
     * @param {module:api/EnvironmentsApi~singleEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidResponse3}
     */

  }, {
    key: "singleEnvironment",
    value: function singleEnvironment(xApiKey, environmentUid, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling singleEnvironment");
      } // verify the required parameter 'environmentUid' is set


      if (environmentUid === undefined || environmentUid === null) {
        throw new Error("Missing the required parameter 'environmentUid' when calling singleEnvironment");
      }

      var pathParams = {
        'environment_uid': environmentUid
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _ValidResponse2["default"];
      return this.apiClient.callApi('/environments/{environment_uid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateEnvironment operation.
     * @callback module:api/EnvironmentsApi~updateEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessfulResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Environment
     * This endpoint replaces an existing environment.  A sample body is added to the request that conforms to the following JSON schema:  ```json {  \"type\": \"object\",  \"properties\": {   \"environment\": {    \"type\": \"object\",    \"properties\": {     \"name\": {      \"type\": \"string\",      \"maxLength\": 254,      \"minLength\": 1     },     \"values\": {      \"type\": \"array\",      \"maxItems\": 100,      \"additionalItems\": false,      \"items\": {       \"type\": \"object\",       \"properties\": {        \"key\": {         \"type\": \"string\",         \"maxLength\": 254,         \"minLength\": 1        },        \"value\": {         \"type\": \"string\",         \"maxLength\": 254,         \"minLength\": 1        },        \"type\": {         \"type\": \"string\"        },        \"enabled\": {         \"type\": \"boolean\"        }       },       \"required\": [        \"key\",        \"value\"       ]      }     }    }   }  },  \"required\": [   \"environment\"  ] } ```  On successful updation of the environment, the API returns the environment name and `id`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} environmentUid 
     * @param {module:model/UpdateEnvironmentRequest} updateEnvironmentRequest 
     * @param {module:api/EnvironmentsApi~updateEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessfulResponse}
     */

  }, {
    key: "updateEnvironment",
    value: function updateEnvironment(xApiKey, environmentUid, updateEnvironmentRequest, callback) {
      var postBody = updateEnvironmentRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling updateEnvironment");
      } // verify the required parameter 'environmentUid' is set


      if (environmentUid === undefined || environmentUid === null) {
        throw new Error("Missing the required parameter 'environmentUid' when calling updateEnvironment");
      } // verify the required parameter 'updateEnvironmentRequest' is set


      if (updateEnvironmentRequest === undefined || updateEnvironmentRequest === null) {
        throw new Error("Missing the required parameter 'updateEnvironmentRequest' when calling updateEnvironment");
      }

      var pathParams = {
        'environment_uid': environmentUid
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json; charset=utf-8', 'application/json'];
      var returnType = _SuccessfulResponse["default"];
      return this.apiClient.callApi('/environments/{environment_uid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return EnvironmentsApi;
}();

exports["default"] = EnvironmentsApi;