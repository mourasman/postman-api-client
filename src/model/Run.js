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
import Execution from './Execution';
import Failure from './Failure';
import Info3 from './Info3';
import Stats1 from './Stats1';

/**
 * The Run model module.
 * @module model/Run
 * @version 1.0.0
 */
class Run {
    /**
     * Constructs a new <code>Run</code>.
     * @alias module:model/Run
     * @param info {module:model/Info3} 
     * @param stats {module:model/Stats1} 
     * @param executions {Array.<module:model/Execution>} 
     * @param failures {Array.<module:model/Failure>} 
     */
    constructor(info, stats, executions, failures) { 
        
        Run.initialize(this, info, stats, executions, failures);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, info, stats, executions, failures) { 
        obj['info'] = info;
        obj['stats'] = stats;
        obj['executions'] = executions;
        obj['failures'] = failures;
    }

    /**
     * Constructs a <code>Run</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Run} obj Optional instance to populate.
     * @return {module:model/Run} The populated <code>Run</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Run();

            if (data.hasOwnProperty('info')) {
                obj['info'] = Info3.constructFromObject(data['info']);
            }
            if (data.hasOwnProperty('stats')) {
                obj['stats'] = Stats1.constructFromObject(data['stats']);
            }
            if (data.hasOwnProperty('executions')) {
                obj['executions'] = ApiClient.convertToType(data['executions'], [Execution]);
            }
            if (data.hasOwnProperty('failures')) {
                obj['failures'] = ApiClient.convertToType(data['failures'], [Failure]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Info3} info
 */
Run.prototype['info'] = undefined;

/**
 * @member {module:model/Stats1} stats
 */
Run.prototype['stats'] = undefined;

/**
 * @member {Array.<module:model/Execution>} executions
 */
Run.prototype['executions'] = undefined;

/**
 * @member {Array.<module:model/Failure>} failures
 */
Run.prototype['failures'] = undefined;






export default Run;

