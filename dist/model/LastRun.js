"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Stats = _interopRequireDefault(require("./Stats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LastRun model module.
 * @module model/LastRun
 * @version 1.0.0
 */
var LastRun = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LastRun</code>.
   * @alias module:model/LastRun
   * @param status {String} 
   * @param startedAt {String} 
   * @param finishedAt {String} 
   * @param stats {module:model/Stats} 
   */
  function LastRun(status, startedAt, finishedAt, stats) {
    _classCallCheck(this, LastRun);

    LastRun.initialize(this, status, startedAt, finishedAt, stats);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LastRun, null, [{
    key: "initialize",
    value: function initialize(obj, status, startedAt, finishedAt, stats) {
      obj['status'] = status;
      obj['startedAt'] = startedAt;
      obj['finishedAt'] = finishedAt;
      obj['stats'] = stats;
    }
    /**
     * Constructs a <code>LastRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LastRun} obj Optional instance to populate.
     * @return {module:model/LastRun} The populated <code>LastRun</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LastRun();

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('startedAt')) {
          obj['startedAt'] = _ApiClient["default"].convertToType(data['startedAt'], 'String');
        }

        if (data.hasOwnProperty('finishedAt')) {
          obj['finishedAt'] = _ApiClient["default"].convertToType(data['finishedAt'], 'String');
        }

        if (data.hasOwnProperty('stats')) {
          obj['stats'] = _Stats["default"].constructFromObject(data['stats']);
        }
      }

      return obj;
    }
  }]);

  return LastRun;
}();
/**
 * @member {String} status
 */


LastRun.prototype['status'] = undefined;
/**
 * @member {String} startedAt
 */

LastRun.prototype['startedAt'] = undefined;
/**
 * @member {String} finishedAt
 */

LastRun.prototype['finishedAt'] = undefined;
/**
 * @member {module:model/Stats} stats
 */

LastRun.prototype['stats'] = undefined;
var _default = LastRun;
exports["default"] = _default;