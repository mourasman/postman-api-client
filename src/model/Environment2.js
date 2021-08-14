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
import Value1 from './Value1';

/**
 * The Environment2 model module.
 * @module model/Environment2
 * @version 1.0.0
 */
class Environment2 {
    /**
     * Constructs a new <code>Environment2</code>.
     * @alias module:model/Environment2
     * @param name {String} 
     * @param values {Array.<module:model/Value1>} 
     */
    constructor(name, values) { 
        
        Environment2.initialize(this, name, values);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, values) { 
        obj['name'] = name;
        obj['values'] = values;
    }

    /**
     * Constructs a <code>Environment2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Environment2} obj Optional instance to populate.
     * @return {module:model/Environment2} The populated <code>Environment2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Environment2();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [Value1]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
Environment2.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/Value1>} values
 */
Environment2.prototype['values'] = undefined;






export default Environment2;

