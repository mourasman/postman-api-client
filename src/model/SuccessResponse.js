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
import Mock5 from './Mock5';

/**
 * The SuccessResponse model module.
 * @module model/SuccessResponse
 * @version 1.0.0
 */
class SuccessResponse {
    /**
     * Constructs a new <code>SuccessResponse</code>.
     * @alias module:model/SuccessResponse
     * @param mock {module:model/Mock5} 
     */
    constructor(mock) { 
        
        SuccessResponse.initialize(this, mock);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mock) { 
        obj['mock'] = mock;
    }

    /**
     * Constructs a <code>SuccessResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessResponse} obj Optional instance to populate.
     * @return {module:model/SuccessResponse} The populated <code>SuccessResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuccessResponse();

            if (data.hasOwnProperty('mock')) {
                obj['mock'] = Mock5.constructFromObject(data['mock']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Mock5} mock
 */
SuccessResponse.prototype['mock'] = undefined;






export default SuccessResponse;

