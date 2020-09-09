"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Details = _interopRequireDefault(require("./Details5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Error13 model module.
 * @module model/Error13
 * @version 1.0.0
 */
var Error13 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Error13</code>.
   * @alias module:model/Error13
   * @param name {String} 
   * @param message {String} 
   * @param details {module:model/Details5} 
   */
  function Error13(name, message, details) {
    _classCallCheck(this, Error13);

    Error13.initialize(this, name, message, details);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Error13, null, [{
    key: "initialize",
    value: function initialize(obj, name, message, details) {
      obj['name'] = name;
      obj['message'] = message;
      obj['details'] = details;
    }
    /**
     * Constructs a <code>Error13</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Error13} obj Optional instance to populate.
     * @return {module:model/Error13} The populated <code>Error13</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Error13();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _Details["default"].constructFromObject(data['details']);
        }
      }

      return obj;
    }
  }]);

  return Error13;
}();
/**
 * @member {String} name
 */


Error13.prototype['name'] = undefined;
/**
 * @member {String} message
 */

Error13.prototype['message'] = undefined;
/**
 * @member {module:model/Details5} details
 */

Error13.prototype['details'] = undefined;
var _default = Error13;
exports["default"] = _default;