"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Info = _interopRequireDefault(require("./Info5"));

var _Item = _interopRequireDefault(require("./Item6"));

var _Variable = _interopRequireDefault(require("./Variable2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Collection13 model module.
 * @module model/Collection13
 * @version 1.0.0
 */
var Collection13 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Collection13</code>.
   * @alias module:model/Collection13
   * @param info {module:model/Info5} 
   * @param item {Array.<module:model/Item6>} 
   * @param variable {Array.<module:model/Variable2>} 
   */
  function Collection13(info, item, variable) {
    _classCallCheck(this, Collection13);

    Collection13.initialize(this, info, item, variable);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Collection13, null, [{
    key: "initialize",
    value: function initialize(obj, info, item, variable) {
      obj['info'] = info;
      obj['item'] = item;
      obj['variable'] = variable;
    }
    /**
     * Constructs a <code>Collection13</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Collection13} obj Optional instance to populate.
     * @return {module:model/Collection13} The populated <code>Collection13</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Collection13();

        if (data.hasOwnProperty('info')) {
          obj['info'] = _Info["default"].constructFromObject(data['info']);
        }

        if (data.hasOwnProperty('item')) {
          obj['item'] = _ApiClient["default"].convertToType(data['item'], [_Item["default"]]);
        }

        if (data.hasOwnProperty('variable')) {
          obj['variable'] = _ApiClient["default"].convertToType(data['variable'], [_Variable["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Collection13;
}();
/**
 * @member {module:model/Info5} info
 */


Collection13.prototype['info'] = undefined;
/**
 * @member {Array.<module:model/Item6>} item
 */

Collection13.prototype['item'] = undefined;
/**
 * @member {Array.<module:model/Variable2>} variable
 */

Collection13.prototype['variable'] = undefined;
var _default = Collection13;
exports["default"] = _default;