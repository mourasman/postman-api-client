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
import Collection2 from './Collection2';

/**
 * The CreateCollectionRequest model module.
 * @module model/CreateCollectionRequest
 * @version 1.0.0
 */
class CreateCollectionRequest {
    /**
     * Constructs a new <code>CreateCollectionRequest</code>.
     * @alias module:model/CreateCollectionRequest
     * @param collection {module:model/Collection2} 
     */
    constructor(collection) { 
        
        CreateCollectionRequest.initialize(this, collection);
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
     * Constructs a <code>CreateCollectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCollectionRequest} obj Optional instance to populate.
     * @return {module:model/CreateCollectionRequest} The populated <code>CreateCollectionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCollectionRequest();

            if (data.hasOwnProperty('collection')) {
                obj['collection'] = Collection2.constructFromObject(data['collection']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Collection2} collection
 */
CreateCollectionRequest.prototype['collection'] = undefined;






export default CreateCollectionRequest;
