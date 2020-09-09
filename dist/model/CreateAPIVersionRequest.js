"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Version = _interopRequireDefault(require("./Version"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateAPIVersionRequest model module.
 * @module model/CreateAPIVersionRequest
 * @version 1.0.0
 */
var CreateAPIVersionRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAPIVersionRequest</code>.
   * @alias module:model/CreateAPIVersionRequest
   * @param version {module:model/Version} 
   */
  function CreateAPIVersionRequest(version) {
    _classCallCheck(this, CreateAPIVersionRequest);

    CreateAPIVersionRequest.initialize(this, version);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAPIVersionRequest, null, [{
    key: "initialize",
    value: function initialize(obj, version) {
      obj['version'] = version;
    }
    /**
     * Constructs a <code>CreateAPIVersionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAPIVersionRequest} obj Optional instance to populate.
     * @return {module:model/CreateAPIVersionRequest} The populated <code>CreateAPIVersionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAPIVersionRequest();

        if (data.hasOwnProperty('version')) {
          obj['version'] = _Version["default"].constructFromObject(data['version']);
        }
      }

      return obj;
    }
  }]);

  return CreateAPIVersionRequest;
}();
/**
 * @member {module:model/Version} version
 */


CreateAPIVersionRequest.prototype['version'] = undefined;
var _default = CreateAPIVersionRequest;
exports["default"] = _default;