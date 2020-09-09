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
 * The Assertions2 model module.
 * @module model/Assertions2
 * @version 1.0.0
 */
var Assertions2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Assertions2</code>.
   * @alias module:model/Assertions2
   * @param statusCodeIs400 {Boolean} 
   */
  function Assertions2(statusCodeIs400) {
    _classCallCheck(this, Assertions2);

    Assertions2.initialize(this, statusCodeIs400);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Assertions2, null, [{
    key: "initialize",
    value: function initialize(obj, statusCodeIs400) {
      obj['Status code is 400'] = statusCodeIs400;
    }
    /**
     * Constructs a <code>Assertions2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Assertions2} obj Optional instance to populate.
     * @return {module:model/Assertions2} The populated <code>Assertions2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Assertions2();

        if (data.hasOwnProperty('Status code is 400')) {
          obj['Status code is 400'] = _ApiClient["default"].convertToType(data['Status code is 400'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Assertions2;
}();
/**
 * @member {Boolean} Status code is 400
 */


Assertions2.prototype['Status code is 400'] = undefined;
var _default = Assertions2;
exports["default"] = _default;