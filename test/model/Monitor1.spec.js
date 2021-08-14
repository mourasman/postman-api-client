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
    instance = new PostmanApi.Monitor1();
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

  describe('Monitor1', function() {
    it('should create an instance of Monitor1', function() {
      // uncomment below and update the code to test Monitor1
      //var instane = new PostmanApi.Monitor1();
      //expect(instance).to.be.a(PostmanApi.Monitor1);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new PostmanApi.Monitor1();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new PostmanApi.Monitor1();
      //expect(instance).to.be();
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instane = new PostmanApi.Monitor1();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new PostmanApi.Monitor1();
      //expect(instance).to.be();
    });

    it('should have the property collectionUid (base name: "collectionUid")', function() {
      // uncomment below and update the code to test the property collectionUid
      //var instane = new PostmanApi.Monitor1();
      //expect(instance).to.be();
    });

    it('should have the property environmentUid (base name: "environmentUid")', function() {
      // uncomment below and update the code to test the property environmentUid
      //var instane = new PostmanApi.Monitor1();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "options")', function() {
      // uncomment below and update the code to test the property options
      //var instane = new PostmanApi.Monitor1();
      //expect(instance).to.be();
    });

    it('should have the property notifications (base name: "notifications")', function() {
      // uncomment below and update the code to test the property notifications
      //var instane = new PostmanApi.Monitor1();
      //expect(instance).to.be();
    });

    it('should have the property distribution (base name: "distribution")', function() {
      // uncomment below and update the code to test the property distribution
      //var instane = new PostmanApi.Monitor1();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instane = new PostmanApi.Monitor1();
      //expect(instance).to.be();
    });

    it('should have the property lastRun (base name: "lastRun")', function() {
      // uncomment below and update the code to test the property lastRun
      //var instane = new PostmanApi.Monitor1();
      //expect(instance).to.be();
    });

  });

}));