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
import Relations from './Relations';

/**
 * The Source model module.
 * @module model/Source
 * @version 1.0.0
 */
class Source {
    /**
     * Constructs a new <code>Source</code>.
     * @alias module:model/Source
     * @param id {String} 
     * @param schema {Boolean} 
     * @param relations {module:model/Relations} 
     */
    constructor(id, schema, relations) { 
        
        Source.initialize(this, id, schema, relations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, schema, relations) { 
        obj['id'] = id;
        obj['schema'] = schema;
        obj['relations'] = relations;
    }

    /**
     * Constructs a <code>Source</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Source} obj Optional instance to populate.
     * @return {module:model/Source} The populated <code>Source</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Source();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = ApiClient.convertToType(data['schema'], 'Boolean');
            }
            if (data.hasOwnProperty('relations')) {
                obj['relations'] = Relations.constructFromObject(data['relations']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Source.prototype['id'] = undefined;

/**
 * @member {Boolean} schema
 */
Source.prototype['schema'] = undefined;

/**
 * @member {module:model/Relations} relations
 */
Source.prototype['relations'] = undefined;






export default Source;

