"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CollectionDeleted = _interopRequireDefault(require("../model/CollectionDeleted"));

var _CollectionNotFound = _interopRequireDefault(require("../model/CollectionNotFound"));

var _CollectionUpdated = _interopRequireDefault(require("../model/CollectionUpdated"));

var _CreateCollectionRequest = _interopRequireDefault(require("../model/CreateCollectionRequest"));

var _CreateCollectioninaWorkspace = _interopRequireDefault(require("../model/CreateCollectioninaWorkspace"));

var _CreateaForkRequest = _interopRequireDefault(require("../model/CreateaForkRequest"));

var _MergeaForkRequest = _interopRequireDefault(require("../model/MergeaForkRequest"));

var _SpecifiedworkspaceEntitiesdonotexist = _interopRequireDefault(require("../model/SpecifiedworkspaceEntitiesdonotexist"));

var _UpdateCollectionRequest = _interopRequireDefault(require("../model/UpdateCollectionRequest"));

var _ValidResponse = _interopRequireDefault(require("../model/ValidResponse"));

var _ValidResponse2 = _interopRequireDefault(require("../model/ValidResponse1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Collections service.
* @module api/CollectionsApi
* @version 1.0.0
*/
var CollectionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CollectionsApi. 
  * @alias module:api/CollectionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CollectionsApi(apiClient) {
    _classCallCheck(this, CollectionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the allCollections operation.
   * @callback module:api/CollectionsApi~allCollectionsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ValidResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * All Collections
   * The `/collections` endpoint returns a list of all [collections](https://www.getpostman.com/docs/collections) that are accessible by you. The list includes your own collections and the collections that you have subscribed to.  The response contains an array of collection information containing the `name`, `id`, `owner` and `uid` of each collection.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
   * @param {String} xApiKey 
   * @param {module:api/CollectionsApi~allCollectionsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ValidResponse}
   */


  _createClass(CollectionsApi, [{
    key: "allCollections",
    value: function allCollections(xApiKey, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling allCollections");
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
      return this.apiClient.callApi('/collections', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createCollection operation.
     * @callback module:api/CollectionsApi~createCollectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateCollectioninaWorkspace} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Collection
     * This endpoint allows you to create collections using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).  On successful creation of the collection, the response returns the collection `name`, `id` and the `uid`.  You can also specify the context of a workspace to create a collection in directly by passing the `workspace` as a query param.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {module:model/CreateCollectionRequest} createCollectionRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.workspace 
     * @param {module:api/CollectionsApi~createCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateCollectioninaWorkspace}
     */

  }, {
    key: "createCollection",
    value: function createCollection(xApiKey, createCollectionRequest, opts, callback) {
      opts = opts || {};
      var postBody = createCollectionRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createCollection");
      } // verify the required parameter 'createCollectionRequest' is set


      if (createCollectionRequest === undefined || createCollectionRequest === null) {
        throw new Error("Missing the required parameter 'createCollectionRequest' when calling createCollection");
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
      var returnType = _CreateCollectioninaWorkspace["default"];
      return this.apiClient.callApi('/collections', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createaFork operation.
     * @callback module:api/CollectionsApi~createaForkCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Fork
     * This endpoint allows you to create a fork from an existing collection.  On successful creation of the collection, the response returns the collection `name`, `id`, `uid` along with `fork` information.  You can also specify the context of a workspace to fork a collection in by passing the `workspace` as a query param.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} workspace Workspace ID is required to create a fork
     * @param {String} xApiKey 
     * @param {String} collectionUid 
     * @param {module:model/CreateaForkRequest} createaForkRequest 
     * @param {module:api/CollectionsApi~createaForkCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "createaFork",
    value: function createaFork(workspace, xApiKey, collectionUid, createaForkRequest, callback) {
      var postBody = createaForkRequest; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling createaFork");
      } // verify the required parameter 'xApiKey' is set


      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createaFork");
      } // verify the required parameter 'collectionUid' is set


      if (collectionUid === undefined || collectionUid === null) {
        throw new Error("Missing the required parameter 'collectionUid' when calling createaFork");
      } // verify the required parameter 'createaForkRequest' is set


      if (createaForkRequest === undefined || createaForkRequest === null) {
        throw new Error("Missing the required parameter 'createaForkRequest' when calling createaFork");
      }

      var pathParams = {
        'collection_uid': collectionUid
      };
      var queryParams = {
        'workspace': workspace
      };
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/collections/fork/{collection_uid}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteCollection operation.
     * @callback module:api/CollectionsApi~deleteCollectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CollectionDeleted} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Collection
     * This endpoint allows you to delete an existing collection.  On successful deletion of the collection, the response returns the `id` and `uid`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} collectionUid 
     * @param {module:api/CollectionsApi~deleteCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CollectionDeleted}
     */

  }, {
    key: "deleteCollection",
    value: function deleteCollection(xApiKey, collectionUid, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling deleteCollection");
      } // verify the required parameter 'collectionUid' is set


      if (collectionUid === undefined || collectionUid === null) {
        throw new Error("Missing the required parameter 'collectionUid' when calling deleteCollection");
      }

      var pathParams = {
        'collection_uid': collectionUid
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8', 'application/json'];
      var returnType = _CollectionDeleted["default"];
      return this.apiClient.callApi('/collections/{collection_uid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the mergeaFork operation.
     * @callback module:api/CollectionsApi~mergeaForkCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge a Fork
     * This endpoint allows you to merge a forked collection back to its destination collection.  On successful creation of the collection, the response returns the collection `name`, `id` and `uid`.  You need to specify the fork UID (as `source`) and destination collection UID (as `destination`) in the request body.  Optionally, you can also specify the merge strategy as either `deleteSource` or `updateSourceWithDestination`. Following is an explanation of the merge strategies  | Merge Strategy | Behaviour | | --- | --- | | deleteSource | Forked collection is deleted after merging | | updateSourceWithDestination | Forked collection is up to date with changes in destination collection |  If the collections cannot be merged (due to conflicts), appropriate error messages will be returned.   > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {module:model/MergeaForkRequest} mergeaForkRequest 
     * @param {module:api/CollectionsApi~mergeaForkCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "mergeaFork",
    value: function mergeaFork(xApiKey, mergeaForkRequest, callback) {
      var postBody = mergeaForkRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling mergeaFork");
      } // verify the required parameter 'mergeaForkRequest' is set


      if (mergeaForkRequest === undefined || mergeaForkRequest === null) {
        throw new Error("Missing the required parameter 'mergeaForkRequest' when calling mergeaFork");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/collections/merge', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the singleCollection operation.
     * @callback module:api/CollectionsApi~singleCollectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Single Collection
     * Access the contents of a collection that is accessible to you using its unique id (`uid`).  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} collectionUid 
     * @param {module:api/CollectionsApi~singleCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidResponse1}
     */

  }, {
    key: "singleCollection",
    value: function singleCollection(xApiKey, collectionUid, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling singleCollection");
      } // verify the required parameter 'collectionUid' is set


      if (collectionUid === undefined || collectionUid === null) {
        throw new Error("Missing the required parameter 'collectionUid' when calling singleCollection");
      }

      var pathParams = {
        'collection_uid': collectionUid
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
      return this.apiClient.callApi('/collections/{collection_uid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateCollection operation.
     * @callback module:api/CollectionsApi~updateCollectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CollectionUpdated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Collection
     * This endpoint allows you to update an existing collection using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).  On successful updation of the collection, the response returns the collection `name`, `id` and `uid`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.  Note: Please be careful when trying to update the collection, as the existing collection will be replaced by the request body.
     * @param {String} xApiKey 
     * @param {String} collectionUid 
     * @param {module:model/UpdateCollectionRequest} updateCollectionRequest 
     * @param {module:api/CollectionsApi~updateCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CollectionUpdated}
     */

  }, {
    key: "updateCollection",
    value: function updateCollection(xApiKey, collectionUid, updateCollectionRequest, callback) {
      var postBody = updateCollectionRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling updateCollection");
      } // verify the required parameter 'collectionUid' is set


      if (collectionUid === undefined || collectionUid === null) {
        throw new Error("Missing the required parameter 'collectionUid' when calling updateCollection");
      } // verify the required parameter 'updateCollectionRequest' is set


      if (updateCollectionRequest === undefined || updateCollectionRequest === null) {
        throw new Error("Missing the required parameter 'updateCollectionRequest' when calling updateCollection");
      }

      var pathParams = {
        'collection_uid': collectionUid
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json; charset=utf-8', 'application/json'];
      var returnType = _CollectionUpdated["default"];
      return this.apiClient.callApi('/collections/{collection_uid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CollectionsApi;
}();

exports["default"] = CollectionsApi;