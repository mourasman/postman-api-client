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
 * The Variable1 model module.
 * @module model/Variable1
 * @version 1.0.0
 */
var Variable1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Variable1</code>.
   * @alias module:model/Variable1
   * @param key {String} 
   */
  function Variable1(key) {
    _classCallCheck(this, Variable1);

    Variable1.initialize(this, key);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Variable1, null, [{
    key: "initialize",
    value: function initialize(obj, key) {
      obj['key'] = key;
    }
    /**
     * Constructs a <code>Variable1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Variable1} obj Optional instance to populate.
     * @return {module:model/Variable1} The populated <code>Variable1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Variable1();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Variable1;
}();
/**
 * @member {String} key
 */


Variable1.prototype['key'] = undefined;
var _default = Variable1;
exports["default"] = _default;