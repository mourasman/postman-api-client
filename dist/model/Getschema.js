"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Schema = _interopRequireDefault(require("./Schema2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Getschema model module.
 * @module model/Getschema
 * @version 1.0.0
 */
var Getschema = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Getschema</code>.
   * @alias module:model/Getschema
   * @param schema {module:model/Schema2} 
   */
  function Getschema(schema) {
    _classCallCheck(this, Getschema);

    Getschema.initialize(this, schema);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Getschema, null, [{
    key: "initialize",
    value: function initialize(obj, schema) {
      obj['schema'] = schema;
    }
    /**
     * Constructs a <code>Getschema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Getschema} obj Optional instance to populate.
     * @return {module:model/Getschema} The populated <code>Getschema</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Getschema();

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _Schema["default"].constructFromObject(data['schema']);
        }
      }

      return obj;
    }
  }]);

  return Getschema;
}();
/**
 * @member {module:model/Schema2} schema
 */


Getschema.prototype['schema'] = undefined;
var _default = Getschema;
exports["default"] = _default;