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
 * The Header model module.
 * @module model/Header
 * @version 1.0.0
 */
var Header = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Header</code>.
   * @alias module:model/Header
   * @param key {String} 
   * @param value {String} 
   * @param description {String} 
   */
  function Header(key, value, description) {
    _classCallCheck(this, Header);

    Header.initialize(this, key, value, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Header, null, [{
    key: "initialize",
    value: function initialize(obj, key, value, description) {
      obj['key'] = key;
      obj['value'] = value;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>Header</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Header} obj Optional instance to populate.
     * @return {module:model/Header} The populated <code>Header</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Header();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Header;
}();
/**
 * @member {String} key
 */


Header.prototype['key'] = undefined;
/**
 * @member {String} value
 */

Header.prototype['value'] = undefined;
/**
 * @member {String} description
 */

Header.prototype['description'] = undefined;
var _default = Header;
exports["default"] = _default;