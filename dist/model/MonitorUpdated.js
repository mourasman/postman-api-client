"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Monitor = _interopRequireDefault(require("./Monitor3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MonitorUpdated model module.
 * @module model/MonitorUpdated
 * @version 1.0.0
 */
var MonitorUpdated = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MonitorUpdated</code>.
   * @alias module:model/MonitorUpdated
   * @param monitor {module:model/Monitor3} 
   */
  function MonitorUpdated(monitor) {
    _classCallCheck(this, MonitorUpdated);

    MonitorUpdated.initialize(this, monitor);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MonitorUpdated, null, [{
    key: "initialize",
    value: function initialize(obj, monitor) {
      obj['monitor'] = monitor;
    }
    /**
     * Constructs a <code>MonitorUpdated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MonitorUpdated} obj Optional instance to populate.
     * @return {module:model/MonitorUpdated} The populated <code>MonitorUpdated</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MonitorUpdated();

        if (data.hasOwnProperty('monitor')) {
          obj['monitor'] = _Monitor["default"].constructFromObject(data['monitor']);
        }
      }

      return obj;
    }
  }]);

  return MonitorUpdated;
}();
/**
 * @member {module:model/Monitor3} monitor
 */


MonitorUpdated.prototype['monitor'] = undefined;
var _default = MonitorUpdated;
exports["default"] = _default;