"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Body = _interopRequireDefault(require("./Body"));

var _Header = _interopRequireDefault(require("./Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Request model module.
 * @module model/Request
 * @version 1.0.0
 */
var Request = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Request</code>.
   * @alias module:model/Request
   * @param url {String} 
   * @param method {String} 
   * @param header {Array.<module:model/Header>} 
   * @param body {module:model/Body} 
   * @param description {String} 
   */
  function Request(url, method, header, body, description) {
    _classCallCheck(this, Request);

    Request.initialize(this, url, method, header, body, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Request, null, [{
    key: "initialize",
    value: function initialize(obj, url, method, header, body, description) {
      obj['url'] = url;
      obj['method'] = method;
      obj['header'] = header;
      obj['body'] = body;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Request} obj Optional instance to populate.
     * @return {module:model/Request} The populated <code>Request</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Request();

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('header')) {
          obj['header'] = _ApiClient["default"].convertToType(data['header'], [_Header["default"]]);
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _Body["default"].constructFromObject(data['body']);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Request;
}();
/**
 * @member {String} url
 */


Request.prototype['url'] = undefined;
/**
 * @member {String} method
 */

Request.prototype['method'] = undefined;
/**
 * @member {Array.<module:model/Header>} header
 */

Request.prototype['header'] = undefined;
/**
 * @member {module:model/Body} body
 */

Request.prototype['body'] = undefined;
/**
 * @member {String} description
 */

Request.prototype['description'] = undefined;
var _default = Request;
exports["default"] = _default;