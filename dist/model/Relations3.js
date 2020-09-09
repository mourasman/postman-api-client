"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Contracttest = _interopRequireDefault(require("./Contracttest"));

var _Integrationtest = _interopRequireDefault(require("./Integrationtest"));

var _Mock = _interopRequireDefault(require("./Mock11"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Relations3 model module.
 * @module model/Relations3
 * @version 1.0.0
 */
var Relations3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Relations3</code>.
   * @alias module:model/Relations3
   * @param contracttest {module:model/Contracttest} 
   * @param integrationtest {module:model/Integrationtest} 
   * @param mock {module:model/Mock11} 
   */
  function Relations3(contracttest, integrationtest, mock) {
    _classCallCheck(this, Relations3);

    Relations3.initialize(this, contracttest, integrationtest, mock);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Relations3, null, [{
    key: "initialize",
    value: function initialize(obj, contracttest, integrationtest, mock) {
      obj['contracttest'] = contracttest;
      obj['integrationtest'] = integrationtest;
      obj['mock'] = mock;
    }
    /**
     * Constructs a <code>Relations3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Relations3} obj Optional instance to populate.
     * @return {module:model/Relations3} The populated <code>Relations3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Relations3();

        if (data.hasOwnProperty('contracttest')) {
          obj['contracttest'] = _Contracttest["default"].constructFromObject(data['contracttest']);
        }

        if (data.hasOwnProperty('integrationtest')) {
          obj['integrationtest'] = _Integrationtest["default"].constructFromObject(data['integrationtest']);
        }

        if (data.hasOwnProperty('mock')) {
          obj['mock'] = _Mock["default"].constructFromObject(data['mock']);
        }
      }

      return obj;
    }
  }]);

  return Relations3;
}();
/**
 * @member {module:model/Contracttest} contracttest
 */


Relations3.prototype['contracttest'] = undefined;
/**
 * @member {module:model/Integrationtest} integrationtest
 */

Relations3.prototype['integrationtest'] = undefined;
/**
 * @member {module:model/Mock11} mock
 */

Relations3.prototype['mock'] = undefined;
var _default = Relations3;
exports["default"] = _default;