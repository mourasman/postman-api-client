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
 * The Body3 model module.
 * @module model/Body3
 * @version 1.0.0
 */
var Body3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Body3</code>.
   * @alias module:model/Body3
   * @param contentLength {Number} 
   * @param mode {String} 
   */
  function Body3(contentLength, mode) {
    _classCallCheck(this, Body3);

    Body3.initialize(this, contentLength, mode);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Body3, null, [{
    key: "initialize",
    value: function initialize(obj, contentLength, mode) {
      obj['contentLength'] = contentLength;
      obj['mode'] = mode;
    }
    /**
     * Constructs a <code>Body3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body3} obj Optional instance to populate.
     * @return {module:model/Body3} The populated <code>Body3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Body3();

        if (data.hasOwnProperty('contentLength')) {
          obj['contentLength'] = _ApiClient["default"].convertToType(data['contentLength'], 'Number');
        }

        if (data.hasOwnProperty('mode')) {
          obj['mode'] = _ApiClient["default"].convertToType(data['mode'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Body3;
}();
/**
 * @member {Number} contentLength
 */


Body3.prototype['contentLength'] = undefined;
/**
 * @member {String} mode
 */

Body3.prototype['mode'] = undefined;
var _default = Body3;
exports["default"] = _default;