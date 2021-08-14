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
    instance = new PostmanApi.Info3();
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

  describe('Info3', function() {
    it('should create an instance of Info3', function() {
      // uncomment below and update the code to test Info3
      //var instane = new PostmanApi.Info3();
      //expect(instance).to.be.a(PostmanApi.Info3);
    });

    it('should have the property jobId (base name: "jobId")', function() {
      // uncomment below and update the code to test the property jobId
      //var instane = new PostmanApi.Info3();
      //expect(instance).to.be();
    });

    it('should have the property monitorId (base name: "monitorId")', function() {
      // uncomment below and update the code to test the property monitorId
      //var instane = new PostmanApi.Info3();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new PostmanApi.Info3();
      //expect(instance).to.be();
    });

    it('should have the property collectionUid (base name: "collectionUid")', function() {
      // uncomment below and update the code to test the property collectionUid
      //var instane = new PostmanApi.Info3();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new PostmanApi.Info3();
      //expect(instance).to.be();
    });

    it('should have the property startedAt (base name: "startedAt")', function() {
      // uncomment below and update the code to test the property startedAt
      //var instane = new PostmanApi.Info3();
      //expect(instance).to.be();
    });

    it('should have the property finishedAt (base name: "finishedAt")', function() {
      // uncomment below and update the code to test the property finishedAt
      //var instane = new PostmanApi.Info3();
      //expect(instance).to.be();
    });

  });

}));