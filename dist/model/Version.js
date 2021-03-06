"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Source = _interopRequireDefault(require("./Source"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Version model module.
 * @module model/Version
 * @version 1.0.0
 */
var Version = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Version</code>.
   * @alias module:model/Version
   * @param name {String} 
   * @param source {module:model/Source} 
   */
  function Version(name, source) {
    _classCallCheck(this, Version);

    Version.initialize(this, name, source);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Version, null, [{
    key: "initialize",
    value: function initialize(obj, name, source) {
      obj['name'] = name;
      obj['source'] = source;
    }
    /**
     * Constructs a <code>Version</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Version} obj Optional instance to populate.
     * @return {module:model/Version} The populated <code>Version</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Version();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _Source["default"].constructFromObject(data['source']);
        }
      }

      return obj;
    }
  }]);

  return Version;
}();
/**
 * @member {String} name
 */


Version.prototype['name'] = undefined;
/**
 * @member {module:model/Source} source
 */

Version.prototype['source'] = undefined;
var _default = Version;
exports["default"] = _default;