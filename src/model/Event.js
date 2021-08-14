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
import Script from './Script';

/**
 * The Event model module.
 * @module model/Event
 * @version 1.0.0
 */
class Event {
    /**
     * Constructs a new <code>Event</code>.
     * @alias module:model/Event
     * @param listen {String} 
     * @param script {module:model/Script} 
     */
    constructor(listen, script) { 
        
        Event.initialize(this, listen, script);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, listen, script) { 
        obj['listen'] = listen;
        obj['script'] = script;
    }

    /**
     * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Event} obj Optional instance to populate.
     * @return {module:model/Event} The populated <code>Event</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Event();

            if (data.hasOwnProperty('listen')) {
                obj['listen'] = ApiClient.convertToType(data['listen'], 'String');
            }
            if (data.hasOwnProperty('script')) {
                obj['script'] = Script.constructFromObject(data['script']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} listen
 */
Event.prototype['listen'] = undefined;

/**
 * @member {module:model/Script} script
 */
Event.prototype['script'] = undefined;






export default Event;

