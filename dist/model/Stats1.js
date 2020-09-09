"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Assertions = _interopRequireDefault(require("./Assertions"));

var _Requests = _interopRequireDefault(require("./Requests1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Stats1 model module.
 * @module model/Stats1
 * @version 1.0.0
 */
var Stats1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Stats1</code>.
   * @alias module:model/Stats1
   * @param assertions {module:model/Assertions} 
   * @param requests {module:model/Requests1} 
   */
  function Stats1(assertions, requests) {
    _classCallCheck(this, Stats1);

    Stats1.initialize(this, assertions, requests);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Stats1, null, [{
    key: "initialize",
    value: function initialize(obj, assertions, requests) {
      obj['assertions'] = assertions;
      obj['requests'] = requests;
    }
    /**
     * Constructs a <code>Stats1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Stats1} obj Optional instance to populate.
     * @return {module:model/Stats1} The populated <code>Stats1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Stats1();

        if (data.hasOwnProperty('assertions')) {
          obj['assertions'] = _Assertions["default"].constructFromObject(data['assertions']);
        }

        if (data.hasOwnProperty('requests')) {
          obj['requests'] = _Requests["default"].constructFromObject(data['requests']);
        }
      }

      return obj;
    }
  }]);

  return Stats1;
}();
/**
 * @member {module:model/Assertions} assertions
 */


Stats1.prototype['assertions'] = undefined;
/**
 * @member {module:model/Requests1} requests
 */

Stats1.prototype['requests'] = undefined;
var _default = Stats1;
exports["default"] = _default;