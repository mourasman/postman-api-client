"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Item = _interopRequireDefault(require("./Item2"));

var _Request = _interopRequireDefault(require("./Request2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Item1 model module.
 * @module model/Item1
 * @version 1.0.0
 */
var Item1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Item1</code>.
   * @alias module:model/Item1
   * @param name {String} 
   */
  function Item1(name) {
    _classCallCheck(this, Item1);

    Item1.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Item1, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>Item1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Item1} obj Optional instance to populate.
     * @return {module:model/Item1} The populated <code>Item1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Item1();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('item')) {
          obj['item'] = _ApiClient["default"].convertToType(data['item'], [_Item["default"]]);
        }

        if (data.hasOwnProperty('request')) {
          obj['request'] = _Request["default"].constructFromObject(data['request']);
        }
      }

      return obj;
    }
  }]);

  return Item1;
}();
/**
 * @member {String} name
 */


Item1.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/Item2>} item
 */

Item1.prototype['item'] = undefined;
/**
 * @member {module:model/Request2} request
 */

Item1.prototype['request'] = undefined;
var _default = Item1;
exports["default"] = _default;