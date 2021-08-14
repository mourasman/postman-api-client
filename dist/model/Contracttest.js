"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Model2a9b8fa888b74b8683728e3f6f6e07f = _interopRequireDefault(require("./Model2a9b8fa888b74b8683728e3f6f6e07f2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Contracttest model module.
 * @module model/Contracttest
 * @version 1.0.0
 */
var Contracttest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Contracttest</code>.
   * @alias module:model/Contracttest
   * @param _2a9b8fa888b74b8683728e3f6f6e07f2 {module:model/Model2a9b8fa888b74b8683728e3f6f6e07f2} 
   */
  function Contracttest(_2a9b8fa888b74b8683728e3f6f6e07f2) {
    _classCallCheck(this, Contracttest);

    Contracttest.initialize(this, _2a9b8fa888b74b8683728e3f6f6e07f2);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Contracttest, null, [{
    key: "initialize",
    value: function initialize(obj, _2a9b8fa888b74b8683728e3f6f6e07f2) {
      obj['2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2'] = _2a9b8fa888b74b8683728e3f6f6e07f2;
    }
    /**
     * Constructs a <code>Contracttest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contracttest} obj Optional instance to populate.
     * @return {module:model/Contracttest} The populated <code>Contracttest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Contracttest();

        if (data.hasOwnProperty('2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2')) {
          obj['2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2'] = _Model2a9b8fa888b74b8683728e3f6f6e07f["default"].constructFromObject(data['2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2']);
        }
      }

      return obj;
    }
  }]);

  return Contracttest;
}();
/**
 * @member {module:model/Model2a9b8fa888b74b8683728e3f6f6e07f2} 2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2
 */


Contracttest.prototype['2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2'] = undefined;
var _default = Contracttest;
exports["default"] = _default;