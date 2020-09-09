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
 * The Query model module.
 * @module model/Query
 * @version 1.0.0
 */
var Query = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Query</code>.
   * @alias module:model/Query
   * @param description {String} 
   * @param key {String} 
   * @param value {String} 
   */
  function Query(description, key, value) {
    _classCallCheck(this, Query);

    Query.initialize(this, description, key, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Query, null, [{
    key: "initialize",
    value: function initialize(obj, description, key, value) {
      obj['description'] = description;
      obj['key'] = key;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>Query</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Query} obj Optional instance to populate.
     * @return {module:model/Query} The populated <code>Query</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Query();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Query;
}();
/**
 * @member {String} description
 */


Query.prototype['description'] = undefined;
/**
 * @member {String} key
 */

Query.prototype['key'] = undefined;
/**
 * @member {String} value
 */

Query.prototype['value'] = undefined;
var _default = Query;
exports["default"] = _default;