"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _License = _interopRequireDefault(require("./License"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Info4 model module.
 * @module model/Info4
 * @version 1.0.0
 */
var Info4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Info4</code>.
   * @alias module:model/Info4
   * @param version {String} 
   * @param title {String} 
   * @param license {module:model/License} 
   */
  function Info4(version, title, license) {
    _classCallCheck(this, Info4);

    Info4.initialize(this, version, title, license);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Info4, null, [{
    key: "initialize",
    value: function initialize(obj, version, title, license) {
      obj['version'] = version;
      obj['title'] = title;
      obj['license'] = license;
    }
    /**
     * Constructs a <code>Info4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Info4} obj Optional instance to populate.
     * @return {module:model/Info4} The populated <code>Info4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Info4();

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('license')) {
          obj['license'] = _License["default"].constructFromObject(data['license']);
        }
      }

      return obj;
    }
  }]);

  return Info4;
}();
/**
 * @member {String} version
 */


Info4.prototype['version'] = undefined;
/**
 * @member {String} title
 */

Info4.prototype['title'] = undefined;
/**
 * @member {module:model/License} license
 */

Info4.prototype['license'] = undefined;
var _default = Info4;
exports["default"] = _default;