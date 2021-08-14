"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Schema = _interopRequireDefault(require("./Schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Parameter model module.
 * @module model/Parameter
 * @version 1.0.0
 */
var Parameter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Parameter</code>.
   * @alias module:model/Parameter
   * @param name {String} 
   * @param _in {String} 
   * @param description {String} 
   * @param required {Boolean} 
   * @param schema {module:model/Schema} 
   */
  function Parameter(name, _in, description, required, schema) {
    _classCallCheck(this, Parameter);

    Parameter.initialize(this, name, _in, description, required, schema);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Parameter, null, [{
    key: "initialize",
    value: function initialize(obj, name, _in, description, required, schema) {
      obj['name'] = name;
      obj['in'] = _in;
      obj['description'] = description;
      obj['required'] = required;
      obj['schema'] = schema;
    }
    /**
     * Constructs a <code>Parameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Parameter} obj Optional instance to populate.
     * @return {module:model/Parameter} The populated <code>Parameter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Parameter();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('in')) {
          obj['in'] = _ApiClient["default"].convertToType(data['in'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('required')) {
          obj['required'] = _ApiClient["default"].convertToType(data['required'], 'Boolean');
        }

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _Schema["default"].constructFromObject(data['schema']);
        }
      }

      return obj;
    }
  }]);

  return Parameter;
}();
/**
 * @member {String} name
 */


Parameter.prototype['name'] = undefined;
/**
 * @member {String} in
 */

Parameter.prototype['in'] = undefined;
/**
 * @member {String} description
 */

Parameter.prototype['description'] = undefined;
/**
 * @member {Boolean} required
 */

Parameter.prototype['required'] = undefined;
/**
 * @member {module:model/Schema} schema
 */

Parameter.prototype['schema'] = undefined;
var _default = Parameter;
exports["default"] = _default;