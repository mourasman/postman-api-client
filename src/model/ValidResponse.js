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
import Collection from './Collection';

/**
 * The ValidResponse model module.
 * @module model/ValidResponse
 * @version 1.0.0
 */
class ValidResponse {
    /**
     * Constructs a new <code>ValidResponse</code>.
     * @alias module:model/ValidResponse
     * @param collections {Array.<module:model/Collection>} 
     */
    constructor(collections) { 
        
        ValidResponse.initialize(this, collections);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, collections) { 
        obj['collections'] = collections;
    }

    /**
     * Constructs a <code>ValidResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidResponse} obj Optional instance to populate.
     * @return {module:model/ValidResponse} The populated <code>ValidResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidResponse();

            if (data.hasOwnProperty('collections')) {
                obj['collections'] = ApiClient.convertToType(data['collections'], [Collection]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Collection>} collections
 */
ValidResponse.prototype['collections'] = undefined;






export default ValidResponse;
