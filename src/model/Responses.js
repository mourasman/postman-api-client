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
import ModelDefault from './ModelDefault';

/**
 * The Responses model module.
 * @module model/Responses
 * @version 1.0.0
 */
class Responses {
    /**
     * Constructs a new <code>Responses</code>.
     * @alias module:model/Responses
     * @param _default {module:model/ModelDefault} 
     */
    constructor(_default) { 
        
        Responses.initialize(this, _default);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _default) { 
        obj['default'] = _default;
    }

    /**
     * Constructs a <code>Responses</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Responses} obj Optional instance to populate.
     * @return {module:model/Responses} The populated <code>Responses</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Responses();

            if (data.hasOwnProperty('default')) {
                obj['default'] = ModelDefault.constructFromObject(data['default']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ModelDefault} default
 */
Responses.prototype['default'] = undefined;






export default Responses;
