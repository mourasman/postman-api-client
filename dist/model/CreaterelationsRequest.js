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
 * The CreaterelationsRequest model module.
 * @module model/CreaterelationsRequest
 * @version 1.0.0
 */
var CreaterelationsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreaterelationsRequest</code>.
   * @alias module:model/CreaterelationsRequest
   * @param contracttest {Array.<String>} 
   * @param testsuite {Array.<String>} 
   * @param documentation {Array.<String>} 
   * @param mock {Array.<String>} 
   */
  function CreaterelationsRequest(contracttest, testsuite, documentation, mock) {
    _classCallCheck(this, CreaterelationsRequest);

    CreaterelationsRequest.initialize(this, contracttest, testsuite, documentation, mock);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreaterelationsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, contracttest, testsuite, documentation, mock) {
      obj['contracttest'] = contracttest;
      obj['testsuite'] = testsuite;
      obj['documentation'] = documentation;
      obj['mock'] = mock;
    }
    /**
     * Constructs a <code>CreaterelationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreaterelationsRequest} obj Optional instance to populate.
     * @return {module:model/CreaterelationsRequest} The populated <code>CreaterelationsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreaterelationsRequest();

        if (data.hasOwnProperty('contracttest')) {
          obj['contracttest'] = _ApiClient["default"].convertToType(data['contracttest'], ['String']);
        }

        if (data.hasOwnProperty('testsuite')) {
          obj['testsuite'] = _ApiClient["default"].convertToType(data['testsuite'], ['String']);
        }

        if (data.hasOwnProperty('documentation')) {
          obj['documentation'] = _ApiClient["default"].convertToType(data['documentation'], ['String']);
        }

        if (data.hasOwnProperty('mock')) {
          obj['mock'] = _ApiClient["default"].convertToType(data['mock'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CreaterelationsRequest;
}();
/**
 * @member {Array.<String>} contracttest
 */


CreaterelationsRequest.prototype['contracttest'] = undefined;
/**
 * @member {Array.<String>} testsuite
 */

CreaterelationsRequest.prototype['testsuite'] = undefined;
/**
 * @member {Array.<String>} documentation
 */

CreaterelationsRequest.prototype['documentation'] = undefined;
/**
 * @member {Array.<String>} mock
 */

CreaterelationsRequest.prototype['mock'] = undefined;
var _default = CreaterelationsRequest;
exports["default"] = _default;