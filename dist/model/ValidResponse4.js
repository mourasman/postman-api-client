"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Workspace = _interopRequireDefault(require("./Workspace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ValidResponse4 model module.
 * @module model/ValidResponse4
 * @version 1.0.0
 */
var ValidResponse4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidResponse4</code>.
   * @alias module:model/ValidResponse4
   * @param workspaces {Array.<module:model/Workspace>} 
   */
  function ValidResponse4(workspaces) {
    _classCallCheck(this, ValidResponse4);

    ValidResponse4.initialize(this, workspaces);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidResponse4, null, [{
    key: "initialize",
    value: function initialize(obj, workspaces) {
      obj['workspaces'] = workspaces;
    }
    /**
     * Constructs a <code>ValidResponse4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidResponse4} obj Optional instance to populate.
     * @return {module:model/ValidResponse4} The populated <code>ValidResponse4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidResponse4();

        if (data.hasOwnProperty('workspaces')) {
          obj['workspaces'] = _ApiClient["default"].convertToType(data['workspaces'], [_Workspace["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ValidResponse4;
}();
/**
 * @member {Array.<module:model/Workspace>} workspaces
 */


ValidResponse4.prototype['workspaces'] = undefined;
var _default = ValidResponse4;
exports["default"] = _default;