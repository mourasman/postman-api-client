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
 * The Variable2 model module.
 * @module model/Variable2
 * @version 1.0.0
 */
var Variable2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Variable2</code>.
   * @alias module:model/Variable2
   * @param id {String} 
   * @param key {String} 
   * @param value {String} 
   * @param type {String} 
   */
  function Variable2(id, key, value, type) {
    _classCallCheck(this, Variable2);

    Variable2.initialize(this, id, key, value, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Variable2, null, [{
    key: "initialize",
    value: function initialize(obj, id, key, value, type) {
      obj['id'] = id;
      obj['key'] = key;
      obj['value'] = value;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>Variable2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Variable2} obj Optional instance to populate.
     * @return {module:model/Variable2} The populated <code>Variable2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Variable2();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Variable2;
}();
/**
 * @member {String} id
 */


Variable2.prototype['id'] = undefined;
/**
 * @member {String} key
 */

Variable2.prototype['key'] = undefined;
/**
 * @member {String} value
 */

Variable2.prototype['value'] = undefined;
/**
 * @member {String} type
 */

Variable2.prototype['type'] = undefined;
var _default = Variable2;
exports["default"] = _default;