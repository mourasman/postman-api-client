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
    instance = new PostmanApi.Headers1();
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

  describe('Headers1', function() {
    it('should create an instance of Headers1', function() {
      // uncomment below and update the code to test Headers1
      //var instane = new PostmanApi.Headers1();
      //expect(instance).to.be.a(PostmanApi.Headers1);
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new PostmanApi.Headers1();
      //expect(instance).to.be();
    });

    it('should have the property contentType (base name: "content-type")', function() {
      // uncomment below and update the code to test the property contentType
      //var instane = new PostmanApi.Headers1();
      //expect(instance).to.be();
    });

    it('should have the property transferEncoding (base name: "transfer-encoding")', function() {
      // uncomment below and update the code to test the property transferEncoding
      //var instane = new PostmanApi.Headers1();
      //expect(instance).to.be();
    });

    it('should have the property connection (base name: "connection")', function() {
      // uncomment below and update the code to test the property connection
      //var instane = new PostmanApi.Headers1();
      //expect(instance).to.be();
    });

    it('should have the property contentEncoding (base name: "content-encoding")', function() {
      // uncomment below and update the code to test the property contentEncoding
      //var instane = new PostmanApi.Headers1();
      //expect(instance).to.be();
    });

  });

}));
