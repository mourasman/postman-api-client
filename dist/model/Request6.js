"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Auth = _interopRequireDefault(require("./Auth"));

var _Url = _interopRequireDefault(require("./Url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Request6 model module.
 * @module model/Request6
 * @version 1.0.0
 */
var Request6 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Request6</code>.
   * @alias module:model/Request6
   * @param auth {module:model/Auth} 
   * @param method {String} 
   * @param header {Array.<String>} 
   * @param url {module:model/Url} 
   */
  function Request6(auth, method, header, url) {
    _classCallCheck(this, Request6);

    Request6.initialize(this, auth, method, header, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Request6, null, [{
    key: "initialize",
    value: function initialize(obj, auth, method, header, url) {
      obj['auth'] = auth;
      obj['method'] = method;
      obj['header'] = header;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>Request6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Request6} obj Optional instance to populate.
     * @return {module:model/Request6} The populated <code>Request6</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Request6();

        if (data.hasOwnProperty('auth')) {
          obj['auth'] = _Auth["default"].constructFromObject(data['auth']);
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('header')) {
          obj['header'] = _ApiClient["default"].convertToType(data['header'], ['String']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _Url["default"].constructFromObject(data['url']);
        }
      }

      return obj;
    }
  }]);

  return Request6;
}();
/**
 * @member {module:model/Auth} auth
 */


Request6.prototype['auth'] = undefined;
/**
 * @member {String} method
 */

Request6.prototype['method'] = undefined;
/**
 * @member {Array.<String>} header
 */

Request6.prototype['header'] = undefined;
/**
 * @member {module:model/Url} url
 */

Request6.prototype['url'] = undefined;
var _default = Request6;
exports["default"] = _default;