"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Config = _interopRequireDefault(require("./Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Mock5 model module.
 * @module model/Mock5
 * @version 1.0.0
 */
var Mock5 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Mock5</code>.
   * @alias module:model/Mock5
   * @param id {String} 
   * @param owner {String} 
   * @param uid {String} 
   * @param collection {String} 
   * @param mockUrl {String} 
   * @param name {String} 
   * @param config {module:model/Config} 
   * @param environment {String} 
   */
  function Mock5(id, owner, uid, collection, mockUrl, name, config, environment) {
    _classCallCheck(this, Mock5);

    Mock5.initialize(this, id, owner, uid, collection, mockUrl, name, config, environment);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Mock5, null, [{
    key: "initialize",
    value: function initialize(obj, id, owner, uid, collection, mockUrl, name, config, environment) {
      obj['id'] = id;
      obj['owner'] = owner;
      obj['uid'] = uid;
      obj['collection'] = collection;
      obj['mockUrl'] = mockUrl;
      obj['name'] = name;
      obj['config'] = config;
      obj['environment'] = environment;
    }
    /**
     * Constructs a <code>Mock5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Mock5} obj Optional instance to populate.
     * @return {module:model/Mock5} The populated <code>Mock5</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Mock5();

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

        if (data.hasOwnProperty('mockUrl')) {
          obj['mockUrl'] = _ApiClient["default"].convertToType(data['mockUrl'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('config')) {
          obj['config'] = _Config["default"].constructFromObject(data['config']);
        }

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _ApiClient["default"].convertToType(data['environment'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Mock5;
}();
/**
 * @member {String} id
 */


Mock5.prototype['id'] = undefined;
/**
 * @member {String} owner
 */

Mock5.prototype['owner'] = undefined;
/**
 * @member {String} uid
 */

Mock5.prototype['uid'] = undefined;
/**
 * @member {String} collection
 */

Mock5.prototype['collection'] = undefined;
/**
 * @member {String} mockUrl
 */

Mock5.prototype['mockUrl'] = undefined;
/**
 * @member {String} name
 */

Mock5.prototype['name'] = undefined;
/**
 * @member {module:model/Config} config
 */

Mock5.prototype['config'] = undefined;
/**
 * @member {String} environment
 */

Mock5.prototype['environment'] = undefined;
var _default = Mock5;
exports["default"] = _default;