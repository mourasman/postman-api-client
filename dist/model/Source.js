"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Relations = _interopRequireDefault(require("./Relations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Source model module.
 * @module model/Source
 * @version 1.0.0
 */
var Source = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Source</code>.
   * @alias module:model/Source
   * @param id {String} 
   * @param schema {Boolean} 
   * @param relations {module:model/Relations} 
   */
  function Source(id, schema, relations) {
    _classCallCheck(this, Source);

    Source.initialize(this, id, schema, relations);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Source, null, [{
    key: "initialize",
    value: function initialize(obj, id, schema, relations) {
      obj['id'] = id;
      obj['schema'] = schema;
      obj['relations'] = relations;
    }
    /**
     * Constructs a <code>Source</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Source} obj Optional instance to populate.
     * @return {module:model/Source} The populated <code>Source</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Source();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _ApiClient["default"].convertToType(data['schema'], 'Boolean');
        }

        if (data.hasOwnProperty('relations')) {
          obj['relations'] = _Relations["default"].constructFromObject(data['relations']);
        }
      }

      return obj;
    }
  }]);

  return Source;
}();
/**
 * @member {String} id
 */


Source.prototype['id'] = undefined;
/**
 * @member {Boolean} schema
 */

Source.prototype['schema'] = undefined;
/**
 * @member {module:model/Relations} relations
 */

Source.prototype['relations'] = undefined;
var _default = Source;
exports["default"] = _default;