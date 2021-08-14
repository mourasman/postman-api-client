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
 * The Options model module.
 * @module model/Options
 * @version 1.0.0
 */
var Options = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Options</code>.
   * @alias module:model/Options
   * @param strictSSL {Boolean} 
   * @param followRedirects {Boolean} 
   * @param requestTimeout {String} 
   * @param requestDelay {Number} 
   */
  function Options(strictSSL, followRedirects, requestTimeout, requestDelay) {
    _classCallCheck(this, Options);

    Options.initialize(this, strictSSL, followRedirects, requestTimeout, requestDelay);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Options, null, [{
    key: "initialize",
    value: function initialize(obj, strictSSL, followRedirects, requestTimeout, requestDelay) {
      obj['strictSSL'] = strictSSL;
      obj['followRedirects'] = followRedirects;
      obj['requestTimeout'] = requestTimeout;
      obj['requestDelay'] = requestDelay;
    }
    /**
     * Constructs a <code>Options</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Options} obj Optional instance to populate.
     * @return {module:model/Options} The populated <code>Options</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Options();

        if (data.hasOwnProperty('strictSSL')) {
          obj['strictSSL'] = _ApiClient["default"].convertToType(data['strictSSL'], 'Boolean');
        }

        if (data.hasOwnProperty('followRedirects')) {
          obj['followRedirects'] = _ApiClient["default"].convertToType(data['followRedirects'], 'Boolean');
        }

        if (data.hasOwnProperty('requestTimeout')) {
          obj['requestTimeout'] = _ApiClient["default"].convertToType(data['requestTimeout'], 'String');
        }

        if (data.hasOwnProperty('requestDelay')) {
          obj['requestDelay'] = _ApiClient["default"].convertToType(data['requestDelay'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Options;
}();
/**
 * @member {Boolean} strictSSL
 */


Options.prototype['strictSSL'] = undefined;
/**
 * @member {Boolean} followRedirects
 */

Options.prototype['followRedirects'] = undefined;
/**
 * @member {String} requestTimeout
 */

Options.prototype['requestTimeout'] = undefined;
/**
 * @member {Number} requestDelay
 */

Options.prototype['requestDelay'] = undefined;
var _default = Options;
exports["default"] = _default;