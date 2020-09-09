"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Body = _interopRequireDefault(require("./Body3"));

var _Headers = _interopRequireDefault(require("./Headers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Request5 model module.
 * @module model/Request5
 * @version 1.0.0
 */
var Request5 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Request5</code>.
   * @alias module:model/Request5
   * @param method {String} 
   * @param url {String} 
   * @param headers {module:model/Headers} 
   * @param body {module:model/Body3} 
   * @param timestamp {String} 
   */
  function Request5(method, url, headers, body, timestamp) {
    _classCallCheck(this, Request5);

    Request5.initialize(this, method, url, headers, body, timestamp);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Request5, null, [{
    key: "initialize",
    value: function initialize(obj, method, url, headers, body, timestamp) {
      obj['method'] = method;
      obj['url'] = url;
      obj['headers'] = headers;
      obj['body'] = body;
      obj['timestamp'] = timestamp;
    }
    /**
     * Constructs a <code>Request5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Request5} obj Optional instance to populate.
     * @return {module:model/Request5} The populated <code>Request5</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Request5();

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('headers')) {
          obj['headers'] = _Headers["default"].constructFromObject(data['headers']);
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _Body["default"].constructFromObject(data['body']);
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Request5;
}();
/**
 * @member {String} method
 */


Request5.prototype['method'] = undefined;
/**
 * @member {String} url
 */

Request5.prototype['url'] = undefined;
/**
 * @member {module:model/Headers} headers
 */

Request5.prototype['headers'] = undefined;
/**
 * @member {module:model/Body3} body
 */

Request5.prototype['body'] = undefined;
/**
 * @member {String} timestamp
 */

Request5.prototype['timestamp'] = undefined;
var _default = Request5;
exports["default"] = _default;