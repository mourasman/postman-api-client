"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Components = _interopRequireDefault(require("./Components"));

var _Info = _interopRequireDefault(require("./Info4"));

var _Paths = _interopRequireDefault(require("./Paths"));

var _Server = _interopRequireDefault(require("./Server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Input model module.
 * @module model/Input
 * @version 1.0.0
 */
var Input = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Input</code>.
   * @alias module:model/Input
   * @param openapi {String} 
   * @param info {module:model/Info4} 
   * @param servers {Array.<module:model/Server>} 
   * @param paths {module:model/Paths} 
   * @param components {module:model/Components} 
   */
  function Input(openapi, info, servers, paths, components) {
    _classCallCheck(this, Input);

    Input.initialize(this, openapi, info, servers, paths, components);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Input, null, [{
    key: "initialize",
    value: function initialize(obj, openapi, info, servers, paths, components) {
      obj['openapi'] = openapi;
      obj['info'] = info;
      obj['servers'] = servers;
      obj['paths'] = paths;
      obj['components'] = components;
    }
    /**
     * Constructs a <code>Input</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Input} obj Optional instance to populate.
     * @return {module:model/Input} The populated <code>Input</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Input();

        if (data.hasOwnProperty('openapi')) {
          obj['openapi'] = _ApiClient["default"].convertToType(data['openapi'], 'String');
        }

        if (data.hasOwnProperty('info')) {
          obj['info'] = _Info["default"].constructFromObject(data['info']);
        }

        if (data.hasOwnProperty('servers')) {
          obj['servers'] = _ApiClient["default"].convertToType(data['servers'], [_Server["default"]]);
        }

        if (data.hasOwnProperty('paths')) {
          obj['paths'] = _Paths["default"].constructFromObject(data['paths']);
        }

        if (data.hasOwnProperty('components')) {
          obj['components'] = _Components["default"].constructFromObject(data['components']);
        }
      }

      return obj;
    }
  }]);

  return Input;
}();
/**
 * @member {String} openapi
 */


Input.prototype['openapi'] = undefined;
/**
 * @member {module:model/Info4} info
 */

Input.prototype['info'] = undefined;
/**
 * @member {Array.<module:model/Server>} servers
 */

Input.prototype['servers'] = undefined;
/**
 * @member {module:model/Paths} paths
 */

Input.prototype['paths'] = undefined;
/**
 * @member {module:model/Components} components
 */

Input.prototype['components'] = undefined;
var _default = Input;
exports["default"] = _default;