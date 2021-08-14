"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Execution = _interopRequireDefault(require("./Execution"));

var _Failure = _interopRequireDefault(require("./Failure"));

var _Info = _interopRequireDefault(require("./Info3"));

var _Stats = _interopRequireDefault(require("./Stats1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Run model module.
 * @module model/Run
 * @version 1.0.0
 */
var Run = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Run</code>.
   * @alias module:model/Run
   * @param info {module:model/Info3} 
   * @param stats {module:model/Stats1} 
   * @param executions {Array.<module:model/Execution>} 
   * @param failures {Array.<module:model/Failure>} 
   */
  function Run(info, stats, executions, failures) {
    _classCallCheck(this, Run);

    Run.initialize(this, info, stats, executions, failures);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Run, null, [{
    key: "initialize",
    value: function initialize(obj, info, stats, executions, failures) {
      obj['info'] = info;
      obj['stats'] = stats;
      obj['executions'] = executions;
      obj['failures'] = failures;
    }
    /**
     * Constructs a <code>Run</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Run} obj Optional instance to populate.
     * @return {module:model/Run} The populated <code>Run</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Run();

        if (data.hasOwnProperty('info')) {
          obj['info'] = _Info["default"].constructFromObject(data['info']);
        }

        if (data.hasOwnProperty('stats')) {
          obj['stats'] = _Stats["default"].constructFromObject(data['stats']);
        }

        if (data.hasOwnProperty('executions')) {
          obj['executions'] = _ApiClient["default"].convertToType(data['executions'], [_Execution["default"]]);
        }

        if (data.hasOwnProperty('failures')) {
          obj['failures'] = _ApiClient["default"].convertToType(data['failures'], [_Failure["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Run;
}();
/**
 * @member {module:model/Info3} info
 */


Run.prototype['info'] = undefined;
/**
 * @member {module:model/Stats1} stats
 */

Run.prototype['stats'] = undefined;
/**
 * @member {Array.<module:model/Execution>} executions
 */

Run.prototype['executions'] = undefined;
/**
 * @member {Array.<module:model/Failure>} failures
 */

Run.prototype['failures'] = undefined;
var _default = Run;
exports["default"] = _default;