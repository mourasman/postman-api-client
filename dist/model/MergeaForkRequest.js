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
 * The MergeaForkRequest model module.
 * @module model/MergeaForkRequest
 * @version 1.0.0
 */
var MergeaForkRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MergeaForkRequest</code>.
   * @alias module:model/MergeaForkRequest
   * @param strategy {String} 
   * @param source {String} 
   * @param destination {String} 
   */
  function MergeaForkRequest(strategy, source, destination) {
    _classCallCheck(this, MergeaForkRequest);

    MergeaForkRequest.initialize(this, strategy, source, destination);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MergeaForkRequest, null, [{
    key: "initialize",
    value: function initialize(obj, strategy, source, destination) {
      obj['strategy'] = strategy;
      obj['source'] = source;
      obj['destination'] = destination;
    }
    /**
     * Constructs a <code>MergeaForkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MergeaForkRequest} obj Optional instance to populate.
     * @return {module:model/MergeaForkRequest} The populated <code>MergeaForkRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MergeaForkRequest();

        if (data.hasOwnProperty('strategy')) {
          obj['strategy'] = _ApiClient["default"].convertToType(data['strategy'], 'String');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], 'String');
        }

        if (data.hasOwnProperty('destination')) {
          obj['destination'] = _ApiClient["default"].convertToType(data['destination'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MergeaForkRequest;
}();
/**
 * @member {String} strategy
 */


MergeaForkRequest.prototype['strategy'] = undefined;
/**
 * @member {String} source
 */

MergeaForkRequest.prototype['source'] = undefined;
/**
 * @member {String} destination
 */

MergeaForkRequest.prototype['destination'] = undefined;
var _default = MergeaForkRequest;
exports["default"] = _default;