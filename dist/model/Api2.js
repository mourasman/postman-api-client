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
 * The Api2 model module.
 * @module model/Api2
 * @version 1.0.0
 */
var Api2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Api2</code>.
   * @alias module:model/Api2
   * @param name {String} 
   * @param description {String} 
   */
  function Api2(name, description) {
    _classCallCheck(this, Api2);

    Api2.initialize(this, name, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Api2, null, [{
    key: "initialize",
    value: function initialize(obj, name, description) {
      obj['name'] = name;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>Api2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api2} obj Optional instance to populate.
     * @return {module:model/Api2} The populated <code>Api2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Api2();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Api2;
}();
/**
 * @member {String} name
 */


Api2.prototype['name'] = undefined;
/**
 * @member {String} description
 */

Api2.prototype['description'] = undefined;
var _default = Api2;
exports["default"] = _default;