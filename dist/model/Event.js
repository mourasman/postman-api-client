"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Script = _interopRequireDefault(require("./Script"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Event model module.
 * @module model/Event
 * @version 1.0.0
 */
var Event = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Event</code>.
   * @alias module:model/Event
   * @param listen {String} 
   * @param script {module:model/Script} 
   */
  function Event(listen, script) {
    _classCallCheck(this, Event);

    Event.initialize(this, listen, script);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Event, null, [{
    key: "initialize",
    value: function initialize(obj, listen, script) {
      obj['listen'] = listen;
      obj['script'] = script;
    }
    /**
     * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Event} obj Optional instance to populate.
     * @return {module:model/Event} The populated <code>Event</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Event();

        if (data.hasOwnProperty('listen')) {
          obj['listen'] = _ApiClient["default"].convertToType(data['listen'], 'String');
        }

        if (data.hasOwnProperty('script')) {
          obj['script'] = _Script["default"].constructFromObject(data['script']);
        }
      }

      return obj;
    }
  }]);

  return Event;
}();
/**
 * @member {String} listen
 */


Event.prototype['listen'] = undefined;
/**
 * @member {module:model/Script} script
 */

Event.prototype['script'] = undefined;
var _default = Event;
exports["default"] = _default;