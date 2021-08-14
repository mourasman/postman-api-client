"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Createcollectionfromschema = _interopRequireDefault(require("../model/Createcollectionfromschema"));

var _CreatecollectionfromschemaRequest = _interopRequireDefault(require("../model/CreatecollectionfromschemaRequest"));

var _Createschema = _interopRequireDefault(require("../model/Createschema"));

var _Getschema = _interopRequireDefault(require("../model/Getschema"));

var _Updateschema = _interopRequireDefault(require("../model/Updateschema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Schema service.
* @module api/SchemaApi
* @version 1.0.0
*/
var SchemaApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SchemaApi. 
  * @alias module:api/SchemaApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SchemaApi(apiClient) {
    _classCallCheck(this, SchemaApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createSchema operation.
   * @callback module:api/SchemaApi~createSchemaCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Createschema} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create Schema
   * This call creates a new schema.  Request body should contain a `schema` object which should atleast have these properties with `string` values:  - **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`. - **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language. - **`schema`**: Optional. If passed, must be the content of the schema as a `string`.  Response contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc.   > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
   * @param {String} xApiKey 
   * @param {String} apiId 
   * @param {String} apiVersionId 
   * @param {String} body 
   * @param {module:api/SchemaApi~createSchemaCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Createschema}
   */


  _createClass(SchemaApi, [{
    key: "createSchema",
    value: function createSchema(xApiKey, apiId, apiVersionId, body, callback) {
      var postBody = body; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createSchema");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling createSchema");
      } // verify the required parameter 'apiVersionId' is set


      if (apiVersionId === undefined || apiVersionId === null) {
        throw new Error("Missing the required parameter 'apiVersionId' when calling createSchema");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSchema");
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
      var returnType = _Createschema["default"];
      return this.apiClient.callApi('/apis/{apiId}/versions/{apiVersionId}/schemas', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createcollectionfromschema operation.
     * @callback module:api/SchemaApi~createcollectionfromschemaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Createcollectionfromschema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create collection from schema
     * This call creates a collection and links it to an API as one or multiple relations.   Request body requires two keys: - `name` - Name of the collection to be created. - `relations` - A list of relation(s) to be created.  The allowed relation types are `contracttest`, `integrationtest`, `testsuite`, and `documentation`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} workspace 
     * @param {String} xApiKey 
     * @param {String} apiId 
     * @param {String} apiVersionId 
     * @param {String} schemaId 
     * @param {module:model/CreatecollectionfromschemaRequest} createcollectionfromschemaRequest 
     * @param {module:api/SchemaApi~createcollectionfromschemaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Createcollectionfromschema}
     */

  }, {
    key: "createcollectionfromschema",
    value: function createcollectionfromschema(workspace, xApiKey, apiId, apiVersionId, schemaId, createcollectionfromschemaRequest, callback) {
      var postBody = createcollectionfromschemaRequest; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling createcollectionfromschema");
      } // verify the required parameter 'xApiKey' is set


      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createcollectionfromschema");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling createcollectionfromschema");
      } // verify the required parameter 'apiVersionId' is set


      if (apiVersionId === undefined || apiVersionId === null) {
        throw new Error("Missing the required parameter 'apiVersionId' when calling createcollectionfromschema");
      } // verify the required parameter 'schemaId' is set


      if (schemaId === undefined || schemaId === null) {
        throw new Error("Missing the required parameter 'schemaId' when calling createcollectionfromschema");
      } // verify the required parameter 'createcollectionfromschemaRequest' is set


      if (createcollectionfromschemaRequest === undefined || createcollectionfromschemaRequest === null) {
        throw new Error("Missing the required parameter 'createcollectionfromschemaRequest' when calling createcollectionfromschema");
      }

      var pathParams = {
        'apiId': apiId,
        'apiVersionId': apiVersionId,
        'schemaId': schemaId
      };
      var queryParams = {
        'workspace': workspace
      };
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _Createcollectionfromschema["default"];
      return this.apiClient.callApi('/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}/collections', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getSchema operation.
     * @callback module:api/SchemaApi~getSchemaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Getschema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Schema
     * This call fetches a single schema having the specified id.  Response contains a `schema` object with all the details related to the schema, namely, `id`, `language`, `type`, `schema` etc.   > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} apiId 
     * @param {String} apiVersionId 
     * @param {String} schemaId 
     * @param {module:api/SchemaApi~getSchemaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Getschema}
     */

  }, {
    key: "getSchema",
    value: function getSchema(xApiKey, apiId, apiVersionId, schemaId, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling getSchema");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling getSchema");
      } // verify the required parameter 'apiVersionId' is set


      if (apiVersionId === undefined || apiVersionId === null) {
        throw new Error("Missing the required parameter 'apiVersionId' when calling getSchema");
      } // verify the required parameter 'schemaId' is set


      if (schemaId === undefined || schemaId === null) {
        throw new Error("Missing the required parameter 'schemaId' when calling getSchema");
      }

      var pathParams = {
        'apiId': apiId,
        'apiVersionId': apiVersionId,
        'schemaId': schemaId
      };
      var queryParams = {};
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Getschema["default"];
      return this.apiClient.callApi('/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateSchema operation.
     * @callback module:api/SchemaApi~updateSchemaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Updateschema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Schema
     * This call updates an existing schema.  Request body should contain a `schema` object which should atleast have these properties with `string` values:  - **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`. - **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language. - **`schema`**: Optional. If passed, must be the content of the schema as a `string`.  Response contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc.   > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} apiId 
     * @param {String} apiVersionId 
     * @param {String} schemaId 
     * @param {String} body 
     * @param {module:api/SchemaApi~updateSchemaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Updateschema}
     */

  }, {
    key: "updateSchema",
    value: function updateSchema(xApiKey, apiId, apiVersionId, schemaId, body, callback) {
      var postBody = body; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling updateSchema");
      } // verify the required parameter 'apiId' is set


      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling updateSchema");
      } // verify the required parameter 'apiVersionId' is set


      if (apiVersionId === undefined || apiVersionId === null) {
        throw new Error("Missing the required parameter 'apiVersionId' when calling updateSchema");
      } // verify the required parameter 'schemaId' is set


      if (schemaId === undefined || schemaId === null) {
        throw new Error("Missing the required parameter 'schemaId' when calling updateSchema");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateSchema");
      }

      var pathParams = {
        'apiId': apiId,
        'apiVersionId': apiVersionId,
        'schemaId': schemaId
      };
      var queryParams = {};
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Updateschema["default"];
      return this.apiClient.callApi('/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SchemaApi;
}();

exports["default"] = SchemaApi;