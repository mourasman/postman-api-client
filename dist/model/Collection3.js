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
 * The Collection3 model module.
 * @module model/Collection3
 * @version 1.0.0
 */
var Collection3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Collection3</code>.
   * @alias module:model/Collection3
   * @param id {String} 
   * @param name {String} 
   * @param uid {String} 
   */
  function Collection3(id, name, uid) {
    _classCallCheck(this, Collection3);

    Collection3.initialize(this, id, name, uid);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Collection3, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, uid) {
      obj['id'] = id;
      obj['name'] = name;
      obj['uid'] = uid;
    }
    /**
     * Constructs a <code>Collection3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Collection3} obj Optional instance to populate.
     * @return {module:model/Collection3} The populated <code>Collection3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Collection3();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('uid')) {
          obj['uid'] = _ApiClient["default"].convertToType(data['uid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Collection3;
}();
/**
 * @member {String} id
 */


Collection3.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Collection3.prototype['name'] = undefined;
/**
 * @member {String} uid
 */

Collection3.prototype['uid'] = undefined;
var _default = Collection3;
exports["default"] = _default;