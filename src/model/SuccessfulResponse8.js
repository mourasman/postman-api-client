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
import Workspace6 from './Workspace6';

/**
 * The SuccessfulResponse8 model module.
 * @module model/SuccessfulResponse8
 * @version 1.0.0
 */
class SuccessfulResponse8 {
    /**
     * Constructs a new <code>SuccessfulResponse8</code>.
     * @alias module:model/SuccessfulResponse8
     * @param workspace {module:model/Workspace6} 
     */
    constructor(workspace) { 
        
        SuccessfulResponse8.initialize(this, workspace);
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
     * Constructs a <code>SuccessfulResponse8</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessfulResponse8} obj Optional instance to populate.
     * @return {module:model/SuccessfulResponse8} The populated <code>SuccessfulResponse8</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuccessfulResponse8();

            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = Workspace6.constructFromObject(data['workspace']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Workspace6} workspace
 */
SuccessfulResponse8.prototype['workspace'] = undefined;






export default SuccessfulResponse8;

