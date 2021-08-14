"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Content = _interopRequireDefault(require("./Content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModelDefault model module.
 * @module model/ModelDefault
 * @version 1.0.0
 */
var ModelDefault = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelDefault</code>.
   * @alias module:model/ModelDefault
   * @param description {String} 
   * @param content {module:model/Content} 
   */
  function ModelDefault(description, content) {
    _classCallCheck(this, ModelDefault);

    ModelDefault.initialize(this, description, content);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelDefault, null, [{
    key: "initialize",
    value: function initialize(obj, description, content) {
      obj['description'] = description;
      obj['content'] = content;
    }
    /**
     * Constructs a <code>ModelDefault</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelDefault} obj Optional instance to populate.
     * @return {module:model/ModelDefault} The populated <code>ModelDefault</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelDefault();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _Content["default"].constructFromObject(data['content']);
        }
      }

      return obj;
    }
  }]);

  return ModelDefault;
}();
/**
 * @member {String} description
 */


ModelDefault.prototype['description'] = undefined;
/**
 * @member {module:model/Content} content
 */

ModelDefault.prototype['content'] = undefined;
var _default = ModelDefault;
exports["default"] = _default;