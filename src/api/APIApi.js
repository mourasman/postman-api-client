/**
 * Postman API
 * Postman API
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
import CreateAPI from '../model/CreateAPI';
import CreateAPIRequest from '../model/CreateAPIRequest';
import DeleteanAPI from '../model/DeleteanAPI';
import GetallAPIs from '../model/GetallAPIs';
import GetsingleAPI from '../model/GetsingleAPI';
import UpdateanAPI from '../model/UpdateanAPI';
import UpdateanAPIRequest from '../model/UpdateanAPIRequest';

/**
* API service.
* @module api/APIApi
* @version 1.0.0
*/
export default class APIApi {

    /**
    * Constructs a new APIApi. 
    * @alias module:api/APIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    createAPI(workspace, xApiKey, createAPIRequest, callback) {
      let postBody = createAPIRequest;
      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling createAPI");
      }
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createAPI");
      }
      // verify the required parameter 'createAPIRequest' is set
      if (createAPIRequest === undefined || createAPIRequest === null) {
        throw new Error("Missing the required parameter 'createAPIRequest' when calling createAPI");
      }

      let pathParams = {
      };
      let queryParams = {
        'workspace': workspace
      };
      let headerParams = {
        'x-api-key': xApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateAPI;
      return this.apiClient.callApi(
        '/apis', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    deleteanAPI(xApiKey, apiId, callback) {
      let postBody = null;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling deleteanAPI");
      }
      // verify the required parameter 'apiId' is set
      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling deleteanAPI");
      }

      let pathParams = {
        'apiId': apiId
      };
      let queryParams = {
      };
      let headerParams = {
        'x-api-key': xApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeleteanAPI;
      return this.apiClient.callApi(
        '/apis/{apiId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getallAPIs(workspace, xApiKey, contentType, callback) {
      let postBody = null;
      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling getallAPIs");
      }
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling getallAPIs");
      }
      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling getallAPIs");
      }

      let pathParams = {
      };
      let queryParams = {
        'workspace': workspace
      };
      let headerParams = {
        'x-api-key': xApiKey,
        'Content-Type': contentType
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetallAPIs;
      return this.apiClient.callApi(
        '/apis', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    singleAPI(xApiKey, apiId, callback) {
      let postBody = null;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling singleAPI");
      }
      // verify the required parameter 'apiId' is set
      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling singleAPI");
      }

      let pathParams = {
        'apiId': apiId
      };
      let queryParams = {
      };
      let headerParams = {
        'x-api-key': xApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetsingleAPI;
      return this.apiClient.callApi(
        '/apis/{apiId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    updateanAPI(xApiKey, apiId, updateanAPIRequest, callback) {
      let postBody = updateanAPIRequest;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling updateanAPI");
      }
      // verify the required parameter 'apiId' is set
      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling updateanAPI");
      }
      // verify the required parameter 'updateanAPIRequest' is set
      if (updateanAPIRequest === undefined || updateanAPIRequest === null) {
        throw new Error("Missing the required parameter 'updateanAPIRequest' when calling updateanAPI");
      }

      let pathParams = {
        'apiId': apiId
      };
      let queryParams = {
      };
      let headerParams = {
        'x-api-key': xApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UpdateanAPI;
      return this.apiClient.callApi(
        '/apis/{apiId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
