"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelDefault = _interopRequireDefault(require("./ModelDefault"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Responses model module.
 * @module model/Responses
 * @version 1.0.0
 */
var Responses = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Responses</code>.
   * @alias module:model/Responses
   * @param _default {module:model/ModelDefault} 
   */
  function Responses(_default) {
    _classCallCheck(this, Responses);

    Responses.initialize(this, _default);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Responses, null, [{
    key: "initialize",
    value: function initialize(obj, _default) {
      obj['default'] = _default;
    }
    /**
     * Constructs a <code>Responses</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Responses} obj Optional instance to populate.
     * @return {module:model/Responses} The populated <code>Responses</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Responses();

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ModelDefault["default"].constructFromObject(data['default']);
        }
      }

      return obj;
    }
  }]);

  return Responses;
}();
/**
 * @member {module:model/ModelDefault} default
 */


Responses.prototype['default'] = undefined;
var _default2 = Responses;
exports["default"] = _default2;