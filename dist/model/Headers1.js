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
 * The Headers1 model module.
 * @module model/Headers1
 * @version 1.0.0
 */
var Headers1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Headers1</code>.
   * @alias module:model/Headers1
   * @param _date {String} 
   * @param contentType {String} 
   * @param transferEncoding {String} 
   * @param connection {String} 
   * @param contentEncoding {String} 
   */
  function Headers1(_date, contentType, transferEncoding, connection, contentEncoding) {
    _classCallCheck(this, Headers1);

    Headers1.initialize(this, _date, contentType, transferEncoding, connection, contentEncoding);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Headers1, null, [{
    key: "initialize",
    value: function initialize(obj, _date, contentType, transferEncoding, connection, contentEncoding) {
      obj['date'] = _date;
      obj['content-type'] = contentType;
      obj['transfer-encoding'] = transferEncoding;
      obj['connection'] = connection;
      obj['content-encoding'] = contentEncoding;
    }
    /**
     * Constructs a <code>Headers1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Headers1} obj Optional instance to populate.
     * @return {module:model/Headers1} The populated <code>Headers1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Headers1();

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('content-type')) {
          obj['content-type'] = _ApiClient["default"].convertToType(data['content-type'], 'String');
        }

        if (data.hasOwnProperty('transfer-encoding')) {
          obj['transfer-encoding'] = _ApiClient["default"].convertToType(data['transfer-encoding'], 'String');
        }

        if (data.hasOwnProperty('connection')) {
          obj['connection'] = _ApiClient["default"].convertToType(data['connection'], 'String');
        }

        if (data.hasOwnProperty('content-encoding')) {
          obj['content-encoding'] = _ApiClient["default"].convertToType(data['content-encoding'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Headers1;
}();
/**
 * @member {String} date
 */


Headers1.prototype['date'] = undefined;
/**
 * @member {String} content-type
 */

Headers1.prototype['content-type'] = undefined;
/**
 * @member {String} transfer-encoding
 */

Headers1.prototype['transfer-encoding'] = undefined;
/**
 * @member {String} connection
 */

Headers1.prototype['connection'] = undefined;
/**
 * @member {String} content-encoding
 */

Headers1.prototype['content-encoding'] = undefined;
var _default = Headers1;
exports["default"] = _default;