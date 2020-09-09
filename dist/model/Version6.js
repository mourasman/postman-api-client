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
 * The Version6 model module.
 * @module model/Version6
 * @version 1.0.0
 */
var Version6 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Version6</code>.
   * @alias module:model/Version6
   * @param id {String} 
   * @param name {String} 
   * @param summary {String} 
   * @param description {String} 
   * @param createdBy {String} 
   * @param createdAt {String} 
   * @param updatedAt {String} 
   */
  function Version6(id, name, summary, description, createdBy, createdAt, updatedAt) {
    _classCallCheck(this, Version6);

    Version6.initialize(this, id, name, summary, description, createdBy, createdAt, updatedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Version6, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, summary, description, createdBy, createdAt, updatedAt) {
      obj['id'] = id;
      obj['name'] = name;
      obj['summary'] = summary;
      obj['description'] = description;
      obj['createdBy'] = createdBy;
      obj['createdAt'] = createdAt;
      obj['updatedAt'] = updatedAt;
    }
    /**
     * Constructs a <code>Version6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Version6} obj Optional instance to populate.
     * @return {module:model/Version6} The populated <code>Version6</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Version6();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('createdBy')) {
          obj['createdBy'] = _ApiClient["default"].convertToType(data['createdBy'], 'String');
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

  return Version6;
}();
/**
 * @member {String} id
 */


Version6.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Version6.prototype['name'] = undefined;
/**
 * @member {String} summary
 */

Version6.prototype['summary'] = undefined;
/**
 * @member {String} description
 */

Version6.prototype['description'] = undefined;
/**
 * @member {String} createdBy
 */

Version6.prototype['createdBy'] = undefined;
/**
 * @member {String} createdAt
 */

Version6.prototype['createdAt'] = undefined;
/**
 * @member {String} updatedAt
 */

Version6.prototype['updatedAt'] = undefined;
var _default = Version6;
exports["default"] = _default;