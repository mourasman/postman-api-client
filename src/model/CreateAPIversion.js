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
import Version1 from './Version1';

/**
 * The CreateAPIversion model module.
 * @module model/CreateAPIversion
 * @version 1.0.0
 */
class CreateAPIversion {
    /**
     * Constructs a new <code>CreateAPIversion</code>.
     * @alias module:model/CreateAPIversion
     * @param version {module:model/Version1} 
     */
    constructor(version) { 
        
        CreateAPIversion.initialize(this, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, version) { 
        obj['version'] = version;
    }

    /**
     * Constructs a <code>CreateAPIversion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAPIversion} obj Optional instance to populate.
     * @return {module:model/CreateAPIversion} The populated <code>CreateAPIversion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAPIversion();

            if (data.hasOwnProperty('version')) {
                obj['version'] = Version1.constructFromObject(data['version']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Version1} version
 */
CreateAPIversion.prototype['version'] = undefined;






export default CreateAPIversion;

