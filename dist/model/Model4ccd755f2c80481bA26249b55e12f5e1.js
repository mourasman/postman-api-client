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
 * The Model4ccd755f2c80481bA26249b55e12f5e1 model module.
 * @module model/Model4ccd755f2c80481bA26249b55e12f5e1
 * @version 1.0.0
 */
var Model4ccd755f2c80481bA26249b55e12f5e1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Model4ccd755f2c80481bA26249b55e12f5e1</code>.
   * @alias module:model/Model4ccd755f2c80481bA26249b55e12f5e1
   * @param id {String} 
   * @param name {String} 
   * @param url {String} 
   * @param updatedAt {String} 
   */
  function Model4ccd755f2c80481bA26249b55e12f5e1(id, name, url, updatedAt) {
    _classCallCheck(this, Model4ccd755f2c80481bA26249b55e12f5e1);

    Model4ccd755f2c80481bA26249b55e12f5e1.initialize(this, id, name, url, updatedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Model4ccd755f2c80481bA26249b55e12f5e1, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, url, updatedAt) {
      obj['id'] = id;
      obj['name'] = name;
      obj['url'] = url;
      obj['updatedAt'] = updatedAt;
    }
    /**
     * Constructs a <code>Model4ccd755f2c80481bA26249b55e12f5e1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Model4ccd755f2c80481bA26249b55e12f5e1} obj Optional instance to populate.
     * @return {module:model/Model4ccd755f2c80481bA26249b55e12f5e1} The populated <code>Model4ccd755f2c80481bA26249b55e12f5e1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Model4ccd755f2c80481bA26249b55e12f5e1();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Model4ccd755f2c80481bA26249b55e12f5e1;
}();
/**
 * @member {String} id
 */


Model4ccd755f2c80481bA26249b55e12f5e1.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Model4ccd755f2c80481bA26249b55e12f5e1.prototype['name'] = undefined;
/**
 * @member {String} url
 */

Model4ccd755f2c80481bA26249b55e12f5e1.prototype['url'] = undefined;
/**
 * @member {String} updatedAt
 */

Model4ccd755f2c80481bA26249b55e12f5e1.prototype['updatedAt'] = undefined;
var _default = Model4ccd755f2c80481bA26249b55e12f5e1;
exports["default"] = _default;