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
 * The Info5 model module.
 * @module model/Info5
 * @version 1.0.0
 */
var Info5 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Info5</code>.
   * @alias module:model/Info5
   * @param postmanId {String} 
   * @param name {String} 
   * @param schema {String} 
   */
  function Info5(postmanId, name, schema) {
    _classCallCheck(this, Info5);

    Info5.initialize(this, postmanId, name, schema);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Info5, null, [{
    key: "initialize",
    value: function initialize(obj, postmanId, name, schema) {
      obj['_postman_id'] = postmanId;
      obj['name'] = name;
      obj['schema'] = schema;
    }
    /**
     * Constructs a <code>Info5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Info5} obj Optional instance to populate.
     * @return {module:model/Info5} The populated <code>Info5</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Info5();

        if (data.hasOwnProperty('_postman_id')) {
          obj['_postman_id'] = _ApiClient["default"].convertToType(data['_postman_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _ApiClient["default"].convertToType(data['schema'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Info5;
}();
/**
 * @member {String} _postman_id
 */


Info5.prototype['_postman_id'] = undefined;
/**
 * @member {String} name
 */

Info5.prototype['name'] = undefined;
/**
 * @member {String} schema
 */

Info5.prototype['schema'] = undefined;
var _default = Info5;
exports["default"] = _default;