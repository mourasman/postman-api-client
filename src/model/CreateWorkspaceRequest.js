/**
 * Postman API
 * Postman API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Workspace2 from './Workspace2';

/**
 * The CreateWorkspaceRequest model module.
 * @module model/CreateWorkspaceRequest
 * @version 1.0.0
 */
class CreateWorkspaceRequest {
    /**
     * Constructs a new <code>CreateWorkspaceRequest</code>.
     * @alias module:model/CreateWorkspaceRequest
     * @param workspace {module:model/Workspace2} 
     */
    constructor(workspace) { 
        
        CreateWorkspaceRequest.initialize(this, workspace);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, workspace) { 
        obj['workspace'] = workspace;
    }

    /**
     * Constructs a <code>CreateWorkspaceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWorkspaceRequest} obj Optional instance to populate.
     * @return {module:model/CreateWorkspaceRequest} The populated <code>CreateWorkspaceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWorkspaceRequest();

            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = Workspace2.constructFromObject(data['workspace']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Workspace2} workspace
 */
CreateWorkspaceRequest.prototype['workspace'] = undefined;






export default CreateWorkspaceRequest;
