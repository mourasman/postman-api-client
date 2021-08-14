"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Collection = _interopRequireDefault(require("./Collection6"));

var _Relations = _interopRequireDefault(require("./Relations2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Createcollectionfromschema model module.
 * @module model/Createcollectionfromschema
 * @version 1.0.0
 */
var Createcollectionfromschema = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Createcollectionfromschema</code>.
   * @alias module:model/Createcollectionfromschema
   * @param collection {module:model/Collection6} 
   * @param relations {Array.<module:model/Relations2>} 
   */
  function Createcollectionfromschema(collection, relations) {
    _classCallCheck(this, Createcollectionfromschema);

    Createcollectionfromschema.initialize(this, collection, relations);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Createcollectionfromschema, null, [{
    key: "initialize",
    value: function initialize(obj, collection, relations) {
      obj['collection'] = collection;
      obj['relations'] = relations;
    }
    /**
     * Constructs a <code>Createcollectionfromschema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Createcollectionfromschema} obj Optional instance to populate.
     * @return {module:model/Createcollectionfromschema} The populated <code>Createcollectionfromschema</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Createcollectionfromschema();

        if (data.hasOwnProperty('collection')) {
          obj['collection'] = _Collection["default"].constructFromObject(data['collection']);
        }

        if (data.hasOwnProperty('relations')) {
          obj['relations'] = _ApiClient["default"].convertToType(data['relations'], [_Relations["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Createcollectionfromschema;
}();
/**
 * @member {module:model/Collection6} collection
 */


Createcollectionfromschema.prototype['collection'] = undefined;
/**
 * @member {Array.<module:model/Relations2>} relations
 */

Createcollectionfromschema.prototype['relations'] = undefined;
var _default = Createcollectionfromschema;
exports["default"] = _default;