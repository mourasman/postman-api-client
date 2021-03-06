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

/**
 * The OnError model module.
 * @module model/OnError
 * @version 1.0.0
 */
class OnError {
    /**
     * Constructs a new <code>OnError</code>.
     * @alias module:model/OnError
     * @param email {String} 
     */
    constructor(email) { 
        
        OnError.initialize(this, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email) { 
        obj['email'] = email;
    }

    /**
     * Constructs a <code>OnError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OnError} obj Optional instance to populate.
     * @return {module:model/OnError} The populated <code>OnError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OnError();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
OnError.prototype['email'] = undefined;






export default OnError;

