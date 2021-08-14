"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("./Error1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CollectionNotFound model module.
 * @module model/CollectionNotFound
 * @version 1.0.0
 */
var CollectionNotFound = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CollectionNotFound</code>.
   * @alias module:model/CollectionNotFound
   * @param error {module:model/Error1} 
   */
  function CollectionNotFound(error) {
    _classCallCheck(this, CollectionNotFound);

    CollectionNotFound.initialize(this, error);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CollectionNotFound, null, [{
    key: "initialize",
    value: function initialize(obj, error) {
      obj['error'] = error;
    }
    /**
     * Constructs a <code>CollectionNotFound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectionNotFound} obj Optional instance to populate.
     * @return {module:model/CollectionNotFound} The populated <code>CollectionNotFound</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CollectionNotFound();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return CollectionNotFound;
}();
/**
 * @member {module:model/Error1} error
 */


CollectionNotFound.prototype['error'] = undefined;
var _default = CollectionNotFound;
exports["default"] = _default;