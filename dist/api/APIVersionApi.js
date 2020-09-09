"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateAPIVersionRequest = _interopRequireDefault(require("../model/CreateAPIVersionRequest"));

var _CreateAPIversion = _interopRequireDefault(require("../model/CreateAPIversion"));

var _DeleteanAPIversion = _interopRequireDefault(require("../model/DeleteanAPIversion"));

var _GetAllAPIversions = _interopRequireDefault(require("../model/GetAllAPIversions"));

var _GetanAPIversion = _interopRequireDefault(require("../model/GetanAPIversion"));

var _UpdateanAPIVersionRequest = _interopRequireDefault(require("../model/UpdateanAPIVersionRequest"));

var _UpdateanAPIversion = _interopRequireDefault(require("../model/UpdateanAPIversion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* APIVersion service.
* @module api/APIVersionApi
* @version 1.0.0
*/
var APIVersionApi = /*#__PURE__*/function () {
  /**
  * Constructs a new APIVersionApi. 
  * @alias module:api/APIVersionApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function APIVersionApi(apiClient) {
    _classCallCheck(this, APIVersionApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createAPIVersion operation.
   * @callback module:api/APIVersionApi~createAPIVersionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CreateAPIversion} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create API Version
   * This call creates a new API version in the specified API.    Request body should contain a `version` object which should have fields:  <table> <tr>  <td>name</td>  <td>Required. Name of the API Version</td> </tr> <tr>  <td>source</td>  <td>   If specified, it will copy the contents of the specified api version to create a new api verison.   <table>    <tr>     <td>id</td>     <td>Required. Id of the apiversion from where the details are to be copied</td>    </tr>    <tr>     <td>schema</td>     <td>Boolean. If true then copies the schema from the specified api version</td>    </tr>    <tr>     <td>relations</td>     <td>Object. {\"&lt;relationType&gt;\": true/false}.        Allowed relation types are `mock`, `monitor`, `documentation`, `contracttest`, `integrationtest`, `testsuite`, `environment`     Relation types which should be copied over to the new api verison</td>    </tr>   </table>  </td> </tr> </table>  Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
   * @param {String} xApiKey 
   * @param {String} apiId 
   * @param {module:model/CreateAPIVersionRequest} createAPIVersionRequest 
   * @param {module:api/APIVersionApi~createAPIVersionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CreateAPIversion}
   */


  _createClass(APIVersionApi, [{
    key: "createAPIVersion",
    value: function createAPIVersion(xApiKey, apiId, createAPIVersionRequest, callback) {
      var postBody = createAPIVersionRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createAPIVersion");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling createAPIVersion");
      } // verify the required parameter 'createAPIVersionRequest' is set


      if (createAPIVersionRequest === undefined || createAPIVersionRequest === null) {
        throw new Error("Missing the required parameter 'createAPIVersionRequest' when calling createAPIVersion");
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
      var returnType = _CreateAPIversion["default"];
      return this.apiClient.callApi('/apis/{apiId}/versions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteanAPIVersion operation.
     * @callback module:api/APIVersionApi~deleteanAPIVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteanAPIversion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an API Version
     * This call deletes an existing API Version having the specified id.    Response contains an `version` object with `id` of the API Version which was deleted.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} apiId 
     * @param {String} apiVersionId 
     * @param {module:api/APIVersionApi~deleteanAPIVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteanAPIversion}
     */

  }, {
    key: "deleteanAPIVersion",
    value: function deleteanAPIVersion(xApiKey, apiId, apiVersionId, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling deleteanAPIVersion");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling deleteanAPIVersion");
      } // verify the required parameter 'apiVersionId' is set


      if (apiVersionId === undefined || apiVersionId === null) {
        throw new Error("Missing the required parameter 'apiVersionId' when calling deleteanAPIVersion");
      }

      var pathParams = {
        'apiId': apiId,
        'apiVersionId': apiVersionId
      };
      var queryParams = {};
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeleteanAPIversion["default"];
      return this.apiClient.callApi('/apis/{apiId}/versions/{apiVersionId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAllAPIVersions operation.
     * @callback module:api/APIVersionApi~getAllAPIVersionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAllAPIversions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All API Versions
     * This call fetches details about the all the API Versions in the specified API.  The response will contain an array `versions` object which would be a list of all the API Version along with their details.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} apiId 
     * @param {module:api/APIVersionApi~getAllAPIVersionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAllAPIversions}
     */

  }, {
    key: "getAllAPIVersions",
    value: function getAllAPIVersions(xApiKey, apiId, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling getAllAPIVersions");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling getAllAPIVersions");
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
      var returnType = _GetAllAPIversions["default"];
      return this.apiClient.callApi('/apis/{apiId}/versions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getanAPIVersion operation.
     * @callback module:api/APIVersionApi~getanAPIVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetanAPIversion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an API Version
     * This call fetches details about the specified API Version.  The response will contain a `version` object which would contain all the details of the API Version.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} apiId 
     * @param {String} apiVersionId 
     * @param {module:api/APIVersionApi~getanAPIVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetanAPIversion}
     */

  }, {
    key: "getanAPIVersion",
    value: function getanAPIVersion(xApiKey, apiId, apiVersionId, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling getanAPIVersion");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling getanAPIVersion");
      } // verify the required parameter 'apiVersionId' is set


      if (apiVersionId === undefined || apiVersionId === null) {
        throw new Error("Missing the required parameter 'apiVersionId' when calling getanAPIVersion");
      }

      var pathParams = {
        'apiId': apiId,
        'apiVersionId': apiVersionId
      };
      var queryParams = {};
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetanAPIversion["default"];
      return this.apiClient.callApi('/apis/{apiId}/versions/{apiVersionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateanAPIVersion operation.
     * @callback module:api/APIVersionApi~updateanAPIVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdateanAPIversion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an API Version
     * This call updates an existing API Version.    Request body should contain a `version` object with the fields which need to be updated. Only field which can be updated is `name`.  Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api` etc.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} apiId 
     * @param {String} apiVersionId 
     * @param {module:model/UpdateanAPIVersionRequest} updateanAPIVersionRequest 
     * @param {module:api/APIVersionApi~updateanAPIVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UpdateanAPIversion}
     */

  }, {
    key: "updateanAPIVersion",
    value: function updateanAPIVersion(xApiKey, apiId, apiVersionId, updateanAPIVersionRequest, callback) {
      var postBody = updateanAPIVersionRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling updateanAPIVersion");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling updateanAPIVersion");
      } // verify the required parameter 'apiVersionId' is set


      if (apiVersionId === undefined || apiVersionId === null) {
        throw new Error("Missing the required parameter 'apiVersionId' when calling updateanAPIVersion");
      } // verify the required parameter 'updateanAPIVersionRequest' is set


      if (updateanAPIVersionRequest === undefined || updateanAPIVersionRequest === null) {
        throw new Error("Missing the required parameter 'updateanAPIVersionRequest' when calling updateanAPIVersion");
      }

      var pathParams = {
        'apiId': apiId,
        'apiVersionId': apiVersionId
      };
      var queryParams = {};
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateanAPIversion["default"];
      return this.apiClient.callApi('/apis/{apiId}/versions/{apiVersionId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return APIVersionApi;
}();

exports["default"] = APIVersionApi;