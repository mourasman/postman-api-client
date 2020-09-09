"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Model4ccd755f2c80481bA26249b55e12f5e = _interopRequireDefault(require("./Model4ccd755f2c80481bA26249b55e12f5e1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Mock11 model module.
 * @module model/Mock11
 * @version 1.0.0
 */
var Mock11 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Mock11</code>.
   * @alias module:model/Mock11
   * @param _4ccd755f2c80481bA26249b55e12f5e1 {module:model/Model4ccd755f2c80481bA26249b55e12f5e1} 
   */
  function Mock11(_4ccd755f2c80481bA26249b55e12f5e1) {
    _classCallCheck(this, Mock11);

    Mock11.initialize(this, _4ccd755f2c80481bA26249b55e12f5e1);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Mock11, null, [{
    key: "initialize",
    value: function initialize(obj, _4ccd755f2c80481bA26249b55e12f5e1) {
      obj['4ccd755f-2c80-481b-a262-49b55e12f5e1'] = _4ccd755f2c80481bA26249b55e12f5e1;
    }
    /**
     * Constructs a <code>Mock11</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Mock11} obj Optional instance to populate.
     * @return {module:model/Mock11} The populated <code>Mock11</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Mock11();

        if (data.hasOwnProperty('4ccd755f-2c80-481b-a262-49b55e12f5e1')) {
          obj['4ccd755f-2c80-481b-a262-49b55e12f5e1'] = _Model4ccd755f2c80481bA26249b55e12f5e["default"].constructFromObject(data['4ccd755f-2c80-481b-a262-49b55e12f5e1']);
        }
      }

      return obj;
    }
  }]);

  return Mock11;
}();
/**
 * @member {module:model/Model4ccd755f2c80481bA26249b55e12f5e1} 4ccd755f-2c80-481b-a262-49b55e12f5e1
 */


Mock11.prototype['4ccd755f-2c80-481b-a262-49b55e12f5e1'] = undefined;
var _default = Mock11;
exports["default"] = _default;