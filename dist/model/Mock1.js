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
 * The Mock1 model module.
 * @module model/Mock1
 * @version 1.0.0
 */
var Mock1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Mock1</code>.
   * @alias module:model/Mock1
   * @param id {String} 
   * @param owner {String} 
   * @param uid {String} 
   * @param collection {String} 
   * @param environment {String} 
   * @param mockUrl {String} 
   */
  function Mock1(id, owner, uid, collection, environment, mockUrl) {
    _classCallCheck(this, Mock1);

    Mock1.initialize(this, id, owner, uid, collection, environment, mockUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Mock1, null, [{
    key: "initialize",
    value: function initialize(obj, id, owner, uid, collection, environment, mockUrl) {
      obj['id'] = id;
      obj['owner'] = owner;
      obj['uid'] = uid;
      obj['collection'] = collection;
      obj['environment'] = environment;
      obj['mockUrl'] = mockUrl;
    }
    /**
     * Constructs a <code>Mock1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Mock1} obj Optional instance to populate.
     * @return {module:model/Mock1} The populated <code>Mock1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Mock1();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], 'String');
        }

        if (data.hasOwnProperty('uid')) {
          obj['uid'] = _ApiClient["default"].convertToType(data['uid'], 'String');
        }

        if (data.hasOwnProperty('collection')) {
          obj['collection'] = _ApiClient["default"].convertToType(data['collection'], 'String');
        }

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _ApiClient["default"].convertToType(data['environment'], 'String');
        }

        if (data.hasOwnProperty('mockUrl')) {
          obj['mockUrl'] = _ApiClient["default"].convertToType(data['mockUrl'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Mock1;
}();
/**
 * @member {String} id
 */


Mock1.prototype['id'] = undefined;
/**
 * @member {String} owner
 */

Mock1.prototype['owner'] = undefined;
/**
 * @member {String} uid
 */

Mock1.prototype['uid'] = undefined;
/**
 * @member {String} collection
 */

Mock1.prototype['collection'] = undefined;
/**
 * @member {String} environment
 */

Mock1.prototype['environment'] = undefined;
/**
 * @member {String} mockUrl
 */

Mock1.prototype['mockUrl'] = undefined;
var _default = Mock1;
exports["default"] = _default;