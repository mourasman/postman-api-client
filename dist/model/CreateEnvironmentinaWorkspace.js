"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Environment = _interopRequireDefault(require("./Environment3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateEnvironmentinaWorkspace model module.
 * @module model/CreateEnvironmentinaWorkspace
 * @version 1.0.0
 */
var CreateEnvironmentinaWorkspace = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateEnvironmentinaWorkspace</code>.
   * @alias module:model/CreateEnvironmentinaWorkspace
   * @param environment {module:model/Environment3} 
   */
  function CreateEnvironmentinaWorkspace(environment) {
    _classCallCheck(this, CreateEnvironmentinaWorkspace);

    CreateEnvironmentinaWorkspace.initialize(this, environment);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateEnvironmentinaWorkspace, null, [{
    key: "initialize",
    value: function initialize(obj, environment) {
      obj['environment'] = environment;
    }
    /**
     * Constructs a <code>CreateEnvironmentinaWorkspace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEnvironmentinaWorkspace} obj Optional instance to populate.
     * @return {module:model/CreateEnvironmentinaWorkspace} The populated <code>CreateEnvironmentinaWorkspace</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateEnvironmentinaWorkspace();

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _Environment["default"].constructFromObject(data['environment']);
        }
      }

      return obj;
    }
  }]);

  return CreateEnvironmentinaWorkspace;
}();
/**
 * @member {module:model/Environment3} environment
 */


CreateEnvironmentinaWorkspace.prototype['environment'] = undefined;
var _default = CreateEnvironmentinaWorkspace;
exports["default"] = _default;