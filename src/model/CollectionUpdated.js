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

/**
 * The CollectionUpdated model module.
 * @module model/CollectionUpdated
 * @version 1.0.0
 */
class CollectionUpdated {
    /**
     * Constructs a new <code>CollectionUpdated</code>.
     * @alias module:model/CollectionUpdated
     * @param collection {module:model/Collection3} 
     */
    constructor(collection) { 
        
        CollectionUpdated.initialize(this, collection);
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
     * Constructs a <code>CollectionUpdated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectionUpdated} obj Optional instance to populate.
     * @return {module:model/CollectionUpdated} The populated <code>CollectionUpdated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CollectionUpdated();

            if (data.hasOwnProperty('collection')) {
                obj['collection'] = Collection3.constructFromObject(data['collection']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Collection3} collection
 */
CollectionUpdated.prototype['collection'] = undefined;






export default CollectionUpdated;

