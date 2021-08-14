"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Environment = _interopRequireDefault(require("./Environment3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SuccessfulResponse model module.
 * @module model/SuccessfulResponse
 * @version 1.0.0
 */
var SuccessfulResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SuccessfulResponse</code>.
   * @alias module:model/SuccessfulResponse
   * @param environment {module:model/Environment3} 
   */
  function SuccessfulResponse(environment) {
    _classCallCheck(this, SuccessfulResponse);

    SuccessfulResponse.initialize(this, environment);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SuccessfulResponse, null, [{
    key: "initialize",
    value: function initialize(obj, environment) {
      obj['environment'] = environment;
    }
    /**
     * Constructs a <code>SuccessfulResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessfulResponse} obj Optional instance to populate.
     * @return {module:model/SuccessfulResponse} The populated <code>SuccessfulResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SuccessfulResponse();

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _Environment["default"].constructFromObject(data['environment']);
        }
      }

      return obj;
    }
  }]);

  return SuccessfulResponse;
}();
/**
 * @member {module:model/Environment3} environment
 */


SuccessfulResponse.prototype['environment'] = undefined;
var _default = SuccessfulResponse;
exports["default"] = _default;