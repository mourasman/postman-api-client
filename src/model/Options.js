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
 * The Options model module.
 * @module model/Options
 * @version 1.0.0
 */
class Options {
    /**
     * Constructs a new <code>Options</code>.
     * @alias module:model/Options
     * @param strictSSL {Boolean} 
     * @param followRedirects {Boolean} 
     * @param requestTimeout {String} 
     * @param requestDelay {Number} 
     */
    constructor(strictSSL, followRedirects, requestTimeout, requestDelay) { 
        
        Options.initialize(this, strictSSL, followRedirects, requestTimeout, requestDelay);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, strictSSL, followRedirects, requestTimeout, requestDelay) { 
        obj['strictSSL'] = strictSSL;
        obj['followRedirects'] = followRedirects;
        obj['requestTimeout'] = requestTimeout;
        obj['requestDelay'] = requestDelay;
    }

    /**
     * Constructs a <code>Options</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Options} obj Optional instance to populate.
     * @return {module:model/Options} The populated <code>Options</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Options();

            if (data.hasOwnProperty('strictSSL')) {
                obj['strictSSL'] = ApiClient.convertToType(data['strictSSL'], 'Boolean');
            }
            if (data.hasOwnProperty('followRedirects')) {
                obj['followRedirects'] = ApiClient.convertToType(data['followRedirects'], 'Boolean');
            }
            if (data.hasOwnProperty('requestTimeout')) {
                obj['requestTimeout'] = ApiClient.convertToType(data['requestTimeout'], 'String');
            }
            if (data.hasOwnProperty('requestDelay')) {
                obj['requestDelay'] = ApiClient.convertToType(data['requestDelay'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} strictSSL
 */
Options.prototype['strictSSL'] = undefined;

/**
 * @member {Boolean} followRedirects
 */
Options.prototype['followRedirects'] = undefined;

/**
 * @member {String} requestTimeout
 */
Options.prototype['requestTimeout'] = undefined;

/**
 * @member {Number} requestDelay
 */
Options.prototype['requestDelay'] = undefined;






export default Options;

