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
 * The A236b715E682460b97b6C1db24f7612e model module.
 * @module model/A236b715E682460b97b6C1db24f7612e
 * @version 1.0.0
 */
var A236b715E682460b97b6C1db24f7612e = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>A236b715E682460b97b6C1db24f7612e</code>.
   * @alias module:model/A236b715E682460b97b6C1db24f7612e
   * @param id {String} 
   * @param name {String} 
   * @param updatedAt {String} 
   */
  function A236b715E682460b97b6C1db24f7612e(id, name, updatedAt) {
    _classCallCheck(this, A236b715E682460b97b6C1db24f7612e);

    A236b715E682460b97b6C1db24f7612e.initialize(this, id, name, updatedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(A236b715E682460b97b6C1db24f7612e, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, updatedAt) {
      obj['id'] = id;
      obj['name'] = name;
      obj['updatedAt'] = updatedAt;
    }
    /**
     * Constructs a <code>A236b715E682460b97b6C1db24f7612e</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/A236b715E682460b97b6C1db24f7612e} obj Optional instance to populate.
     * @return {module:model/A236b715E682460b97b6C1db24f7612e} The populated <code>A236b715E682460b97b6C1db24f7612e</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new A236b715E682460b97b6C1db24f7612e();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }
      }

      return obj;
    }
  }]);

  return A236b715E682460b97b6C1db24f7612e;
}();
/**
 * @member {String} id
 */


A236b715E682460b97b6C1db24f7612e.prototype['id'] = undefined;
/**
 * @member {String} name
 */

A236b715E682460b97b6C1db24f7612e.prototype['name'] = undefined;
/**
 * @member {String} updatedAt
 */

A236b715E682460b97b6C1db24f7612e.prototype['updatedAt'] = undefined;
var _default = A236b715E682460b97b6C1db24f7612e;
exports["default"] = _default;