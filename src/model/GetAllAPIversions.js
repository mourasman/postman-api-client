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
import Version6 from './Version6';

/**
 * The GetAllAPIversions model module.
 * @module model/GetAllAPIversions
 * @version 1.0.0
 */
class GetAllAPIversions {
    /**
     * Constructs a new <code>GetAllAPIversions</code>.
     * @alias module:model/GetAllAPIversions
     * @param versions {Array.<module:model/Version6>} 
     */
    constructor(versions) { 
        
        GetAllAPIversions.initialize(this, versions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, versions) { 
        obj['versions'] = versions;
    }

    /**
     * Constructs a <code>GetAllAPIversions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAllAPIversions} obj Optional instance to populate.
     * @return {module:model/GetAllAPIversions} The populated <code>GetAllAPIversions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAllAPIversions();

            if (data.hasOwnProperty('versions')) {
                obj['versions'] = ApiClient.convertToType(data['versions'], [Version6]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Version6>} versions
 */
GetAllAPIversions.prototype['versions'] = undefined;






export default GetAllAPIversions;

