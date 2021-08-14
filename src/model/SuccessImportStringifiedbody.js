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
import Collection3 from './Collection3';

/**
 * The SuccessImportStringifiedbody model module.
 * @module model/SuccessImportStringifiedbody
 * @version 1.0.0
 */
class SuccessImportStringifiedbody {
    /**
     * Constructs a new <code>SuccessImportStringifiedbody</code>.
     * @alias module:model/SuccessImportStringifiedbody
     * @param collections {Array.<module:model/Collection3>} 
     */
    constructor(collections) { 
        
        SuccessImportStringifiedbody.initialize(this, collections);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, collections) { 
        obj['collections'] = collections;
    }

    /**
     * Constructs a <code>SuccessImportStringifiedbody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessImportStringifiedbody} obj Optional instance to populate.
     * @return {module:model/SuccessImportStringifiedbody} The populated <code>SuccessImportStringifiedbody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuccessImportStringifiedbody();

            if (data.hasOwnProperty('collections')) {
                obj['collections'] = ApiClient.convertToType(data['collections'], [Collection3]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Collection3>} collections
 */
SuccessImportStringifiedbody.prototype['collections'] = undefined;






export default SuccessImportStringifiedbody;

