"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Info3 model module.
 * @module model/Info3
 * @version 1.0.0
 */
var Info3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Info3</code>.
   * @alias module:model/Info3
   * @param jobId {String} 
   * @param monitorId {String} 
   * @param name {String} 
   * @param collectionUid {String} 
   * @param status {String} 
   * @param startedAt {String} 
   * @param finishedAt {String} 
   */
  function Info3(jobId, monitorId, name, collectionUid, status, startedAt, finishedAt) {
    _classCallCheck(this, Info3);

    Info3.initialize(this, jobId, monitorId, name, collectionUid, status, startedAt, finishedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Info3, null, [{
    key: "initialize",
    value: function initialize(obj, jobId, monitorId, name, collectionUid, status, startedAt, finishedAt) {
      obj['jobId'] = jobId;
      obj['monitorId'] = monitorId;
      obj['name'] = name;
      obj['collectionUid'] = collectionUid;
      obj['status'] = status;
      obj['startedAt'] = startedAt;
      obj['finishedAt'] = finishedAt;
    }
    /**
     * Constructs a <code>Info3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Info3} obj Optional instance to populate.
     * @return {module:model/Info3} The populated <code>Info3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Info3();

        if (data.hasOwnProperty('jobId')) {
          obj['jobId'] = _ApiClient["default"].convertToType(data['jobId'], 'String');
        }

        if (data.hasOwnProperty('monitorId')) {
          obj['monitorId'] = _ApiClient["default"].convertToType(data['monitorId'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('collectionUid')) {
          obj['collectionUid'] = _ApiClient["default"].convertToType(data['collectionUid'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('startedAt')) {
          obj['startedAt'] = _ApiClient["default"].convertToType(data['startedAt'], 'String');
        }

        if (data.hasOwnProperty('finishedAt')) {
          obj['finishedAt'] = _ApiClient["default"].convertToType(data['finishedAt'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Info3;
}();
/**
 * @member {String} jobId
 */


Info3.prototype['jobId'] = undefined;
/**
 * @member {String} monitorId
 */

Info3.prototype['monitorId'] = undefined;
/**
 * @member {String} name
 */

Info3.prototype['name'] = undefined;
/**
 * @member {String} collectionUid
 */

Info3.prototype['collectionUid'] = undefined;
/**
 * @member {String} status
 */

Info3.prototype['status'] = undefined;
/**
 * @member {String} startedAt
 */

Info3.prototype['startedAt'] = undefined;
/**
 * @member {String} finishedAt
 */

Info3.prototype['finishedAt'] = undefined;
var _default = Info3;
exports["default"] = _default;