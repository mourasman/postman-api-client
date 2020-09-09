"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Request = _interopRequireDefault(require("./Request6"));

var _Response = _interopRequireDefault(require("./Response1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Item7 model module.
 * @module model/Item7
 * @version 1.0.0
 */
var Item7 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Item7</code>.
   * @alias module:model/Item7
   * @param name {String} 
   * @param postmanId {String} 
   * @param request {module:model/Request6} 
   * @param response {Array.<module:model/Response1>} 
   */
  function Item7(name, postmanId, request, response) {
    _classCallCheck(this, Item7);

    Item7.initialize(this, name, postmanId, request, response);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Item7, null, [{
    key: "initialize",
    value: function initialize(obj, name, postmanId, request, response) {
      obj['name'] = name;
      obj['_postman_id'] = postmanId;
      obj['request'] = request;
      obj['response'] = response;
    }
    /**
     * Constructs a <code>Item7</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Item7} obj Optional instance to populate.
     * @return {module:model/Item7} The populated <code>Item7</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Item7();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('_postman_id')) {
          obj['_postman_id'] = _ApiClient["default"].convertToType(data['_postman_id'], 'String');
        }

        if (data.hasOwnProperty('request')) {
          obj['request'] = _Request["default"].constructFromObject(data['request']);
        }

        if (data.hasOwnProperty('response')) {
          obj['response'] = _ApiClient["default"].convertToType(data['response'], [_Response["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Item7;
}();
/**
 * @member {String} name
 */


Item7.prototype['name'] = undefined;
/**
 * @member {String} _postman_id
 */

Item7.prototype['_postman_id'] = undefined;
/**
 * @member {module:model/Request6} request
 */

Item7.prototype['request'] = undefined;
/**
 * @member {Array.<module:model/Response1>} response
 */

Item7.prototype['response'] = undefined;
var _default = Item7;
exports["default"] = _default;