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
 * The Code model module.
 * @module model/Code
 * @version 1.0.0
 */
var Code = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Code</code>.
   * @alias module:model/Code
   * @param type {String} 
   * @param format {String} 
   */
  function Code(type, format) {
    _classCallCheck(this, Code);

    Code.initialize(this, type, format);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Code, null, [{
    key: "initialize",
    value: function initialize(obj, type, format) {
      obj['type'] = type;
      obj['format'] = format;
    }
    /**
     * Constructs a <code>Code</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Code} obj Optional instance to populate.
     * @return {module:model/Code} The populated <code>Code</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Code();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Code;
}();
/**
 * @member {String} type
 */


Code.prototype['type'] = undefined;
/**
 * @member {String} format
 */

Code.prototype['format'] = undefined;
var _default = Code;
exports["default"] = _default;