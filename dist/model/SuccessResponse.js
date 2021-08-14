"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Mock = _interopRequireDefault(require("./Mock5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SuccessResponse model module.
 * @module model/SuccessResponse
 * @version 1.0.0
 */
var SuccessResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SuccessResponse</code>.
   * @alias module:model/SuccessResponse
   * @param mock {module:model/Mock5} 
   */
  function SuccessResponse(mock) {
    _classCallCheck(this, SuccessResponse);

    SuccessResponse.initialize(this, mock);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SuccessResponse, null, [{
    key: "initialize",
    value: function initialize(obj, mock) {
      obj['mock'] = mock;
    }
    /**
     * Constructs a <code>SuccessResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessResponse} obj Optional instance to populate.
     * @return {module:model/SuccessResponse} The populated <code>SuccessResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SuccessResponse();

        if (data.hasOwnProperty('mock')) {
          obj['mock'] = _Mock["default"].constructFromObject(data['mock']);
        }
      }

      return obj;
    }
  }]);

  return SuccessResponse;
}();
/**
 * @member {module:model/Mock5} mock
 */


SuccessResponse.prototype['mock'] = undefined;
var _default = SuccessResponse;
exports["default"] = _default;