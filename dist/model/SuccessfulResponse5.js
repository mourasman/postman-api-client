"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Monitor = _interopRequireDefault(require("./Monitor1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SuccessfulResponse5 model module.
 * @module model/SuccessfulResponse5
 * @version 1.0.0
 */
var SuccessfulResponse5 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SuccessfulResponse5</code>.
   * @alias module:model/SuccessfulResponse5
   * @param monitor {module:model/Monitor1} 
   */
  function SuccessfulResponse5(monitor) {
    _classCallCheck(this, SuccessfulResponse5);

    SuccessfulResponse5.initialize(this, monitor);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SuccessfulResponse5, null, [{
    key: "initialize",
    value: function initialize(obj, monitor) {
      obj['monitor'] = monitor;
    }
    /**
     * Constructs a <code>SuccessfulResponse5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessfulResponse5} obj Optional instance to populate.
     * @return {module:model/SuccessfulResponse5} The populated <code>SuccessfulResponse5</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SuccessfulResponse5();

        if (data.hasOwnProperty('monitor')) {
          obj['monitor'] = _Monitor["default"].constructFromObject(data['monitor']);
        }
      }

      return obj;
    }
  }]);

  return SuccessfulResponse5;
}();
/**
 * @member {module:model/Monitor1} monitor
 */


SuccessfulResponse5.prototype['monitor'] = undefined;
var _default = SuccessfulResponse5;
exports["default"] = _default;