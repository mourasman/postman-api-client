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
import Api from './Api';

/**
 * The CreateAPIRequest model module.
 * @module model/CreateAPIRequest
 * @version 1.0.0
 */
class CreateAPIRequest {
    /**
     * Constructs a new <code>CreateAPIRequest</code>.
     * @alias module:model/CreateAPIRequest
     * @param api {module:model/Api} 
     */
    constructor(api) { 
        
        CreateAPIRequest.initialize(this, api);
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
     * Constructs a <code>CreateAPIRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAPIRequest} obj Optional instance to populate.
     * @return {module:model/CreateAPIRequest} The populated <code>CreateAPIRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAPIRequest();

            if (data.hasOwnProperty('api')) {
                obj['api'] = Api.constructFromObject(data['api']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Api} api
 */
CreateAPIRequest.prototype['api'] = undefined;






export default CreateAPIRequest;
