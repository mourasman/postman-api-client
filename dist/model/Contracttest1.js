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
 * The Contracttest1 model module.
 * @module model/Contracttest1
 * @version 1.0.0
 */
var Contracttest1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Contracttest1</code>.
   * @alias module:model/Contracttest1
   * @param id {String} 
   * @param name {String} 
   * @param updatedAt {String} 
   * @param collectionId {String} 
   */
  function Contracttest1(id, name, updatedAt, collectionId) {
    _classCallCheck(this, Contracttest1);

    Contracttest1.initialize(this, id, name, updatedAt, collectionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Contracttest1, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, updatedAt, collectionId) {
      obj['id'] = id;
      obj['name'] = name;
      obj['updatedAt'] = updatedAt;
      obj['collectionId'] = collectionId;
    }
    /**
     * Constructs a <code>Contracttest1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contracttest1} obj Optional instance to populate.
     * @return {module:model/Contracttest1} The populated <code>Contracttest1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Contracttest1();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }

        if (data.hasOwnProperty('collectionId')) {
          obj['collectionId'] = _ApiClient["default"].convertToType(data['collectionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Contracttest1;
}();
/**
 * @member {String} id
 */


Contracttest1.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Contracttest1.prototype['name'] = undefined;
/**
 * @member {String} updatedAt
 */

Contracttest1.prototype['updatedAt'] = undefined;
/**
 * @member {String} collectionId
 */

Contracttest1.prototype['collectionId'] = undefined;
var _default = Contracttest1;
exports["default"] = _default;