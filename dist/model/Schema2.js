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
 * The Schema2 model module.
 * @module model/Schema2
 * @version 1.0.0
 */
var Schema2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Schema2</code>.
   * @alias module:model/Schema2
   * @param id {String} 
   * @param language {String} 
   * @param apiVersion {String} 
   * @param type {String} 
   * @param createdBy {String} 
   * @param updateBy {String} 
   * @param createdAt {String} 
   * @param updatedAt {String} 
   */
  function Schema2(id, language, apiVersion, type, createdBy, updateBy, createdAt, updatedAt) {
    _classCallCheck(this, Schema2);

    Schema2.initialize(this, id, language, apiVersion, type, createdBy, updateBy, createdAt, updatedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Schema2, null, [{
    key: "initialize",
    value: function initialize(obj, id, language, apiVersion, type, createdBy, updateBy, createdAt, updatedAt) {
      obj['id'] = id;
      obj['language'] = language;
      obj['apiVersion'] = apiVersion;
      obj['type'] = type;
      obj['createdBy'] = createdBy;
      obj['updateBy'] = updateBy;
      obj['createdAt'] = createdAt;
      obj['updatedAt'] = updatedAt;
    }
    /**
     * Constructs a <code>Schema2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Schema2} obj Optional instance to populate.
     * @return {module:model/Schema2} The populated <code>Schema2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Schema2();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('apiVersion')) {
          obj['apiVersion'] = _ApiClient["default"].convertToType(data['apiVersion'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('createdBy')) {
          obj['createdBy'] = _ApiClient["default"].convertToType(data['createdBy'], 'String');
        }

        if (data.hasOwnProperty('updateBy')) {
          obj['updateBy'] = _ApiClient["default"].convertToType(data['updateBy'], 'String');
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

  return Schema2;
}();
/**
 * @member {String} id
 */


Schema2.prototype['id'] = undefined;
/**
 * @member {String} language
 */

Schema2.prototype['language'] = undefined;
/**
 * @member {String} apiVersion
 */

Schema2.prototype['apiVersion'] = undefined;
/**
 * @member {String} type
 */

Schema2.prototype['type'] = undefined;
/**
 * @member {String} createdBy
 */

Schema2.prototype['createdBy'] = undefined;
/**
 * @member {String} updateBy
 */

Schema2.prototype['updateBy'] = undefined;
/**
 * @member {String} createdAt
 */

Schema2.prototype['createdAt'] = undefined;
/**
 * @member {String} updatedAt
 */

Schema2.prototype['updatedAt'] = undefined;
var _default = Schema2;
exports["default"] = _default;