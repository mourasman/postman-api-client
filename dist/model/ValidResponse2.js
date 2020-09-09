"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Environment = _interopRequireDefault(require("./Environment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ValidResponse2 model module.
 * @module model/ValidResponse2
 * @version 1.0.0
 */
var ValidResponse2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidResponse2</code>.
   * @alias module:model/ValidResponse2
   * @param environments {Array.<module:model/Environment>} 
   */
  function ValidResponse2(environments) {
    _classCallCheck(this, ValidResponse2);

    ValidResponse2.initialize(this, environments);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidResponse2, null, [{
    key: "initialize",
    value: function initialize(obj, environments) {
      obj['environments'] = environments;
    }
    /**
     * Constructs a <code>ValidResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidResponse2} obj Optional instance to populate.
     * @return {module:model/ValidResponse2} The populated <code>ValidResponse2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidResponse2();

        if (data.hasOwnProperty('environments')) {
          obj['environments'] = _ApiClient["default"].convertToType(data['environments'], [_Environment["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ValidResponse2;
}();
/**
 * @member {Array.<module:model/Environment>} environments
 */


ValidResponse2.prototype['environments'] = undefined;
var _default = ValidResponse2;
exports["default"] = _default;