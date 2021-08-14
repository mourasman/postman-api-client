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
import Collection13 from './Collection13';
import VersionTag from './VersionTag';

/**
 * The Getrelationsofatype1 model module.
 * @module model/Getrelationsofatype1
 * @version 1.0.0
 */
class Getrelationsofatype1 {
    /**
     * Constructs a new <code>Getrelationsofatype1</code>.
     * @alias module:model/Getrelationsofatype1
     * @param id {String} 
     * @param name {String} 
     * @param updatedAt {String} 
     * @param createdAt {String} 
     * @param versionTag {module:model/VersionTag} 
     * @param collection {module:model/Collection13} 
     */
    constructor(id, name, updatedAt, createdAt, versionTag, collection) { 
        
        Getrelationsofatype1.initialize(this, id, name, updatedAt, createdAt, versionTag, collection);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, updatedAt, createdAt, versionTag, collection) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['updatedAt'] = updatedAt;
        obj['createdAt'] = createdAt;
        obj['versionTag'] = versionTag;
        obj['collection'] = collection;
    }

    /**
     * Constructs a <code>Getrelationsofatype1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Getrelationsofatype1} obj Optional instance to populate.
     * @return {module:model/Getrelationsofatype1} The populated <code>Getrelationsofatype1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Getrelationsofatype1();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('versionTag')) {
                obj['versionTag'] = VersionTag.constructFromObject(data['versionTag']);
            }
            if (data.hasOwnProperty('collection')) {
                obj['collection'] = Collection13.constructFromObject(data['collection']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Getrelationsofatype1.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Getrelationsofatype1.prototype['name'] = undefined;

/**
 * @member {String} updatedAt
 */
Getrelationsofatype1.prototype['updatedAt'] = undefined;

/**
 * @member {String} createdAt
 */
Getrelationsofatype1.prototype['createdAt'] = undefined;

/**
 * @member {module:model/VersionTag} versionTag
 */
Getrelationsofatype1.prototype['versionTag'] = undefined;

/**
 * @member {module:model/Collection13} collection
 */
Getrelationsofatype1.prototype['collection'] = undefined;






export default Getrelationsofatype1;

