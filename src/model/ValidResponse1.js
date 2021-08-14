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
import Collection1 from './Collection1';

/**
 * The ValidResponse1 model module.
 * @module model/ValidResponse1
 * @version 1.0.0
 */
class ValidResponse1 {
    /**
     * Constructs a new <code>ValidResponse1</code>.
     * @alias module:model/ValidResponse1
     * @param collection {module:model/Collection1} 
     */
    constructor(collection) { 
        
        ValidResponse1.initialize(this, collection);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, collection) { 
        obj['collection'] = collection;
    }

    /**
     * Constructs a <code>ValidResponse1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidResponse1} obj Optional instance to populate.
     * @return {module:model/ValidResponse1} The populated <code>ValidResponse1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidResponse1();

            if (data.hasOwnProperty('collection')) {
                obj['collection'] = Collection1.constructFromObject(data['collection']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Collection1} collection
 */
ValidResponse1.prototype['collection'] = undefined;






export default ValidResponse1;

