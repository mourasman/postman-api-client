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
 * The Schema1 model module.
 * @module model/Schema1
 * @version 1.0.0
 */
var Schema1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Schema1</code>.
   * @alias module:model/Schema1
   * @param ref {String} 
   */
  function Schema1(ref) {
    _classCallCheck(this, Schema1);

    Schema1.initialize(this, ref);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Schema1, null, [{
    key: "initialize",
    value: function initialize(obj, ref) {
      obj['$ref'] = ref;
    }
    /**
     * Constructs a <code>Schema1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Schema1} obj Optional instance to populate.
     * @return {module:model/Schema1} The populated <code>Schema1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Schema1();

        if (data.hasOwnProperty('$ref')) {
          obj['$ref'] = _ApiClient["default"].convertToType(data['$ref'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Schema1;
}();
/**
 * @member {String} $ref
 */


Schema1.prototype['$ref'] = undefined;
var _default = Schema1;
exports["default"] = _default;