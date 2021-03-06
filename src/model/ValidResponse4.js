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
import Workspace from './Workspace';

/**
 * The ValidResponse4 model module.
 * @module model/ValidResponse4
 * @version 1.0.0
 */
class ValidResponse4 {
    /**
     * Constructs a new <code>ValidResponse4</code>.
     * @alias module:model/ValidResponse4
     * @param workspaces {Array.<module:model/Workspace>} 
     */
    constructor(workspaces) { 
        
        ValidResponse4.initialize(this, workspaces);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, workspaces) { 
        obj['workspaces'] = workspaces;
    }

    /**
     * Constructs a <code>ValidResponse4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidResponse4} obj Optional instance to populate.
     * @return {module:model/ValidResponse4} The populated <code>ValidResponse4</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidResponse4();

            if (data.hasOwnProperty('workspaces')) {
                obj['workspaces'] = ApiClient.convertToType(data['workspaces'], [Workspace]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Workspace>} workspaces
 */
ValidResponse4.prototype['workspaces'] = undefined;






export default ValidResponse4;

