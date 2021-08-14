"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Info = _interopRequireDefault(require("./Info"));

var _Item = _interopRequireDefault(require("./Item1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Collection4 model module.
 * @module model/Collection4
 * @version 1.0.0
 */
var Collection4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Collection4</code>.
   * @alias module:model/Collection4
   * @param info {module:model/Info} 
   * @param item {Array.<module:model/Item1>} 
   */
  function Collection4(info, item) {
    _classCallCheck(this, Collection4);

    Collection4.initialize(this, info, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Collection4, null, [{
    key: "initialize",
    value: function initialize(obj, info, item) {
      obj['info'] = info;
      obj['item'] = item;
    }
    /**
     * Constructs a <code>Collection4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Collection4} obj Optional instance to populate.
     * @return {module:model/Collection4} The populated <code>Collection4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Collection4();

        if (data.hasOwnProperty('info')) {
          obj['info'] = _Info["default"].constructFromObject(data['info']);
        }

        if (data.hasOwnProperty('item')) {
          obj['item'] = _ApiClient["default"].convertToType(data['item'], [_Item["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Collection4;
}();
/**
 * @member {module:model/Info} info
 */


Collection4.prototype['info'] = undefined;
/**
 * @member {Array.<module:model/Item1>} item
 */

Collection4.prototype['item'] = undefined;
var _default = Collection4;
exports["default"] = _default;