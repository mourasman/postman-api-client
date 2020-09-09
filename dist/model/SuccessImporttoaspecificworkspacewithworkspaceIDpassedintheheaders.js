"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Collection = _interopRequireDefault(require("./Collection3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders model module.
 * @module model/SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders
 * @version 1.0.0
 */
var SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders</code>.
   * @alias module:model/SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders
   * @param collections {Array.<module:model/Collection3>} 
   */
  function SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders(collections) {
    _classCallCheck(this, SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders);

    SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders.initialize(this, collections);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders, null, [{
    key: "initialize",
    value: function initialize(obj, collections) {
      obj['collections'] = collections;
    }
    /**
     * Constructs a <code>SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders} obj Optional instance to populate.
     * @return {module:model/SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders} The populated <code>SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders();

        if (data.hasOwnProperty('collections')) {
          obj['collections'] = _ApiClient["default"].convertToType(data['collections'], [_Collection["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders;
}();
/**
 * @member {Array.<module:model/Collection3>} collections
 */


SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders.prototype['collections'] = undefined;
var _default = SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders;
exports["default"] = _default;