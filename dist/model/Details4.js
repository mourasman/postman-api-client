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
 * The Details4 model module.
 * @module model/Details4
 * @version 1.0.0
 */
var Details4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Details4</code>.
   * @alias module:model/Details4
   * @param param {String} 
   * @param uid {String} 
   */
  function Details4(param, uid) {
    _classCallCheck(this, Details4);

    Details4.initialize(this, param, uid);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Details4, null, [{
    key: "initialize",
    value: function initialize(obj, param, uid) {
      obj['param'] = param;
      obj['uid'] = uid;
    }
    /**
     * Constructs a <code>Details4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Details4} obj Optional instance to populate.
     * @return {module:model/Details4} The populated <code>Details4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Details4();

        if (data.hasOwnProperty('param')) {
          obj['param'] = _ApiClient["default"].convertToType(data['param'], 'String');
        }

        if (data.hasOwnProperty('uid')) {
          obj['uid'] = _ApiClient["default"].convertToType(data['uid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Details4;
}();
/**
 * @member {String} param
 */


Details4.prototype['param'] = undefined;
/**
 * @member {String} uid
 */

Details4.prototype['uid'] = undefined;
var _default = Details4;
exports["default"] = _default;