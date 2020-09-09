"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorInvalidParams = _interopRequireDefault(require("../model/ErrorInvalidParams"));

var _ImportexternalAPIspecificationRequest = _interopRequireDefault(require("../model/ImportexternalAPIspecificationRequest"));

var _SuccessImportStringifiedbody = _interopRequireDefault(require("../model/SuccessImportStringifiedbody"));

var _SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders = _interopRequireDefault(require("../model/SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Import service.
* @module api/ImportApi
* @version 1.0.0
*/
var ImportApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ImportApi. 
  * @alias module:api/ImportApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ImportApi(apiClient) {
    _classCallCheck(this, ImportApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the importexporteddata operation.
   * @callback module:api/ImportApi~importexporteddataCallback
   * @param {String} error Error message, if any.
   * @param {module:model/SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Import exported data
   * This endpoint allows you to import your exported Postman data. For more information about how you can export your data, refer <a href=\"https://go.postman.co/me/export\">Export your Postman data.</a>  On successful imports, the response will be an array with Each element contaning `id`, `name` and `uid` of entities created.  **Note**: Refer to examples for different scenarios.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header.
   * @param {String} xApiKey 
   * @param {String} contentType 
   * @param {String} type 
   * @param {String} input File containing the exported collections or environments
   * @param {module:api/ImportApi~importexporteddataCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders}
   */


  _createClass(ImportApi, [{
    key: "importexporteddata",
    value: function importexporteddata(xApiKey, contentType, type, input, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling importexporteddata");
      } // verify the required parameter 'contentType' is set


      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling importexporteddata");
      } // verify the required parameter 'type' is set


      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling importexporteddata");
      } // verify the required parameter 'input' is set


      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling importexporteddata");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'x-api-key': xApiKey,
        'Content-Type': contentType
      };
      var formParams = {
        'type': type,
        'input': input
      };
      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders["default"];
      return this.apiClient.callApi('/import/exported', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the importexternalAPIspecification operation.
     * @callback module:api/ImportApi~importexternalAPIspecificationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessImportStringifiedbody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import external API specification
     * This endpoint allows you to import external API specifications into Postman.  Currently, this endpoint only supports the <a href=\"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md\">OpenAPI</a> specification, for which the `importType` will be `openapi`.  On a successful import, the response will be an array with each element contaning `id`, `name` and `uid` of entities created.  Supported `type`s:  - string - json - file  The `input` parameter should be defined based on the `type`.  > To import a file, request body must be form-data with `type` param set to `file`.  **Note**: Refer to examples for different scenarios.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header.
     * @param {String} xApiKey 
     * @param {String} importType 
     * @param {module:model/ImportexternalAPIspecificationRequest} importexternalAPIspecificationRequest 
     * @param {module:api/ImportApi~importexternalAPIspecificationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessImportStringifiedbody}
     */

  }, {
    key: "importexternalAPIspecification",
    value: function importexternalAPIspecification(xApiKey, importType, importexternalAPIspecificationRequest, callback) {
      var postBody = importexternalAPIspecificationRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling importexternalAPIspecification");
      } // verify the required parameter 'importType' is set


      if (importType === undefined || importType === null) {
        throw new Error("Missing the required parameter 'importType' when calling importexternalAPIspecification");
      } // verify the required parameter 'importexternalAPIspecificationRequest' is set


      if (importexternalAPIspecificationRequest === undefined || importexternalAPIspecificationRequest === null) {
        throw new Error("Missing the required parameter 'importexternalAPIspecificationRequest' when calling importexternalAPIspecification");
      }

      var pathParams = {
        'importType': importType
      };
      var queryParams = {};
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SuccessImportStringifiedbody["default"];
      return this.apiClient.callApi('/import/{importType}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ImportApi;
}();

exports["default"] = ImportApi;