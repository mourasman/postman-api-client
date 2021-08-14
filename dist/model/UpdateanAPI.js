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
 * The UpdateanAPI model module.
 * @module model/UpdateanAPI
 * @version 1.0.0
 */
var UpdateanAPI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateanAPI</code>.
   * @alias module:model/UpdateanAPI
   * @param api {module:model/Api1} 
   */
  function UpdateanAPI(api) {
    _classCallCheck(this, UpdateanAPI);

    UpdateanAPI.initialize(this, api);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateanAPI, null, [{
    key: "initialize",
    value: function initialize(obj, api) {
      obj['api'] = api;
    }
    /**
     * Constructs a <code>UpdateanAPI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateanAPI} obj Optional instance to populate.
     * @return {module:model/UpdateanAPI} The populated <code>UpdateanAPI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateanAPI();

        if (data.hasOwnProperty('api')) {
          obj['api'] = _Api["default"].constructFromObject(data['api']);
        }
      }

      return obj;
    }
  }]);

  return UpdateanAPI;
}();
/**
 * @member {module:model/Api1} api
 */


UpdateanAPI.prototype['api'] = undefined;
var _default = UpdateanAPI;
exports["default"] = _default;