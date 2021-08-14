"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _A236b715E682460b97b6C1db24f7612e = _interopRequireDefault(require("./A236b715E682460b97b6C1db24f7612e"));

var _Model521b0486Ab914d3a918943c9380a = _interopRequireDefault(require("./Model521b0486Ab914d3a918943c9380a0533"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Integrationtest model module.
 * @module model/Integrationtest
 * @version 1.0.0
 */
var Integrationtest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Integrationtest</code>.
   * @alias module:model/Integrationtest
   * @param _521b0486Ab914d3a918943c9380a0533 {module:model/Model521b0486Ab914d3a918943c9380a0533} 
   * @param a236b715E682460b97b6C1db24f7612e {module:model/A236b715E682460b97b6C1db24f7612e} 
   */
  function Integrationtest(_521b0486Ab914d3a918943c9380a0533, a236b715E682460b97b6C1db24f7612e) {
    _classCallCheck(this, Integrationtest);

    Integrationtest.initialize(this, _521b0486Ab914d3a918943c9380a0533, a236b715E682460b97b6C1db24f7612e);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Integrationtest, null, [{
    key: "initialize",
    value: function initialize(obj, _521b0486Ab914d3a918943c9380a0533, a236b715E682460b97b6C1db24f7612e) {
      obj['521b0486-ab91-4d3a-9189-43c9380a0533'] = _521b0486Ab914d3a918943c9380a0533;
      obj['a236b715-e682-460b-97b6-c1db24f7612e'] = a236b715E682460b97b6C1db24f7612e;
    }
    /**
     * Constructs a <code>Integrationtest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Integrationtest} obj Optional instance to populate.
     * @return {module:model/Integrationtest} The populated <code>Integrationtest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Integrationtest();

        if (data.hasOwnProperty('521b0486-ab91-4d3a-9189-43c9380a0533')) {
          obj['521b0486-ab91-4d3a-9189-43c9380a0533'] = _Model521b0486Ab914d3a918943c9380a["default"].constructFromObject(data['521b0486-ab91-4d3a-9189-43c9380a0533']);
        }

        if (data.hasOwnProperty('a236b715-e682-460b-97b6-c1db24f7612e')) {
          obj['a236b715-e682-460b-97b6-c1db24f7612e'] = _A236b715E682460b97b6C1db24f7612e["default"].constructFromObject(data['a236b715-e682-460b-97b6-c1db24f7612e']);
        }
      }

      return obj;
    }
  }]);

  return Integrationtest;
}();
/**
 * @member {module:model/Model521b0486Ab914d3a918943c9380a0533} 521b0486-ab91-4d3a-9189-43c9380a0533
 */


Integrationtest.prototype['521b0486-ab91-4d3a-9189-43c9380a0533'] = undefined;
/**
 * @member {module:model/A236b715E682460b97b6C1db24f7612e} a236b715-e682-460b-97b6-c1db24f7612e
 */

Integrationtest.prototype['a236b715-e682-460b-97b6-c1db24f7612e'] = undefined;
var _default = Integrationtest;
exports["default"] = _default;