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
import Model2a9b8fa888b74b8683728e3f6f6e07f2 from './Model2a9b8fa888b74b8683728e3f6f6e07f2';

/**
 * The Contracttest model module.
 * @module model/Contracttest
 * @version 1.0.0
 */
class Contracttest {
    /**
     * Constructs a new <code>Contracttest</code>.
     * @alias module:model/Contracttest
     * @param _2a9b8fa888b74b8683728e3f6f6e07f2 {module:model/Model2a9b8fa888b74b8683728e3f6f6e07f2} 
     */
    constructor(_2a9b8fa888b74b8683728e3f6f6e07f2) { 
        
        Contracttest.initialize(this, _2a9b8fa888b74b8683728e3f6f6e07f2);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _2a9b8fa888b74b8683728e3f6f6e07f2) { 
        obj['2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2'] = _2a9b8fa888b74b8683728e3f6f6e07f2;
    }

    /**
     * Constructs a <code>Contracttest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contracttest} obj Optional instance to populate.
     * @return {module:model/Contracttest} The populated <code>Contracttest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contracttest();

            if (data.hasOwnProperty('2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2')) {
                obj['2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2'] = Model2a9b8fa888b74b8683728e3f6f6e07f2.constructFromObject(data['2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Model2a9b8fa888b74b8683728e3f6f6e07f2} 2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2
 */
Contracttest.prototype['2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2'] = undefined;






export default Contracttest;

