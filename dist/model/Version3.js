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
 * The Version3 model module.
 * @module model/Version3
 * @version 1.0.0
 */
var Version3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Version3</code>.
   * @alias module:model/Version3
   * @param id {String} 
   * @param name {String} 
   * @param createdAt {String} 
   * @param updatedAt {String} 
   * @param api {String} 
   * @param createdBy {String} 
   * @param updatedBy {String} 
   */
  function Version3(id, name, createdAt, updatedAt, api, createdBy, updatedBy) {
    _classCallCheck(this, Version3);

    Version3.initialize(this, id, name, createdAt, updatedAt, api, createdBy, updatedBy);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Version3, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, createdAt, updatedAt, api, createdBy, updatedBy) {
      obj['id'] = id;
      obj['name'] = name;
      obj['createdAt'] = createdAt;
      obj['updatedAt'] = updatedAt;
      obj['api'] = api;
      obj['createdBy'] = createdBy;
      obj['updatedBy'] = updatedBy;
    }
    /**
     * Constructs a <code>Version3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Version3} obj Optional instance to populate.
     * @return {module:model/Version3} The populated <code>Version3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Version3();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }

        if (data.hasOwnProperty('api')) {
          obj['api'] = _ApiClient["default"].convertToType(data['api'], 'String');
        }

        if (data.hasOwnProperty('createdBy')) {
          obj['createdBy'] = _ApiClient["default"].convertToType(data['createdBy'], 'String');
        }

        if (data.hasOwnProperty('updatedBy')) {
          obj['updatedBy'] = _ApiClient["default"].convertToType(data['updatedBy'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Version3;
}();
/**
 * @member {String} id
 */


Version3.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Version3.prototype['name'] = undefined;
/**
 * @member {String} createdAt
 */

Version3.prototype['createdAt'] = undefined;
/**
 * @member {String} updatedAt
 */

Version3.prototype['updatedAt'] = undefined;
/**
 * @member {String} api
 */

Version3.prototype['api'] = undefined;
/**
 * @member {String} createdBy
 */

Version3.prototype['createdBy'] = undefined;
/**
 * @member {String} updatedBy
 */

Version3.prototype['updatedBy'] = undefined;
var _default = Version3;
exports["default"] = _default;