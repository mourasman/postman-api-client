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
import Contracttest from './Contracttest';
import Integrationtest from './Integrationtest';
import Mock11 from './Mock11';

/**
 * The Relations3 model module.
 * @module model/Relations3
 * @version 1.0.0
 */
class Relations3 {
    /**
     * Constructs a new <code>Relations3</code>.
     * @alias module:model/Relations3
     * @param contracttest {module:model/Contracttest} 
     * @param integrationtest {module:model/Integrationtest} 
     * @param mock {module:model/Mock11} 
     */
    constructor(contracttest, integrationtest, mock) { 
        
        Relations3.initialize(this, contracttest, integrationtest, mock);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contracttest, integrationtest, mock) { 
        obj['contracttest'] = contracttest;
        obj['integrationtest'] = integrationtest;
        obj['mock'] = mock;
    }

    /**
     * Constructs a <code>Relations3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Relations3} obj Optional instance to populate.
     * @return {module:model/Relations3} The populated <code>Relations3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Relations3();

            if (data.hasOwnProperty('contracttest')) {
                obj['contracttest'] = Contracttest.constructFromObject(data['contracttest']);
            }
            if (data.hasOwnProperty('integrationtest')) {
                obj['integrationtest'] = Integrationtest.constructFromObject(data['integrationtest']);
            }
            if (data.hasOwnProperty('mock')) {
                obj['mock'] = Mock11.constructFromObject(data['mock']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Contracttest} contracttest
 */
Relations3.prototype['contracttest'] = undefined;

/**
 * @member {module:model/Integrationtest} integrationtest
 */
Relations3.prototype['integrationtest'] = undefined;

/**
 * @member {module:model/Mock11} mock
 */
Relations3.prototype['mock'] = undefined;






export default Relations3;
