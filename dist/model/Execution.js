"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Assertions = _interopRequireDefault(require("./Assertions2"));

var _Item = _interopRequireDefault(require("./Item5"));

var _Request = _interopRequireDefault(require("./Request5"));

var _Response = _interopRequireDefault(require("./Response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Execution model module.
 * @module model/Execution
 * @version 1.0.0
 */
var Execution = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Execution</code>.
   * @alias module:model/Execution
   * @param id {Number} 
   * @param item {module:model/Item5} 
   * @param request {module:model/Request5} 
   * @param response {module:model/Response} 
   */
  function Execution(id, item, request, response) {
    _classCallCheck(this, Execution);

    Execution.initialize(this, id, item, request, response);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Execution, null, [{
    key: "initialize",
    value: function initialize(obj, id, item, request, response) {
      obj['id'] = id;
      obj['item'] = item;
      obj['request'] = request;
      obj['response'] = response;
    }
    /**
     * Constructs a <code>Execution</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Execution} obj Optional instance to populate.
     * @return {module:model/Execution} The populated <code>Execution</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Execution();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('item')) {
          obj['item'] = _Item["default"].constructFromObject(data['item']);
        }

        if (data.hasOwnProperty('request')) {
          obj['request'] = _Request["default"].constructFromObject(data['request']);
        }

        if (data.hasOwnProperty('response')) {
          obj['response'] = _Response["default"].constructFromObject(data['response']);
        }

        if (data.hasOwnProperty('assertions')) {
          obj['assertions'] = _Assertions["default"].constructFromObject(data['assertions']);
        }
      }

      return obj;
    }
  }]);

  return Execution;
}();
/**
 * @member {Number} id
 */


Execution.prototype['id'] = undefined;
/**
 * @member {module:model/Item5} item
 */

Execution.prototype['item'] = undefined;
/**
 * @member {module:model/Request5} request
 */

Execution.prototype['request'] = undefined;
/**
 * @member {module:model/Response} response
 */

Execution.prototype['response'] = undefined;
/**
 * @member {module:model/Assertions2} assertions
 */

Execution.prototype['assertions'] = undefined;
var _default = Execution;
exports["default"] = _default;