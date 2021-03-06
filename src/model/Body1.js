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
 * The Body1 model module.
 * @module model/Body1
 * @version 1.0.0
 */
class Body1 {
    /**
     * Constructs a new <code>Body1</code>.
     * @alias module:model/Body1
     * @param mode {String} 
     * @param raw {String} 
     */
    constructor(mode, raw) { 
        
        Body1.initialize(this, mode, raw);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mode, raw) { 
        obj['mode'] = mode;
        obj['raw'] = raw;
    }

    /**
     * Constructs a <code>Body1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body1} obj Optional instance to populate.
     * @return {module:model/Body1} The populated <code>Body1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body1();

            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
            if (data.hasOwnProperty('raw')) {
                obj['raw'] = ApiClient.convertToType(data['raw'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} mode
 */
Body1.prototype['mode'] = undefined;

/**
 * @member {String} raw
 */
Body1.prototype['raw'] = undefined;






export default Body1;

