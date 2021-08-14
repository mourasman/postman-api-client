"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Query = _interopRequireDefault(require("./Query1"));

var _Variable = _interopRequireDefault(require("./Variable1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Url1 model module.
 * @module model/Url1
 * @version 1.0.0
 */
var Url1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Url1</code>.
   * @alias module:model/Url1
   * @param raw {String} 
   * @param host {Array.<String>} 
   * @param path {Array.<String>} 
   */
  function Url1(raw, host, path) {
    _classCallCheck(this, Url1);

    Url1.initialize(this, raw, host, path);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Url1, null, [{
    key: "initialize",
    value: function initialize(obj, raw, host, path) {
      obj['raw'] = raw;
      obj['host'] = host;
      obj['path'] = path;
    }
    /**
     * Constructs a <code>Url1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Url1} obj Optional instance to populate.
     * @return {module:model/Url1} The populated <code>Url1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Url1();

        if (data.hasOwnProperty('raw')) {
          obj['raw'] = _ApiClient["default"].convertToType(data['raw'], 'String');
        }

        if (data.hasOwnProperty('host')) {
          obj['host'] = _ApiClient["default"].convertToType(data['host'], ['String']);
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], ['String']);
        }

        if (data.hasOwnProperty('query')) {
          obj['query'] = _ApiClient["default"].convertToType(data['query'], [_Query["default"]]);
        }

        if (data.hasOwnProperty('variable')) {
          obj['variable'] = _ApiClient["default"].convertToType(data['variable'], [_Variable["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Url1;
}();
/**
 * @member {String} raw
 */


Url1.prototype['raw'] = undefined;
/**
 * @member {Array.<String>} host
 */

Url1.prototype['host'] = undefined;
/**
 * @member {Array.<String>} path
 */

Url1.prototype['path'] = undefined;
/**
 * @member {Array.<module:model/Query1>} query
 */

Url1.prototype['query'] = undefined;
/**
 * @member {Array.<module:model/Variable1>} variable
 */

Url1.prototype['variable'] = undefined;
var _default = Url1;
exports["default"] = _default;