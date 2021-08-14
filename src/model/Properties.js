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
import Code from './Code';
import Message from './Message';

/**
 * The Properties model module.
 * @module model/Properties
 * @version 1.0.0
 */
class Properties {
    /**
     * Constructs a new <code>Properties</code>.
     * @alias module:model/Properties
     * @param code {module:model/Code} 
     * @param message {module:model/Message} 
     */
    constructor(code, message) { 
        
        Properties.initialize(this, code, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, message) { 
        obj['code'] = code;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>Properties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Properties} obj Optional instance to populate.
     * @return {module:model/Properties} The populated <code>Properties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Properties();

            if (data.hasOwnProperty('code')) {
                obj['code'] = Code.constructFromObject(data['code']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = Message.constructFromObject(data['message']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Code} code
 */
Properties.prototype['code'] = undefined;

/**
 * @member {module:model/Message} message
 */
Properties.prototype['message'] = undefined;






export default Properties;

