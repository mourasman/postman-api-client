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
 * The Relations model module.
 * @module model/Relations
 * @version 1.0.0
 */
var Relations = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Relations</code>.
   * @alias module:model/Relations
   * @param monitor {Boolean} 
   * @param mock {Boolean} 
   * @param documentation {Boolean} 
   */
  function Relations(monitor, mock, documentation) {
    _classCallCheck(this, Relations);

    Relations.initialize(this, monitor, mock, documentation);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Relations, null, [{
    key: "initialize",
    value: function initialize(obj, monitor, mock, documentation) {
      obj['monitor'] = monitor;
      obj['mock'] = mock;
      obj['documentation'] = documentation;
    }
    /**
     * Constructs a <code>Relations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Relations} obj Optional instance to populate.
     * @return {module:model/Relations} The populated <code>Relations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Relations();

        if (data.hasOwnProperty('monitor')) {
          obj['monitor'] = _ApiClient["default"].convertToType(data['monitor'], 'Boolean');
        }

        if (data.hasOwnProperty('mock')) {
          obj['mock'] = _ApiClient["default"].convertToType(data['mock'], 'Boolean');
        }

        if (data.hasOwnProperty('documentation')) {
          obj['documentation'] = _ApiClient["default"].convertToType(data['documentation'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Relations;
}();
/**
 * @member {Boolean} monitor
 */


Relations.prototype['monitor'] = undefined;
/**
 * @member {Boolean} mock
 */

Relations.prototype['mock'] = undefined;
/**
 * @member {Boolean} documentation
 */

Relations.prototype['documentation'] = undefined;
var _default = Relations;
exports["default"] = _default;