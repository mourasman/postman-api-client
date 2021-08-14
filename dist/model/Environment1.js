"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Value = _interopRequireDefault(require("./Value"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Environment1 model module.
 * @module model/Environment1
 * @version 1.0.0
 */
var Environment1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Environment1</code>.
   * @alias module:model/Environment1
   * @param id {String} 
   * @param name {String} 
   * @param values {Array.<module:model/Value>} 
   */
  function Environment1(id, name, values) {
    _classCallCheck(this, Environment1);

    Environment1.initialize(this, id, name, values);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Environment1, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, values) {
      obj['id'] = id;
      obj['name'] = name;
      obj['values'] = values;
    }
    /**
     * Constructs a <code>Environment1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Environment1} obj Optional instance to populate.
     * @return {module:model/Environment1} The populated <code>Environment1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Environment1();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('values')) {
          obj['values'] = _ApiClient["default"].convertToType(data['values'], [_Value["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Environment1;
}();
/**
 * @member {String} id
 */


Environment1.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Environment1.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/Value>} values
 */

Environment1.prototype['values'] = undefined;
var _default = Environment1;
exports["default"] = _default;