"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LastRun = _interopRequireDefault(require("./LastRun"));

var _Notifications = _interopRequireDefault(require("./Notifications"));

var _Options = _interopRequireDefault(require("./Options"));

var _Schedule = _interopRequireDefault(require("./Schedule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Monitor1 model module.
 * @module model/Monitor1
 * @version 1.0.0
 */
var Monitor1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Monitor1</code>.
   * @alias module:model/Monitor1
   * @param id {String} 
   * @param name {String} 
   * @param uid {String} 
   * @param owner {String} 
   * @param collectionUid {String} 
   * @param environmentUid {String} 
   * @param options {module:model/Options} 
   * @param notifications {module:model/Notifications} 
   * @param distribution {Array.<String>} 
   * @param schedule {module:model/Schedule} 
   * @param lastRun {module:model/LastRun} 
   */
  function Monitor1(id, name, uid, owner, collectionUid, environmentUid, options, notifications, distribution, schedule, lastRun) {
    _classCallCheck(this, Monitor1);

    Monitor1.initialize(this, id, name, uid, owner, collectionUid, environmentUid, options, notifications, distribution, schedule, lastRun);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Monitor1, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, uid, owner, collectionUid, environmentUid, options, notifications, distribution, schedule, lastRun) {
      obj['id'] = id;
      obj['name'] = name;
      obj['uid'] = uid;
      obj['owner'] = owner;
      obj['collectionUid'] = collectionUid;
      obj['environmentUid'] = environmentUid;
      obj['options'] = options;
      obj['notifications'] = notifications;
      obj['distribution'] = distribution;
      obj['schedule'] = schedule;
      obj['lastRun'] = lastRun;
    }
    /**
     * Constructs a <code>Monitor1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Monitor1} obj Optional instance to populate.
     * @return {module:model/Monitor1} The populated <code>Monitor1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Monitor1();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('uid')) {
          obj['uid'] = _ApiClient["default"].convertToType(data['uid'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], 'String');
        }

        if (data.hasOwnProperty('collectionUid')) {
          obj['collectionUid'] = _ApiClient["default"].convertToType(data['collectionUid'], 'String');
        }

        if (data.hasOwnProperty('environmentUid')) {
          obj['environmentUid'] = _ApiClient["default"].convertToType(data['environmentUid'], 'String');
        }

        if (data.hasOwnProperty('options')) {
          obj['options'] = _Options["default"].constructFromObject(data['options']);
        }

        if (data.hasOwnProperty('notifications')) {
          obj['notifications'] = _Notifications["default"].constructFromObject(data['notifications']);
        }

        if (data.hasOwnProperty('distribution')) {
          obj['distribution'] = _ApiClient["default"].convertToType(data['distribution'], ['String']);
        }

        if (data.hasOwnProperty('schedule')) {
          obj['schedule'] = _Schedule["default"].constructFromObject(data['schedule']);
        }

        if (data.hasOwnProperty('lastRun')) {
          obj['lastRun'] = _LastRun["default"].constructFromObject(data['lastRun']);
        }
      }

      return obj;
    }
  }]);

  return Monitor1;
}();
/**
 * @member {String} id
 */


Monitor1.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Monitor1.prototype['name'] = undefined;
/**
 * @member {String} uid
 */

Monitor1.prototype['uid'] = undefined;
/**
 * @member {String} owner
 */

Monitor1.prototype['owner'] = undefined;
/**
 * @member {String} collectionUid
 */

Monitor1.prototype['collectionUid'] = undefined;
/**
 * @member {String} environmentUid
 */

Monitor1.prototype['environmentUid'] = undefined;
/**
 * @member {module:model/Options} options
 */

Monitor1.prototype['options'] = undefined;
/**
 * @member {module:model/Notifications} notifications
 */

Monitor1.prototype['notifications'] = undefined;
/**
 * @member {Array.<String>} distribution
 */

Monitor1.prototype['distribution'] = undefined;
/**
 * @member {module:model/Schedule} schedule
 */

Monitor1.prototype['schedule'] = undefined;
/**
 * @member {module:model/LastRun} lastRun
 */

Monitor1.prototype['lastRun'] = undefined;
var _default = Monitor1;
exports["default"] = _default;