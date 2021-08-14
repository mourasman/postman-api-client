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
import Monitor3 from './Monitor3';

/**
 * The MonitorUpdated model module.
 * @module model/MonitorUpdated
 * @version 1.0.0
 */
class MonitorUpdated {
    /**
     * Constructs a new <code>MonitorUpdated</code>.
     * @alias module:model/MonitorUpdated
     * @param monitor {module:model/Monitor3} 
     */
    constructor(monitor) { 
        
        MonitorUpdated.initialize(this, monitor);
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
     * Constructs a <code>MonitorUpdated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MonitorUpdated} obj Optional instance to populate.
     * @return {module:model/MonitorUpdated} The populated <code>MonitorUpdated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MonitorUpdated();

            if (data.hasOwnProperty('monitor')) {
                obj['monitor'] = Monitor3.constructFromObject(data['monitor']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Monitor3} monitor
 */
MonitorUpdated.prototype['monitor'] = undefined;






export default MonitorUpdated;

