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
 * The Requests1 model module.
 * @module model/Requests1
 * @version 1.0.0
 */
class Requests1 {
    /**
     * Constructs a new <code>Requests1</code>.
     * @alias module:model/Requests1
     * @param total {Number} 
     * @param failed {Number} 
     */
    constructor(total, failed) { 
        
        Requests1.initialize(this, total, failed);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, total, failed) { 
        obj['total'] = total;
        obj['failed'] = failed;
    }

    /**
     * Constructs a <code>Requests1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Requests1} obj Optional instance to populate.
     * @return {module:model/Requests1} The populated <code>Requests1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Requests1();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('failed')) {
                obj['failed'] = ApiClient.convertToType(data['failed'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} total
 */
Requests1.prototype['total'] = undefined;

/**
 * @member {Number} failed
 */
Requests1.prototype['failed'] = undefined;






export default Requests1;

