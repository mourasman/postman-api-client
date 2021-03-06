"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Collection = _interopRequireDefault(require("./Collection3"));

var _Environment = _interopRequireDefault(require("./Environment3"));

var _Mock = _interopRequireDefault(require("./Mock7"));

var _Monitor = _interopRequireDefault(require("./Monitor7"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Workspace4 model module.
 * @module model/Workspace4
 * @version 1.0.0
 */
var Workspace4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Workspace4</code>.
   * @alias module:model/Workspace4
   * @param name {String} 
   * @param description {String} 
   * @param collections {Array.<module:model/Collection3>} 
   * @param environments {Array.<module:model/Environment3>} 
   * @param mocks {Array.<module:model/Mock7>} 
   * @param monitors {Array.<module:model/Monitor7>} 
   */
  function Workspace4(name, description, collections, environments, mocks, monitors) {
    _classCallCheck(this, Workspace4);

    Workspace4.initialize(this, name, description, collections, environments, mocks, monitors);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Workspace4, null, [{
    key: "initialize",
    value: function initialize(obj, name, description, collections, environments, mocks, monitors) {
      obj['name'] = name;
      obj['description'] = description;
      obj['collections'] = collections;
      obj['environments'] = environments;
      obj['mocks'] = mocks;
      obj['monitors'] = monitors;
    }
    /**
     * Constructs a <code>Workspace4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Workspace4} obj Optional instance to populate.
     * @return {module:model/Workspace4} The populated <code>Workspace4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Workspace4();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
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

        if (data.hasOwnProperty('mocks')) {
          obj['mocks'] = _ApiClient["default"].convertToType(data['mocks'], [_Mock["default"]]);
        }

        if (data.hasOwnProperty('monitors')) {
          obj['monitors'] = _ApiClient["default"].convertToType(data['monitors'], [_Monitor["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Workspace4;
}();
/**
 * @member {String} name
 */


Workspace4.prototype['name'] = undefined;
/**
 * @member {String} description
 */

Workspace4.prototype['description'] = undefined;
/**
 * @member {Array.<module:model/Collection3>} collections
 */

Workspace4.prototype['collections'] = undefined;
/**
 * @member {Array.<module:model/Environment3>} environments
 */

Workspace4.prototype['environments'] = undefined;
/**
 * @member {Array.<module:model/Mock7>} mocks
 */

Workspace4.prototype['mocks'] = undefined;
/**
 * @member {Array.<module:model/Monitor7>} monitors
 */

Workspace4.prototype['monitors'] = undefined;
var _default = Workspace4;
exports["default"] = _default;