"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Workspace = _interopRequireDefault(require("./Workspace4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UpdateWorkspaceRequest model module.
 * @module model/UpdateWorkspaceRequest
 * @version 1.0.0
 */
var UpdateWorkspaceRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateWorkspaceRequest</code>.
   * @alias module:model/UpdateWorkspaceRequest
   * @param workspace {module:model/Workspace4} 
   */
  function UpdateWorkspaceRequest(workspace) {
    _classCallCheck(this, UpdateWorkspaceRequest);

    UpdateWorkspaceRequest.initialize(this, workspace);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateWorkspaceRequest, null, [{
    key: "initialize",
    value: function initialize(obj, workspace) {
      obj['workspace'] = workspace;
    }
    /**
     * Constructs a <code>UpdateWorkspaceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateWorkspaceRequest} obj Optional instance to populate.
     * @return {module:model/UpdateWorkspaceRequest} The populated <code>UpdateWorkspaceRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateWorkspaceRequest();

        if (data.hasOwnProperty('workspace')) {
          obj['workspace'] = _Workspace["default"].constructFromObject(data['workspace']);
        }
      }

      return obj;
    }
  }]);

  return UpdateWorkspaceRequest;
}();
/**
 * @member {module:model/Workspace4} workspace
 */


UpdateWorkspaceRequest.prototype['workspace'] = undefined;
var _default = UpdateWorkspaceRequest;
exports["default"] = _default;