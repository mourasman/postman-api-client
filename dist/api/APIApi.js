"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateAPI = _interopRequireDefault(require("../model/CreateAPI"));

var _CreateAPIRequest = _interopRequireDefault(require("../model/CreateAPIRequest"));

var _DeleteanAPI = _interopRequireDefault(require("../model/DeleteanAPI"));

var _GetallAPIs = _interopRequireDefault(require("../model/GetallAPIs"));

var _GetsingleAPI = _interopRequireDefault(require("../model/GetsingleAPI"));

var _UpdateanAPI = _interopRequireDefault(require("../model/UpdateanAPI"));

var _UpdateanAPIRequest = _interopRequireDefault(require("../model/UpdateanAPIRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* API service.
* @module api/APIApi
* @version 1.0.0
*/
var APIApi = /*#__PURE__*/function () {
  /**
  * Constructs a new APIApi. 
  * @alias module:api/APIApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function APIApi(apiClient) {
    _classCallCheck(this, APIApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createAPI operation.
   * @callback module:api/APIApi~createAPICallback
   * @param {String} error Error message, if any.
   * @param {module:model/CreateAPI} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create API
   * This call creates a new API with a default API Version.    Request body should contain an `api` object which should atleast have a property `name`.  Response contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description`, etc.   > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
   * @param {String} workspace 
   * @param {String} xApiKey 
   * @param {module:model/CreateAPIRequest} createAPIRequest 
   * @param {module:api/APIApi~createAPICallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CreateAPI}
   */


  _createClass(APIApi, [{
    key: "createAPI",
    value: function createAPI(workspace, xApiKey, createAPIRequest, callback) {
      var postBody = createAPIRequest; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling createAPI");
      } // verify the required parameter 'xApiKey' is set


      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createAPI");
      } // verify the required parameter 'createAPIRequest' is set


      if (createAPIRequest === undefined || createAPIRequest === null) {
        throw new Error("Missing the required parameter 'createAPIRequest' when calling createAPI");
      }

      var pathParams = {};
      var queryParams = {
        'workspace': workspace
      };
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateAPI["default"];
      return this.apiClient.callApi('/apis', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteanAPI operation.
     * @callback module:api/APIApi~deleteanAPICallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteanAPI} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an API
     * This call deletes an existing API having the specified id.    Response contains an `api` object with `id` of the API which was deleted.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} apiId 
     * @param {module:api/APIApi~deleteanAPICallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteanAPI}
     */

  }, {
    key: "deleteanAPI",
    value: function deleteanAPI(xApiKey, apiId, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling deleteanAPI");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling deleteanAPI");
      }

      var pathParams = {
        'apiId': apiId
      };
      var queryParams = {};
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeleteanAPI["default"];
      return this.apiClient.callApi('/apis/{apiId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getallAPIs operation.
     * @callback module:api/APIApi~getallAPIsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetallAPIs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all APIs
     * This call fetches all the APIs present in the specified workspace  Response contains an array named `apis` which would contain all the details of APIs present in the workspace.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} workspace 
     * @param {String} xApiKey 
     * @param {String} contentType 
     * @param {module:api/APIApi~getallAPIsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetallAPIs}
     */

  }, {
    key: "getallAPIs",
    value: function getallAPIs(workspace, xApiKey, contentType, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling getallAPIs");
      } // verify the required parameter 'xApiKey' is set


      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling getallAPIs");
      } // verify the required parameter 'contentType' is set


      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling getallAPIs");
      }

      var pathParams = {};
      var queryParams = {
        'workspace': workspace
      };
      var headerParams = {
        'x-api-key': xApiKey,
        'Content-Type': contentType
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetallAPIs["default"];
      return this.apiClient.callApi('/apis', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the singleAPI operation.
     * @callback module:api/APIApi~singleAPICallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetsingleAPI} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Single API
     * This call fetches a single API having the specified id.  Response contains an `api` object with all the details related to the queried API, namely, `id`, `name`, `summary`, `description` etc.   > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} apiId 
     * @param {module:api/APIApi~singleAPICallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetsingleAPI}
     */

  }, {
    key: "singleAPI",
    value: function singleAPI(xApiKey, apiId, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling singleAPI");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling singleAPI");
      }

      var pathParams = {
        'apiId': apiId
      };
      var queryParams = {};
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetsingleAPI["default"];
      return this.apiClient.callApi('/apis/{apiId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateanAPI operation.
     * @callback module:api/APIApi~updateanAPICallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdateanAPI} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an API
     * This call updates an existing API .    Request body should contain an `api` object which should have the fields to be updated. Only `name`, `summary` and `description` fields can be edited for an API.  Response contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description` etc.   > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} apiId 
     * @param {module:model/UpdateanAPIRequest} updateanAPIRequest 
     * @param {module:api/APIApi~updateanAPICallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UpdateanAPI}
     */

  }, {
    key: "updateanAPI",
    value: function updateanAPI(xApiKey, apiId, updateanAPIRequest, callback) {
      var postBody = updateanAPIRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling updateanAPI");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling updateanAPI");
      } // verify the required parameter 'updateanAPIRequest' is set


      if (updateanAPIRequest === undefined || updateanAPIRequest === null) {
        throw new Error("Missing the required parameter 'updateanAPIRequest' when calling updateanAPI");
      }

      var pathParams = {
        'apiId': apiId
      };
      var queryParams = {};
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateanAPI["default"];
      return this.apiClient.callApi('/apis/{apiId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return APIApi;
}();

exports["default"] = APIApi;