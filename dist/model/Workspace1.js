"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Collection = _interopRequireDefault(require("./Collection3"));

var _Environment = _interopRequireDefault(require("./Environment3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Workspace1 model module.
 * @module model/Workspace1
 * @version 1.0.0
 */
var Workspace1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Workspace1</code>.
   * @alias module:model/Workspace1
   * @param id {String} 
   * @param name {String} 
   * @param type {String} 
   * @param description {String} 
   * @param collections {Array.<module:model/Collection3>} 
   * @param environments {Array.<module:model/Environment3>} 
   */
  function Workspace1(id, name, type, description, collections, environments) {
    _classCallCheck(this, Workspace1);

    Workspace1.initialize(this, id, name, type, description, collections, environments);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Workspace1, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, type, description, collections, environments) {
      obj['id'] = id;
      obj['name'] = name;
      obj['type'] = type;
      obj['description'] = description;
      obj['collections'] = collections;
      obj['environments'] = environments;
    }
    /**
     * Constructs a <code>Workspace1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Workspace1} obj Optional instance to populate.
     * @return {module:model/Workspace1} The populated <code>Workspace1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Workspace1();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('collections')) {
          obj['collections'] = _ApiClient["default"].convertToType(data['collections'], [_Collection["default"]]);
        }

        if (data.hasOwnProperty('environments')) {
          obj['environments'] = _ApiClient["default"].convertToType(data['environments'], [_Environment["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Workspace1;
}();
/**
 * @member {String} id
 */


Workspace1.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Workspace1.prototype['name'] = undefined;
/**
 * @member {String} type
 */

Workspace1.prototype['type'] = undefined;
/**
 * @member {String} description
 */

Workspace1.prototype['description'] = undefined;
/**
 * @member {Array.<module:model/Collection3>} collections
 */

Workspace1.prototype['collections'] = undefined;
/**
 * @member {Array.<module:model/Environment3>} environments
 */

Workspace1.prototype['environments'] = undefined;
var _default = Workspace1;
exports["default"] = _default;