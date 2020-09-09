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
 * The Environment model module.
 * @module model/Environment
 * @version 1.0.0
 */
var Environment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Environment</code>.
   * @alias module:model/Environment
   * @param id {String} 
   * @param name {String} 
   * @param owner {String} 
   * @param uid {String} 
   */
  function Environment(id, name, owner, uid) {
    _classCallCheck(this, Environment);

    Environment.initialize(this, id, name, owner, uid);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Environment, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, owner, uid) {
      obj['id'] = id;
      obj['name'] = name;
      obj['owner'] = owner;
      obj['uid'] = uid;
    }
    /**
     * Constructs a <code>Environment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Environment} obj Optional instance to populate.
     * @return {module:model/Environment} The populated <code>Environment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Environment();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], 'String');
        }

        if (data.hasOwnProperty('uid')) {
          obj['uid'] = _ApiClient["default"].convertToType(data['uid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Environment;
}();
/**
 * @member {String} id
 */


Environment.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Environment.prototype['name'] = undefined;
/**
 * @member {String} owner
 */

Environment.prototype['owner'] = undefined;
/**
 * @member {String} uid
 */

Environment.prototype['uid'] = undefined;
var _default = Environment;
exports["default"] = _default;