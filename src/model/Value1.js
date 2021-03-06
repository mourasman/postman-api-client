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
 * The Value1 model module.
 * @module model/Value1
 * @version 1.0.0
 */
class Value1 {
    /**
     * Constructs a new <code>Value1</code>.
     * @alias module:model/Value1
     * @param key {String} 
     * @param value {String} 
     */
    constructor(key, value) { 
        
        Value1.initialize(this, key, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, value) { 
        obj['key'] = key;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>Value1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Value1} obj Optional instance to populate.
     * @return {module:model/Value1} The populated <code>Value1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Value1();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} key
 */
Value1.prototype['key'] = undefined;

/**
 * @member {String} value
 */
Value1.prototype['value'] = undefined;






export default Value1;

