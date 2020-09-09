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
 * The Details5 model module.
 * @module model/Details5
 * @version 1.0.0
 */
var Details5 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Details5</code>.
   * @alias module:model/Details5
   * @param param {String} 
   */
  function Details5(param) {
    _classCallCheck(this, Details5);

    Details5.initialize(this, param);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Details5, null, [{
    key: "initialize",
    value: function initialize(obj, param) {
      obj['param'] = param;
    }
    /**
     * Constructs a <code>Details5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Details5} obj Optional instance to populate.
     * @return {module:model/Details5} The populated <code>Details5</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Details5();

        if (data.hasOwnProperty('param')) {
          obj['param'] = _ApiClient["default"].convertToType(data['param'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Details5;
}();
/**
 * @member {String} param
 */


Details5.prototype['param'] = undefined;
var _default = Details5;
exports["default"] = _default;