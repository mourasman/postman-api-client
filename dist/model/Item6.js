"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Item = _interopRequireDefault(require("./Item7"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Item6 model module.
 * @module model/Item6
 * @version 1.0.0
 */
var Item6 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Item6</code>.
   * @alias module:model/Item6
   * @param name {String} 
   * @param item {Array.<module:model/Item7>} 
   * @param postmanId {String} 
   */
  function Item6(name, item, postmanId) {
    _classCallCheck(this, Item6);

    Item6.initialize(this, name, item, postmanId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Item6, null, [{
    key: "initialize",
    value: function initialize(obj, name, item, postmanId) {
      obj['name'] = name;
      obj['item'] = item;
      obj['_postman_id'] = postmanId;
    }
    /**
     * Constructs a <code>Item6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Item6} obj Optional instance to populate.
     * @return {module:model/Item6} The populated <code>Item6</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Item6();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('item')) {
          obj['item'] = _ApiClient["default"].convertToType(data['item'], [_Item["default"]]);
        }

        if (data.hasOwnProperty('_postman_id')) {
          obj['_postman_id'] = _ApiClient["default"].convertToType(data['_postman_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Item6;
}();
/**
 * @member {String} name
 */


Item6.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/Item7>} item
 */

Item6.prototype['item'] = undefined;
/**
 * @member {String} _postman_id
 */

Item6.prototype['_postman_id'] = undefined;
var _default = Item6;
exports["default"] = _default;