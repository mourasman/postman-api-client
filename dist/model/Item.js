"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Event = _interopRequireDefault(require("./Event"));

var _Request = _interopRequireDefault(require("./Request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Item model module.
 * @module model/Item
 * @version 1.0.0
 */
var Item = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Item</code>.
   * @alias module:model/Item
   * @param id {String} 
   * @param name {String} 
   * @param event {Array.<module:model/Event>} 
   * @param request {module:model/Request} 
   * @param response {Array.<String>} 
   */
  function Item(id, name, event, request, response) {
    _classCallCheck(this, Item);

    Item.initialize(this, id, name, event, request, response);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Item, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, event, request, response) {
      obj['id'] = id;
      obj['name'] = name;
      obj['event'] = event;
      obj['request'] = request;
      obj['response'] = response;
    }
    /**
     * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Item} obj Optional instance to populate.
     * @return {module:model/Item} The populated <code>Item</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Item();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], [_Event["default"]]);
        }

        if (data.hasOwnProperty('request')) {
          obj['request'] = _Request["default"].constructFromObject(data['request']);
        }

        if (data.hasOwnProperty('response')) {
          obj['response'] = _ApiClient["default"].convertToType(data['response'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Item;
}();
/**
 * @member {String} id
 */


Item.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Item.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/Event>} event
 */

Item.prototype['event'] = undefined;
/**
 * @member {module:model/Request} request
 */

Item.prototype['request'] = undefined;
/**
 * @member {Array.<String>} response
 */

Item.prototype['response'] = undefined;
var _default = Item;
exports["default"] = _default;