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
import Collection6 from './Collection6';
import Relations2 from './Relations2';

/**
 * The Createcollectionfromschema model module.
 * @module model/Createcollectionfromschema
 * @version 1.0.0
 */
class Createcollectionfromschema {
    /**
     * Constructs a new <code>Createcollectionfromschema</code>.
     * @alias module:model/Createcollectionfromschema
     * @param collection {module:model/Collection6} 
     * @param relations {Array.<module:model/Relations2>} 
     */
    constructor(collection, relations) { 
        
        Createcollectionfromschema.initialize(this, collection, relations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, collection, relations) { 
        obj['collection'] = collection;
        obj['relations'] = relations;
    }

    /**
     * Constructs a <code>Createcollectionfromschema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Createcollectionfromschema} obj Optional instance to populate.
     * @return {module:model/Createcollectionfromschema} The populated <code>Createcollectionfromschema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Createcollectionfromschema();

            if (data.hasOwnProperty('collection')) {
                obj['collection'] = Collection6.constructFromObject(data['collection']);
            }
            if (data.hasOwnProperty('relations')) {
                obj['relations'] = ApiClient.convertToType(data['relations'], [Relations2]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Collection6} collection
 */
Createcollectionfromschema.prototype['collection'] = undefined;

/**
 * @member {Array.<module:model/Relations2>} relations
 */
Createcollectionfromschema.prototype['relations'] = undefined;






export default Createcollectionfromschema;

