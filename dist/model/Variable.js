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
 * The Variable model module.
 * @module model/Variable
 * @version 1.0.0
 */
var Variable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Variable</code>.
   * @alias module:model/Variable
   * @param id {String} 
   * @param key {String} 
   * @param value {String} 
   * @param type {String} 
   * @param description {String} 
   */
  function Variable(id, key, value, type, description) {
    _classCallCheck(this, Variable);

    Variable.initialize(this, id, key, value, type, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Variable, null, [{
    key: "initialize",
    value: function initialize(obj, id, key, value, type, description) {
      obj['id'] = id;
      obj['key'] = key;
      obj['value'] = value;
      obj['type'] = type;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>Variable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Variable} obj Optional instance to populate.
     * @return {module:model/Variable} The populated <code>Variable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Variable();

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

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Variable;
}();
/**
 * @member {String} id
 */


Variable.prototype['id'] = undefined;
/**
 * @member {String} key
 */

Variable.prototype['key'] = undefined;
/**
 * @member {String} value
 */

Variable.prototype['value'] = undefined;
/**
 * @member {String} type
 */

Variable.prototype['type'] = undefined;
/**
 * @member {String} description
 */

Variable.prototype['description'] = undefined;
var _default = Variable;
exports["default"] = _default;