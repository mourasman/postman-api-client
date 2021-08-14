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
 * The Schema2 model module.
 * @module model/Schema2
 * @version 1.0.0
 */
class Schema2 {
    /**
     * Constructs a new <code>Schema2</code>.
     * @alias module:model/Schema2
     * @param id {String} 
     * @param language {String} 
     * @param apiVersion {String} 
     * @param type {String} 
     * @param createdBy {String} 
     * @param updateBy {String} 
     * @param createdAt {String} 
     * @param updatedAt {String} 
     */
    constructor(id, language, apiVersion, type, createdBy, updateBy, createdAt, updatedAt) { 
        
        Schema2.initialize(this, id, language, apiVersion, type, createdBy, updateBy, createdAt, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, language, apiVersion, type, createdBy, updateBy, createdAt, updatedAt) { 
        obj['id'] = id;
        obj['language'] = language;
        obj['apiVersion'] = apiVersion;
        obj['type'] = type;
        obj['createdBy'] = createdBy;
        obj['updateBy'] = updateBy;
        obj['createdAt'] = createdAt;
        obj['updatedAt'] = updatedAt;
    }

    /**
     * Constructs a <code>Schema2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Schema2} obj Optional instance to populate.
     * @return {module:model/Schema2} The populated <code>Schema2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Schema2();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('updateBy')) {
                obj['updateBy'] = ApiClient.convertToType(data['updateBy'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Schema2.prototype['id'] = undefined;

/**
 * @member {String} language
 */
Schema2.prototype['language'] = undefined;

/**
 * @member {String} apiVersion
 */
Schema2.prototype['apiVersion'] = undefined;

/**
 * @member {String} type
 */
Schema2.prototype['type'] = undefined;

/**
 * @member {String} createdBy
 */
Schema2.prototype['createdBy'] = undefined;

/**
 * @member {String} updateBy
 */
Schema2.prototype['updateBy'] = undefined;

/**
 * @member {String} createdAt
 */
Schema2.prototype['createdAt'] = undefined;

/**
 * @member {String} updatedAt
 */
Schema2.prototype['updatedAt'] = undefined;






export default Schema2;

