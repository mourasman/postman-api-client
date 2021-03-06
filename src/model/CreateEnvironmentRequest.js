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
import Environment2 from './Environment2';

/**
 * The CreateEnvironmentRequest model module.
 * @module model/CreateEnvironmentRequest
 * @version 1.0.0
 */
class CreateEnvironmentRequest {
    /**
     * Constructs a new <code>CreateEnvironmentRequest</code>.
     * @alias module:model/CreateEnvironmentRequest
     * @param environment {module:model/Environment2} 
     */
    constructor(environment) { 
        
        CreateEnvironmentRequest.initialize(this, environment);
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
     * Constructs a <code>CreateEnvironmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEnvironmentRequest} obj Optional instance to populate.
     * @return {module:model/CreateEnvironmentRequest} The populated <code>CreateEnvironmentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEnvironmentRequest();

            if (data.hasOwnProperty('environment')) {
                obj['environment'] = Environment2.constructFromObject(data['environment']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Environment2} environment
 */
CreateEnvironmentRequest.prototype['environment'] = undefined;






export default CreateEnvironmentRequest;

