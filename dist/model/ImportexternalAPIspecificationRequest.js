"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Input = _interopRequireDefault(require("./Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ImportexternalAPIspecificationRequest model module.
 * @module model/ImportexternalAPIspecificationRequest
 * @version 1.0.0
 */
var ImportexternalAPIspecificationRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ImportexternalAPIspecificationRequest</code>.
   * @alias module:model/ImportexternalAPIspecificationRequest
   * @param type {String} 
   * @param input {module:model/Input} 
   */
  function ImportexternalAPIspecificationRequest(type, input) {
    _classCallCheck(this, ImportexternalAPIspecificationRequest);

    ImportexternalAPIspecificationRequest.initialize(this, type, input);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportexternalAPIspecificationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, type, input) {
      obj['type'] = type;
      obj['input'] = input;
    }
    /**
     * Constructs a <code>ImportexternalAPIspecificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportexternalAPIspecificationRequest} obj Optional instance to populate.
     * @return {module:model/ImportexternalAPIspecificationRequest} The populated <code>ImportexternalAPIspecificationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportexternalAPIspecificationRequest();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('input')) {
          obj['input'] = _Input["default"].constructFromObject(data['input']);
        }
      }

      return obj;
    }
  }]);

  return ImportexternalAPIspecificationRequest;
}();
/**
 * @member {String} type
 */


ImportexternalAPIspecificationRequest.prototype['type'] = undefined;
/**
 * @member {module:model/Input} input
 */

ImportexternalAPIspecificationRequest.prototype['input'] = undefined;
var _default = ImportexternalAPIspecificationRequest;
exports["default"] = _default;