"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationJson = _interopRequireDefault(require("./ApplicationJson"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Content model module.
 * @module model/Content
 * @version 1.0.0
 */
var Content = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Content</code>.
   * @alias module:model/Content
   * @param applicationJson {module:model/ApplicationJson} 
   */
  function Content(applicationJson) {
    _classCallCheck(this, Content);

    Content.initialize(this, applicationJson);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Content, null, [{
    key: "initialize",
    value: function initialize(obj, applicationJson) {
      obj['application/json'] = applicationJson;
    }
    /**
     * Constructs a <code>Content</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Content} obj Optional instance to populate.
     * @return {module:model/Content} The populated <code>Content</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Content();

        if (data.hasOwnProperty('application/json')) {
          obj['application/json'] = _ApplicationJson["default"].constructFromObject(data['application/json']);
        }
      }

      return obj;
    }
  }]);

  return Content;
}();
/**
 * @member {module:model/ApplicationJson} application/json
 */


Content.prototype['application/json'] = undefined;
var _default = Content;
exports["default"] = _default;