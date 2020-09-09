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
 * The Createmultiplerelationsfromexistingcollections model module.
 * @module model/Createmultiplerelationsfromexistingcollections
 * @version 1.0.0
 */
var Createmultiplerelationsfromexistingcollections = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Createmultiplerelationsfromexistingcollections</code>.
   * @alias module:model/Createmultiplerelationsfromexistingcollections
   * @param contracttest {Array.<String>} 
   * @param testsuite {Array.<String>} 
   * @param documentation {Array.<String>} 
   */
  function Createmultiplerelationsfromexistingcollections(contracttest, testsuite, documentation) {
    _classCallCheck(this, Createmultiplerelationsfromexistingcollections);

    Createmultiplerelationsfromexistingcollections.initialize(this, contracttest, testsuite, documentation);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Createmultiplerelationsfromexistingcollections, null, [{
    key: "initialize",
    value: function initialize(obj, contracttest, testsuite, documentation) {
      obj['contracttest'] = contracttest;
      obj['testsuite'] = testsuite;
      obj['documentation'] = documentation;
    }
    /**
     * Constructs a <code>Createmultiplerelationsfromexistingcollections</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Createmultiplerelationsfromexistingcollections} obj Optional instance to populate.
     * @return {module:model/Createmultiplerelationsfromexistingcollections} The populated <code>Createmultiplerelationsfromexistingcollections</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Createmultiplerelationsfromexistingcollections();

        if (data.hasOwnProperty('contracttest')) {
          obj['contracttest'] = _ApiClient["default"].convertToType(data['contracttest'], ['String']);
        }

        if (data.hasOwnProperty('testsuite')) {
          obj['testsuite'] = _ApiClient["default"].convertToType(data['testsuite'], ['String']);
        }

        if (data.hasOwnProperty('documentation')) {
          obj['documentation'] = _ApiClient["default"].convertToType(data['documentation'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Createmultiplerelationsfromexistingcollections;
}();
/**
 * @member {Array.<String>} contracttest
 */


Createmultiplerelationsfromexistingcollections.prototype['contracttest'] = undefined;
/**
 * @member {Array.<String>} testsuite
 */

Createmultiplerelationsfromexistingcollections.prototype['testsuite'] = undefined;
/**
 * @member {Array.<String>} documentation
 */

Createmultiplerelationsfromexistingcollections.prototype['documentation'] = undefined;
var _default = Createmultiplerelationsfromexistingcollections;
exports["default"] = _default;