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
 * The OnFailure model module.
 * @module model/OnFailure
 * @version 1.0.0
 */
class OnFailure {
    /**
     * Constructs a new <code>OnFailure</code>.
     * @alias module:model/OnFailure
     * @param email {String} 
     */
    constructor(email) { 
        
        OnFailure.initialize(this, email);
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
     * Constructs a <code>OnFailure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OnFailure} obj Optional instance to populate.
     * @return {module:model/OnFailure} The populated <code>OnFailure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OnFailure();

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
OnFailure.prototype['email'] = undefined;






export default OnFailure;

