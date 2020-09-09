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
 * The Relations2 model module.
 * @module model/Relations2
 * @version 1.0.0
 */
var Relations2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Relations2</code>.
   * @alias module:model/Relations2
   * @param type {String} 
   * @param id {String} 
   */
  function Relations2(type, id) {
    _classCallCheck(this, Relations2);

    Relations2.initialize(this, type, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Relations2, null, [{
    key: "initialize",
    value: function initialize(obj, type, id) {
      obj['type'] = type;
      obj['id'] = id;
    }
    /**
     * Constructs a <code>Relations2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Relations2} obj Optional instance to populate.
     * @return {module:model/Relations2} The populated <code>Relations2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Relations2();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Relations2;
}();
/**
 * @member {String} type
 */


Relations2.prototype['type'] = undefined;
/**
 * @member {String} id
 */

Relations2.prototype['id'] = undefined;
var _default = Relations2;
exports["default"] = _default;