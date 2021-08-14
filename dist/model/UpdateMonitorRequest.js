"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Monitor = _interopRequireDefault(require("./Monitor4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UpdateMonitorRequest model module.
 * @module model/UpdateMonitorRequest
 * @version 1.0.0
 */
var UpdateMonitorRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateMonitorRequest</code>.
   * @alias module:model/UpdateMonitorRequest
   * @param monitor {module:model/Monitor4} 
   */
  function UpdateMonitorRequest(monitor) {
    _classCallCheck(this, UpdateMonitorRequest);

    UpdateMonitorRequest.initialize(this, monitor);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateMonitorRequest, null, [{
    key: "initialize",
    value: function initialize(obj, monitor) {
      obj['monitor'] = monitor;
    }
    /**
     * Constructs a <code>UpdateMonitorRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMonitorRequest} obj Optional instance to populate.
     * @return {module:model/UpdateMonitorRequest} The populated <code>UpdateMonitorRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateMonitorRequest();

        if (data.hasOwnProperty('monitor')) {
          obj['monitor'] = _Monitor["default"].constructFromObject(data['monitor']);
        }
      }

      return obj;
    }
  }]);

  return UpdateMonitorRequest;
}();
/**
 * @member {module:model/Monitor4} monitor
 */


UpdateMonitorRequest.prototype['monitor'] = undefined;
var _default = UpdateMonitorRequest;
exports["default"] = _default;