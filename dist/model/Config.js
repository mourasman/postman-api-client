"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Config model module.
 * @module model/Config
 * @version 1.0.0
 */
var Config = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Config</code>.
   * @alias module:model/Config
   * @param headers {Array.<String>} 
   * @param matchBody {Boolean} 
   * @param matchQueryParams {Boolean} 
   * @param matchWildcards {Boolean} 
   */
  function Config(headers, matchBody, matchQueryParams, matchWildcards) {
    _classCallCheck(this, Config);

    Config.initialize(this, headers, matchBody, matchQueryParams, matchWildcards);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Config, null, [{
    key: "initialize",
    value: function initialize(obj, headers, matchBody, matchQueryParams, matchWildcards) {
      obj['headers'] = headers;
      obj['matchBody'] = matchBody;
      obj['matchQueryParams'] = matchQueryParams;
      obj['matchWildcards'] = matchWildcards;
    }
    /**
     * Constructs a <code>Config</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Config} obj Optional instance to populate.
     * @return {module:model/Config} The populated <code>Config</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Config();

        if (data.hasOwnProperty('headers')) {
          obj['headers'] = _ApiClient["default"].convertToType(data['headers'], ['String']);
        }

        if (data.hasOwnProperty('matchBody')) {
          obj['matchBody'] = _ApiClient["default"].convertToType(data['matchBody'], 'Boolean');
        }

        if (data.hasOwnProperty('matchQueryParams')) {
          obj['matchQueryParams'] = _ApiClient["default"].convertToType(data['matchQueryParams'], 'Boolean');
        }

        if (data.hasOwnProperty('matchWildcards')) {
          obj['matchWildcards'] = _ApiClient["default"].convertToType(data['matchWildcards'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Config;
}();
/**
 * @member {Array.<String>} headers
 */


Config.prototype['headers'] = undefined;
/**
 * @member {Boolean} matchBody
 */

Config.prototype['matchBody'] = undefined;
/**
 * @member {Boolean} matchQueryParams
 */

Config.prototype['matchQueryParams'] = undefined;
/**
 * @member {Boolean} matchWildcards
 */

Config.prototype['matchWildcards'] = undefined;
var _default = Config;
exports["default"] = _default;