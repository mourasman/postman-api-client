"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateMockRequest = _interopRequireDefault(require("../model/CreateMockRequest"));

var _CreateMockinaWorkspace = _interopRequireDefault(require("../model/CreateMockinaWorkspace"));

var _SuccessResponse = _interopRequireDefault(require("../model/SuccessResponse"));

var _SuccessResponse2 = _interopRequireDefault(require("../model/SuccessResponse1"));

var _SuccessfulResponse = _interopRequireDefault(require("../model/SuccessfulResponse1"));

var _SuccessfulResponse2 = _interopRequireDefault(require("../model/SuccessfulResponse2"));

var _SuccessfulResponse3 = _interopRequireDefault(require("../model/SuccessfulResponse3"));

var _UpdateMockRequest = _interopRequireDefault(require("../model/UpdateMockRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Mocks service.
* @module api/MocksApi
* @version 1.0.0
*/
var MocksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MocksApi. 
  * @alias module:api/MocksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MocksApi(apiClient) {
    _classCallCheck(this, MocksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the allMocks operation.
   * @callback module:api/MocksApi~allMocksCallback
   * @param {String} error Error message, if any.
   * @param {module:model/SuccessfulResponse1} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * All Mocks
   * This endpoint fetches all the mocks that you have created.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
   * @param {String} xApiKey 
   * @param {module:api/MocksApi~allMocksCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/SuccessfulResponse1}
   */


  _createClass(MocksApi, [{
    key: "allMocks",
    value: function allMocks(xApiKey, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling allMocks");
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
      var returnType = _SuccessfulResponse["default"];
      return this.apiClient.callApi('/mocks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createMock operation.
     * @callback module:api/MocksApi~createMockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateMockinaWorkspace} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Mock
     * This endpoint allows you to create a mock on a collection. You can also provide an environment UID to resolve any environment variables in the collection.  You can also specify the context of a workspace to create a mock in directly by passing the `workspace` as a query param.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {module:model/CreateMockRequest} createMockRequest 
     * @param {module:api/MocksApi~createMockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateMockinaWorkspace}
     */

  }, {
    key: "createMock",
    value: function createMock(xApiKey, createMockRequest, callback) {
      var postBody = createMockRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createMock");
      } // verify the required parameter 'createMockRequest' is set


      if (createMockRequest === undefined || createMockRequest === null) {
        throw new Error("Missing the required parameter 'createMockRequest' when calling createMock");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateMockinaWorkspace["default"];
      return this.apiClient.callApi('/mocks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteMock operation.
     * @callback module:api/MocksApi~deleteMockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessfulResponse3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Mock
     * This endpoint allows you to delete an existing mock using its `uid`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} mockUid 
     * @param {module:api/MocksApi~deleteMockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessfulResponse3}
     */

  }, {
    key: "deleteMock",
    value: function deleteMock(xApiKey, mockUid, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling deleteMock");
      } // verify the required parameter 'mockUid' is set


      if (mockUid === undefined || mockUid === null) {
        throw new Error("Missing the required parameter 'mockUid' when calling deleteMock");
      }

      var pathParams = {
        'mock_uid': mockUid
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _SuccessfulResponse3["default"];
      return this.apiClient.callApi('/mocks/{mock_uid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the publishMock operation.
     * @callback module:api/MocksApi~publishMockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Publish Mock
     * This endpoint publishes the mock you have created using its `uid`  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} mockUid 
     * @param {module:api/MocksApi~publishMockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse1}
     */

  }, {
    key: "publishMock",
    value: function publishMock(xApiKey, mockUid, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling publishMock");
      } // verify the required parameter 'mockUid' is set


      if (mockUid === undefined || mockUid === null) {
        throw new Error("Missing the required parameter 'mockUid' when calling publishMock");
      }

      var pathParams = {
        'mock_uid': mockUid
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SuccessResponse2["default"];
      return this.apiClient.callApi('/mocks/{mock_uid}/publish', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the singleMock operation.
     * @callback module:api/MocksApi~singleMockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessfulResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Single Mock
     * This endpoint fetches you the basic information about a single mock using its `uid`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} mockUid 
     * @param {module:api/MocksApi~singleMockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessfulResponse2}
     */

  }, {
    key: "singleMock",
    value: function singleMock(xApiKey, mockUid, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling singleMock");
      } // verify the required parameter 'mockUid' is set


      if (mockUid === undefined || mockUid === null) {
        throw new Error("Missing the required parameter 'mockUid' when calling singleMock");
      }

      var pathParams = {
        'mock_uid': mockUid
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _SuccessfulResponse2["default"];
      return this.apiClient.callApi('/mocks/{mock_uid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the unpublishMock operation.
     * @callback module:api/MocksApi~unpublishMockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unpublish Mock
     * This endpoint unpublishes the mock you have created using its `uid`  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} mockUid 
     * @param {module:api/MocksApi~unpublishMockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse1}
     */

  }, {
    key: "unpublishMock",
    value: function unpublishMock(xApiKey, mockUid, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling unpublishMock");
      } // verify the required parameter 'mockUid' is set


      if (mockUid === undefined || mockUid === null) {
        throw new Error("Missing the required parameter 'mockUid' when calling unpublishMock");
      }

      var pathParams = {
        'mock_uid': mockUid
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SuccessResponse2["default"];
      return this.apiClient.callApi('/mocks/{mock_uid}/unpublish', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateMock operation.
     * @callback module:api/MocksApi~updateMockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Mock
     * This endpoint allows you to update a mock you have created using its `uid`. The endpoint allows you to edit fields, * name * environment * description * private * versionTag  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} mockUid 
     * @param {module:model/UpdateMockRequest} updateMockRequest 
     * @param {module:api/MocksApi~updateMockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */

  }, {
    key: "updateMock",
    value: function updateMock(xApiKey, mockUid, updateMockRequest, callback) {
      var postBody = updateMockRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling updateMock");
      } // verify the required parameter 'mockUid' is set


      if (mockUid === undefined || mockUid === null) {
        throw new Error("Missing the required parameter 'mockUid' when calling updateMock");
      } // verify the required parameter 'updateMockRequest' is set


      if (updateMockRequest === undefined || updateMockRequest === null) {
        throw new Error("Missing the required parameter 'updateMockRequest' when calling updateMock");
      }

      var pathParams = {
        'mock_uid': mockUid
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _SuccessResponse["default"];
      return this.apiClient.callApi('/mocks/{mock_uid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return MocksApi;
}();

exports["default"] = MocksApi;