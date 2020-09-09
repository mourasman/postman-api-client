"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Version = _interopRequireDefault(require("./Version6"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetAllAPIversions model module.
 * @module model/GetAllAPIversions
 * @version 1.0.0
 */
var GetAllAPIversions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAllAPIversions</code>.
   * @alias module:model/GetAllAPIversions
   * @param versions {Array.<module:model/Version6>} 
   */
  function GetAllAPIversions(versions) {
    _classCallCheck(this, GetAllAPIversions);

    GetAllAPIversions.initialize(this, versions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetAllAPIversions, null, [{
    key: "initialize",
    value: function initialize(obj, versions) {
      obj['versions'] = versions;
    }
    /**
     * Constructs a <code>GetAllAPIversions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAllAPIversions} obj Optional instance to populate.
     * @return {module:model/GetAllAPIversions} The populated <code>GetAllAPIversions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAllAPIversions();

        if (data.hasOwnProperty('versions')) {
          obj['versions'] = _ApiClient["default"].convertToType(data['versions'], [_Version["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GetAllAPIversions;
}();
/**
 * @member {Array.<module:model/Version6>} versions
 */


GetAllAPIversions.prototype['versions'] = undefined;
var _default = GetAllAPIversions;
exports["default"] = _default;