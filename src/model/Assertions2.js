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
 * The Assertions2 model module.
 * @module model/Assertions2
 * @version 1.0.0
 */
class Assertions2 {
    /**
     * Constructs a new <code>Assertions2</code>.
     * @alias module:model/Assertions2
     * @param statusCodeIs400 {Boolean} 
     */
    constructor(statusCodeIs400) { 
        
        Assertions2.initialize(this, statusCodeIs400);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, statusCodeIs400) { 
        obj['Status code is 400'] = statusCodeIs400;
    }

    /**
     * Constructs a <code>Assertions2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Assertions2} obj Optional instance to populate.
     * @return {module:model/Assertions2} The populated <code>Assertions2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Assertions2();

            if (data.hasOwnProperty('Status code is 400')) {
                obj['Status code is 400'] = ApiClient.convertToType(data['Status code is 400'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} Status code is 400
 */
Assertions2.prototype['Status code is 400'] = undefined;






export default Assertions2;
