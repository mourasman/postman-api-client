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

/**
 * The Version2 model module.
 * @module model/Version2
 * @version 1.0.0
 */
class Version2 {
    /**
     * Constructs a new <code>Version2</code>.
     * @alias module:model/Version2
     * @param name {String} 
     */
    constructor(name) { 
        
        Version2.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Version2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Version2} obj Optional instance to populate.
     * @return {module:model/Version2} The populated <code>Version2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Version2();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
Version2.prototype['name'] = undefined;






export default Version2;
