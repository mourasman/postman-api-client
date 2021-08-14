"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VersionTag model module.
 * @module model/VersionTag
 * @version 1.0.0
 */
var VersionTag = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VersionTag</code>.
   * @alias module:model/VersionTag
   * @param name {String} 
   * @param id {String} 
   */
  function VersionTag(name, id) {
    _classCallCheck(this, VersionTag);

    VersionTag.initialize(this, name, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VersionTag, null, [{
    key: "initialize",
    value: function initialize(obj, name, id) {
      obj['name'] = name;
      obj['id'] = id;
    }
    /**
     * Constructs a <code>VersionTag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionTag} obj Optional instance to populate.
     * @return {module:model/VersionTag} The populated <code>VersionTag</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VersionTag();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VersionTag;
}();
/**
 * @member {String} name
 */


VersionTag.prototype['name'] = undefined;
/**
 * @member {String} id
 */

VersionTag.prototype['id'] = undefined;
var _default = VersionTag;
exports["default"] = _default;