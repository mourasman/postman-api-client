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
import Schema1 from './Schema1';

/**
 * The ApplicationJson model module.
 * @module model/ApplicationJson
 * @version 1.0.0
 */
class ApplicationJson {
    /**
     * Constructs a new <code>ApplicationJson</code>.
     * @alias module:model/ApplicationJson
     * @param schema {module:model/Schema1} 
     */
    constructor(schema) { 
        
        ApplicationJson.initialize(this, schema);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, schema) { 
        obj['schema'] = schema;
    }

    /**
     * Constructs a <code>ApplicationJson</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationJson} obj Optional instance to populate.
     * @return {module:model/ApplicationJson} The populated <code>ApplicationJson</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationJson();

            if (data.hasOwnProperty('schema')) {
                obj['schema'] = Schema1.constructFromObject(data['schema']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Schema1} schema
 */
ApplicationJson.prototype['schema'] = undefined;






export default ApplicationJson;

