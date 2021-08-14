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
 * The Collection3 model module.
 * @module model/Collection3
 * @version 1.0.0
 */
class Collection3 {
    /**
     * Constructs a new <code>Collection3</code>.
     * @alias module:model/Collection3
     * @param id {String} 
     * @param name {String} 
     * @param uid {String} 
     */
    constructor(id, name, uid) { 
        
        Collection3.initialize(this, id, name, uid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, uid) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['uid'] = uid;
    }

    /**
     * Constructs a <code>Collection3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Collection3} obj Optional instance to populate.
     * @return {module:model/Collection3} The populated <code>Collection3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Collection3();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Collection3.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Collection3.prototype['name'] = undefined;

/**
 * @member {String} uid
 */
Collection3.prototype['uid'] = undefined;






export default Collection3;

