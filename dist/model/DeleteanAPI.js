"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Api = _interopRequireDefault(require("./Api4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteanAPI model module.
 * @module model/DeleteanAPI
 * @version 1.0.0
 */
var DeleteanAPI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeleteanAPI</code>.
   * @alias module:model/DeleteanAPI
   * @param api {module:model/Api4} 
   */
  function DeleteanAPI(api) {
    _classCallCheck(this, DeleteanAPI);

    DeleteanAPI.initialize(this, api);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteanAPI, null, [{
    key: "initialize",
    value: function initialize(obj, api) {
      obj['api'] = api;
    }
    /**
     * Constructs a <code>DeleteanAPI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteanAPI} obj Optional instance to populate.
     * @return {module:model/DeleteanAPI} The populated <code>DeleteanAPI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteanAPI();

        if (data.hasOwnProperty('api')) {
          obj['api'] = _Api["default"].constructFromObject(data['api']);
        }
      }

      return obj;
    }
  }]);

  return DeleteanAPI;
}();
/**
 * @member {module:model/Api4} api
 */


DeleteanAPI.prototype['api'] = undefined;
var _default = DeleteanAPI;
exports["default"] = _default;