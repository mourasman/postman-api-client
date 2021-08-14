"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Collection = _interopRequireDefault(require("./Collection6"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CollectionDeleted model module.
 * @module model/CollectionDeleted
 * @version 1.0.0
 */
var CollectionDeleted = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CollectionDeleted</code>.
   * @alias module:model/CollectionDeleted
   * @param collection {module:model/Collection6} 
   */
  function CollectionDeleted(collection) {
    _classCallCheck(this, CollectionDeleted);

    CollectionDeleted.initialize(this, collection);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CollectionDeleted, null, [{
    key: "initialize",
    value: function initialize(obj, collection) {
      obj['collection'] = collection;
    }
    /**
     * Constructs a <code>CollectionDeleted</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectionDeleted} obj Optional instance to populate.
     * @return {module:model/CollectionDeleted} The populated <code>CollectionDeleted</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CollectionDeleted();

        if (data.hasOwnProperty('collection')) {
          obj['collection'] = _Collection["default"].constructFromObject(data['collection']);
        }
      }

      return obj;
    }
  }]);

  return CollectionDeleted;
}();
/**
 * @member {module:model/Collection6} collection
 */


CollectionDeleted.prototype['collection'] = undefined;
var _default = CollectionDeleted;
exports["default"] = _default;