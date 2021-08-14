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
 * The MonitorCreated model module.
 * @module model/MonitorCreated
 * @version 1.0.0
 */
var MonitorCreated = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MonitorCreated</code>.
   * @alias module:model/MonitorCreated
   * @param monitor {module:model/Monitor3} 
   */
  function MonitorCreated(monitor) {
    _classCallCheck(this, MonitorCreated);

    MonitorCreated.initialize(this, monitor);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MonitorCreated, null, [{
    key: "initialize",
    value: function initialize(obj, monitor) {
      obj['monitor'] = monitor;
    }
    /**
     * Constructs a <code>MonitorCreated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MonitorCreated} obj Optional instance to populate.
     * @return {module:model/MonitorCreated} The populated <code>MonitorCreated</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MonitorCreated();

        if (data.hasOwnProperty('monitor')) {
          obj['monitor'] = _Monitor["default"].constructFromObject(data['monitor']);
        }
      }

      return obj;
    }
  }]);

  return MonitorCreated;
}();
/**
 * @member {module:model/Monitor3} monitor
 */


MonitorCreated.prototype['monitor'] = undefined;
var _default = MonitorCreated;
exports["default"] = _default;