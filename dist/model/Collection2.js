"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Info = _interopRequireDefault(require("./Info1"));

var _Item = _interopRequireDefault(require("./Item1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Collection2 model module.
 * @module model/Collection2
 * @version 1.0.0
 */
var Collection2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Collection2</code>.
   * @alias module:model/Collection2
   * @param info {module:model/Info1} 
   * @param item {Array.<module:model/Item1>} 
   */
  function Collection2(info, item) {
    _classCallCheck(this, Collection2);

    Collection2.initialize(this, info, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Collection2, null, [{
    key: "initialize",
    value: function initialize(obj, info, item) {
      obj['info'] = info;
      obj['item'] = item;
    }
    /**
     * Constructs a <code>Collection2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Collection2} obj Optional instance to populate.
     * @return {module:model/Collection2} The populated <code>Collection2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Collection2();

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

  return Collection2;
}();
/**
 * @member {module:model/Info1} info
 */


Collection2.prototype['info'] = undefined;
/**
 * @member {Array.<module:model/Item1>} item
 */

Collection2.prototype['item'] = undefined;
var _default = Collection2;
exports["default"] = _default;