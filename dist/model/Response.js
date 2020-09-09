"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Body = _interopRequireDefault(require("./Body4"));

var _Headers = _interopRequireDefault(require("./Headers1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Response model module.
 * @module model/Response
 * @version 1.0.0
 */
var Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Response</code>.
   * @alias module:model/Response
   * @param code {Number} 
   * @param body {module:model/Body4} 
   * @param responseTime {Number} 
   * @param responseSize {Number} 
   * @param headers {module:model/Headers1} 
   */
  function Response(code, body, responseTime, responseSize, headers) {
    _classCallCheck(this, Response);

    Response.initialize(this, code, body, responseTime, responseSize, headers);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Response, null, [{
    key: "initialize",
    value: function initialize(obj, code, body, responseTime, responseSize, headers) {
      obj['code'] = code;
      obj['body'] = body;
      obj['responseTime'] = responseTime;
      obj['responseSize'] = responseSize;
      obj['headers'] = headers;
    }
    /**
     * Constructs a <code>Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Response} obj Optional instance to populate.
     * @return {module:model/Response} The populated <code>Response</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Response();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'Number');
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _Body["default"].constructFromObject(data['body']);
        }

        if (data.hasOwnProperty('responseTime')) {
          obj['responseTime'] = _ApiClient["default"].convertToType(data['responseTime'], 'Number');
        }

        if (data.hasOwnProperty('responseSize')) {
          obj['responseSize'] = _ApiClient["default"].convertToType(data['responseSize'], 'Number');
        }

        if (data.hasOwnProperty('headers')) {
          obj['headers'] = _Headers["default"].constructFromObject(data['headers']);
        }
      }

      return obj;
    }
  }]);

  return Response;
}();
/**
 * @member {Number} code
 */


Response.prototype['code'] = undefined;
/**
 * @member {module:model/Body4} body
 */

Response.prototype['body'] = undefined;
/**
 * @member {Number} responseTime
 */

Response.prototype['responseTime'] = undefined;
/**
 * @member {Number} responseSize
 */

Response.prototype['responseSize'] = undefined;
/**
 * @member {module:model/Headers1} headers
 */

Response.prototype['headers'] = undefined;
var _default = Response;
exports["default"] = _default;