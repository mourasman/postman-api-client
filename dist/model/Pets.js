"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Get = _interopRequireDefault(require("./Get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Pets model module.
 * @module model/Pets
 * @version 1.0.0
 */
var Pets = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Pets</code>.
   * @alias module:model/Pets
   * @param get {module:model/Get} 
   */
  function Pets(get) {
    _classCallCheck(this, Pets);

    Pets.initialize(this, get);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Pets, null, [{
    key: "initialize",
    value: function initialize(obj, get) {
      obj['get'] = get;
    }
    /**
     * Constructs a <code>Pets</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pets} obj Optional instance to populate.
     * @return {module:model/Pets} The populated <code>Pets</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Pets();

        if (data.hasOwnProperty('get')) {
          obj['get'] = _Get["default"].constructFromObject(data['get']);
        }
      }

      return obj;
    }
  }]);

  return Pets;
}();
/**
 * @member {module:model/Get} get
 */


Pets.prototype['get'] = undefined;
var _default = Pets;
exports["default"] = _default;