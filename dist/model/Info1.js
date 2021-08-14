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
 * The Info1 model module.
 * @module model/Info1
 * @version 1.0.0
 */
var Info1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Info1</code>.
   * @alias module:model/Info1
   * @param name {String} 
   * @param description {String} 
   * @param schema {String} 
   */
  function Info1(name, description, schema) {
    _classCallCheck(this, Info1);

    Info1.initialize(this, name, description, schema);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Info1, null, [{
    key: "initialize",
    value: function initialize(obj, name, description, schema) {
      obj['name'] = name;
      obj['description'] = description;
      obj['schema'] = schema;
    }
    /**
     * Constructs a <code>Info1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Info1} obj Optional instance to populate.
     * @return {module:model/Info1} The populated <code>Info1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Info1();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _ApiClient["default"].convertToType(data['schema'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Info1;
}();
/**
 * @member {String} name
 */


Info1.prototype['name'] = undefined;
/**
 * @member {String} description
 */

Info1.prototype['description'] = undefined;
/**
 * @member {String} schema
 */

Info1.prototype['schema'] = undefined;
var _default = Info1;
exports["default"] = _default;