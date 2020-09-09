"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Value = _interopRequireDefault(require("./Value1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Environment2 model module.
 * @module model/Environment2
 * @version 1.0.0
 */
var Environment2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Environment2</code>.
   * @alias module:model/Environment2
   * @param name {String} 
   * @param values {Array.<module:model/Value1>} 
   */
  function Environment2(name, values) {
    _classCallCheck(this, Environment2);

    Environment2.initialize(this, name, values);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Environment2, null, [{
    key: "initialize",
    value: function initialize(obj, name, values) {
      obj['name'] = name;
      obj['values'] = values;
    }
    /**
     * Constructs a <code>Environment2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Environment2} obj Optional instance to populate.
     * @return {module:model/Environment2} The populated <code>Environment2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Environment2();

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

  return Environment2;
}();
/**
 * @member {String} name
 */


Environment2.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/Value1>} values
 */

Environment2.prototype['values'] = undefined;
var _default = Environment2;
exports["default"] = _default;