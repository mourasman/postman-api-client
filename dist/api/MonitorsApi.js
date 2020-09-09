"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateMonitorRequest = _interopRequireDefault(require("../model/CreateMonitorRequest"));

var _CronPatternNotAllowed = _interopRequireDefault(require("../model/CronPatternNotAllowed"));

var _MonitorCreated = _interopRequireDefault(require("../model/MonitorCreated"));

var _MonitorDeleted = _interopRequireDefault(require("../model/MonitorDeleted"));

var _MonitorRunwithErrors = _interopRequireDefault(require("../model/MonitorRunwithErrors"));

var _MonitorUpdated = _interopRequireDefault(require("../model/MonitorUpdated"));

var _SpecifiedworkspaceEntitiesdonotexist = _interopRequireDefault(require("../model/SpecifiedworkspaceEntitiesdonotexist"));

var _SuccessfulResponse = _interopRequireDefault(require("../model/SuccessfulResponse4"));

var _SuccessfulResponse2 = _interopRequireDefault(require("../model/SuccessfulResponse5"));

var _UpdateMonitorRequest = _interopRequireDefault(require("../model/UpdateMonitorRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Monitors service.
* @module api/MonitorsApi
* @version 1.0.0
*/
var MonitorsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MonitorsApi. 
  * @alias module:api/MonitorsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MonitorsApi(apiClient) {
    _classCallCheck(this, MonitorsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the allMonitors operation.
   * @callback module:api/MonitorsApi~allMonitorsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/SuccessfulResponse4} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * All Monitors
   * The `/monitors` endpoint returns a list of all [monitors](https://monitor.getpostman.com/) that are accessible by you.  The response contains an array of monitors information containing the `name`, `id`, `owner` and `uid` of each monitor.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
   * @param {String} xApiKey 
   * @param {module:api/MonitorsApi~allMonitorsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/SuccessfulResponse4}
   */


  _createClass(MonitorsApi, [{
    key: "allMonitors",
    value: function allMonitors(xApiKey, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling allMonitors");
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
      return this.apiClient.callApi('/monitors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createMonitor operation.
     * @callback module:api/MonitorsApi~createMonitorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MonitorCreated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Monitor
     * This endpoint allows you to create a monitor.  Some sample `cron` values are:  | Frequency                  | Cron Pattern   | |-----------------------|----------------| | Every 5 minutes       | `*_/5 * * * *`  | | Every 30 minutes     | `*_/30 * * * *` | | Every Hour         | `0 *_/1 * * *`  | | Every 6 Hours      | `0 *_/6 * * *`  | | Every day at 5pm    | `0 17 * * *`   | | Every Monday at 12pm  | `0 12 * * MON` | | Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |  Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules.   For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)  You can also specify the context of a workspace to create a monitor in directly by passing the `workspace` as a query param.   > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {module:model/CreateMonitorRequest} createMonitorRequest 
     * @param {module:api/MonitorsApi~createMonitorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MonitorCreated}
     */

  }, {
    key: "createMonitor",
    value: function createMonitor(xApiKey, createMonitorRequest, callback) {
      var postBody = createMonitorRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling createMonitor");
      } // verify the required parameter 'createMonitorRequest' is set


      if (createMonitorRequest === undefined || createMonitorRequest === null) {
        throw new Error("Missing the required parameter 'createMonitorRequest' when calling createMonitor");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json; charset=utf-8', 'application/json'];
      var returnType = _MonitorCreated["default"];
      return this.apiClient.callApi('/monitors', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteMonitor operation.
     * @callback module:api/MonitorsApi~deleteMonitorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MonitorDeleted} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Monitor
     * This endpoint can be used to delete an existing monitor using its `uid`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} monitorUid 
     * @param {module:api/MonitorsApi~deleteMonitorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MonitorDeleted}
     */

  }, {
    key: "deleteMonitor",
    value: function deleteMonitor(xApiKey, monitorUid, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling deleteMonitor");
      } // verify the required parameter 'monitorUid' is set


      if (monitorUid === undefined || monitorUid === null) {
        throw new Error("Missing the required parameter 'monitorUid' when calling deleteMonitor");
      }

      var pathParams = {
        'monitor_uid': monitorUid
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8', 'application/json'];
      var returnType = _MonitorDeleted["default"];
      return this.apiClient.callApi('/monitors/{monitor_uid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the runaMonitor operation.
     * @callback module:api/MonitorsApi~runaMonitorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MonitorRunwithErrors} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run a Monitor
     * This endpoint will run the monitor instantly and wait for the monitor to run completely. It responds with the run results.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} monitorUid 
     * @param {module:api/MonitorsApi~runaMonitorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MonitorRunwithErrors}
     */

  }, {
    key: "runaMonitor",
    value: function runaMonitor(xApiKey, monitorUid, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling runaMonitor");
      } // verify the required parameter 'monitorUid' is set


      if (monitorUid === undefined || monitorUid === null) {
        throw new Error("Missing the required parameter 'monitorUid' when calling runaMonitor");
      }

      var pathParams = {
        'monitor_uid': monitorUid
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _MonitorRunwithErrors["default"];
      return this.apiClient.callApi('/monitors/{monitor_uid}/run', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the singleMonitor operation.
     * @callback module:api/MonitorsApi~singleMonitorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessfulResponse5} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Single Monitor
     * This endpoint fetches you basic information about the monitor using its `uid`.  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} monitorUid 
     * @param {module:api/MonitorsApi~singleMonitorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessfulResponse5}
     */

  }, {
    key: "singleMonitor",
    value: function singleMonitor(xApiKey, monitorUid, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling singleMonitor");
      } // verify the required parameter 'monitorUid' is set


      if (monitorUid === undefined || monitorUid === null) {
        throw new Error("Missing the required parameter 'monitorUid' when calling singleMonitor");
      }

      var pathParams = {
        'monitor_uid': monitorUid
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8', 'application/json'];
      var returnType = _SuccessfulResponse2["default"];
      return this.apiClient.callApi('/monitors/{monitor_uid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateMonitor operation.
     * @callback module:api/MonitorsApi~updateMonitorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MonitorUpdated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Monitor
     * This endpoint allows you to update a monitor using its `uid`. Only the monitor name and its schedule can be updated.  Some example `cron` values are:  | Frequency                  | Cron Pattern   | |-----------------------|----------------| | Every 5 minutes       | `*_/5 * * * *`  | | Every 30 minutes     | `*_/30 * * * *` | | Every Hour         | `0 *_/1 * * *`  | | Every 6 Hours      | `0 *_/6 * * *`  | | Every day at 5pm    | `0 17 * * *`   | | Every Monday at 12pm  | `0 12 * * MON` | | Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |  Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules.   For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)  > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     * @param {String} xApiKey 
     * @param {String} monitorUid 
     * @param {module:model/UpdateMonitorRequest} updateMonitorRequest 
     * @param {module:api/MonitorsApi~updateMonitorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MonitorUpdated}
     */

  }, {
    key: "updateMonitor",
    value: function updateMonitor(xApiKey, monitorUid, updateMonitorRequest, callback) {
      var postBody = updateMonitorRequest; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling updateMonitor");
      } // verify the required parameter 'monitorUid' is set


      if (monitorUid === undefined || monitorUid === null) {
        throw new Error("Missing the required parameter 'monitorUid' when calling updateMonitor");
      } // verify the required parameter 'updateMonitorRequest' is set


      if (updateMonitorRequest === undefined || updateMonitorRequest === null) {
        throw new Error("Missing the required parameter 'updateMonitorRequest' when calling updateMonitor");
      }

      var pathParams = {
        'monitor_uid': monitorUid
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _MonitorUpdated["default"];
      return this.apiClient.callApi('/monitors/{monitor_uid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return MonitorsApi;
}();

exports["default"] = MonitorsApi;