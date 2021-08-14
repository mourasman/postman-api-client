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
 * The Query model module.
 * @module model/Query
 * @version 1.0.0
 */
class Query {
    /**
     * Constructs a new <code>Query</code>.
     * @alias module:model/Query
     * @param description {String} 
     * @param key {String} 
     * @param value {String} 
     */
    constructor(description, key, value) { 
        
        Query.initialize(this, description, key, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, key, value) { 
        obj['description'] = description;
        obj['key'] = key;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>Query</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Query} obj Optional instance to populate.
     * @return {module:model/Query} The populated <code>Query</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Query();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
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
 * @member {String} description
 */
Query.prototype['description'] = undefined;

/**
 * @member {String} key
 */
Query.prototype['key'] = undefined;

/**
 * @member {String} value
 */
Query.prototype['value'] = undefined;






export default Query;

