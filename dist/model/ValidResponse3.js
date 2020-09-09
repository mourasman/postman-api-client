"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Environment = _interopRequireDefault(require("./Environment1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ValidResponse3 model module.
 * @module model/ValidResponse3
 * @version 1.0.0
 */
var ValidResponse3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidResponse3</code>.
   * @alias module:model/ValidResponse3
   * @param environment {module:model/Environment1} 
   */
  function ValidResponse3(environment) {
    _classCallCheck(this, ValidResponse3);

    ValidResponse3.initialize(this, environment);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidResponse3, null, [{
    key: "initialize",
    value: function initialize(obj, environment) {
      obj['environment'] = environment;
    }
    /**
     * Constructs a <code>ValidResponse3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidResponse3} obj Optional instance to populate.
     * @return {module:model/ValidResponse3} The populated <code>ValidResponse3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidResponse3();

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _Environment["default"].constructFromObject(data['environment']);
        }
      }

      return obj;
    }
  }]);

  return ValidResponse3;
}();
/**
 * @member {module:model/Environment1} environment
 */


ValidResponse3.prototype['environment'] = undefined;
var _default = ValidResponse3;
exports["default"] = _default;