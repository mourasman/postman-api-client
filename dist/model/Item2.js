"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Request = _interopRequireDefault(require("./Request1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Item2 model module.
 * @module model/Item2
 * @version 1.0.0
 */
var Item2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Item2</code>.
   * @alias module:model/Item2
   * @param name {String} 
   * @param request {module:model/Request1} 
   */
  function Item2(name, request) {
    _classCallCheck(this, Item2);

    Item2.initialize(this, name, request);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Item2, null, [{
    key: "initialize",
    value: function initialize(obj, name, request) {
      obj['name'] = name;
      obj['request'] = request;
    }
    /**
     * Constructs a <code>Item2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Item2} obj Optional instance to populate.
     * @return {module:model/Item2} The populated <code>Item2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Item2();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('request')) {
          obj['request'] = _Request["default"].constructFromObject(data['request']);
        }
      }

      return obj;
    }
  }]);

  return Item2;
}();
/**
 * @member {String} name
 */


Item2.prototype['name'] = undefined;
/**
 * @member {module:model/Request1} request
 */

Item2.prototype['request'] = undefined;
var _default = Item2;
exports["default"] = _default;