"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OnError = _interopRequireDefault(require("./OnError"));

var _OnFailure = _interopRequireDefault(require("./OnFailure"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Notifications model module.
 * @module model/Notifications
 * @version 1.0.0
 */
var Notifications = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Notifications</code>.
   * @alias module:model/Notifications
   * @param onError {Array.<module:model/OnError>} 
   * @param onFailure {Array.<module:model/OnFailure>} 
   */
  function Notifications(onError, onFailure) {
    _classCallCheck(this, Notifications);

    Notifications.initialize(this, onError, onFailure);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Notifications, null, [{
    key: "initialize",
    value: function initialize(obj, onError, onFailure) {
      obj['onError'] = onError;
      obj['onFailure'] = onFailure;
    }
    /**
     * Constructs a <code>Notifications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notifications} obj Optional instance to populate.
     * @return {module:model/Notifications} The populated <code>Notifications</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Notifications();

        if (data.hasOwnProperty('onError')) {
          obj['onError'] = _ApiClient["default"].convertToType(data['onError'], [_OnError["default"]]);
        }

        if (data.hasOwnProperty('onFailure')) {
          obj['onFailure'] = _ApiClient["default"].convertToType(data['onFailure'], [_OnFailure["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Notifications;
}();
/**
 * @member {Array.<module:model/OnError>} onError
 */


Notifications.prototype['onError'] = undefined;
/**
 * @member {Array.<module:model/OnFailure>} onFailure
 */

Notifications.prototype['onFailure'] = undefined;
var _default = Notifications;
exports["default"] = _default;