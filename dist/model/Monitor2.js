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
 * The Monitor2 model module.
 * @module model/Monitor2
 * @version 1.0.0
 */
var Monitor2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Monitor2</code>.
   * @alias module:model/Monitor2
   * @param name {String} 
   * @param schedule {module:model/Schedule1} 
   * @param collection {String} 
   * @param environment {String} 
   */
  function Monitor2(name, schedule, collection, environment) {
    _classCallCheck(this, Monitor2);

    Monitor2.initialize(this, name, schedule, collection, environment);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Monitor2, null, [{
    key: "initialize",
    value: function initialize(obj, name, schedule, collection, environment) {
      obj['name'] = name;
      obj['schedule'] = schedule;
      obj['collection'] = collection;
      obj['environment'] = environment;
    }
    /**
     * Constructs a <code>Monitor2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Monitor2} obj Optional instance to populate.
     * @return {module:model/Monitor2} The populated <code>Monitor2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Monitor2();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('schedule')) {
          obj['schedule'] = _Schedule["default"].constructFromObject(data['schedule']);
        }

        if (data.hasOwnProperty('collection')) {
          obj['collection'] = _ApiClient["default"].convertToType(data['collection'], 'String');
        }

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _ApiClient["default"].convertToType(data['environment'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Monitor2;
}();
/**
 * @member {String} name
 */


Monitor2.prototype['name'] = undefined;
/**
 * @member {module:model/Schedule1} schedule
 */

Monitor2.prototype['schedule'] = undefined;
/**
 * @member {String} collection
 */

Monitor2.prototype['collection'] = undefined;
/**
 * @member {String} environment
 */

Monitor2.prototype['environment'] = undefined;
var _default = Monitor2;
exports["default"] = _default;