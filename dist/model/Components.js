"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Schemas = _interopRequireDefault(require("./Schemas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Components model module.
 * @module model/Components
 * @version 1.0.0
 */
var Components = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Components</code>.
   * @alias module:model/Components
   * @param schemas {module:model/Schemas} 
   */
  function Components(schemas) {
    _classCallCheck(this, Components);

    Components.initialize(this, schemas);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Components, null, [{
    key: "initialize",
    value: function initialize(obj, schemas) {
      obj['schemas'] = schemas;
    }
    /**
     * Constructs a <code>Components</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Components} obj Optional instance to populate.
     * @return {module:model/Components} The populated <code>Components</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Components();

        if (data.hasOwnProperty('schemas')) {
          obj['schemas'] = _Schemas["default"].constructFromObject(data['schemas']);
        }
      }

      return obj;
    }
  }]);

  return Components;
}();
/**
 * @member {module:model/Schemas} schemas
 */


Components.prototype['schemas'] = undefined;
var _default = Components;
exports["default"] = _default;