/**
 * Postman API
 * Postman API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PostmanApi);
  }
}(this, function(expect, PostmanApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PostmanApi.CreateAPIRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateAPIRequest', function() {
    it('should create an instance of CreateAPIRequest', function() {
      // uncomment below and update the code to test CreateAPIRequest
      //var instane = new PostmanApi.CreateAPIRequest();
      //expect(instance).to.be.a(PostmanApi.CreateAPIRequest);
    });

    it('should have the property api (base name: "api")', function() {
      // uncomment below and update the code to test the property api
      //var instane = new PostmanApi.CreateAPIRequest();
      //expect(instance).to.be();
    });

  });

}));
