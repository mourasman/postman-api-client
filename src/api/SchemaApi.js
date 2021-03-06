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
import Createcollectionfromschema from '../model/Createcollectionfromschema';
import CreatecollectionfromschemaRequest from '../model/CreatecollectionfromschemaRequest';
import Createschema from '../model/Createschema';
import Getschema from '../model/Getschema';
import Updateschema from '../model/Updateschema';

/**
* Schema service.
* @module api/SchemaApi
* @version 1.0.0
*/
export default class SchemaApi {

    /**
    * Constructs a new SchemaApi. 
    * @alias module:api/SchemaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    createSchema(xApiKey, apiId, apiVersionId, body, callback) {
      let postBody = body;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createSchema");
      }
      // verify the required parameter 'apiId' is set
      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling createSchema");
      }
      // verify the required parameter 'apiVersionId' is set
      if (apiVersionId === undefined || apiVersionId === null) {
        throw new Error("Missing the required parameter 'apiVersionId' when calling createSchema");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSchema");
      }

      let pathParams = {
        'apiId': apiId,
        'apiVersionId': apiVersionId
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
      let returnType = Createschema;
      return this.apiClient.callApi(
        '/apis/{apiId}/versions/{apiVersionId}/schemas', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    createcollectionfromschema(workspace, xApiKey, apiId, apiVersionId, schemaId, createcollectionfromschemaRequest, callback) {
      let postBody = createcollectionfromschemaRequest;
      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling createcollectionfromschema");
      }
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createcollectionfromschema");
      }
      // verify the required parameter 'apiId' is set
      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling createcollectionfromschema");
      }
      // verify the required parameter 'apiVersionId' is set
      if (apiVersionId === undefined || apiVersionId === null) {
        throw new Error("Missing the required parameter 'apiVersionId' when calling createcollectionfromschema");
      }
      // verify the required parameter 'schemaId' is set
      if (schemaId === undefined || schemaId === null) {
        throw new Error("Missing the required parameter 'schemaId' when calling createcollectionfromschema");
      }
      // verify the required parameter 'createcollectionfromschemaRequest' is set
      if (createcollectionfromschemaRequest === undefined || createcollectionfromschemaRequest === null) {
        throw new Error("Missing the required parameter 'createcollectionfromschemaRequest' when calling createcollectionfromschema");
      }

      let pathParams = {
        'apiId': apiId,
        'apiVersionId': apiVersionId,
        'schemaId': schemaId
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
      let accepts = ['application/json; charset=utf-8'];
      let returnType = Createcollectionfromschema;
      return this.apiClient.callApi(
        '/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}/collections', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getSchema(xApiKey, apiId, apiVersionId, schemaId, callback) {
      let postBody = null;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling getSchema");
      }
      // verify the required parameter 'apiId' is set
      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling getSchema");
      }
      // verify the required parameter 'apiVersionId' is set
      if (apiVersionId === undefined || apiVersionId === null) {
        throw new Error("Missing the required parameter 'apiVersionId' when calling getSchema");
      }
      // verify the required parameter 'schemaId' is set
      if (schemaId === undefined || schemaId === null) {
        throw new Error("Missing the required parameter 'schemaId' when calling getSchema");
      }

      let pathParams = {
        'apiId': apiId,
        'apiVersionId': apiVersionId,
        'schemaId': schemaId
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
      let returnType = Getschema;
      return this.apiClient.callApi(
        '/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    updateSchema(xApiKey, apiId, apiVersionId, schemaId, body, callback) {
      let postBody = body;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling updateSchema");
      }
      // verify the required parameter 'apiId' is set
      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling updateSchema");
      }
      // verify the required parameter 'apiVersionId' is set
      if (apiVersionId === undefined || apiVersionId === null) {
        throw new Error("Missing the required parameter 'apiVersionId' when calling updateSchema");
      }
      // verify the required parameter 'schemaId' is set
      if (schemaId === undefined || schemaId === null) {
        throw new Error("Missing the required parameter 'schemaId' when calling updateSchema");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateSchema");
      }

      let pathParams = {
        'apiId': apiId,
        'apiVersionId': apiVersionId,
        'schemaId': schemaId
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
      let returnType = Updateschema;
      return this.apiClient.callApi(
        '/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
