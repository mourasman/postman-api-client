"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Workspace = _interopRequireDefault(require("./Workspace1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ValidResponse5 model module.
 * @module model/ValidResponse5
 * @version 1.0.0
 */
var ValidResponse5 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidResponse5</code>.
   * @alias module:model/ValidResponse5
   * @param workspace {module:model/Workspace1} 
   */
  function ValidResponse5(workspace) {
    _classCallCheck(this, ValidResponse5);

    ValidResponse5.initialize(this, workspace);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidResponse5, null, [{
    key: "initialize",
    value: function initialize(obj, workspace) {
      obj['workspace'] = workspace;
    }
    /**
     * Constructs a <code>ValidResponse5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidResponse5} obj Optional instance to populate.
     * @return {module:model/ValidResponse5} The populated <code>ValidResponse5</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidResponse5();

        if (data.hasOwnProperty('workspace')) {
          obj['workspace'] = _Workspace["default"].constructFromObject(data['workspace']);
        }
      }

      return obj;
    }
  }]);

  return ValidResponse5;
}();
/**
 * @member {module:model/Workspace1} workspace
 */


ValidResponse5.prototype['workspace'] = undefined;
var _default = ValidResponse5;
exports["default"] = _default;