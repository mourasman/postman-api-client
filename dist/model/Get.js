"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Parameter = _interopRequireDefault(require("./Parameter"));

var _Responses = _interopRequireDefault(require("./Responses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Get model module.
 * @module model/Get
 * @version 1.0.0
 */
var Get = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Get</code>.
   * @alias module:model/Get
   * @param summary {String} 
   * @param operationId {String} 
   * @param parameters {Array.<module:model/Parameter>} 
   * @param responses {module:model/Responses} 
   */
  function Get(summary, operationId, parameters, responses) {
    _classCallCheck(this, Get);

    Get.initialize(this, summary, operationId, parameters, responses);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Get, null, [{
    key: "initialize",
    value: function initialize(obj, summary, operationId, parameters, responses) {
      obj['summary'] = summary;
      obj['operationId'] = operationId;
      obj['parameters'] = parameters;
      obj['responses'] = responses;
    }
    /**
     * Constructs a <code>Get</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Get} obj Optional instance to populate.
     * @return {module:model/Get} The populated <code>Get</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Get();

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }

        if (data.hasOwnProperty('operationId')) {
          obj['operationId'] = _ApiClient["default"].convertToType(data['operationId'], 'String');
        }

        if (data.hasOwnProperty('parameters')) {
          obj['parameters'] = _ApiClient["default"].convertToType(data['parameters'], [_Parameter["default"]]);
        }

        if (data.hasOwnProperty('responses')) {
          obj['responses'] = _Responses["default"].constructFromObject(data['responses']);
        }
      }

      return obj;
    }
  }]);

  return Get;
}();
/**
 * @member {String} summary
 */


Get.prototype['summary'] = undefined;
/**
 * @member {String} operationId
 */

Get.prototype['operationId'] = undefined;
/**
 * @member {Array.<module:model/Parameter>} parameters
 */

Get.prototype['parameters'] = undefined;
/**
 * @member {module:model/Responses} responses
 */

Get.prototype['responses'] = undefined;
var _default = Get;
exports["default"] = _default;