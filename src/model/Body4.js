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
 * The Body4 model module.
 * @module model/Body4
 * @version 1.0.0
 */
class Body4 {
    /**
     * Constructs a new <code>Body4</code>.
     * @alias module:model/Body4
     * @param contentLength {Number} 
     */
    constructor(contentLength) { 
        
        Body4.initialize(this, contentLength);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contentLength) { 
        obj['contentLength'] = contentLength;
    }

    /**
     * Constructs a <code>Body4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body4} obj Optional instance to populate.
     * @return {module:model/Body4} The populated <code>Body4</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body4();

            if (data.hasOwnProperty('contentLength')) {
                obj['contentLength'] = ApiClient.convertToType(data['contentLength'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} contentLength
 */
Body4.prototype['contentLength'] = undefined;






export default Body4;

