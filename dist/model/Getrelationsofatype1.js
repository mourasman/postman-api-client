"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Collection = _interopRequireDefault(require("./Collection13"));

var _VersionTag = _interopRequireDefault(require("./VersionTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Getrelationsofatype1 model module.
 * @module model/Getrelationsofatype1
 * @version 1.0.0
 */
var Getrelationsofatype1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Getrelationsofatype1</code>.
   * @alias module:model/Getrelationsofatype1
   * @param id {String} 
   * @param name {String} 
   * @param updatedAt {String} 
   * @param createdAt {String} 
   * @param versionTag {module:model/VersionTag} 
   * @param collection {module:model/Collection13} 
   */
  function Getrelationsofatype1(id, name, updatedAt, createdAt, versionTag, collection) {
    _classCallCheck(this, Getrelationsofatype1);

    Getrelationsofatype1.initialize(this, id, name, updatedAt, createdAt, versionTag, collection);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Getrelationsofatype1, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, updatedAt, createdAt, versionTag, collection) {
      obj['id'] = id;
      obj['name'] = name;
      obj['updatedAt'] = updatedAt;
      obj['createdAt'] = createdAt;
      obj['versionTag'] = versionTag;
      obj['collection'] = collection;
    }
    /**
     * Constructs a <code>Getrelationsofatype1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Getrelationsofatype1} obj Optional instance to populate.
     * @return {module:model/Getrelationsofatype1} The populated <code>Getrelationsofatype1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Getrelationsofatype1();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('versionTag')) {
          obj['versionTag'] = _VersionTag["default"].constructFromObject(data['versionTag']);
        }

        if (data.hasOwnProperty('collection')) {
          obj['collection'] = _Collection["default"].constructFromObject(data['collection']);
        }
      }

      return obj;
    }
  }]);

  return Getrelationsofatype1;
}();
/**
 * @member {String} id
 */


Getrelationsofatype1.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Getrelationsofatype1.prototype['name'] = undefined;
/**
 * @member {String} updatedAt
 */

Getrelationsofatype1.prototype['updatedAt'] = undefined;
/**
 * @member {String} createdAt
 */

Getrelationsofatype1.prototype['createdAt'] = undefined;
/**
 * @member {module:model/VersionTag} versionTag
 */

Getrelationsofatype1.prototype['versionTag'] = undefined;
/**
 * @member {module:model/Collection13} collection
 */

Getrelationsofatype1.prototype['collection'] = undefined;
var _default = Getrelationsofatype1;
exports["default"] = _default;