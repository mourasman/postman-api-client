"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Request2 model module.
 * @module model/Request2
 * @version 1.0.0
 */
var Request2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Request2</code>.
   * @alias module:model/Request2
   * @param url {String} 
   * @param method {String} 
   * @param description {String} 
   */
  function Request2(url, method, description) {
    _classCallCheck(this, Request2);

    Request2.initialize(this, url, method, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Request2, null, [{
    key: "initialize",
    value: function initialize(obj, url, method, description) {
      obj['url'] = url;
      obj['method'] = method;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>Request2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Request2} obj Optional instance to populate.
     * @return {module:model/Request2} The populated <code>Request2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Request2();

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Request2;
}();
/**
 * @member {String} url
 */


Request2.prototype['url'] = undefined;
/**
 * @member {String} method
 */

Request2.prototype['method'] = undefined;
/**
 * @member {String} description
 */

Request2.prototype['description'] = undefined;
var _default = Request2;
exports["default"] = _default;