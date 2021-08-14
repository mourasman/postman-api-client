"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Assertion = _interopRequireDefault(require("./Assertion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Failure model module.
 * @module model/Failure
 * @version 1.0.0
 */
var Failure = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Failure</code>.
   * @alias module:model/Failure
   * @param executionId {Number} 
   * @param name {String} 
   * @param message {String} 
   * @param assertion {module:model/Assertion} 
   */
  function Failure(executionId, name, message, assertion) {
    _classCallCheck(this, Failure);

    Failure.initialize(this, executionId, name, message, assertion);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Failure, null, [{
    key: "initialize",
    value: function initialize(obj, executionId, name, message, assertion) {
      obj['executionId'] = executionId;
      obj['name'] = name;
      obj['message'] = message;
      obj['assertion'] = assertion;
    }
    /**
     * Constructs a <code>Failure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Failure} obj Optional instance to populate.
     * @return {module:model/Failure} The populated <code>Failure</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Failure();

        if (data.hasOwnProperty('executionId')) {
          obj['executionId'] = _ApiClient["default"].convertToType(data['executionId'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('assertion')) {
          obj['assertion'] = _Assertion["default"].constructFromObject(data['assertion']);
        }
      }

      return obj;
    }
  }]);

  return Failure;
}();
/**
 * @member {Number} executionId
 */


Failure.prototype['executionId'] = undefined;
/**
 * @member {String} name
 */

Failure.prototype['name'] = undefined;
/**
 * @member {String} message
 */

Failure.prototype['message'] = undefined;
/**
 * @member {module:model/Assertion} assertion
 */

Failure.prototype['assertion'] = undefined;
var _default = Failure;
exports["default"] = _default;