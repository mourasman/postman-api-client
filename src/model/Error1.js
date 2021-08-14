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
import Details from './Details';

/**
 * The Error1 model module.
 * @module model/Error1
 * @version 1.0.0
 */
class Error1 {
    /**
     * Constructs a new <code>Error1</code>.
     * @alias module:model/Error1
     * @param name {String} 
     * @param message {String} 
     * @param details {module:model/Details} 
     */
    constructor(name, message, details) { 
        
        Error1.initialize(this, name, message, details);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, message, details) { 
        obj['name'] = name;
        obj['message'] = message;
        obj['details'] = details;
    }

    /**
     * Constructs a <code>Error1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Error1} obj Optional instance to populate.
     * @return {module:model/Error1} The populated <code>Error1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Error1();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = Details.constructFromObject(data['details']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
Error1.prototype['name'] = undefined;

/**
 * @member {String} message
 */
Error1.prototype['message'] = undefined;

/**
 * @member {module:model/Details} details
 */
Error1.prototype['details'] = undefined;






export default Error1;

