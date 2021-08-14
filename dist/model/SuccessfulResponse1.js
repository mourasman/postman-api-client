"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Mock = _interopRequireDefault(require("./Mock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SuccessfulResponse1 model module.
 * @module model/SuccessfulResponse1
 * @version 1.0.0
 */
var SuccessfulResponse1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SuccessfulResponse1</code>.
   * @alias module:model/SuccessfulResponse1
   * @param mocks {Array.<module:model/Mock>} 
   */
  function SuccessfulResponse1(mocks) {
    _classCallCheck(this, SuccessfulResponse1);

    SuccessfulResponse1.initialize(this, mocks);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SuccessfulResponse1, null, [{
    key: "initialize",
    value: function initialize(obj, mocks) {
      obj['mocks'] = mocks;
    }
    /**
     * Constructs a <code>SuccessfulResponse1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessfulResponse1} obj Optional instance to populate.
     * @return {module:model/SuccessfulResponse1} The populated <code>SuccessfulResponse1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SuccessfulResponse1();

        if (data.hasOwnProperty('mocks')) {
          obj['mocks'] = _ApiClient["default"].convertToType(data['mocks'], [_Mock["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SuccessfulResponse1;
}();
/**
 * @member {Array.<module:model/Mock>} mocks
 */


SuccessfulResponse1.prototype['mocks'] = undefined;
var _default = SuccessfulResponse1;
exports["default"] = _default;