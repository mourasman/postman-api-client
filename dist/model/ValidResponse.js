"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Collection = _interopRequireDefault(require("./Collection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ValidResponse model module.
 * @module model/ValidResponse
 * @version 1.0.0
 */
var ValidResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidResponse</code>.
   * @alias module:model/ValidResponse
   * @param collections {Array.<module:model/Collection>} 
   */
  function ValidResponse(collections) {
    _classCallCheck(this, ValidResponse);

    ValidResponse.initialize(this, collections);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidResponse, null, [{
    key: "initialize",
    value: function initialize(obj, collections) {
      obj['collections'] = collections;
    }
    /**
     * Constructs a <code>ValidResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidResponse} obj Optional instance to populate.
     * @return {module:model/ValidResponse} The populated <code>ValidResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidResponse();

        if (data.hasOwnProperty('collections')) {
          obj['collections'] = _ApiClient["default"].convertToType(data['collections'], [_Collection["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ValidResponse;
}();
/**
 * @member {Array.<module:model/Collection>} collections
 */


ValidResponse.prototype['collections'] = undefined;
var _default = ValidResponse;
exports["default"] = _default;