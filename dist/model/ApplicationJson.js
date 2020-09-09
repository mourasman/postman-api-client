"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Schema = _interopRequireDefault(require("./Schema1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ApplicationJson model module.
 * @module model/ApplicationJson
 * @version 1.0.0
 */
var ApplicationJson = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationJson</code>.
   * @alias module:model/ApplicationJson
   * @param schema {module:model/Schema1} 
   */
  function ApplicationJson(schema) {
    _classCallCheck(this, ApplicationJson);

    ApplicationJson.initialize(this, schema);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationJson, null, [{
    key: "initialize",
    value: function initialize(obj, schema) {
      obj['schema'] = schema;
    }
    /**
     * Constructs a <code>ApplicationJson</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationJson} obj Optional instance to populate.
     * @return {module:model/ApplicationJson} The populated <code>ApplicationJson</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationJson();

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _Schema["default"].constructFromObject(data['schema']);
        }
      }

      return obj;
    }
  }]);

  return ApplicationJson;
}();
/**
 * @member {module:model/Schema1} schema
 */


ApplicationJson.prototype['schema'] = undefined;
var _default = ApplicationJson;
exports["default"] = _default;