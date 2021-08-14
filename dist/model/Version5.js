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
 * The Version5 model module.
 * @module model/Version5
 * @version 1.0.0
 */
var Version5 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Version5</code>.
   * @alias module:model/Version5
   * @param id {String} 
   * @param name {String} 
   * @param api {String} 
   * @param schema {Array.<String>} 
   * @param createdBy {String} 
   * @param updatedBy {String} 
   * @param createdAt {String} 
   * @param updatedAt {String} 
   */
  function Version5(id, name, api, schema, createdBy, updatedBy, createdAt, updatedAt) {
    _classCallCheck(this, Version5);

    Version5.initialize(this, id, name, api, schema, createdBy, updatedBy, createdAt, updatedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Version5, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, api, schema, createdBy, updatedBy, createdAt, updatedAt) {
      obj['id'] = id;
      obj['name'] = name;
      obj['api'] = api;
      obj['schema'] = schema;
      obj['createdBy'] = createdBy;
      obj['updatedBy'] = updatedBy;
      obj['createdAt'] = createdAt;
      obj['updatedAt'] = updatedAt;
    }
    /**
     * Constructs a <code>Version5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Version5} obj Optional instance to populate.
     * @return {module:model/Version5} The populated <code>Version5</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Version5();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('api')) {
          obj['api'] = _ApiClient["default"].convertToType(data['api'], 'String');
        }

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _ApiClient["default"].convertToType(data['schema'], ['String']);
        }

        if (data.hasOwnProperty('createdBy')) {
          obj['createdBy'] = _ApiClient["default"].convertToType(data['createdBy'], 'String');
        }

        if (data.hasOwnProperty('updatedBy')) {
          obj['updatedBy'] = _ApiClient["default"].convertToType(data['updatedBy'], 'String');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Version5;
}();
/**
 * @member {String} id
 */


Version5.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Version5.prototype['name'] = undefined;
/**
 * @member {String} api
 */

Version5.prototype['api'] = undefined;
/**
 * @member {Array.<String>} schema
 */

Version5.prototype['schema'] = undefined;
/**
 * @member {String} createdBy
 */

Version5.prototype['createdBy'] = undefined;
/**
 * @member {String} updatedBy
 */

Version5.prototype['updatedBy'] = undefined;
/**
 * @member {String} createdAt
 */

Version5.prototype['createdAt'] = undefined;
/**
 * @member {String} updatedAt
 */

Version5.prototype['updatedAt'] = undefined;
var _default = Version5;
exports["default"] = _default;