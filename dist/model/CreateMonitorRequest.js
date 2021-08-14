"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Monitor = _interopRequireDefault(require("./Monitor2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateMonitorRequest model module.
 * @module model/CreateMonitorRequest
 * @version 1.0.0
 */
var CreateMonitorRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateMonitorRequest</code>.
   * @alias module:model/CreateMonitorRequest
   * @param monitor {module:model/Monitor2} 
   */
  function CreateMonitorRequest(monitor) {
    _classCallCheck(this, CreateMonitorRequest);

    CreateMonitorRequest.initialize(this, monitor);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateMonitorRequest, null, [{
    key: "initialize",
    value: function initialize(obj, monitor) {
      obj['monitor'] = monitor;
    }
    /**
     * Constructs a <code>CreateMonitorRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateMonitorRequest} obj Optional instance to populate.
     * @return {module:model/CreateMonitorRequest} The populated <code>CreateMonitorRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateMonitorRequest();

        if (data.hasOwnProperty('monitor')) {
          obj['monitor'] = _Monitor["default"].constructFromObject(data['monitor']);
        }
      }

      return obj;
    }
  }]);

  return CreateMonitorRequest;
}();
/**
 * @member {module:model/Monitor2} monitor
 */


CreateMonitorRequest.prototype['monitor'] = undefined;
var _default = CreateMonitorRequest;
exports["default"] = _default;