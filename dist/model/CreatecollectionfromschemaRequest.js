"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Relations = _interopRequireDefault(require("./Relations1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreatecollectionfromschemaRequest model module.
 * @module model/CreatecollectionfromschemaRequest
 * @version 1.0.0
 */
var CreatecollectionfromschemaRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatecollectionfromschemaRequest</code>.
   * @alias module:model/CreatecollectionfromschemaRequest
   * @param name {String} 
   * @param relations {Array.<module:model/Relations1>} 
   */
  function CreatecollectionfromschemaRequest(name, relations) {
    _classCallCheck(this, CreatecollectionfromschemaRequest);

    CreatecollectionfromschemaRequest.initialize(this, name, relations);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatecollectionfromschemaRequest, null, [{
    key: "initialize",
    value: function initialize(obj, name, relations) {
      obj['name'] = name;
      obj['relations'] = relations;
    }
    /**
     * Constructs a <code>CreatecollectionfromschemaRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatecollectionfromschemaRequest} obj Optional instance to populate.
     * @return {module:model/CreatecollectionfromschemaRequest} The populated <code>CreatecollectionfromschemaRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatecollectionfromschemaRequest();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('relations')) {
          obj['relations'] = _ApiClient["default"].convertToType(data['relations'], [_Relations["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreatecollectionfromschemaRequest;
}();
/**
 * @member {String} name
 */


CreatecollectionfromschemaRequest.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/Relations1>} relations
 */

CreatecollectionfromschemaRequest.prototype['relations'] = undefined;
var _default = CreatecollectionfromschemaRequest;
exports["default"] = _default;