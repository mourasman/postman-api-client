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
 * The Schedule model module.
 * @module model/Schedule
 * @version 1.0.0
 */
var Schedule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Schedule</code>.
   * @alias module:model/Schedule
   * @param cron {String} 
   * @param timezone {String} 
   * @param nextRun {String} 
   */
  function Schedule(cron, timezone, nextRun) {
    _classCallCheck(this, Schedule);

    Schedule.initialize(this, cron, timezone, nextRun);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Schedule, null, [{
    key: "initialize",
    value: function initialize(obj, cron, timezone, nextRun) {
      obj['cron'] = cron;
      obj['timezone'] = timezone;
      obj['nextRun'] = nextRun;
    }
    /**
     * Constructs a <code>Schedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Schedule} obj Optional instance to populate.
     * @return {module:model/Schedule} The populated <code>Schedule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Schedule();

        if (data.hasOwnProperty('cron')) {
          obj['cron'] = _ApiClient["default"].convertToType(data['cron'], 'String');
        }

        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }

        if (data.hasOwnProperty('nextRun')) {
          obj['nextRun'] = _ApiClient["default"].convertToType(data['nextRun'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Schedule;
}();
/**
 * @member {String} cron
 */


Schedule.prototype['cron'] = undefined;
/**
 * @member {String} timezone
 */

Schedule.prototype['timezone'] = undefined;
/**
 * @member {String} nextRun
 */

Schedule.prototype['nextRun'] = undefined;
var _default = Schedule;
exports["default"] = _default;