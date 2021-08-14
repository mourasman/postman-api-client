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
import CreateWorkspaceRequest from '../model/CreateWorkspaceRequest';
import SpecifiedworkspaceEntitiesdonotexist from '../model/SpecifiedworkspaceEntitiesdonotexist';
import SuccessfulResponse6 from '../model/SuccessfulResponse6';
import SuccessfulResponse8 from '../model/SuccessfulResponse8';
import UpdateWorkspaceRequest from '../model/UpdateWorkspaceRequest';
import ValidResponse4 from '../model/ValidResponse4';
import ValidResponse5 from '../model/ValidResponse5';

/**
* Workspaces service.
* @module api/WorkspacesApi
* @version 1.0.0
*/
export default class WorkspacesApi {

    /**
    * Constructs a new WorkspacesApi. 
    * @alias module:api/WorkspacesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the allworkspaces operation.
     * @callback module:api/WorkspacesApi~allworkspacesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidResponse4} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * All workspaces
     * The `/workspaces` endpoint returns a list of all [workspaces](https://www.getpostman.com/docs/v6/postman/workspaces/intro_to_workspaces) that is accessible by you. The list includes your own workspaces and the workspaces that you have access to.  The response contains an array of collection information containing the `name`, `id`, and `type` of each workspace.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {module:api/WorkspacesApi~allworkspacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidResponse4}
     */
    allworkspaces(xApiKey, callback) {
      let postBody = null;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling allworkspaces");
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
      let accepts = ['application/json'];
      let returnType = ValidResponse4;
      return this.apiClient.callApi(
        '/workspaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createWorkspace operation.
     * @callback module:api/WorkspacesApi~createWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessfulResponse6} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Workspace
     * This endpoint allows you to create a workspace and populate it with entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.  On successful creation of the workspace, the response returns the workspcae `name` and `id`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {module:model/CreateWorkspaceRequest} createWorkspaceRequest 
     * @param {module:api/WorkspacesApi~createWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessfulResponse6}
     */
    createWorkspace(xApiKey, createWorkspaceRequest, callback) {
      let postBody = createWorkspaceRequest;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createWorkspace");
      }
      // verify the required parameter 'createWorkspaceRequest' is set
      if (createWorkspaceRequest === undefined || createWorkspaceRequest === null) {
        throw new Error("Missing the required parameter 'createWorkspaceRequest' when calling createWorkspace");
      }

      let pathParams = {
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
      let returnType = SuccessfulResponse6;
      return this.apiClient.callApi(
        '/workspaces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWorkspace operation.
     * @callback module:api/WorkspacesApi~deleteWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessfulResponse8} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Workspace
     * This endpoint allows you to delete an existing workspace.  On successful deletion of the workspace, the response returns the `id`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} workspaceId 
     * @param {module:api/WorkspacesApi~deleteWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessfulResponse8}
     */
    deleteWorkspace(workspaceId, callback) {
      let postBody = null;
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling deleteWorkspace");
      }

      let pathParams = {
        'workspace_id': workspaceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SuccessfulResponse8;
      return this.apiClient.callApi(
        '/workspaces/{workspace_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the singleworkspace operation.
     * @callback module:api/WorkspacesApi~singleworkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidResponse5} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Single workspace
     * Access the contents of a workspace that is accessible to you using its id (`id`). Includes the collections, environments, mocks and monitors of that workspace.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} workspaceId 
     * @param {module:api/WorkspacesApi~singleworkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidResponse5}
     */
    singleworkspace(xApiKey, workspaceId, callback) {
      let postBody = null;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling singleworkspace");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling singleworkspace");
      }

      let pathParams = {
        'workspace_id': workspaceId
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
      let accepts = ['application/json'];
      let returnType = ValidResponse5;
      return this.apiClient.callApi(
        '/workspaces/{workspace_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWorkspace operation.
     * @callback module:api/WorkspacesApi~updateWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessfulResponse6} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Workspace
     * This endpoint allows you to update a workspace and update it's association to entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.  On successful updation of the workspace, the response returns the workspcae `name` and `id`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.  **Note** : The endpoint expects you to send the desired state of the workspace in terms of the associated entities so be careful when trying to update these entities.  For eg. if your workspace has collections A and B, and in the update call, you send C's uid in the collections array, then A and B would be removed from the workspace and C would be added.
     * @param {String} xApiKey 
     * @param {String} workspaceId 
     * @param {module:model/UpdateWorkspaceRequest} updateWorkspaceRequest 
     * @param {module:api/WorkspacesApi~updateWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessfulResponse6}
     */
    updateWorkspace(xApiKey, workspaceId, updateWorkspaceRequest, callback) {
      let postBody = updateWorkspaceRequest;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling updateWorkspace");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling updateWorkspace");
      }
      // verify the required parameter 'updateWorkspaceRequest' is set
      if (updateWorkspaceRequest === undefined || updateWorkspaceRequest === null) {
        throw new Error("Missing the required parameter 'updateWorkspaceRequest' when calling updateWorkspace");
      }

      let pathParams = {
        'workspace_id': workspaceId
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
      let returnType = SuccessfulResponse6;
      return this.apiClient.callApi(
        '/workspaces/{workspace_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}