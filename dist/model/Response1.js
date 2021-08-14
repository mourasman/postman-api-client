"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Header = _interopRequireDefault(require("./Header3"));

var _OriginalRequest = _interopRequireDefault(require("./OriginalRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Response1 model module.
 * @module model/Response1
 * @version 1.0.0
 */
var Response1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Response1</code>.
   * @alias module:model/Response1
   * @param id {String} 
   * @param name {String} 
   * @param originalRequest {module:model/OriginalRequest} 
   * @param status {String} 
   * @param code {Number} 
   * @param postmanPreviewlanguage {String} 
   * @param header {Array.<module:model/Header3>} 
   * @param cookie {Array.<String>} 
   * @param responseTime {String} 
   * @param body {String} 
   */
  function Response1(id, name, originalRequest, status, code, postmanPreviewlanguage, header, cookie, responseTime, body) {
    _classCallCheck(this, Response1);

    Response1.initialize(this, id, name, originalRequest, status, code, postmanPreviewlanguage, header, cookie, responseTime, body);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Response1, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, originalRequest, status, code, postmanPreviewlanguage, header, cookie, responseTime, body) {
      obj['id'] = id;
      obj['name'] = name;
      obj['originalRequest'] = originalRequest;
      obj['status'] = status;
      obj['code'] = code;
      obj['_postman_previewlanguage'] = postmanPreviewlanguage;
      obj['header'] = header;
      obj['cookie'] = cookie;
      obj['responseTime'] = responseTime;
      obj['body'] = body;
    }
    /**
     * Constructs a <code>Response1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Response1} obj Optional instance to populate.
     * @return {module:model/Response1} The populated <code>Response1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Response1();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('originalRequest')) {
          obj['originalRequest'] = _OriginalRequest["default"].constructFromObject(data['originalRequest']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'Number');
        }

        if (data.hasOwnProperty('_postman_previewlanguage')) {
          obj['_postman_previewlanguage'] = _ApiClient["default"].convertToType(data['_postman_previewlanguage'], 'String');
        }

        if (data.hasOwnProperty('header')) {
          obj['header'] = _ApiClient["default"].convertToType(data['header'], [_Header["default"]]);
        }

        if (data.hasOwnProperty('cookie')) {
          obj['cookie'] = _ApiClient["default"].convertToType(data['cookie'], ['String']);
        }

        if (data.hasOwnProperty('responseTime')) {
          obj['responseTime'] = _ApiClient["default"].convertToType(data['responseTime'], 'String');
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Response1;
}();
/**
 * @member {String} id
 */


Response1.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Response1.prototype['name'] = undefined;
/**
 * @member {module:model/OriginalRequest} originalRequest
 */

Response1.prototype['originalRequest'] = undefined;
/**
 * @member {String} status
 */

Response1.prototype['status'] = undefined;
/**
 * @member {Number} code
 */

Response1.prototype['code'] = undefined;
/**
 * @member {String} _postman_previewlanguage
 */

Response1.prototype['_postman_previewlanguage'] = undefined;
/**
 * @member {Array.<module:model/Header3>} header
 */

Response1.prototype['header'] = undefined;
/**
 * @member {Array.<String>} cookie
 */

Response1.prototype['cookie'] = undefined;
/**
 * @member {String} responseTime
 */

Response1.prototype['responseTime'] = undefined;
/**
 * @member {String} body
 */

Response1.prototype['body'] = undefined;
var _default = Response1;
exports["default"] = _default;