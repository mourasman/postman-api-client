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
import Api1 from './Api1';

/**
 * The UpdateanAPI model module.
 * @module model/UpdateanAPI
 * @version 1.0.0
 */
class UpdateanAPI {
    /**
     * Constructs a new <code>UpdateanAPI</code>.
     * @alias module:model/UpdateanAPI
     * @param api {module:model/Api1} 
     */
    constructor(api) { 
        
        UpdateanAPI.initialize(this, api);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, api) { 
        obj['api'] = api;
    }

    /**
     * Constructs a <code>UpdateanAPI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateanAPI} obj Optional instance to populate.
     * @return {module:model/UpdateanAPI} The populated <code>UpdateanAPI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateanAPI();

            if (data.hasOwnProperty('api')) {
                obj['api'] = Api1.constructFromObject(data['api']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Api1} api
 */
UpdateanAPI.prototype['api'] = undefined;






export default UpdateanAPI;
