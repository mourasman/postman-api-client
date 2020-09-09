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
 * The Model2a9b8fa888b74b8683728e3f6f6e07f2 model module.
 * @module model/Model2a9b8fa888b74b8683728e3f6f6e07f2
 * @version 1.0.0
 */
var Model2a9b8fa888b74b8683728e3f6f6e07f2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Model2a9b8fa888b74b8683728e3f6f6e07f2</code>.
   * @alias module:model/Model2a9b8fa888b74b8683728e3f6f6e07f2
   * @param id {String} 
   * @param name {String} 
   * @param updatedAt {String} 
   */
  function Model2a9b8fa888b74b8683728e3f6f6e07f2(id, name, updatedAt) {
    _classCallCheck(this, Model2a9b8fa888b74b8683728e3f6f6e07f2);

    Model2a9b8fa888b74b8683728e3f6f6e07f2.initialize(this, id, name, updatedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Model2a9b8fa888b74b8683728e3f6f6e07f2, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, updatedAt) {
      obj['id'] = id;
      obj['name'] = name;
      obj['updatedAt'] = updatedAt;
    }
    /**
     * Constructs a <code>Model2a9b8fa888b74b8683728e3f6f6e07f2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Model2a9b8fa888b74b8683728e3f6f6e07f2} obj Optional instance to populate.
     * @return {module:model/Model2a9b8fa888b74b8683728e3f6f6e07f2} The populated <code>Model2a9b8fa888b74b8683728e3f6f6e07f2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Model2a9b8fa888b74b8683728e3f6f6e07f2();

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

  return Model2a9b8fa888b74b8683728e3f6f6e07f2;
}();
/**
 * @member {String} id
 */


Model2a9b8fa888b74b8683728e3f6f6e07f2.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Model2a9b8fa888b74b8683728e3f6f6e07f2.prototype['name'] = undefined;
/**
 * @member {String} updatedAt
 */

Model2a9b8fa888b74b8683728e3f6f6e07f2.prototype['updatedAt'] = undefined;
var _default = Model2a9b8fa888b74b8683728e3f6f6e07f2;
exports["default"] = _default;