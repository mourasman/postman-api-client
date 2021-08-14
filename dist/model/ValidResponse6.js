"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ValidResponse6 model module.
 * @module model/ValidResponse6
 * @version 1.0.0
 */
var ValidResponse6 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidResponse6</code>.
   * @alias module:model/ValidResponse6
   * @param user {module:model/User} 
   */
  function ValidResponse6(user) {
    _classCallCheck(this, ValidResponse6);

    ValidResponse6.initialize(this, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidResponse6, null, [{
    key: "initialize",
    value: function initialize(obj, user) {
      obj['user'] = user;
    }
    /**
     * Constructs a <code>ValidResponse6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidResponse6} obj Optional instance to populate.
     * @return {module:model/ValidResponse6} The populated <code>ValidResponse6</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidResponse6();

        if (data.hasOwnProperty('user')) {
          obj['user'] = _User["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return ValidResponse6;
}();
/**
 * @member {module:model/User} user
 */


ValidResponse6.prototype['user'] = undefined;
var _default = ValidResponse6;
exports["default"] = _default;