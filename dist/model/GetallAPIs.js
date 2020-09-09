"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Api = _interopRequireDefault(require("./Api1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetallAPIs model module.
 * @module model/GetallAPIs
 * @version 1.0.0
 */
var GetallAPIs = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetallAPIs</code>.
   * @alias module:model/GetallAPIs
   * @param apis {Array.<module:model/Api1>} 
   */
  function GetallAPIs(apis) {
    _classCallCheck(this, GetallAPIs);

    GetallAPIs.initialize(this, apis);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetallAPIs, null, [{
    key: "initialize",
    value: function initialize(obj, apis) {
      obj['apis'] = apis;
    }
    /**
     * Constructs a <code>GetallAPIs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetallAPIs} obj Optional instance to populate.
     * @return {module:model/GetallAPIs} The populated <code>GetallAPIs</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetallAPIs();

        if (data.hasOwnProperty('apis')) {
          obj['apis'] = _ApiClient["default"].convertToType(data['apis'], [_Api["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GetallAPIs;
}();
/**
 * @member {Array.<module:model/Api1>} apis
 */


GetallAPIs.prototype['apis'] = undefined;
var _default = GetallAPIs;
exports["default"] = _default;