"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Contracttest = _interopRequireDefault(require("./Contracttest1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Getrelationsofatype model module.
 * @module model/Getrelationsofatype
 * @version 1.0.0
 */
var Getrelationsofatype = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Getrelationsofatype</code>.
   * @alias module:model/Getrelationsofatype
   * @param contracttest {Array.<module:model/Contracttest1>} 
   */
  function Getrelationsofatype(contracttest) {
    _classCallCheck(this, Getrelationsofatype);

    Getrelationsofatype.initialize(this, contracttest);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Getrelationsofatype, null, [{
    key: "initialize",
    value: function initialize(obj, contracttest) {
      obj['contracttest'] = contracttest;
    }
    /**
     * Constructs a <code>Getrelationsofatype</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Getrelationsofatype} obj Optional instance to populate.
     * @return {module:model/Getrelationsofatype} The populated <code>Getrelationsofatype</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Getrelationsofatype();

        if (data.hasOwnProperty('contracttest')) {
          obj['contracttest'] = _ApiClient["default"].convertToType(data['contracttest'], [_Contracttest["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Getrelationsofatype;
}();
/**
 * @member {Array.<module:model/Contracttest1>} contracttest
 */


Getrelationsofatype.prototype['contracttest'] = undefined;
var _default = Getrelationsofatype;
exports["default"] = _default;