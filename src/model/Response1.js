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
import Header3 from './Header3';
import OriginalRequest from './OriginalRequest';

/**
 * The Response1 model module.
 * @module model/Response1
 * @version 1.0.0
 */
class Response1 {
    /**
     * Constructs a new <code>Response1</code>.
     * @alias module:model/Response1
     * @param id {String} 
     * @param name {String} 
     * @param originalRequest {module:model/OriginalRequest} 
     * @param status {String} 
     * @param code {Number} 
     * @param postmanPreviewlanguage {String} 
     * @param header {Array.<module:model/Header3>} 
     * @param cookie {Array.<String>} 
     * @param responseTime {String} 
     * @param body {String} 
     */
    constructor(id, name, originalRequest, status, code, postmanPreviewlanguage, header, cookie, responseTime, body) { 
        
        Response1.initialize(this, id, name, originalRequest, status, code, postmanPreviewlanguage, header, cookie, responseTime, body);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, originalRequest, status, code, postmanPreviewlanguage, header, cookie, responseTime, body) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['originalRequest'] = originalRequest;
        obj['status'] = status;
        obj['code'] = code;
        obj['_postman_previewlanguage'] = postmanPreviewlanguage;
        obj['header'] = header;
        obj['cookie'] = cookie;
        obj['responseTime'] = responseTime;
        obj['body'] = body;
    }

    /**
     * Constructs a <code>Response1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Response1} obj Optional instance to populate.
     * @return {module:model/Response1} The populated <code>Response1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Response1();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('originalRequest')) {
                obj['originalRequest'] = OriginalRequest.constructFromObject(data['originalRequest']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('_postman_previewlanguage')) {
                obj['_postman_previewlanguage'] = ApiClient.convertToType(data['_postman_previewlanguage'], 'String');
            }
            if (data.hasOwnProperty('header')) {
                obj['header'] = ApiClient.convertToType(data['header'], [Header3]);
            }
            if (data.hasOwnProperty('cookie')) {
                obj['cookie'] = ApiClient.convertToType(data['cookie'], ['String']);
            }
            if (data.hasOwnProperty('responseTime')) {
                obj['responseTime'] = ApiClient.convertToType(data['responseTime'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Response1.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Response1.prototype['name'] = undefined;

/**
 * @member {module:model/OriginalRequest} originalRequest
 */
Response1.prototype['originalRequest'] = undefined;

/**
 * @member {String} status
 */
Response1.prototype['status'] = undefined;

/**
 * @member {Number} code
 */
Response1.prototype['code'] = undefined;

/**
 * @member {String} _postman_previewlanguage
 */
Response1.prototype['_postman_previewlanguage'] = undefined;

/**
 * @member {Array.<module:model/Header3>} header
 */
Response1.prototype['header'] = undefined;

/**
 * @member {Array.<String>} cookie
 */
Response1.prototype['cookie'] = undefined;

/**
 * @member {String} responseTime
 */
Response1.prototype['responseTime'] = undefined;

/**
 * @member {String} body
 */
Response1.prototype['body'] = undefined;






export default Response1;

