"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Createmultiplerelationsfromexistingcollections = _interopRequireDefault(require("../model/Createmultiplerelationsfromexistingcollections"));

var _CreaterelationsRequest = _interopRequireDefault(require("../model/CreaterelationsRequest"));

var _GetlinkedrelationsforanAPIversion = _interopRequireDefault(require("../model/GetlinkedrelationsforanAPIversion"));

var _Getrelationsofatype = _interopRequireDefault(require("../model/Getrelationsofatype"));

var _Getrelationsofatype2 = _interopRequireDefault(require("../model/Getrelationsofatype1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Relations service.
* @module api/RelationsApi
* @version 1.0.0
*/
var RelationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RelationsApi. 
  * @alias module:api/RelationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RelationsApi(apiClient) {
    _classCallCheck(this, RelationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createrelations operation.
   * @callback module:api/RelationsApi~createrelationsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Createmultiplerelationsfromexistingcollections} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create relations
   * This call allows you to add existing Postman entities as new relations to an API. The request body should contain the relations to be created along with an array of entity IDs.   <table>   <tr>     <th>Relation</th>     <th>Entity ID type</th>   <tr>   <tr>     <td>contracttest</td>     <td>Collection UIDs</td>   </tr>   <tr>     <td>integrationtest</td>     <td>Collection UIDs</td>   </tr>   <tr>     <td>documentation</td>     <td>Collection UIDs</td>   </tr>   <tr>     <td>testsuite</td>     <td>Collection UIDs</td>   </tr>   <tr>     <td>environment</td>     <td>Environment UIDs</td>   </tr>   <tr>     <td>mock</td>     <td>Mock IDs</td>   </tr>   <tr>     <td>monitor</td>     <td>Monitor IDs</td>   </tr> </table>  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
   * @param {String} xApiKey 
   * @param {String} apiId 
   * @param {String} apiVersionId 
   * @param {module:model/CreaterelationsRequest} createrelationsRequest 
   * @param {module:api/RelationsApi~createrelationsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Createmultiplerelationsfromexistingcollections}
   */


  _createClass(RelationsApi, [{
    key: "createrelations",
    value: function createrelations(xApiKey, apiId, apiVersionId, createrelationsRequest, callback) {
      var postBody = createrelationsRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createrelations");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling createrelations");
      } // verify the required parameter 'apiVersionId' is set


      if (apiVersionId === undefined || apiVersionId === null) {
        throw new Error("Missing the required parameter 'apiVersionId' when calling createrelations");
      } // verify the required parameter 'createrelationsRequest' is set


      if (createrelationsRequest === undefined || createrelationsRequest === null) {
        throw new Error("Missing the required parameter 'createrelationsRequest' when calling createrelations");
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
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _Createmultiplerelationsfromexistingcollections["default"];
      return this.apiClient.callApi('/apis/{apiId}/versions/{apiVersionId}/relations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getlinkedrelations operation.
     * @callback module:api/RelationsApi~getlinkedrelationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetlinkedrelationsforanAPIversion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get linked relations
     * This call fetches all the relations which are linked to the specified API version along with their details.  The response will contain a `relations` object which lists all the relation types which are linked to the API version. Each of the relation type will be an object which details the relations of this type.   > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} apiId 
     * @param {String} apiVersionId 
     * @param {module:api/RelationsApi~getlinkedrelationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetlinkedrelationsforanAPIversion}
     */

  }, {
    key: "getlinkedrelations",
    value: function getlinkedrelations(xApiKey, apiId, apiVersionId, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling getlinkedrelations");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling getlinkedrelations");
      } // verify the required parameter 'apiVersionId' is set


      if (apiVersionId === undefined || apiVersionId === null) {
        throw new Error("Missing the required parameter 'apiVersionId' when calling getlinkedrelations");
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
      var returnType = _GetlinkedrelationsforanAPIversion["default"];
      return this.apiClient.callApi('/apis/{apiId}/versions/{apiVersionId}/relations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getrelationdetails operation.
     * @callback module:api/RelationsApi~getrelationdetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Getrelationsofatype1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get relation details
     * This call fetches detailed information of a relation.  The response will contain keys as shown in the example response where `collection` will contain the collection associated with the relation in <a href=\"https://schema.getpostman.com/collection/json/v2.1.0/draft-07/docs/index.html\">v2.1.0 format</a>.   For mocks, monitors, and environments, the response will contain the ID of the entity.   > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} apiId 
     * @param {String} apiVersionId 
     * @param {String} relationType 
     * @param {String} relationId 
     * @param {module:api/RelationsApi~getrelationdetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Getrelationsofatype1}
     */

  }, {
    key: "getrelationdetails",
    value: function getrelationdetails(xApiKey, apiId, apiVersionId, relationType, relationId, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling getrelationdetails");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling getrelationdetails");
      } // verify the required parameter 'apiVersionId' is set


      if (apiVersionId === undefined || apiVersionId === null) {
        throw new Error("Missing the required parameter 'apiVersionId' when calling getrelationdetails");
      } // verify the required parameter 'relationType' is set


      if (relationType === undefined || relationType === null) {
        throw new Error("Missing the required parameter 'relationType' when calling getrelationdetails");
      } // verify the required parameter 'relationId' is set


      if (relationId === undefined || relationId === null) {
        throw new Error("Missing the required parameter 'relationId' when calling getrelationdetails");
      }

      var pathParams = {
        'apiId': apiId,
        'apiVersionId': apiVersionId,
        'relationType': relationType,
        'relationId': relationId
      };
      var queryParams = {};
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Getrelationsofatype2["default"];
      return this.apiClient.callApi('/apis/{apiId}/versions/{apiVersionId}/{relationType}/{relationId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getrelationsbytype operation.
     * @callback module:api/RelationsApi~getrelationsbytypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Getrelationsofatype} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get relations by type
     * This call fetches all the relations by type which are linked to the specified API version along with their details.  The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} apiId 
     * @param {String} apiVersionId 
     * @param {String} relationType 
     * @param {module:api/RelationsApi~getrelationsbytypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Getrelationsofatype}
     */

  }, {
    key: "getrelationsbytype",
    value: function getrelationsbytype(xApiKey, apiId, apiVersionId, relationType, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling getrelationsbytype");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling getrelationsbytype");
      } // verify the required parameter 'apiVersionId' is set


      if (apiVersionId === undefined || apiVersionId === null) {
        throw new Error("Missing the required parameter 'apiVersionId' when calling getrelationsbytype");
      } // verify the required parameter 'relationType' is set


      if (relationType === undefined || relationType === null) {
        throw new Error("Missing the required parameter 'relationType' when calling getrelationsbytype");
      }

      var pathParams = {
        'apiId': apiId,
        'apiVersionId': apiVersionId,
        'relationType': relationType
      };
      var queryParams = {};
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Getrelationsofatype["default"];
      return this.apiClient.callApi('/apis/{apiId}/versions/{apiVersionId}/{relationType}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RelationsApi;
}();

exports["default"] = RelationsApi;