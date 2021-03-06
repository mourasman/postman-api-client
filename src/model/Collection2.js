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
import Info1 from './Info1';
import Item1 from './Item1';

/**
 * The Collection2 model module.
 * @module model/Collection2
 * @version 1.0.0
 */
class Collection2 {
    /**
     * Constructs a new <code>Collection2</code>.
     * @alias module:model/Collection2
     * @param info {module:model/Info1} 
     * @param item {Array.<module:model/Item1>} 
     */
    constructor(info, item) { 
        
        Collection2.initialize(this, info, item);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, info, item) { 
        obj['info'] = info;
        obj['item'] = item;
    }

    /**
     * Constructs a <code>Collection2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Collection2} obj Optional instance to populate.
     * @return {module:model/Collection2} The populated <code>Collection2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Collection2();

            if (data.hasOwnProperty('info')) {
                obj['info'] = Info1.constructFromObject(data['info']);
            }
            if (data.hasOwnProperty('item')) {
                obj['item'] = ApiClient.convertToType(data['item'], [Item1]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Info1} info
 */
Collection2.prototype['info'] = undefined;

/**
 * @member {Array.<module:model/Item1>} item
 */
Collection2.prototype['item'] = undefined;






export default Collection2;

