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
import Environment from './Environment';

/**
 * The ValidResponse2 model module.
 * @module model/ValidResponse2
 * @version 1.0.0
 */
class ValidResponse2 {
    /**
     * Constructs a new <code>ValidResponse2</code>.
     * @alias module:model/ValidResponse2
     * @param environments {Array.<module:model/Environment>} 
     */
    constructor(environments) { 
        
        ValidResponse2.initialize(this, environments);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, environments) { 
        obj['environments'] = environments;
    }

    /**
     * Constructs a <code>ValidResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidResponse2} obj Optional instance to populate.
     * @return {module:model/ValidResponse2} The populated <code>ValidResponse2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidResponse2();

            if (data.hasOwnProperty('environments')) {
                obj['environments'] = ApiClient.convertToType(data['environments'], [Environment]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Environment>} environments
 */
ValidResponse2.prototype['environments'] = undefined;






export default ValidResponse2;

