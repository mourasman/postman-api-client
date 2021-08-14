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
 * The Schedule model module.
 * @module model/Schedule
 * @version 1.0.0
 */
class Schedule {
    /**
     * Constructs a new <code>Schedule</code>.
     * @alias module:model/Schedule
     * @param cron {String} 
     * @param timezone {String} 
     * @param nextRun {String} 
     */
    constructor(cron, timezone, nextRun) { 
        
        Schedule.initialize(this, cron, timezone, nextRun);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cron, timezone, nextRun) { 
        obj['cron'] = cron;
        obj['timezone'] = timezone;
        obj['nextRun'] = nextRun;
    }

    /**
     * Constructs a <code>Schedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Schedule} obj Optional instance to populate.
     * @return {module:model/Schedule} The populated <code>Schedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Schedule();

            if (data.hasOwnProperty('cron')) {
                obj['cron'] = ApiClient.convertToType(data['cron'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('nextRun')) {
                obj['nextRun'] = ApiClient.convertToType(data['nextRun'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} cron
 */
Schedule.prototype['cron'] = undefined;

/**
 * @member {String} timezone
 */
Schedule.prototype['timezone'] = undefined;

/**
 * @member {String} nextRun
 */
Schedule.prototype['nextRun'] = undefined;






export default Schedule;

