"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Properties = _interopRequireDefault(require("./Properties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Error21 model module.
 * @module model/Error21
 * @version 1.0.0
 */
var Error21 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Error21</code>.
   * @alias module:model/Error21
   * @param required {Array.<String>} 
   * @param properties {module:model/Properties} 
   */
  function Error21(required, properties) {
    _classCallCheck(this, Error21);

    Error21.initialize(this, required, properties);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Error21, null, [{
    key: "initialize",
    value: function initialize(obj, required, properties) {
      obj['required'] = required;
      obj['properties'] = properties;
    }
    /**
     * Constructs a <code>Error21</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Error21} obj Optional instance to populate.
     * @return {module:model/Error21} The populated <code>Error21</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Error21();

        if (data.hasOwnProperty('required')) {
          obj['required'] = _ApiClient["default"].convertToType(data['required'], ['String']);
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _Properties["default"].constructFromObject(data['properties']);
        }
      }

      return obj;
    }
  }]);

  return Error21;
}();
/**
 * @member {Array.<String>} required
 */


Error21.prototype['required'] = undefined;
/**
 * @member {module:model/Properties} properties
 */

Error21.prototype['properties'] = undefined;
var _default = Error21;
exports["default"] = _default;