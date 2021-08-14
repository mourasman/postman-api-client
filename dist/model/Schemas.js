"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("./Error21"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Schemas model module.
 * @module model/Schemas
 * @version 1.0.0
 */
var Schemas = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Schemas</code>.
   * @alias module:model/Schemas
   * @param error {module:model/Error21} 
   */
  function Schemas(error) {
    _classCallCheck(this, Schemas);

    Schemas.initialize(this, error);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Schemas, null, [{
    key: "initialize",
    value: function initialize(obj, error) {
      obj['Error'] = error;
    }
    /**
     * Constructs a <code>Schemas</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Schemas} obj Optional instance to populate.
     * @return {module:model/Schemas} The populated <code>Schemas</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Schemas();

        if (data.hasOwnProperty('Error')) {
          obj['Error'] = _Error["default"].constructFromObject(data['Error']);
        }
      }

      return obj;
    }
  }]);

  return Schemas;
}();
/**
 * @member {module:model/Error21} Error
 */


Schemas.prototype['Error'] = undefined;
var _default = Schemas;
exports["default"] = _default;