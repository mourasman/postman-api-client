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
    instance = new PostmanApi.Version5();
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

  describe('Version5', function() {
    it('should create an instance of Version5', function() {
      // uncomment below and update the code to test Version5
      //var instane = new PostmanApi.Version5();
      //expect(instance).to.be.a(PostmanApi.Version5);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new PostmanApi.Version5();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new PostmanApi.Version5();
      //expect(instance).to.be();
    });

    it('should have the property api (base name: "api")', function() {
      // uncomment below and update the code to test the property api
      //var instane = new PostmanApi.Version5();
      //expect(instance).to.be();
    });

    it('should have the property schema (base name: "schema")', function() {
      // uncomment below and update the code to test the property schema
      //var instane = new PostmanApi.Version5();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new PostmanApi.Version5();
      //expect(instance).to.be();
    });

    it('should have the property updatedBy (base name: "updatedBy")', function() {
      // uncomment below and update the code to test the property updatedBy
      //var instane = new PostmanApi.Version5();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new PostmanApi.Version5();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new PostmanApi.Version5();
      //expect(instance).to.be();
    });

  });

}));
