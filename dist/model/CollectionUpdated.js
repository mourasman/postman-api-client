"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Collection = _interopRequireDefault(require("./Collection3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CollectionUpdated model module.
 * @module model/CollectionUpdated
 * @version 1.0.0
 */
var CollectionUpdated = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CollectionUpdated</code>.
   * @alias module:model/CollectionUpdated
   * @param collection {module:model/Collection3} 
   */
  function CollectionUpdated(collection) {
    _classCallCheck(this, CollectionUpdated);

    CollectionUpdated.initialize(this, collection);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CollectionUpdated, null, [{
    key: "initialize",
    value: function initialize(obj, collection) {
      obj['collection'] = collection;
    }
    /**
     * Constructs a <code>CollectionUpdated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectionUpdated} obj Optional instance to populate.
     * @return {module:model/CollectionUpdated} The populated <code>CollectionUpdated</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CollectionUpdated();

        if (data.hasOwnProperty('collection')) {
          obj['collection'] = _Collection["default"].constructFromObject(data['collection']);
        }
      }

      return obj;
    }
  }]);

  return CollectionUpdated;
}();
/**
 * @member {module:model/Collection3} collection
 */


CollectionUpdated.prototype['collection'] = undefined;
var _default = CollectionUpdated;
exports["default"] = _default;