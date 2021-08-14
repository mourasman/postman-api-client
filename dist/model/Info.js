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
 * The Info model module.
 * @module model/Info
 * @version 1.0.0
 */
var Info = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Info</code>.
   * @alias module:model/Info
   * @param name {String} 
   * @param postmanId {String} 
   * @param description {String} 
   * @param schema {String} 
   */
  function Info(name, postmanId, description, schema) {
    _classCallCheck(this, Info);

    Info.initialize(this, name, postmanId, description, schema);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Info, null, [{
    key: "initialize",
    value: function initialize(obj, name, postmanId, description, schema) {
      obj['name'] = name;
      obj['_postman_id'] = postmanId;
      obj['description'] = description;
      obj['schema'] = schema;
    }
    /**
     * Constructs a <code>Info</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Info} obj Optional instance to populate.
     * @return {module:model/Info} The populated <code>Info</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Info();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('_postman_id')) {
          obj['_postman_id'] = _ApiClient["default"].convertToType(data['_postman_id'], 'String');
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

  return Info;
}();
/**
 * @member {String} name
 */


Info.prototype['name'] = undefined;
/**
 * @member {String} _postman_id
 */

Info.prototype['_postman_id'] = undefined;
/**
 * @member {String} description
 */

Info.prototype['description'] = undefined;
/**
 * @member {String} schema
 */

Info.prototype['schema'] = undefined;
var _default = Info;
exports["default"] = _default;