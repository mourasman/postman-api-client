"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Code = _interopRequireDefault(require("./Code"));

var _Message = _interopRequireDefault(require("./Message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Properties model module.
 * @module model/Properties
 * @version 1.0.0
 */
var Properties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Properties</code>.
   * @alias module:model/Properties
   * @param code {module:model/Code} 
   * @param message {module:model/Message} 
   */
  function Properties(code, message) {
    _classCallCheck(this, Properties);

    Properties.initialize(this, code, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Properties, null, [{
    key: "initialize",
    value: function initialize(obj, code, message) {
      obj['code'] = code;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>Properties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Properties} obj Optional instance to populate.
     * @return {module:model/Properties} The populated <code>Properties</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Properties();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _Code["default"].constructFromObject(data['code']);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _Message["default"].constructFromObject(data['message']);
        }
      }

      return obj;
    }
  }]);

  return Properties;
}();
/**
 * @member {module:model/Code} code
 */


Properties.prototype['code'] = undefined;
/**
 * @member {module:model/Message} message
 */

Properties.prototype['message'] = undefined;
var _default = Properties;
exports["default"] = _default;