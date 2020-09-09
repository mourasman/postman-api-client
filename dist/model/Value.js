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
 * The Value model module.
 * @module model/Value
 * @version 1.0.0
 */
var Value = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Value</code>.
   * @alias module:model/Value
   * @param key {String} 
   * @param value {String} 
   * @param type {String} 
   * @param enabled {Boolean} 
   * @param hovered {Boolean} 
   */
  function Value(key, value, type, enabled, hovered) {
    _classCallCheck(this, Value);

    Value.initialize(this, key, value, type, enabled, hovered);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Value, null, [{
    key: "initialize",
    value: function initialize(obj, key, value, type, enabled, hovered) {
      obj['key'] = key;
      obj['value'] = value;
      obj['type'] = type;
      obj['enabled'] = enabled;
      obj['hovered'] = hovered;
    }
    /**
     * Constructs a <code>Value</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Value} obj Optional instance to populate.
     * @return {module:model/Value} The populated <code>Value</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Value();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('hovered')) {
          obj['hovered'] = _ApiClient["default"].convertToType(data['hovered'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Value;
}();
/**
 * @member {String} key
 */


Value.prototype['key'] = undefined;
/**
 * @member {String} value
 */

Value.prototype['value'] = undefined;
/**
 * @member {String} type
 */

Value.prototype['type'] = undefined;
/**
 * @member {Boolean} enabled
 */

Value.prototype['enabled'] = undefined;
/**
 * @member {Boolean} hovered
 */

Value.prototype['hovered'] = undefined;
var _default = Value;
exports["default"] = _default;