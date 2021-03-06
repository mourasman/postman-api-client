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
 * The Mock6 model module.
 * @module model/Mock6
 * @version 1.0.0
 */
var Mock6 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Mock6</code>.
   * @alias module:model/Mock6
   * @param id {String} 
   * @param uid {String} 
   */
  function Mock6(id, uid) {
    _classCallCheck(this, Mock6);

    Mock6.initialize(this, id, uid);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Mock6, null, [{
    key: "initialize",
    value: function initialize(obj, id, uid) {
      obj['id'] = id;
      obj['uid'] = uid;
    }
    /**
     * Constructs a <code>Mock6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Mock6} obj Optional instance to populate.
     * @return {module:model/Mock6} The populated <code>Mock6</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Mock6();

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

  return Mock6;
}();
/**
 * @member {String} id
 */


Mock6.prototype['id'] = undefined;
/**
 * @member {String} uid
 */

Mock6.prototype['uid'] = undefined;
var _default = Mock6;
exports["default"] = _default;