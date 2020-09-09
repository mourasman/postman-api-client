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
 * The Schedule1 model module.
 * @module model/Schedule1
 * @version 1.0.0
 */
var Schedule1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Schedule1</code>.
   * @alias module:model/Schedule1
   * @param cron {String} 
   * @param timezone {String} 
   */
  function Schedule1(cron, timezone) {
    _classCallCheck(this, Schedule1);

    Schedule1.initialize(this, cron, timezone);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Schedule1, null, [{
    key: "initialize",
    value: function initialize(obj, cron, timezone) {
      obj['cron'] = cron;
      obj['timezone'] = timezone;
    }
    /**
     * Constructs a <code>Schedule1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Schedule1} obj Optional instance to populate.
     * @return {module:model/Schedule1} The populated <code>Schedule1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Schedule1();

        if (data.hasOwnProperty('cron')) {
          obj['cron'] = _ApiClient["default"].convertToType(data['cron'], 'String');
        }

        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Schedule1;
}();
/**
 * @member {String} cron
 */


Schedule1.prototype['cron'] = undefined;
/**
 * @member {String} timezone
 */

Schedule1.prototype['timezone'] = undefined;
var _default = Schedule1;
exports["default"] = _default;