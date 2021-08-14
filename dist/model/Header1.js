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
 * The Header1 model module.
 * @module model/Header1
 * @version 1.0.0
 */
var Header1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Header1</code>.
   * @alias module:model/Header1
   * @param key {String} 
   * @param value {String} 
   */
  function Header1(key, value) {
    _classCallCheck(this, Header1);

    Header1.initialize(this, key, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Header1, null, [{
    key: "initialize",
    value: function initialize(obj, key, value) {
      obj['key'] = key;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>Header1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Header1} obj Optional instance to populate.
     * @return {module:model/Header1} The populated <code>Header1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Header1();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Header1;
}();
/**
 * @member {String} key
 */


Header1.prototype['key'] = undefined;
/**
 * @member {String} value
 */

Header1.prototype['value'] = undefined;
var _default = Header1;
exports["default"] = _default;