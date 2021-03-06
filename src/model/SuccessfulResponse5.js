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
import Monitor1 from './Monitor1';

/**
 * The SuccessfulResponse5 model module.
 * @module model/SuccessfulResponse5
 * @version 1.0.0
 */
class SuccessfulResponse5 {
    /**
     * Constructs a new <code>SuccessfulResponse5</code>.
     * @alias module:model/SuccessfulResponse5
     * @param monitor {module:model/Monitor1} 
     */
    constructor(monitor) { 
        
        SuccessfulResponse5.initialize(this, monitor);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, monitor) { 
        obj['monitor'] = monitor;
    }

    /**
     * Constructs a <code>SuccessfulResponse5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessfulResponse5} obj Optional instance to populate.
     * @return {module:model/SuccessfulResponse5} The populated <code>SuccessfulResponse5</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuccessfulResponse5();

            if (data.hasOwnProperty('monitor')) {
                obj['monitor'] = Monitor1.constructFromObject(data['monitor']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Monitor1} monitor
 */
SuccessfulResponse5.prototype['monitor'] = undefined;






export default SuccessfulResponse5;

