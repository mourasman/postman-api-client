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
import Workspace3 from './Workspace3';

/**
 * The SuccessfulResponse6 model module.
 * @module model/SuccessfulResponse6
 * @version 1.0.0
 */
class SuccessfulResponse6 {
    /**
     * Constructs a new <code>SuccessfulResponse6</code>.
     * @alias module:model/SuccessfulResponse6
     * @param workspace {module:model/Workspace3} 
     */
    constructor(workspace) { 
        
        SuccessfulResponse6.initialize(this, workspace);
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
     * Constructs a <code>SuccessfulResponse6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessfulResponse6} obj Optional instance to populate.
     * @return {module:model/SuccessfulResponse6} The populated <code>SuccessfulResponse6</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuccessfulResponse6();

            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = Workspace3.constructFromObject(data['workspace']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Workspace3} workspace
 */
SuccessfulResponse6.prototype['workspace'] = undefined;






export default SuccessfulResponse6;

