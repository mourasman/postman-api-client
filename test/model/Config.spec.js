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
    instance = new PostmanApi.Config();
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

  describe('Config', function() {
    it('should create an instance of Config', function() {
      // uncomment below and update the code to test Config
      //var instane = new PostmanApi.Config();
      //expect(instance).to.be.a(PostmanApi.Config);
    });

    it('should have the property headers (base name: "headers")', function() {
      // uncomment below and update the code to test the property headers
      //var instane = new PostmanApi.Config();
      //expect(instance).to.be();
    });

    it('should have the property matchBody (base name: "matchBody")', function() {
      // uncomment below and update the code to test the property matchBody
      //var instane = new PostmanApi.Config();
      //expect(instance).to.be();
    });

    it('should have the property matchQueryParams (base name: "matchQueryParams")', function() {
      // uncomment below and update the code to test the property matchQueryParams
      //var instane = new PostmanApi.Config();
      //expect(instance).to.be();
    });

    it('should have the property matchWildcards (base name: "matchWildcards")', function() {
      // uncomment below and update the code to test the property matchWildcards
      //var instane = new PostmanApi.Config();
      //expect(instance).to.be();
    });

  });

}));
