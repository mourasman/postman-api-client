"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Info = _interopRequireDefault(require("./Info"));

var _Item = _interopRequireDefault(require("./Item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Collection1 model module.
 * @module model/Collection1
 * @version 1.0.0
 */
var Collection1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Collection1</code>.
   * @alias module:model/Collection1
   * @param variables {Array.<String>} 
   * @param info {module:model/Info} 
   * @param item {Array.<module:model/Item>} 
   */
  function Collection1(variables, info, item) {
    _classCallCheck(this, Collection1);

    Collection1.initialize(this, variables, info, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Collection1, null, [{
    key: "initialize",
    value: function initialize(obj, variables, info, item) {
      obj['variables'] = variables;
      obj['info'] = info;
      obj['item'] = item;
    }
    /**
     * Constructs a <code>Collection1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Collection1} obj Optional instance to populate.
     * @return {module:model/Collection1} The populated <code>Collection1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Collection1();

        if (data.hasOwnProperty('variables')) {
          obj['variables'] = _ApiClient["default"].convertToType(data['variables'], ['String']);
        }

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

  return Collection1;
}();
/**
 * @member {Array.<String>} variables
 */


Collection1.prototype['variables'] = undefined;
/**
 * @member {module:model/Info} info
 */

Collection1.prototype['info'] = undefined;
/**
 * @member {Array.<module:model/Item>} item
 */

Collection1.prototype['item'] = undefined;
var _default = Collection1;
exports["default"] = _default;