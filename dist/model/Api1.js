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
 * The Api1 model module.
 * @module model/Api1
 * @version 1.0.0
 */
var Api1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Api1</code>.
   * @alias module:model/Api1
   * @param id {String} 
   * @param name {String} 
   * @param summary {String} 
   * @param description {String} 
   * @param createdBy {String} 
   * @param createdAt {String} 
   * @param updatedAt {String} 
   */
  function Api1(id, name, summary, description, createdBy, createdAt, updatedAt) {
    _classCallCheck(this, Api1);

    Api1.initialize(this, id, name, summary, description, createdBy, createdAt, updatedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Api1, null, [{
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
     * Constructs a <code>Api1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1} obj Optional instance to populate.
     * @return {module:model/Api1} The populated <code>Api1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Api1();

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

  return Api1;
}();
/**
 * @member {String} id
 */


Api1.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Api1.prototype['name'] = undefined;
/**
 * @member {String} summary
 */

Api1.prototype['summary'] = undefined;
/**
 * @member {String} description
 */

Api1.prototype['description'] = undefined;
/**
 * @member {String} createdBy
 */

Api1.prototype['createdBy'] = undefined;
/**
 * @member {String} createdAt
 */

Api1.prototype['createdAt'] = undefined;
/**
 * @member {String} updatedAt
 */

Api1.prototype['updatedAt'] = undefined;
var _default = Api1;
exports["default"] = _default;