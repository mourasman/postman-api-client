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
 * The Headers model module.
 * @module model/Headers
 * @version 1.0.0
 */
var Headers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Headers</code>.
   * @alias module:model/Headers
   * @param accept {String} 
   * @param acceptEncoding {String} 
   */
  function Headers(accept, acceptEncoding) {
    _classCallCheck(this, Headers);

    Headers.initialize(this, accept, acceptEncoding);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Headers, null, [{
    key: "initialize",
    value: function initialize(obj, accept, acceptEncoding) {
      obj['accept'] = accept;
      obj['accept-encoding'] = acceptEncoding;
    }
    /**
     * Constructs a <code>Headers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Headers} obj Optional instance to populate.
     * @return {module:model/Headers} The populated <code>Headers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Headers();

        if (data.hasOwnProperty('content-type')) {
          obj['content-type'] = _ApiClient["default"].convertToType(data['content-type'], 'String');
        }

        if (data.hasOwnProperty('accept')) {
          obj['accept'] = _ApiClient["default"].convertToType(data['accept'], 'String');
        }

        if (data.hasOwnProperty('accept-encoding')) {
          obj['accept-encoding'] = _ApiClient["default"].convertToType(data['accept-encoding'], 'String');
        }

        if (data.hasOwnProperty('content-length')) {
          obj['content-length'] = _ApiClient["default"].convertToType(data['content-length'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Headers;
}();
/**
 * @member {String} content-type
 */


Headers.prototype['content-type'] = undefined;
/**
 * @member {String} accept
 */

Headers.prototype['accept'] = undefined;
/**
 * @member {String} accept-encoding
 */

Headers.prototype['accept-encoding'] = undefined;
/**
 * @member {Number} content-length
 */

Headers.prototype['content-length'] = undefined;
var _default = Headers;
exports["default"] = _default;