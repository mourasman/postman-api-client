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
import Api1 from './Api1';

/**
 * The GetallAPIs model module.
 * @module model/GetallAPIs
 * @version 1.0.0
 */
class GetallAPIs {
    /**
     * Constructs a new <code>GetallAPIs</code>.
     * @alias module:model/GetallAPIs
     * @param apis {Array.<module:model/Api1>} 
     */
    constructor(apis) { 
        
        GetallAPIs.initialize(this, apis);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apis) { 
        obj['apis'] = apis;
    }

    /**
     * Constructs a <code>GetallAPIs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetallAPIs} obj Optional instance to populate.
     * @return {module:model/GetallAPIs} The populated <code>GetallAPIs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetallAPIs();

            if (data.hasOwnProperty('apis')) {
                obj['apis'] = ApiClient.convertToType(data['apis'], [Api1]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Api1>} apis
 */
GetallAPIs.prototype['apis'] = undefined;






export default GetallAPIs;
