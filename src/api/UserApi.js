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
import ValidResponse6 from '../model/ValidResponse6';

/**
* User service.
* @module api/UserApi
* @version 1.0.0
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the aPIKeyOwner operation.
     * @callback module:api/UserApi~aPIKeyOwnerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidResponse6} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * API Key Owner
     * The `/me` endpoint allows you to fetch relevant information pertaining to the API Key being used.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {module:api/UserApi~aPIKeyOwnerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidResponse6}
     */
    aPIKeyOwner(xApiKey, callback) {
      let postBody = null;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling aPIKeyOwner");
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
      let returnType = ValidResponse6;
      return this.apiClient.callApi(
        '/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}