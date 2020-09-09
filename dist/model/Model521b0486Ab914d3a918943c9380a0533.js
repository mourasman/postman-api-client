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
 * The Model521b0486Ab914d3a918943c9380a0533 model module.
 * @module model/Model521b0486Ab914d3a918943c9380a0533
 * @version 1.0.0
 */
var Model521b0486Ab914d3a918943c9380a0533 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Model521b0486Ab914d3a918943c9380a0533</code>.
   * @alias module:model/Model521b0486Ab914d3a918943c9380a0533
   * @param id {String} 
   * @param name {String} 
   * @param updatedAt {String} 
   */
  function Model521b0486Ab914d3a918943c9380a0533(id, name, updatedAt) {
    _classCallCheck(this, Model521b0486Ab914d3a918943c9380a0533);

    Model521b0486Ab914d3a918943c9380a0533.initialize(this, id, name, updatedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Model521b0486Ab914d3a918943c9380a0533, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, updatedAt) {
      obj['id'] = id;
      obj['name'] = name;
      obj['updatedAt'] = updatedAt;
    }
    /**
     * Constructs a <code>Model521b0486Ab914d3a918943c9380a0533</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Model521b0486Ab914d3a918943c9380a0533} obj Optional instance to populate.
     * @return {module:model/Model521b0486Ab914d3a918943c9380a0533} The populated <code>Model521b0486Ab914d3a918943c9380a0533</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Model521b0486Ab914d3a918943c9380a0533();

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

  return Model521b0486Ab914d3a918943c9380a0533;
}();
/**
 * @member {String} id
 */


Model521b0486Ab914d3a918943c9380a0533.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Model521b0486Ab914d3a918943c9380a0533.prototype['name'] = undefined;
/**
 * @member {String} updatedAt
 */

Model521b0486Ab914d3a918943c9380a0533.prototype['updatedAt'] = undefined;
var _default = Model521b0486Ab914d3a918943c9380a0533;
exports["default"] = _default;