"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Mock = _interopRequireDefault(require("./Mock7"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SuccessResponse1 model module.
 * @module model/SuccessResponse1
 * @version 1.0.0
 */
var SuccessResponse1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SuccessResponse1</code>.
   * @alias module:model/SuccessResponse1
   * @param mock {module:model/Mock7} 
   */
  function SuccessResponse1(mock) {
    _classCallCheck(this, SuccessResponse1);

    SuccessResponse1.initialize(this, mock);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SuccessResponse1, null, [{
    key: "initialize",
    value: function initialize(obj, mock) {
      obj['mock'] = mock;
    }
    /**
     * Constructs a <code>SuccessResponse1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessResponse1} obj Optional instance to populate.
     * @return {module:model/SuccessResponse1} The populated <code>SuccessResponse1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SuccessResponse1();

        if (data.hasOwnProperty('mock')) {
          obj['mock'] = _Mock["default"].constructFromObject(data['mock']);
        }
      }

      return obj;
    }
  }]);

  return SuccessResponse1;
}();
/**
 * @member {module:model/Mock7} mock
 */


SuccessResponse1.prototype['mock'] = undefined;
var _default = SuccessResponse1;
exports["default"] = _default;