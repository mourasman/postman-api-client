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
import Monitor4 from './Monitor4';

/**
 * The UpdateMonitorRequest model module.
 * @module model/UpdateMonitorRequest
 * @version 1.0.0
 */
class UpdateMonitorRequest {
    /**
     * Constructs a new <code>UpdateMonitorRequest</code>.
     * @alias module:model/UpdateMonitorRequest
     * @param monitor {module:model/Monitor4} 
     */
    constructor(monitor) { 
        
        UpdateMonitorRequest.initialize(this, monitor);
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
     * Constructs a <code>UpdateMonitorRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMonitorRequest} obj Optional instance to populate.
     * @return {module:model/UpdateMonitorRequest} The populated <code>UpdateMonitorRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateMonitorRequest();

            if (data.hasOwnProperty('monitor')) {
                obj['monitor'] = Monitor4.constructFromObject(data['monitor']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Monitor4} monitor
 */
UpdateMonitorRequest.prototype['monitor'] = undefined;






export default UpdateMonitorRequest;
