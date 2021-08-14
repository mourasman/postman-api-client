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
import Collection3 from './Collection3';
import Environment3 from './Environment3';

/**
 * The Workspace1 model module.
 * @module model/Workspace1
 * @version 1.0.0
 */
class Workspace1 {
    /**
     * Constructs a new <code>Workspace1</code>.
     * @alias module:model/Workspace1
     * @param id {String} 
     * @param name {String} 
     * @param type {String} 
     * @param description {String} 
     * @param collections {Array.<module:model/Collection3>} 
     * @param environments {Array.<module:model/Environment3>} 
     */
    constructor(id, name, type, description, collections, environments) { 
        
        Workspace1.initialize(this, id, name, type, description, collections, environments);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, type, description, collections, environments) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['type'] = type;
        obj['description'] = description;
        obj['collections'] = collections;
        obj['environments'] = environments;
    }

    /**
     * Constructs a <code>Workspace1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Workspace1} obj Optional instance to populate.
     * @return {module:model/Workspace1} The populated <code>Workspace1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Workspace1();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('collections')) {
                obj['collections'] = ApiClient.convertToType(data['collections'], [Collection3]);
            }
            if (data.hasOwnProperty('environments')) {
                obj['environments'] = ApiClient.convertToType(data['environments'], [Environment3]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Workspace1.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Workspace1.prototype['name'] = undefined;

/**
 * @member {String} type
 */
Workspace1.prototype['type'] = undefined;

/**
 * @member {String} description
 */
Workspace1.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/Collection3>} collections
 */
Workspace1.prototype['collections'] = undefined;

/**
 * @member {Array.<module:model/Environment3>} environments
 */
Workspace1.prototype['environments'] = undefined;






export default Workspace1;

