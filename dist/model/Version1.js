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
 * The Version1 model module.
 * @module model/Version1
 * @version 1.0.0
 */
var Version1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Version1</code>.
   * @alias module:model/Version1
   * @param id {String} 
   * @param name {String} 
   * @param api {String} 
   */
  function Version1(id, name, api) {
    _classCallCheck(this, Version1);

    Version1.initialize(this, id, name, api);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Version1, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, api) {
      obj['id'] = id;
      obj['name'] = name;
      obj['api'] = api;
    }
    /**
     * Constructs a <code>Version1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Version1} obj Optional instance to populate.
     * @return {module:model/Version1} The populated <code>Version1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Version1();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('api')) {
          obj['api'] = _ApiClient["default"].convertToType(data['api'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Version1;
}();
/**
 * @member {String} id
 */


Version1.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Version1.prototype['name'] = undefined;
/**
 * @member {String} api
 */

Version1.prototype['api'] = undefined;
var _default = Version1;
exports["default"] = _default;