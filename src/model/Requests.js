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
 * The Requests model module.
 * @module model/Requests
 * @version 1.0.0
 */
class Requests {
    /**
     * Constructs a new <code>Requests</code>.
     * @alias module:model/Requests
     * @param total {Number} 
     */
    constructor(total) { 
        
        Requests.initialize(this, total);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, total) { 
        obj['total'] = total;
    }

    /**
     * Constructs a <code>Requests</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Requests} obj Optional instance to populate.
     * @return {module:model/Requests} The populated <code>Requests</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Requests();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} total
 */
Requests.prototype['total'] = undefined;






export default Requests;

