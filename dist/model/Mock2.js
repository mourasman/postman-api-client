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
 * The Mock2 model module.
 * @module model/Mock2
 * @version 1.0.0
 */
var Mock2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Mock2</code>.
   * @alias module:model/Mock2
   * @param collection {String} 
   * @param environment {String} 
   */
  function Mock2(collection, environment) {
    _classCallCheck(this, Mock2);

    Mock2.initialize(this, collection, environment);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Mock2, null, [{
    key: "initialize",
    value: function initialize(obj, collection, environment) {
      obj['collection'] = collection;
      obj['environment'] = environment;
    }
    /**
     * Constructs a <code>Mock2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Mock2} obj Optional instance to populate.
     * @return {module:model/Mock2} The populated <code>Mock2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Mock2();

        if (data.hasOwnProperty('collection')) {
          obj['collection'] = _ApiClient["default"].convertToType(data['collection'], 'String');
        }

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _ApiClient["default"].convertToType(data['environment'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Mock2;
}();
/**
 * @member {String} collection
 */


Mock2.prototype['collection'] = undefined;
/**
 * @member {String} environment
 */

Mock2.prototype['environment'] = undefined;
var _default = Mock2;
exports["default"] = _default;