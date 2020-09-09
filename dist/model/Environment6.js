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
 * The Environment6 model module.
 * @module model/Environment6
 * @version 1.0.0
 */
var Environment6 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Environment6</code>.
   * @alias module:model/Environment6
   * @param id {String} 
   * @param uid {String} 
   */
  function Environment6(id, uid) {
    _classCallCheck(this, Environment6);

    Environment6.initialize(this, id, uid);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Environment6, null, [{
    key: "initialize",
    value: function initialize(obj, id, uid) {
      obj['id'] = id;
      obj['uid'] = uid;
    }
    /**
     * Constructs a <code>Environment6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Environment6} obj Optional instance to populate.
     * @return {module:model/Environment6} The populated <code>Environment6</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Environment6();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('uid')) {
          obj['uid'] = _ApiClient["default"].convertToType(data['uid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Environment6;
}();
/**
 * @member {String} id
 */


Environment6.prototype['id'] = undefined;
/**
 * @member {String} uid
 */

Environment6.prototype['uid'] = undefined;
var _default = Environment6;
exports["default"] = _default;