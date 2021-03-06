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
import Environment3 from './Environment3';

/**
 * The CreateEnvironmentinaWorkspace model module.
 * @module model/CreateEnvironmentinaWorkspace
 * @version 1.0.0
 */
class CreateEnvironmentinaWorkspace {
    /**
     * Constructs a new <code>CreateEnvironmentinaWorkspace</code>.
     * @alias module:model/CreateEnvironmentinaWorkspace
     * @param environment {module:model/Environment3} 
     */
    constructor(environment) { 
        
        CreateEnvironmentinaWorkspace.initialize(this, environment);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, environment) { 
        obj['environment'] = environment;
    }

    /**
     * Constructs a <code>CreateEnvironmentinaWorkspace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEnvironmentinaWorkspace} obj Optional instance to populate.
     * @return {module:model/CreateEnvironmentinaWorkspace} The populated <code>CreateEnvironmentinaWorkspace</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEnvironmentinaWorkspace();

            if (data.hasOwnProperty('environment')) {
                obj['environment'] = Environment3.constructFromObject(data['environment']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Environment3} environment
 */
CreateEnvironmentinaWorkspace.prototype['environment'] = undefined;






export default CreateEnvironmentinaWorkspace;

