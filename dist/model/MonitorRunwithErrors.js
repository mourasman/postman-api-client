"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Run = _interopRequireDefault(require("./Run"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MonitorRunwithErrors model module.
 * @module model/MonitorRunwithErrors
 * @version 1.0.0
 */
var MonitorRunwithErrors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MonitorRunwithErrors</code>.
   * @alias module:model/MonitorRunwithErrors
   * @param run {module:model/Run} 
   */
  function MonitorRunwithErrors(run) {
    _classCallCheck(this, MonitorRunwithErrors);

    MonitorRunwithErrors.initialize(this, run);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MonitorRunwithErrors, null, [{
    key: "initialize",
    value: function initialize(obj, run) {
      obj['run'] = run;
    }
    /**
     * Constructs a <code>MonitorRunwithErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MonitorRunwithErrors} obj Optional instance to populate.
     * @return {module:model/MonitorRunwithErrors} The populated <code>MonitorRunwithErrors</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MonitorRunwithErrors();

        if (data.hasOwnProperty('run')) {
          obj['run'] = _Run["default"].constructFromObject(data['run']);
        }
      }

      return obj;
    }
  }]);

  return MonitorRunwithErrors;
}();
/**
 * @member {module:model/Run} run
 */


MonitorRunwithErrors.prototype['run'] = undefined;
var _default = MonitorRunwithErrors;
exports["default"] = _default;