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
 * The Variable model module.
 * @module model/Variable
 * @version 1.0.0
 */
class Variable {
    /**
     * Constructs a new <code>Variable</code>.
     * @alias module:model/Variable
     * @param id {String} 
     * @param key {String} 
     * @param value {String} 
     * @param type {String} 
     * @param description {String} 
     */
    constructor(id, key, value, type, description) { 
        
        Variable.initialize(this, id, key, value, type, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, key, value, type, description) { 
        obj['id'] = id;
        obj['key'] = key;
        obj['value'] = value;
        obj['type'] = type;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>Variable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Variable} obj Optional instance to populate.
     * @return {module:model/Variable} The populated <code>Variable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Variable();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Variable.prototype['id'] = undefined;

/**
 * @member {String} key
 */
Variable.prototype['key'] = undefined;

/**
 * @member {String} value
 */
Variable.prototype['value'] = undefined;

/**
 * @member {String} type
 */
Variable.prototype['type'] = undefined;

/**
 * @member {String} description
 */
Variable.prototype['description'] = undefined;






export default Variable;
