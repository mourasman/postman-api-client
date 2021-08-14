"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Schedule = _interopRequireDefault(require("./Schedule1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Monitor4 model module.
 * @module model/Monitor4
 * @version 1.0.0
 */
var Monitor4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Monitor4</code>.
   * @alias module:model/Monitor4
   * @param name {String} 
   * @param schedule {module:model/Schedule1} 
   */
  function Monitor4(name, schedule) {
    _classCallCheck(this, Monitor4);

    Monitor4.initialize(this, name, schedule);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Monitor4, null, [{
    key: "initialize",
    value: function initialize(obj, name, schedule) {
      obj['name'] = name;
      obj['schedule'] = schedule;
    }
    /**
     * Constructs a <code>Monitor4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Monitor4} obj Optional instance to populate.
     * @return {module:model/Monitor4} The populated <code>Monitor4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Monitor4();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('schedule')) {
          obj['schedule'] = _Schedule["default"].constructFromObject(data['schedule']);
        }
      }

      return obj;
    }
  }]);

  return Monitor4;
}();
/**
 * @member {String} name
 */


Monitor4.prototype['name'] = undefined;
/**
 * @member {module:model/Schedule1} schedule
 */

Monitor4.prototype['schedule'] = undefined;
var _default = Monitor4;
exports["default"] = _default;