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
import CreateEnvironmentRequest from '../model/CreateEnvironmentRequest';
import CreateEnvironmentinaWorkspace from '../model/CreateEnvironmentinaWorkspace';
import EnvironmentDeleted from '../model/EnvironmentDeleted';
import SpecifiedworkspaceEntitiesdonotexist from '../model/SpecifiedworkspaceEntitiesdonotexist';
import SuccessfulResponse from '../model/SuccessfulResponse';
import UpdateEnvironmentRequest from '../model/UpdateEnvironmentRequest';
import ValidResponse2 from '../model/ValidResponse2';
import ValidResponse3 from '../model/ValidResponse3';

/**
* Environments service.
* @module api/EnvironmentsApi
* @version 1.0.0
*/
export default class EnvironmentsApi {

    /**
    * Constructs a new EnvironmentsApi. 
    * @alias module:api/EnvironmentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    allEnvironments(xApiKey, callback) {
      let postBody = null;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling allEnvironments");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Api-Key': xApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = ValidResponse2;
      return this.apiClient.callApi(
        '/environments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    createEnvironment(xApiKey, createEnvironmentRequest, opts, callback) {
      opts = opts || {};
      let postBody = createEnvironmentRequest;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createEnvironment");
      }
      // verify the required parameter 'createEnvironmentRequest' is set
      if (createEnvironmentRequest === undefined || createEnvironmentRequest === null) {
        throw new Error("Missing the required parameter 'createEnvironmentRequest' when calling createEnvironment");
      }

      let pathParams = {
      };
      let queryParams = {
        'workspace': opts['workspace']
      };
      let headerParams = {
        'X-Api-Key': xApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateEnvironmentinaWorkspace;
      return this.apiClient.callApi(
        '/environments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    deleteEnvironment(xApiKey, environmentUid, callback) {
      let postBody = null;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling deleteEnvironment");
      }
      // verify the required parameter 'environmentUid' is set
      if (environmentUid === undefined || environmentUid === null) {
        throw new Error("Missing the required parameter 'environmentUid' when calling deleteEnvironment");
      }

      let pathParams = {
        'environment_uid': environmentUid
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Api-Key': xApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8', 'application/json'];
      let returnType = EnvironmentDeleted;
      return this.apiClient.callApi(
        '/environments/{environment_uid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    singleEnvironment(xApiKey, environmentUid, callback) {
      let postBody = null;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling singleEnvironment");
      }
      // verify the required parameter 'environmentUid' is set
      if (environmentUid === undefined || environmentUid === null) {
        throw new Error("Missing the required parameter 'environmentUid' when calling singleEnvironment");
      }

      let pathParams = {
        'environment_uid': environmentUid
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Api-Key': xApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = ValidResponse3;
      return this.apiClient.callApi(
        '/environments/{environment_uid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    updateEnvironment(xApiKey, environmentUid, updateEnvironmentRequest, callback) {
      let postBody = updateEnvironmentRequest;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling updateEnvironment");
      }
      // verify the required parameter 'environmentUid' is set
      if (environmentUid === undefined || environmentUid === null) {
        throw new Error("Missing the required parameter 'environmentUid' when calling updateEnvironment");
      }
      // verify the required parameter 'updateEnvironmentRequest' is set
      if (updateEnvironmentRequest === undefined || updateEnvironmentRequest === null) {
        throw new Error("Missing the required parameter 'updateEnvironmentRequest' when calling updateEnvironment");
      }

      let pathParams = {
        'environment_uid': environmentUid
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Api-Key': xApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json; charset=utf-8', 'application/json'];
      let returnType = SuccessfulResponse;
      return this.apiClient.callApi(
        '/environments/{environment_uid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
