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
import Schema from './Schema';

/**
 * The Parameter model module.
 * @module model/Parameter
 * @version 1.0.0
 */
class Parameter {
    /**
     * Constructs a new <code>Parameter</code>.
     * @alias module:model/Parameter
     * @param name {String} 
     * @param _in {String} 
     * @param description {String} 
     * @param required {Boolean} 
     * @param schema {module:model/Schema} 
     */
    constructor(name, _in, description, required, schema) { 
        
        Parameter.initialize(this, name, _in, description, required, schema);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, _in, description, required, schema) { 
        obj['name'] = name;
        obj['in'] = _in;
        obj['description'] = description;
        obj['required'] = required;
        obj['schema'] = schema;
    }

    /**
     * Constructs a <code>Parameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Parameter} obj Optional instance to populate.
     * @return {module:model/Parameter} The populated <code>Parameter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Parameter();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('in')) {
                obj['in'] = ApiClient.convertToType(data['in'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = Schema.constructFromObject(data['schema']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
Parameter.prototype['name'] = undefined;

/**
 * @member {String} in
 */
Parameter.prototype['in'] = undefined;

/**
 * @member {String} description
 */
Parameter.prototype['description'] = undefined;

/**
 * @member {Boolean} required
 */
Parameter.prototype['required'] = undefined;

/**
 * @member {module:model/Schema} schema
 */
Parameter.prototype['schema'] = undefined;






export default Parameter;

